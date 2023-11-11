// We want this component to access the city location API from open weather corrolating with  the  location of  the weather being predicted.
// Includes: 
// City Name
// City Country
// Population
// Sunrise & Sunset times

import React from "react"
import { SafeAreaView, Text, StyleSheet, ImageBackground} from "react-native"

const City = () => {
    return  (
        <ImageBackground
            source={require("../../assets/city-background.jpg")}
            style={styles.image}
        >
        <SafeAreaView style={styles.container}>
            <Text>Newcastle</Text>
            <Text>Australia</Text>
            <Text>1,000,000</Text>
            <Text>6AM & 8PM</Text>
        </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1
    }
})

export default City