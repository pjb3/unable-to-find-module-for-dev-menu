import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import styled from "styled-components/native"

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen?</Text>
    </View>
  )
}

const Stack = createStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Text = styled.Text`
  font-family: Lato_300Light;
  font-size: 16px;
`

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`
