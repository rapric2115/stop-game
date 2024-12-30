import { StyleSheet, TextInput, Pressable, Dimensions } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import ModalView from '@/components/ModalView';
import { calculateScore } from '@/scripts/scoring';
import predeterminedResponse from '@/constants/responses/predeterminedResponses';
// import Confetti from 'react-confetti';
// import ConfettiCanvas, { startAnimation } from 'expo-confetti';
import Confetti from './Confetti';
import LottieView from 'lottie-react-native';
import { useUserContext } from '../constants/context/userContext';
import { categoriesByDifficulty } from '@/constants/responses/categoriesByDifficulty';

// const categories = [
//   { label: 'Name', placeholder: 'Enter your name' },
//   { label: 'Lastname', placeholder: 'Enter your last name' },
//   { label: 'Animal', placeholder: 'Enter an animal' },
//   { label: 'Color', placeholder: 'Enter a color' },
//   { label: 'Country', placeholder: 'Enter a country' },
//   { label: 'Food', placeholder: 'Enter your favorite food' },
// ];

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

interface Category {
  label: string;
  placeholder: string;
}

const StopGameForm = ({ selectedLetter, reset }: { selectedLetter: string; reset: () => void }) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [timer, setTimer] = useState(90);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [points, setPoints] = useState(0);
  const [letterPicked, setLetterPicked] = useState({});
  const [confettiAnimation, setConfettiAnimation] = useState<Boolean>(false);
  const { setScore, addScore, gameDifficulty } = useUserContext();
  const [categories, setCategories] = useState<Category[]>([
    { label: 'Name', placeholder: 'Enter your name' },
    { label: 'Lastname', placeholder: 'Enter your last name' },
    { label: 'Animal', placeholder: 'Enter an animal' },
    { label: 'Color', placeholder: 'Enter a color' },
  ]);
  const [userAnswers, setUserAnswers] = useState(Array(categories.length).fill(''));
  const [highScore, setHighScore] = useState(200);

  // Confetti Animation and Setups
  const confettiRef = useRef(null);

  // Effect to set categories based on game difficulty
  useEffect(() => {
    if (gameDifficulty === 'Easy') {
      const easy = categoriesByDifficulty.easy;
      setCategories(easy);
      setHighScore(20);
    } else if (gameDifficulty === 'Medium') {
      const medium = categoriesByDifficulty.medium;
      setCategories(medium);
      setHighScore(30);
    } else {
      const hard = categoriesByDifficulty.hard;
      setCategories(hard);
      setHighScore(50);
    }
  }, [gameDifficulty]);

  // Timer effect
  useEffect(() => {
    if (timer > 0 && !isTimeUp && !gameOver) {
      const intervalId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (timer === 0) {
      setIsTimeUp(true);
      handleNext(); // Automatically go to the next category when time is up
    }
  }, [timer, isTimeUp, gameOver]);

  // Handle answer submission
  const handleNext = () => {
    if (currentCategoryIndex < categories.length - 1) {
      setCurrentCategoryIndex((prev) => prev + 1);
      setTimer(90); // Reset timer for next category
      setIsTimeUp(false); // Reset time up status
    } else {
      // All categories completed
      handleCheckAnswers();
      calculatePoints();
      setOpenModal(true);      
      setGameOver(true); // Set game over state
    }
  };

  const handleSkip = () => {
    handleNext(); // Skip to the next category
  };

  const handleChangeAnswer = (text: string) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentCategoryIndex] = text;
    setUserAnswers(updatedAnswers);
  };

  const CheckUserAnswersStartWith = (selectedLetter: string) => {
    return userAnswers.every((answer) => answer.startsWith(selectedLetter));
  };

  useEffect(() => {
    const letter = selectedLetter.toUpperCase();
    if (letter) {
      setLetterPicked(predeterminedResponse[letter] || {});
    }
  }, [selectedLetter]);

  const handleCheckAnswers = () => {
    let score = points; // Start with current points

    if (CheckUserAnswersStartWith(selectedLetter)) {
      if (letterPicked) { 
        userAnswers.forEach((answer, index) => {
          const categoryKey = categories[index].label.toLowerCase();
          if (letterPicked[categoryKey]) {
            if (answer === '') {
              score += 0; // Set score to zero if any answer is empty
              // return; // Exit the loop early since we found an empty answer
            } else if (letterPicked[categoryKey].includes(answer)) {
              score += 50; // Correct answer
            } else { 
              score += 100; // Incorrect answer
            }
          }
        });
      } else {
        console.warn('letterPicked is undefined or does not have expected structure');
      }
    }

    setPoints(score);
    setScore(score);
    addScore(score);
  };

  
  useEffect(() => {
    if (points >= highScore) {
        setConfettiAnimation(true);
        confettiRef.current?.play();
    } else {
      setConfettiAnimation(false)
    }
}, [points]); 

  
const calculatePoints = () => {
   let totalPoints = userAnswers.reduce((accumulatedPoints, answer, index) => {
       const { label } = categories[index];
       const categoryType = label.toLowerCase();
       // Calculate score using imported function
       const score = calculateScore(answer, selectedLetter, categoryType); 
       
       return answer.trim() !== '' ? accumulatedPoints + score : accumulatedPoints; 
   }, points); // Start from current points instead of zero

   setPoints(totalPoints); 
};

return (
   <ThemedView style={styles.container}>
     <ThemedText style={styles.timerText}>Time Remaining: {timer}s</ThemedText>
     <ThemedText style={styles.categoryText}>{categories[currentCategoryIndex].label}</ThemedText>
     <TextInput
       style={styles.input}
       placeholder={categories[currentCategoryIndex].placeholder}
       onChangeText={handleChangeAnswer}
       value={userAnswers[currentCategoryIndex]}
       autoFocus
       editable={!gameOver} // Disable input if game is over
     />
     
     <ThemedView style={styles.buttonContainer}>
       <Pressable onPress={reset} style={styles.btn}>
         <ThemedText>Reset game</ThemedText>
       </Pressable>
       <Pressable onPress={handleSkip} style={styles.btn}>
         <ThemedText>Skip</ThemedText>
       </Pressable>
       <Pressable 
         onPress={handleNext} 
         style={[styles.btn, currentCategoryIndex === categories.length - 1 && styles.btnRed]} 
         disabled={gameOver} 
       >
         <ThemedText>{currentCategoryIndex === categories.length - 1 ? 'Stop' : 'Next'}</ThemedText>
       </Pressable>
     </ThemedView>
     
     {/* Pass userAnswers and openModal state to ModalView */}
     {openModal && (
       <ModalView 
           score={points}
           userAnswers={userAnswers.join('\n')} 
           visible={openModal} 
           onClose={() => {setOpenModal(false); setConfettiAnimation(false);}} 
       />
     )}
     {confettiAnimation && (
       <LottieView 
         ref={confettiRef}
         source={require('../assets/lottieAnimations/confettiAnimation.json')}
         autoPlay
         loop
         style={styles.lottie}
       />
     )}
   </ThemedView>
 );
};

export default StopGameForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  timerText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    paddingTop: 30,
  },
  input: {
    height: 50,
    width: WIDTH * .7, 
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#fff',
    backgroundColor: '#444',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  btn: {
    // width: WIDTH * .15,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#687076',
},
  
// New style for red button when finishing the game
btnRed: {
   backgroundColor: 'red', // Change button color to red when it's the last category
},
lottie: {
  position: 'absolute',
  top: 0,
  left: 0,
  width: WIDTH * .9,
  height: HEIGHT * .9
}
});