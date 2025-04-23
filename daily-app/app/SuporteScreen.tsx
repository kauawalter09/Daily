import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function SuporteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#4A6FFF', '#6B8DFF']}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Suporte</Text>
          <Text style={styles.headerSubtitle}>Como podemos ajudar?</Text>
        </View>
      </LinearGradient>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.supportCard}>
            <View style={styles.iconContainer}>
              <Ionicons name="help-circle-outline" size={28} color="#4A6FFF" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Perguntas Frequentes</Text>
              <Text style={styles.cardDescription}>Respostas para dúvidas comuns</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#A0AEC0" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.supportCard}>
            <View style={styles.iconContainer}>
              <Ionicons name="chatbubble-ellipses-outline" size={28} color="#4A6FFF" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Chat de Suporte</Text>
              <Text style={styles.cardDescription}>Fale diretamente com nossa equipe</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#A0AEC0" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.supportCard}>
            <View style={styles.iconContainer}>
              <Ionicons name="mail-outline" size={28} color="#4A6FFF" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Enviar E-mail</Text>
              <Text style={styles.cardDescription}>Mande sua dúvida por e-mail</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#A0AEC0" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.supportCard}>
            <View style={styles.iconContainer}>
              <Ionicons name="document-text-outline" size={28} color="#4A6FFF" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Tutoriais</Text>
              <Text style={styles.cardDescription}>Aprenda a usar nosso aplicativo</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#A0AEC0" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  headerGradient: {
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    marginTop: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  supportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(74, 111, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#718096',
  },
});