# SOLVED

I originally created this repo to reporduce an error I was getting "Unable to find module for DevMenu". I have since discovered the issue is that you can't declare functions as I do in this repo like this:

`export default () => {`

The Expo reloading mechanism doesn't work when you do this. Instead, you need to do this:

`export default function Component()`

# Expo "Unable to find module for DevMenu" Error

When you run this app in the iOS simulator, you will see a "Unable to find module for DevMenu" error

## Install

Clone this repo and then run

    npm i -g expo-cli
    yarn
    expo start

## Steps

When you run `expo start`, the Expo DevTools will open in a browser. Choose "Run in iOS simulator".

The app should load in the simulator and you should see the text "Home Screen?"

Make a simple change in `src/navigation.js`, for example change the text to "Home Screen!".

The simulator will reload but the changes will not appear.

Press `Cmd+r` to refresh the app.

Now the changes will appears.

Next, make another small change, like change the text back to "Home Screen?"

You should now see the "Unable to find module for DevMenu" error.

You will not be able to dismiss or reload, so you have to close the simulator and relaunch it.
