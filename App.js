import React from 'react'
import HomeScreen from './src/screens/Home'
import AboutScreen from './src/screens/About'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default () => (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name == 'Home') {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (route.name == 'About') {
                        iconName = focused ? 'information-circle' : 'information-circle-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='About' component={AboutScreen} />
        </Tab.Navigator>
    </NavigationContainer>
)
