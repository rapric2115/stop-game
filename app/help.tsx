import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';


const Help = () => {
    return(
        <ThemedView style={styles.container}>
            <ThemedView style={{padding: 20, marginTop: 30}}>
                <ThemedText style={styles.title}>Hola. Aun no te vayas!</ThemedText>
                <ThemedText>cuentanos de tu experiencia</ThemedText>
                <ThemedText>
                    Nos da tristeza verte partir, pero antes
                    dejanos saber como podemos mejorar, si haz tenido algún 
                    inconveniente o falla con el juego de Stop.
                </ThemedText>
            </ThemedView>
            <Link href="mailto:raphael.richardson@gmail.com" asChild>
                <ThemedView style={styles.btn}>
                    <ThemedText>Envianos un Correo</ThemedText>
                </ThemedView>
            </Link>


        </ThemedView>
    )
}

export default Help;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30
    },
    btn: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        backgroundColor: '#687076',
        color: '#fff'
    }
})