import React from "react"
import { 
    View,
    Text,
    StyleSheet 
} from "react-native"
import { Feather } from "@expo/vector-icons"

const ListItem = (props) => {
<<<<<<< Updated upstream
    const { dt_txt, min, max, condition } = props
    const { item, dt, temp } = styles
    return (
        <View style={item}>
            <Feather name={'sun'} size={50} color={'white'}/>
            <Text style={dt}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    )
}
=======
  const { dt_txt, min, max, condition } = props;
  const { item, date, temp, dateTextWrapper } = styles;
  return (
    <View style={item}>
      <Feather name={WeatherType[condition].icon} size={50} color={"white"} />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°${Math.round(max)}°`}</Text>
    </View>
  );
};
>>>>>>> Stashed changes

const styles = StyleSheet.create ({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "pink",
    },
    temp: {
        color: "white",
        fontSize: 20
    },
    dt: {
        color: "white",
        fontSize: 15
    },
})

export default ListItem;