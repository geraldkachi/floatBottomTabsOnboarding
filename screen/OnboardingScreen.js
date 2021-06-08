import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

// import { Octicons } from "@expo/vector-icons";

const ImgIcon = require("../assets/icon.png");
const ImgIconic = require("../assets/splash.png");

const OnboardingScreen = ({ navigation }) => {
  const Dots = ({ selected }) => (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor: selected ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.3)",
      }}
    />
  );

  const Skip = ({ ...props }) => (
    <Button title="Skip" color="#000" {...props} />
  );
  const Next = ({ ...props }) => (
    <Button title="Next" color="#000" {...props} />
  );

  const Done = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
      <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
  );

  return (
    <View>

    <View style={styles.imageslider}>
      <Button title="Press Me! please" onPress={()=> navigation.navigate("BottomTab")} />
    </View>
     <Onboarding
     SkipButtonComponent={Skip}
     NextButtonComponent={Next}
     DoneButtonComponent={Done}
     DotComponent={Dots}
     onSkip={() => navigation.replace("Login")}
     onDone={() => navigation.navigate("Login")}
     pages={[
       {
         backgroundColor: '#a6e4d0',
         image: <Image source={require('../assets/onboarding-img1.png')} />,
         title: 'Connect to the World',
         subtitle: 'A New Way To Connect With The World',
       },
       {
         backgroundColor: '#fdeb93',
         image: <Image source={require('../assets/onboarding-img2.png')} />,
         title: 'Share Your Favorites',
         subtitle: 'Share Your Thoughts With Similar Kind of People',
       },
       {
         backgroundColor: '#e9bcbe',
         image: <Image source={require('../assets/onboarding-img3.png')} />,
         title: 'Become The Star',
         subtitle: "Let The Spot Light Capture You",
       },
     ]}
    />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
    imageslider: {
      justifyContent: "center",
      alignItems: "center",
      // resizeMode: "cover",
    },
});

//   npm audit fix
