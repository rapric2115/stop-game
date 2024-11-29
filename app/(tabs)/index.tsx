
import React from 'react';
import { StyleSheet, Platform, ScrollView, Dimensions } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router'

// importing Components
import { Colors } from '../../constants/Colors';

const WIDTH = Dimensions.get('screen').width;

export default function HomeScreen() {
  
  
 return (
    <ScrollView style={{flex: 1, backgroundColor: Colors.dark.background}}>
    <ThemedView style={styles.container}>
      <ThemedView style={styles.info}>
        <ThemedView>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Welcome! Raphael</ThemedText>
            <HelloWave />
          </ThemedView>        
        </ThemedView>  
        <ThemedView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Link style={styles.btn} href="/StopGame" >Start Play Stop Game</Link>
          <Link style={styles.btn} href="/">Create a Group</Link>
        </ThemedView>              
      </ThemedView>
     
      
    </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    
  },
  info: {
    flexDirection: 'column'
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
    marginBottom: 10
  }
});
