import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const Friday = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Friday is MI DAY!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    text: {
        fontSize: 36
    }
})

export default Friday
