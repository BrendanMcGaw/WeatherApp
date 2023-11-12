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
import IconText from "../components/IconText";

const City = () => {
    const { container, cityName, cityText, countryName, populationWrapper, popCount, sunUpDownWrapper, sunUpDown, rowLayout } = styles
    return  (
        <ImageBackground
            source={require("../../assets/city-background.jpg")}
            style={styles.image}
        >
        <SafeAreaView style={container}>
            <Text style={[cityText, cityName]}>Newcastle</Text>
            <Text style={[cityText, countryName]}>Australia</Text>
            <View style={[populationWrapper, rowLayout]}>
                <IconText
                    iconName={"user"} 
                    iconColor={"red"} 
                    bodyText={"1,000,000"} 
                    bodyTextStyles={popCount}
                />
            </View>
            <View style={[sunUpDownWrapper, rowLayout]}>
                <IconText 
                    iconName={"sunrise"} 
                    iconColor={"white"}
                    bodyText={"6:42:52am"} 
                    bodyTextStyles={sunUpDown} 
                />
                <IconText 
                    iconName={"sunset"} 
                    iconColor={"white"} 
                    bodyText={"20:12:15pm"} 
                    bodyTextStyles={sunUpDown} 
                />
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
        justifyContent: "space-around",
        marginTop: 30,
    },
    sunUpDown: {
        alignSelf: "center",
        justifyContent: "center",
        fontSize: 20,
        color: "white",
    },
    rowLayout:  {
        flexDirection: "row",
        alignItems: "center"
    }
})

export default City