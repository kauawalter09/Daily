import 'react-native-gesture-handler';  // Must be at the top
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  // Dados fictícios para demonstração
  const progressData = {
    currentStreak: 7,
    totalCompleted: 42,
    todayProgress: 60, // porcentagem
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header com gradiente */}
        <LinearGradient
          colors={['#4A6FFF', '#6B8DFF']}
          style={styles.headerGradient}
        >
          <View style={styles.headerContent}>
            <Text style={styles.welcomeHeader}>Olá!</Text>
            <Text style={styles.dateText}>Quarta, 17 de Abril</Text>
          </View>
        </LinearGradient>

        {/* Card principal */}
        <View style={styles.mainCardContainer}>
          <View style={styles.mainCard}>
            <Text style={styles.title}>Daily App</Text>
            
            <View style={styles.statsContainer}>
              <View style={styles.statCard}>
                <Ionicons name="flame-outline" size={28} color="#FF7043" />
                <Text style={styles.statNumber}>{progressData.currentStreak}</Text>
                <Text style={styles.statLabel}>Dias seguidos</Text>
              </View>
              
              <View style={styles.statCard}>
                <Ionicons name="checkmark-circle-outline" size={28} color="#4CAF50" />
                <Text style={styles.statNumber}>{progressData.totalCompleted}</Text>
                <Text style={styles.statLabel}>Tarefas concluídas</Text>
              </View>
            </View>

            <View style={styles.progressSection}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressTitle}>Progresso de hoje</Text>
                <Text style={styles.progressPercentage}>{progressData.todayProgress}%</Text>
              </View>
              <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${progressData.todayProgress}%` }]} />
              </View>
            </View>
          </View>
        </View>

        {/* Seção de dicas */}
        <View style={styles.tipsSection}>
          <Text style={styles.sectionTitle}>Dicas para você</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tipsScrollView}>
            <View style={styles.tipCard}>
              <Ionicons name="bulb-outline" size={24} color="#FFB300" style={styles.tipIcon} />
              <Text style={styles.tipTitle}>Consistência é a chave</Text>
              <Text style={styles.tipText}>Manter uma rotina diária ajuda a construir hábitos duradouros.</Text>
            </View>
            <View style={styles.tipCard}>
              <Ionicons name="timer-outline" size={24} color="#7E57C2" style={styles.tipIcon} />
              <Text style={styles.tipTitle}>Técnica Pomodoro</Text>
              <Text style={styles.tipText}>Trabalhe por 25 minutos e descanse por 5 minutos para aumentar sua produtividade.</Text>
            </View>
          </ScrollView>
        </View>

        {/* Botão de ação */}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Começar Agora</Text>
          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" style={styles.buttonIcon} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollView: {
    flex: 1,
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
  welcomeHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  mainCardContainer: {
    marginTop: -30,
    paddingHorizontal: 16,
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: '#F9FAFC',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.02,
    shadowRadius: 3,
    elevation: 1,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D3748',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 13,
    color: '#718096',
    marginTop: 2,
  },
  progressSection: {
    marginTop: 8,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#4A5568',
  },
  progressPercentage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A6FFF',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#EDF2F7',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4A6FFF',
    borderRadius: 10,
  },
  tipsSection: {
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 16,
  },
  tipsScrollView: {
    marginLeft: -4,
  },
  tipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  tipIcon: {
    marginBottom: 12,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
  },
  actionButton: {
    backgroundColor: '#4A6FFF',
    marginHorizontal: 16,
    marginVertical: 24,
    height: 56,
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4A6FFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  buttonIcon: {
    marginLeft: 4,
  },
});