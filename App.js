import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import HomeScreen from './screen/home/HomeScreen'
import LoginScreen from './screen/login/LoginScreen'
import LocalStorageScreen from './screen/localStorage/LocalStorageScreen'
import AnimationScreen from './screen/animation/AnimationScreen'

export default function App() {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  )
}