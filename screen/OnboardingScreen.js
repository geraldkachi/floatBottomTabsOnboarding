import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

// import { Octicons } from "@expo/vector-icons";

const ImgIcon = require("../assets/icon.png");
const ImgIconic = require("../assets/splash.png");

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
    onSkip={()=> navigation.navigate('BottomTab')}
    onDone={()=> navigation.navigate('BottomTab')}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={ImgIcon}  />,
          title: "Connect to the World",
          subtitle: "Done with React Native Swiper",
        },
        {
            backgroundColor: "#fdeb93",
            image: <Image source={ImgIconic} />,
            title: "Share Your Fvaourite",
            subtitle: "Done with React Native Swiper Second",
        },
        {
          backgroundColor: "#a9bcbe",
          image: <Image source={ImgIcon} />,
          title: "Become The Star",
          subtitle: "Done with React Native Swiper",
        },
      ]}
    />
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
//   imageslider: {
//     justifyContent: "center",
//     alignItems: "center",
//     resizeMode: "cover",
//   },
});

//   npm audit fix
