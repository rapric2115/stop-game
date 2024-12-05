import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, Button } from 'react-native';
import LottieView from 'lottie-react-native';

interface ConfettiProps {
    highScore: Boolean
}


const Confetti: React.FC<ConfettiProps> = ({ highScore }) => {
    const confettiRef = useRef<LottieView>(null);
    console.log('confetti animation ', highScore)
  
    useEffect(() => {
        if (highScore === true) {
            confettiRef.current?.play(); // Play animation when highScore is true
        } 
    }, [highScore]); 
    
    return (
        <View style={styles.container}>
            <LottieView
                ref={confettiRef}
                source={require('../assets/lottieAnimations/confettiAnimation.json')}
                autoPlay={false}
                loop={false}
                // style={styles.lottie}
                style={[styles.lottie, {width: '100%', height: '100%'}]}
                />
             
        </View>
    )

}

export default Confetti;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottie: {
        position: 'absolute',
        top: 0,
        left: 0,
        alignSelf: 'center'
    },
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      buttonContainer: {
        paddingTop: 20,
      },
})