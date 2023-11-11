// We want this component to access the city location API from open weather corrolating with  the  location of  the weather being predicted.
// Includes: 
// City Name
// City Country
// Population
// Sunrise & Sunset times

import React from "react"
import { 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    StatusBar,
    View
} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import { IonIconsText } from "../components/IonIconsText.js";

const City = () => {
    return  (
        <ImageBackground
            source={require("../../assets/city-background.jpg")}
            style={styles.image}
        >
        <SafeAreaView style={styles.container}>
            <Text style={[styles.cityText, styles.cityName]}>Newcastle</Text>
            <Text style={[styles.cityText, styles.countryName]}>Australia</Text>
            <View style={styles.populationWrapper}>
                <IonIconsText 
                    iconName={"user"} 
                    iconColor={"red"} 
                    bodyText={"1,000,000"} 
                    bodyTextStyles={styles.popCount}
                />
            </View>
            <View style={styles.sunUpDownWrapper}>
                <Feather name={"sunrise"} size={50} color={"white"} />
                <Text style={[styles.cityText, styles.sunUpDown]}>6:42:52am</Text>
                <Feather name={"sunset"} size={50} color={"white"} />
                <Text style={[styles.cityText, styles.sunUpDown]}>20:12:15pm</Text>
            </View>
        </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    image: {
        flex: 1
    },
    cityText: {
        alignSelf: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: "white"
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30,
    },
    populationWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    popCount: {
        alignSelf: "center",
        justifyContent: "center",
        fontSize: 25,
        marginLeft: 7.5,
        color: "red",
    },
    sunUpDownWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 30,
    },
    sunUpDown: {
        alignSelf: "center",
        justifyContent: "center",
        fontSize: 20,
        color: "white",
    }
})

export default City