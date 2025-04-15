import { View, Text, StyleSheet } from "react-native";

export default function Index() {
    return (
     <View style={styles.container}>
        <Text style={styles.title}>Daily App</Text>
        <Text style={styles.subtitle}>Welcome to the Daily App!</Text>
        <Text>This is your daily companion.</Text>
        <Text>Stay organized and productive.</Text>
        <Text>Have a great day!</Text>
     </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    }
});