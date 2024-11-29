import { StyleSheet, TextInput, Pressable, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import ModalView from '@/components/ModalView';

const categories = [
  { label: 'Name', placeholder: 'Enter your name' },
  { label: 'Last Name', placeholder: 'Enter your last name' },
  { label: 'Animal', placeholder: 'Enter an animal' },
  { label: 'Color', placeholder: 'Enter a color' },
  { label: 'Country', placeholder: 'Enter a country' },
  { label: 'Food', placeholder: 'Enter your favorite food' },
];

const WIDTH = Dimensions.get('screen').width;

const StopGameForm = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(categories.length).fill(''));
  const [timer, setTimer] = useState(90);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [gameOver, setGameOver] = useState(false); // New state to track game over
  const [openModal, setOpenModal] = useState(false);

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
      setOpenModal(true);      
      setGameOver(true); // Set game over state
    }
  };

  const handleSkip = () => {
    handleNext(); // Skip to the next category
  };

  const handleChangeAnswer = (text) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentCategoryIndex] = text;
    setUserAnswers(updatedAnswers);
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
            userAnswers={userAnswers.join('\n')} 
            visible={openModal} 
            onClose={() => setOpenModal(false)} 
        />
      ) : null}
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
});