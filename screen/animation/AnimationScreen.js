import { View, Text,  SafeAreaView, StyleSheet, Animated, TouchableOpacity, Easing} from 'react-native'
import React, { useEffect } from 'react'

export default function AnimationScreen() {

  const animValue = new Animated.Value(1) //Buóc 1: khởi tạo giá trị ban đầu của Animation
  const animScaleValue = new Animated.Value(0.3)
  const styleAnim = {opacity: animValue} //Buóc 2: khai báo thuộc tính của css cần làm Animation
  const styleScaleAnim = {transform : [{scale: animScaleValue}]}
  //Bước 3: Component cần sử dụng animation (6 component căn bản)
  useEffect(()=>{
    Animated.parallel(
      [
        Animated.timing(
          animValue,
          {
            toValue: 1,
            // duration: 3000, //miliSecond
            delay: 500,
            easing: Easing.circle,
            useNativeDriver: true
          }
        ),

        //độ nảy, độ đàn hồi
        Animated.spring(
          animScaleValue,
          {
            toValue: 1,
            friction: 1, //ma sát
            tension: 10, //Sức căng
            useNativeDriver: true
          }
        )
      ],


    ).start()
  })

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View style={[styles.box, styleScaleAnim, styleAnim]}>
      
      </Animated.View>

      <TouchableOpacity>
        <Text>AnimationScreen</Text> 
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  box:{
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})