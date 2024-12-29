import { StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { useUserContext } from '@/constants/context/userContext';
import { FlashList } from '@shopify/flash-list';

interface ScoreItem {
    name: string;
    score: number;
}

const Trophy: React.FC = () => {
    const victoryRef = useRef<LottieView | null>(null);
    const { userName, score, previousScore } = useUserContext(); // Ensure this matches your context

    useEffect(() => {
        victoryRef.current?.play();
    }, []);

    // Determine the scores to display
    let allScores: ScoreItem[] = [];
    
    if (previousScore.length === 0) {
        // First play
        allScores = [{ name: userName, score }];
    } else {
        // Subsequent plays
        allScores = [{ name: userName, score }, ...previousScore.map((prevScore) => ({ name: userName, score: prevScore }))];
    }

    // Calculate total score
    const totalScore = allScores.reduce<number>((accumulator, current) => {
        return accumulator + current.score - score;
    }, 0);

    const UserScore = ({ item }: { item: ScoreItem }) => (
        <ThemedView style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <ThemedText>{item.name}</ThemedText>
            <ThemedText>{item.score}</ThemedText>
        </ThemedView>
    );

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView>
                <LottieView 
                    ref={victoryRef}
                    source={require('../../assets/lottieAnimations/victoryAnimation.json')}
                    autoPlay
                    loop
                    style={{ width: 200, height: 200, marginTop: 30 }}
                />
                <ThemedText style={{ marginTop: 15, fontSize: 20, alignSelf: 'center' }}>Table of Winners</ThemedText>
                <ThemedText style={{ marginTop: 15, marginBottom: 20, fontSize: 25, alignSelf: 'center' }}>
                    Total Score: {totalScore}
                </ThemedText>
                <FlashList
                    data={allScores}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <UserScore item={item} />}
                    estimatedItemSize={10}
                />
            </SafeAreaView>
        </ThemedView>
    );
};

export default Trophy;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
