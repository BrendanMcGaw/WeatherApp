import React from "react"
import { View, Text, Button, StyleSheet} from "native-react"

const Counter = () => {
    let count = 0
    return (
        <View>
            <Text>{`count: ${count}`}</Text>
            <Button 
                color={"red"} 
                title={"Increase the count"} 
                onPress={() => { 
                    count++ 
                    console.log(count)
                }}
            />         
            <Button 
                color={"green"} 
                title={"Decrease the count"} 
                onPress={() => {
                    count--
                    console.log(count)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default Counter


