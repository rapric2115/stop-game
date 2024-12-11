import React, { createContext, useState, useContext, Children } from 'react';

interface UserContextType {
    userName: string;
    setUserName: (name: string) => void;
    score: number;
    setScore: (score: number) => void;
    previousScore: number[];
    addScore: (newScore: number) => void;
    gameDifficulty: string;
    setGameDifficulty: (newGameDifficulty: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [userName, setUserName ] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const [previousScore, setPreviousScore] = useState<number[]>([]);
    const [gameDifficulty, setGameDifficulty] = useState<string>('');

    const addScore = (newScore: number) => {
        setPreviousScore((prevScore) => [...prevScore, newScore]);
    }

    return (
        <UserContext.Provider value={{ userName, setUserName, score, setScore, previousScore, addScore,
            gameDifficulty, setGameDifficulty
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error(`UserContext must be used within a UserProvider`);
    }
    return context;
}