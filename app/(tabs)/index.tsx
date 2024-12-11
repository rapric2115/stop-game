
import React, { useState } from 'react';
import { StyleSheet, Platform, TouchableOpacity, Dimensions, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router'

import { useUserContext } from '../../constants/context/userContext';
import { BtnStyle } from '../../constants/Colors';

// importing Components


const WIDTH = Dimensions.get('screen').width;

export default function HomeScreen() {
  const {userName, setUserName, setGameDifficulty, gameDifficulty } = useUserContext();
  const [inputValue, setInputValue] = useState<string>('');
 

  const handleNameSubmit = () => {
      setUserName(inputValue);
      setInputValue(''); // Clear input after submission
  };
  
  
 return (
   <ThemedView style={styles.container}>      
        <ThemedView style={styles.info}> 
            <ThemedView style={styles.titleContainer}>
              <ThemedView style={{width: WIDTH * .9}}>
                  <HelloWave />              
                <ThemedText type="title" style={{textAlign: 'center', marginTop: 10}}>Hi, Welcome to The Stop Game! {userName || ''}</ThemedText>
              </ThemedView>
            </ThemedView>        
              {!userName ? (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="What's your name"
                        placeholderTextColor="#FFFFFF"
                        value={inputValue}
                        onChangeText={setInputValue}
                    />
                    
                     <TouchableOpacity style={styles.btnSubmit} onPress={handleNameSubmit}>
                        <ThemedText style={styles.btnText}>What's your Name</ThemedText>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Link style={[styles.btnSubmit, {color: BtnStyle.dark.color}]} href="/StopGame">Start Play Stop Game</Link>
                    {/* <Link style={styles.btn} href="/">Create a Group</Link> */}
                </>
            )}  
        </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'    
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  btn: {
    width: WIDTH * .25,
    backgroundColor: BtnStyle.dark.background,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 20
  },
  btnText: {
    color: BtnStyle.dark.color,
    textAlign: 'center',
  },
  btnSubmit: {
    width: WIDTH * .65,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: BtnStyle.dark.background,
    marginTop: 25
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    color: 'white', 
    borderRadius: 10,
    width: WIDTH * .7,
}
});
