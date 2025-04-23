import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type CustomDrawerProps = {
  // props from DrawerContentComponentProps
  state: any;
  navigation: any;
  descriptors: any;
}

const CustomDrawer = (props: CustomDrawerProps) => {
  const router = useRouter();
  const userName = "João Pedro";
  const userPlan = "Plano Atual";
  
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerScrollContent}>
      <View style={styles.container}>
        {/* Perfil do usuário */}
        <TouchableOpacity 
          style={styles.profileContainer}
          onPress={() => router.push('/ProfileScreen')}
        >
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImagePlaceholder}>
              <Text style={styles.profileImagePlaceholderText}>
                {userName.charAt(0)}
              </Text>
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userPlan}>{userPlan}</Text>
          </View>
        </TouchableOpacity>

        {/* Linha divisória */}
        <View style={styles.divider} />

        {/* Itens do menu padrão do drawer */}
        <View style={styles.drawerItemsContainer}>
          <DrawerItemList {...props} />
        </View>

        {/* Linha divisória */}
        <View style={styles.divider} />

        {/* Frame - Label */}
        <Text style={styles.frameLabel}>Frame</Text>

        {/* Premium Section */}
        <View style={styles.premiumContainer}>
          <Ionicons name="star-outline" size={20} color="#4A6FFF" style={styles.premiumIcon} />
          <View style={styles.premiumTextContainer}>
            <Text style={styles.premiumTitle}>Adquira Versão Premium</Text>
            <Text style={styles.premiumSubtitle}>Teste novas experiências com a Versão Premium para o seu dia</Text>
            <TouchableOpacity style={styles.premiumButton}>
              <Text style={styles.premiumButtonText}>Premium User</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Espaçador */}
        <View style={styles.spacer} />

        {/* Botão de Sair */}
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => {
            // Lógica para sair da aplicação
            // router.replace('/auth/login');
          }}
        >
          <Ionicons name="exit-outline" size={20} color="#555" />
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerScrollContent: {
    paddingTop: 0,
  },
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  profileImageContainer: {
    marginRight: 12,
  },
  profileImagePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A6FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImagePlaceholderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  userPlan: {
    fontSize: 12,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: 8,
  },
  drawerItemsContainer: {
    flex: 1,
  },
  frameLabel: {
    fontSize: 12,
    color: '#999',
    marginVertical: 5,
    marginLeft: 16,
  },
  premiumContainer: {
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 5,
  },
  premiumIcon: {
    marginRight: 10,
    marginTop: 3,
  },
  premiumTextContainer: {
    flex: 1,
  },
  premiumTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  premiumSubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    lineHeight: 16,
  },
  premiumButton: {
    backgroundColor: '#111',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  premiumButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  spacer: {
    height: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
  },
  logoutText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#333',
  },
});

export default CustomDrawer;