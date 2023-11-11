import React from "react"
import { View, Text, StyleSheet } from  "react-native"
import { Feather } from "@expo/vector-icons"
import {  IonIcons } from "@expo/vector-icons"

const IonIconsText = (props) => {
    const { iconName, iconColor, bodyText, bodyTextStyles }  = props 
    return (
        <View>
            <Ionicons name={iconName} size={50} color={iconColor} />
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: "bold"
    },
    bodyTextStyles: {

    }
})

export default IonIconsText