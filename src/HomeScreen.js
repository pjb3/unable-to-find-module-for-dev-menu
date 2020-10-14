import React from "react"
import { StatusBar } from "expo-status-bar"
import styled from "styled-components/native"

export default () => {
  return (
    <View>
      <Text>Home Screen?</Text>
      <StatusBar style="auto" />
    </View>
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
