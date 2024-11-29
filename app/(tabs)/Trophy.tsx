import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';

const Trophy = () => {
  return (
    <ThemedView style={styles.container}>
        <SafeAreaView />
        <ThemedText>Trophy</ThemedText>
        
    </ThemedView>
  )
}

export default Trophy

const styles = StyleSheet.create({
   container: {
    flex: 1
   }
})