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

const categories = [
  { label: 'Name', placeholder: 'Enter your name' },
  { label: 'Lastname', placeholder: 'Enter your last name' },
  { label: 'Animal', placeholder: 'Enter an animal' },
  { label: 'Color', placeholder: 'Enter a color' },
  { label: 'Country', placeholder: 'Enter a country' },
  { label: 'Food', placeholder: 'Enter your favorite food' },
];

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;


const StopGameForm = ({selectedLetter}: string) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(categories.length).fill(''));
  const [timer, setTimer] = useState(90);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [gameOver, setGameOver] = useState(false); // New state to track game over
  const [openModal, setOpenModal] = useState(false);
  const [points, setPoints] = useState(0);
  const [letterPicked, setLetterPicked] = useState({});
  const [confettiAnimation, setConfettiAnimation] = useState<Boolean>(false);
  const { setScore, addScore } = useUserContext();

  //confetti Animation and Setups
  const confettiRef = useRef(null);

  const easy = categoriesByDifficulty.easy;

  console.log(easy)
   

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
      calculatePoints();
      setOpenModal(true);      
      setGameOver(true); // Set game over state
      handleCheckAnswers();
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
    return userAnswers.every((answer) => answer.startsWith(selectedLetter))
  }

  useEffect(() => {
    const letter = selectedLetter.toUpperCase();
    // console.log('letter selected from state gameForm: ', letter)
    if(letter) {
      setLetterPicked(predeterminedResponse[letter] || {})
    }
  }, [selectedLetter])

  // console.log('predetermined Responses: ', letterPicked )
  

  const handleCheckAnswers = () => {
    const allStartWithSelectedLetter = CheckUserAnswersStartWith(selectedLetter);
    let score = 0;
  
    if (allStartWithSelectedLetter) {
      if (letterPicked) { // Check if letterPicked is defined
        userAnswers.forEach((answer, index) => {
          const categoryKey = categories[index].label.toLowerCase();

          console.log('category picked by letter', letterPicked[categoryKey] );
          console.log('User Answer', answer)

          if (letterPicked[categoryKey]) {
            if (letterPicked[categoryKey].includes(answer)) {
              score += 5
              console.log('get score of 5')
            } else { 
              score += 10
              console.log('get score of 10')
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
    if (points >= 30) {
        setConfettiAnimation(true);
        console.log('animation trigger at form ' + points);
        confettiRef.current?.play();
    } else {
      setConfettiAnimation(false)
    }
}, [points]); 



  const calculatePoints = () => {
    let totalPoints = userAnswers.reduce((accumulatedPoints, answer) => {
      const { categoryType } = categories[currentCategoryIndex]; // Get details for current category
      
      const score = calculateScore(answer, selectedLetter, categoryType); // Calculate score using imported function
      
      return accumulatedPoints + score; 
    }, 0);

    // setPoints(totalPoints); 
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
        <Pressable onPress={handleSkip} style={styles.btn}>
          <ThemedText>Skip</ThemedText>
        </Pressable>
        <Pressable 
          onPress={handleNext} 
          style={[styles.btn, currentCategoryIndex === categories.length - 1 && styles.btnRed]} // Change color if last category
          disabled={gameOver} // Disable button if game is over
        >
          <ThemedText>{currentCategoryIndex === categories.length - 1 ? 'Stop' : 'Next'}</ThemedText>
        </Pressable>
      </ThemedView>
      
      {/* Pass userAnswers and openModal state to ModalView */}
      {openModal === true ? (
        <ModalView 
            score={points}
            userAnswers={userAnswers.join('\n')} 
            visible={openModal} 
            onClose={() => {setOpenModal(false); setConfettiAnimation(false);}} 
        />
      ) : null}
      {
        confettiAnimation === true ?
        (
        <LottieView 
          ref={confettiRef}
          source={require('../assets/lottieAnimations/confettiAnimation.json')}
          autoPlay
          loop
          style={styles.lottie}
          />
        ) : 
        null
      }
      
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
    borderRadius: 20,
    padding: 10,
    elevation: 2
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