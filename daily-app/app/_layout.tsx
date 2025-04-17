import 'react-native-gesture-handler';
import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';

// Evita que a tela de splash seja ocultada automaticamente
SplashScreen.preventAutoHideAsync();

export default function AppLayout() {

  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4A6FFF', // Azul mais vibrante
          elevation: 0, // Remove sombra no Android
          shadowOpacity: 0, // Remove sombra no iOS
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        drawerStyle: {
          backgroundColor: '#FFFFFF',
          width: 280,
        },
        drawerActiveTintColor: '#4A6FFF',
        drawerInactiveTintColor: '#555',
        drawerLabelStyle: {
          marginLeft: -16,
          fontSize: 15,
        },
        drawerItemStyle: {
          borderRadius: 8,
          paddingLeft: 8,
          marginHorizontal: 12,
          marginVertical: 4,
        },
        drawerActiveBackgroundColor: 'rgba(74, 111, 255, 0.08)',
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Início',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="RotinaScreen" // Apontando para o arquivo RotinaScreen.tsx
        options={{
          title: 'Rotina Diária',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}