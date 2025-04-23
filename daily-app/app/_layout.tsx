import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';

// Importe o componente personalizado do drawer
import CustomDrawer from '../components/CustomDrawer';

// Evita que a tela de splash seja ocultada automaticamente
SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  // Você pode adicionar a lógica de carregamento de fontes aqui, se necessário
  const [fontsLoaded] = useFonts({
    // Suas fontes aqui, se necessário
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Se as fontes não estiverem carregadas e forem necessárias, retorne null
  if (!fontsLoaded && fontsLoaded !== undefined) {
    return null;
  }

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
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
          marginLeft: 0, // Aumentei de -16 para -5 para dar mais espaço entre o ícone e o texto
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
          title: 'Dashboard',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="RotinaScreen"
        options={{
          title: 'Rotinas',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="repeat-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AgendaScreen"
        options={{
          title: 'Agenda',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MetasScreen"
        options={{
          title: 'Metas',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="flag-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AtividadesFisicasScreen"
        options={{
          title: 'Atividades Físicas',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="fitness-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="FinancasScreen"
        options={{
          title: 'Finanças',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="EstatisticasScreen"
        options={{
          title: 'Estatísticas',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="stats-chart-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SuporteScreen"
        options={{
          title: 'Suporte',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-buoy-outline" size={size} color={color} />
          ),
        }}
      />
      {/* Esta tela não aparecerá no menu, mas é necessária para navegação */}
      <Drawer.Screen
        name="ProfileScreen"
        options={{
          title: 'Perfil',
          drawerItemStyle: { height: 0 }, // Esconde do drawer, pois acessamos via perfil no topo
        }}
      />
    </Drawer>
  );
}