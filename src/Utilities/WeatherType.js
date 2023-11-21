// Want to create conditional changes to the background of current weather if its raining or whatnot etc...
// Videos to be  found  at pixabay.com
// https://www.freecodecamp.org/news/how-to-create-a-background-video-in-react-native-cb53304ee4f6/
// instructional guide on how to use library of react native videos to  make them  into background  videos.
// https://stackoverflow.com/questions/60018247/react-native-video-cannot-read-property-constants-of-null
// for  an issue I might have in the future.
export const WeatherType = {
  Thunderstorm: {
    icon: "zap",
    message: "It could get noisy",
    backgroundColor: "#000000",
    video: require("../../assets/rain.mp4"),
  },
  Drizzle: {
    icon: "cloud-rain",
    message: "It might rain a little.",
    backgroundColor: "#36454f",
    video: require("../../assets/heavyrain.mp4"),
  },
  Rain: {
    icon: "umbrella",
    message: "You will need an umbrella",
    backgroundColor: "#0000ff",
    video: require("../../assets/rain.mp4"),
  },
  Snow: {
    icon: "cloud-snow",
    message: "Lets build a snowman",
    backgroundColor: "#7f6065",
    video: require("../../assets/snowing.mp4"),
  },
  Clear: {
    icon: "sun",
    message: "It is perfect t-shirt weather",
    backgroundColor: "#e47200",
    video: require("../../assets/clearSkies.mp4"),
  },
  Clouds: {
    icon: "cloud",
    message: "You could live in the clouds",
    backgroundColor: "#363636",
    video: require("../../assets/Cloudy.mp4"),
  },
  Haze: {
    icon: "wind",
    message: "It might be a bit damp",
    backgroundColor: "#58586e",
    video: require("../../assets/Haze.mp4"),
  },
  Mist: {
    icon: "align-justify",
    message: "It might be hard to see",
    backgroundColor: "#3e3e37",
    video: require("../../assets/fog.mp4"),
  },
};
