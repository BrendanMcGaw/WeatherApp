import React from 'react'
import { navigation } from '@react-navigation/native'
import {
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    Text,
    Button,
    Pressable
} from 'react-native'

const UpcomingWeather = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/thunderstorm-3625405_1920.jpg')}
            style={styles.image}
        >
            <SafeAreaView style={styles.container}>
                <Pressable
                    style={styles.button}
                    title="Go to Monday."
                    onPress={() => navigation.navigate('Monday')}
                >
                    {/* Uses callback function to pass weatherData to the new screen. */}
                    {() => <Monday weatherData={weather.list} />}
                    <Text style={styles.buttonText}>Monday</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    title="Go to Tuesday."
                    onPress={() => navigation.navigate('Tuesday')}
                >
                    <Text style={styles.buttonText}>Tuesday</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    title="Go to Wednesday."
                    onPress={() => navigation.navigate('Wednesday')}
                >
                    <Text style={styles.buttonText}>Wednesday</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    title="Go to Thursday."
                    onPress={() => navigation.navigate('Thursday')}
                >
                    <Text style={styles.buttonText}>Thursday</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    title="Go to Friday."
                    onPress={() => navigation.navigate('Friday')}
                >
                    <Text style={styles.buttonText}>Friday</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    title="Go to Saturday."
                    onPress={() => navigation.navigate('Saturday')}
                >
                    <Text style={styles.buttonText}>Saturday</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    title="Go to Sunday."
                    onPress={() => navigation.navigate('Sunday')}
                >
                    <Text style={styles.buttonText}>Sunday</Text>
                </Pressable>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    // Allows our image to fill the entire background on the page.
    image: {
        flex: 1
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 300,
        borderRadius: 6,
        elevation: 4,
        color: 'black',
        backgroundColor: '#5DD9F5'
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default UpcomingWeather
