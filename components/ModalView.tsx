import { useState, useEffect, useRef } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const WIDTH = Dimensions.get('screen').width;

const ModalView = ({ userAnswers, visible, onClose, score }: any) => {
    
    
  
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                           
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        onClose(); // Call the passed function to close modal
                    }}>
                    <View style={styles.centeredView}>
                       
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>High Score: 60 points</Text>
                            <Text style={styles.modalScrore}>
                               Your Scrore is: {score}
                            </Text>
                            <Text style={styles.modalText}>
                                {userAnswers}
                            </Text>
                            <Pressable
                                style={[styles.btn, styles.btnClose]}
                                onPress={onClose}>
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default ModalView;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    modalView: {
        margin: 20,
        width: WIDTH * .8,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalScrore: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    
// Button styles for closing modal    
btnClose:{
   backgroundColor:'#2196f3'
}, 
btn: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: WIDTH * .7
},
// Styles for text in modal    
textStyle:{
   color:'white',
   fontWeight:'bold',
   textAlign:'center'
},
    
modalText:{
   marginBottom:15,
   textAlign:'center'
},
lottie: {
    position: 'absolute',
    top: 0,
    left: 0
}
});