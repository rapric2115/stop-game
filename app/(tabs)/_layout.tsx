import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import Feather from '@expo/vector-icons/Feather';
import Foundation from '@expo/vector-icons/Foundation';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    const tabsNav = [
        {
            name: 'index',
            title: 'Home',
            iconName: 'home',
            icon: Feather 
        },
        {
            name: 'Trophy',
            title: 'Trophic',
            iconName: 'trophy',
            icon: Foundation            
        },
        {
            name: 'StopGame',
            title: 'Stop the Game',
            href: null
        }
    ]

    return(
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        position: 'absolute',
                    },
                    default: {}
                }),
            }}
        >
            {tabsNav.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ color }) => (
                            <Text style={styles.icon}>
                                <tab.icon name={tab.iconName} size={28} color={color} /> {/* Correct usage */}
                            </Text>
                        ),
                        href: tab.href // Keep href here for navigation
                    }}
                />
            ))}

        </Tabs>
    )
}

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignSelf: 'center'
    }
})