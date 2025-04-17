import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Switch, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function RotinaScreen() {
    // Dados fictícios para a demonstração
    const [routines, setRoutines] = useState([
        { id: 1, title: "Meditação matinal", time: "06:30", completed: true },
        { id: 2, title: "Exercícios físicos", time: "07:15", completed: false },
        { id: 3, title: "Planejamento do dia", time: "08:00", completed: true },
        { id: 4, title: "Leitura", time: "20:00", completed: false },
        { id: 5, title: "Revisão do dia", time: "22:00", completed: false },
    ]);

    // Estado para mostrar/ocultar o formulário de adicionar nova rotina
    const [showAddForm, setShowAddForm] = useState(false);
    const [newRoutineTitle, setNewRoutineTitle] = useState("");
    const [newRoutineTime, setNewRoutineTime] = useState("");

    // Função para alternar o status de uma rotina
    interface Routine {
        id: number;
        title: string;
        time: string;
        completed: boolean;
    }

    const toggleRoutineStatus = (id: number): void => {
        setRoutines(
            routines.map((routine: Routine) => 
                routine.id === id 
                    ? { ...routine, completed: !routine.completed } 
                    : routine
            )
        );
    };

    // Função para adicionar uma nova rotina
    const addNewRoutine = () => {
        if (newRoutineTitle.trim() === "" || newRoutineTime.trim() === "") return;
        
        const newRoutine = {
            id: routines.length + 1,
            title: newRoutineTitle,
            time: newRoutineTime,
            completed: false
        };
        
        setRoutines([...routines, newRoutine]);
        setNewRoutineTitle("");
        setNewRoutineTime("");
        setShowAddForm(false);
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
                        <Text style={styles.headerTitle}>Rotina Diária</Text>
                        <Text style={styles.headerSubtitle}>Organize seu dia para o sucesso</Text>
                    </View>
                </LinearGradient>

                {/* Lista de rotinas */}
                <View style={styles.routinesContainer}>
                    <View style={styles.routineHeader}>
                        <Text style={styles.sectionTitle}>Suas Rotinas</Text>
                        <TouchableOpacity 
                            style={styles.addButton}
                            onPress={() => setShowAddForm(!showAddForm)}
                        >
                            <Ionicons name={showAddForm ? "close" : "add"} size={22} color="#4A6FFF" />
                        </TouchableOpacity>
                    </View>

                    {/* Formulário para adicionar nova rotina */}
                    {showAddForm && (
                        <View style={styles.addFormContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Nome da rotina"
                                value={newRoutineTitle}
                                onChangeText={setNewRoutineTitle}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Horário (ex: 08:30)"
                                value={newRoutineTime}
                                onChangeText={setNewRoutineTime}
                            />
                            <TouchableOpacity 
                                style={styles.saveButton}
                                onPress={addNewRoutine}
                            >
                                <Text style={styles.saveButtonText}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    {/* Lista de rotinas */}
                    {routines.map((routine) => (
                        <View key={routine.id} style={[
                            styles.routineItem,
                            routine.completed && styles.completedRoutine
                        ]}>
                            <View style={styles.routineInfo}>
                                <View style={styles.routineTimeContainer}>
                                    <Text style={styles.routineTime}>{routine.time}</Text>
                                </View>
                                <View style={styles.routineDetails}>
                                    <Text style={[
                                        styles.routineTitle,
                                        routine.completed && styles.completedText
                                    ]}>
                                        {routine.title}
                                    </Text>
                                </View>
                            </View>
                            <Switch
                                trackColor={{ false: "#E2E8F0", true: "#BFD0FF" }}
                                thumbColor={routine.completed ? "#4A6FFF" : "#CBD5E0"}
                                ios_backgroundColor="#E2E8F0"
                                onValueChange={() => toggleRoutineStatus(routine.id)}
                                value={routine.completed}
                            />
                        </View>
                    ))}
                </View>

                {/* Estatísticas do dia */}
                <View style={styles.statsSection}>
                    <Text style={styles.sectionTitle}>Estatísticas</Text>
                    
                    <View style={styles.statsContainer}>
                        <View style={styles.statCard}>
                            <View style={styles.statIconContainer}>
                                <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
                            </View>
                            <Text style={styles.statValue}>
                                {routines.filter(r => r.completed).length}/{routines.length}
                            </Text>
                            <Text style={styles.statLabel}>Completadas</Text>
                        </View>
                        
                        <View style={styles.statCard}>
                            <View style={styles.statIconContainer}>
                                <Ionicons name="time" size={24} color="#FF7043" />
                            </View>
                            <Text style={styles.statValue}>
                                {Math.round((routines.filter(r => r.completed).length / routines.length) * 100)}%
                            </Text>
                            <Text style={styles.statLabel}>Progresso</Text>
                        </View>
                    </View>
                </View>

                {/* Dica do dia */}
                <View style={styles.tipContainer}>
                    <View style={styles.tipHeader}>
                        <Ionicons name="bulb-outline" size={22} color="#FFB300" />
                        <Text style={styles.tipHeaderText}>Dica do Dia</Text>
                    </View>
                    <Text style={styles.tipContent}>
                        Ao estabelecer uma rotina diária, você reduz o estresse e se torna mais produtivo. 
                        Comece com pequenos hábitos e aumente gradualmente.
                    </Text>
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
    routinesContainer: {
        marginTop: -20,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        margin: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 6,
    },
    routineHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2D3748',
    },
    addButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F0F4FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addFormContainer: {
        backgroundColor: '#F9FAFC',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        padding: 12,
        marginBottom: 12,
        fontSize: 15,
    },
    saveButton: {
        backgroundColor: '#4A6FFF',
        borderRadius: 8,
        padding: 14,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    routineItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F9FAFC',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    completedRoutine: {
        backgroundColor: '#F0F4FF',
        borderColor: '#E6EDFF',
    },
    routineInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    routineTimeContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginRight: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    routineTime: {
        fontSize: 14,
        fontWeight: '500',
        color: '#4A5568',
    },
    routineDetails: {
        flex: 1,
    },
    routineTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#2D3748',
    },
    completedText: {
        color: '#4A6FFF',
        textDecorationLine: 'line-through',
    },
    statsSection: {
        margin: 16,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    statCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        width: '48%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 8,
        elevation: 2,
    },
    statIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#F0F4FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2D3748',
    },
    statLabel: {
        fontSize: 14,
        color: '#718096',
        marginTop: 4,
    },
    tipContainer: {
        backgroundColor: '#FFFBF0',
        margin: 16,
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
        borderLeftWidth: 4,
        borderLeftColor: '#FFB300',
    },
    tipHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    tipHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2D3748',
        marginLeft: 8,
    },
    tipContent: {
        fontSize: 14,
        color: '#4A5568',
        lineHeight: 22,
    },
});