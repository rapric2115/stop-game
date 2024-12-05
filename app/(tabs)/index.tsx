
import React, { useState } from 'react';
import { StyleSheet, Platform, ScrollView, Dimensions, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router'

import { useUserContext } from '../../constants/context/userContext';

// importing Components
import { Colors } from '../../constants/Colors';

const WIDTH = Dimensions.get('screen').width;

export default function HomeScreen() {
  const {userName, setUserName } = useUserContext();
  const [inputValue, setInputValue] = useState<string>('');

  const handleNameSubmit = () => {
      setUserName(inputValue);
      setInputValue(''); // Clear input after submission
  };
  
  
 return (
   <ThemedView style={styles.container}>      
        <ThemedView style={styles.info}> 
            <ThemedView style={styles.titleContainer}>
              <ThemedText type="title">Welcome! {userName || 'Guest'}</ThemedText>
              <HelloWave />
            </ThemedView>        
              {!userName ? (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="What's your name"
                        value={inputValue}
                        onChangeText={setInputValue}
                    />
                    <Button title="Save your Name" onPress={handleNameSubmit} />
                </>
            ) : (
                <>
                    <Link style={styles.btn} href="/StopGame">Start Play Stop Game</Link>
                    <Link style={styles.btn} href="/">Create a Group</Link>
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
    width: WIDTH * .45,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 20
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
