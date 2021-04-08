import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({navigation }) => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button title="Press" onPress={()=> navigation.navigate("Onboarding")} />
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',     
    },
  })
