import React from "react"
import { AppLoading } from "expo"
import { StatusBar } from "expo-status-bar"
import { useFonts } from "expo-font"
import {
  TitilliumWeb_300Light,
  TitilliumWeb_700Bold,
} from "@expo-google-fonts/titillium-web"
import {
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato"

import App from "./src/navigation"

export default () => {
  let [fontsLoaded] = useFonts({
    TitilliumWeb_300Light,
    TitilliumWeb_700Bold,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <App />
}
