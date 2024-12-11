import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import React, { useState } from 'react';
import StopGameForm from '@/components/StopGameForm';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BtnStyle } from '@/constants/Colors';
import { useUserContext } from '@/constants/context/userContext';

const WIDTH = Dimensions.get('window').width;

const StopGame = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Fixed letters string
  const [pickedLetter, setPickedLetter] = useState<string>('');
  const [displayedLetter, setDisplayedLetter] = useState('');
  const [pressed, setPressed] = useState<boolean>(true);
  const { setGameDifficulty, gameDifficulty } = useUserContext();

  // Random pick a letter and start animation
  const pickRandomLetter = () => {
    if (letters.length === 0) {
      console.error("Letters array is empty");
      return;
    }
    
    // Generate a random index for the selected letter
    const randomIndex = Math.floor(Math.random() * letters.length);
    const selectedLetter = letters[randomIndex];
    
    // Start the animation
    animateLetters(selectedLetter);
    setPressed(false);
  };

  const animateLetters = (selectedLetter) => {
    let index = 0;
    const intervalTime = 100; // Change letter every 100ms (10 times per second)
    
    // Set an interval to change the displayed letter
    const intervalId = setInterval(() => {
      setDisplayedLetter(letters[Math.floor(Math.random() * letters.length)]);
      index++;
      
      // Stop after 30 iterations (3 seconds)
      if (index >= 30) {
        clearInterval(intervalId);
        setDisplayedLetter(selectedLetter); // Show the selected letter at the end
        setPickedLetter(selectedLetter); // Update picked letter state
      }
    }, intervalTime);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.letterText}>{displayedLetter}</ThemedText>
      {pickedLetter ? (
        <ThemedText style={styles.instructionText}>Selected Letter</ThemedText>
      ) : (
        <ThemedText style={styles.instructionText}>Press the button to pick a letter!</ThemedText>
      )}
      
      {/* Pressable button */}
      {pickedLetter ? (
        <Pressable onPress={() => {setPickedLetter(''), setPressed(true)}} style={styles.btn}>
          <ThemedText>Reset</ThemedText>
        </Pressable>
      ) : (
        pressed ? (
        <>
        <ThemedText style={{textAlign: 'center'}}>What difficulty Level you want's to play: </ThemedText>
          <ThemedView style={{flexDirection: 'row', width: WIDTH * .9, justifyContent: 'space-between', marginTop: 20}}>
            <Pressable style={[styles.btnSubmit, {backgroundColor: gameDifficulty === 'Easy' ? BtnStyle.dark.orange : BtnStyle.dark.background}]} onPress={() => setGameDifficulty('Easy')}>
              <ThemedText style={styles.btnText}>Easy</ThemedText>
            </Pressable>
            <Pressable style={[styles.btnSubmit, {backgroundColor: gameDifficulty === 'Medium' ? BtnStyle.dark.orange : BtnStyle.dark.background}]} onPress={() => setGameDifficulty('Medium')}>
              <ThemedText style={styles.btnText}>Medium</ThemedText>
            </Pressable>
            <Pressable style={[styles.btnSubmit, {backgroundColor: gameDifficulty === 'Hard' ? BtnStyle.dark.orange : BtnStyle.dark.background}]} onPress={() => setGameDifficulty('Hard')}>
              <ThemedText style={styles.btnText}>Hard</ThemedText>
            </Pressable>
          </ThemedView>
        <Pressable onPress={pickRandomLetter} style={styles.btn}>
          <ThemedText>Pick a Letter</ThemedText>
        </Pressable>
        </>
        ) : null
      )}
      {pickedLetter ? (
        <StopGameForm selectedLetter={pickedLetter}/>
      ) : null}
      
    </ThemedView>
  );
};

export default StopGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#282c34', // Optional: Set a background color for better visibility
  },
  letterText: {
    fontSize: 60,
    fontWeight: '600',
    color: '#fff', // Letter color
    paddingTop: 35
  },
  instructionText: {
    fontSize: 18,
    color: '#fff', // Changed to white for better visibility against dark background
  },
  btn: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  btnSubmit: {
    width: WIDTH * .25,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignSelf: 'center',
    textAlign: 'center',
    // backgroundColor: BtnStyle.dark.background,
    marginTop: 25
  },
  btnText: {
    color: BtnStyle.dark.color,
    textAlign: 'center',
  },
});