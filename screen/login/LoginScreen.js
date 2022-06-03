import { View, Text, Image, TextInput, TouchableOpacity,Animated, Easing } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles/styles'
import LinearGradient from 'react-native-linear-gradient'
import { checkLogin, getLocalAccessToken } from './LoginThunk'
import { useDispatch, useSelector } from 'react-redux'

export default function LoginScreen() {
    const bg_login = require('../../assets/images/bg_login.webp')
    const icon_user = require('../../assets/images/icon_user.png')
    const icon_password = require('../../assets/images/ic_password.png')
    const icon_success = require('../../assets/images/success.png')
    let email = ""
    let password = ""

    const accessToken = useSelector((state) => state.login.accessToken)

    const animWidthValue = new Animated.Value(100)
    const animInter = animWidthValue.interpolate({
        inputRange:  [20,100], 
        outputRange: ['20%', '100%']
    })

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getLocalAccessToken())
        if(accessToken !== undefined && accessToken !== ""){
            Animated.timing(
                animWidthValue,
                {
                    toValue: 20,
                    duration: 500,
                    useNativeDriver: false
                }
            ).start()
        }
    },[accessToken])

    const onPressLogin = () => {
        dispatch(checkLogin({email: email, password: password}))
       
    }

  return (
    <View style={styles.container}>
        <View style={{flex:2}}>
            <Image resizeMode='cover' source={bg_login} 
                style={{width:'100%', height:'100%'}}/>
        </View>

        <View style={{flex:1}}></View>

        <LinearGradient
            style={styles.gradient_container}
            colors={['transparent','#FFF','#FFF']}
        >
            {/* form login */}
            <View style={styles.linear_container}>
                <View style={styles.form_container}>
                    <View style={styles.form_container_flex}>
                        <Text style={styles.form_container_flex__title}>Login</Text>
                        <View style={styles.form_input_container}>
                            <View style={styles.input_container}>
                                
                                <View style={styles.input_with_icon_container}>
                                    <Image source={icon_user} style={styles.input_with_icon_container__icon}/>
                                    <TextInput onChangeText={(text)=> email = text } placeholder='Email' style={styles.input_with_icon_container__input}/>
                                </View>

                                <View style={{height:1, backgroundColor: '#DFDFDF'}} />

                                <View style={styles.input_with_icon_container}>
                                    <Image source={icon_password} style={styles.input_with_icon_container__icon}/>
                                    <TextInput onChangeText={(text)=> password = text} secureTextEntry  placeholder='Password' style={styles.input_with_icon_container__input}/>
                                </View>
                            </View>

                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Animated.View
                                    style={[{
                                        backgroundColor: '#000',
                                        borderRadius: 40,
                                        padding: 16,
                                        marginTop: 24,
                                        width: animInter
                                    }]}>
                                    <TouchableOpacity
                                        onPress={()=> onPressLogin() }
                                    >
                                        <Image style={{width: 30, height: 30}} source={icon_success}/>
                                        {/* <Text style={{color: 'white', alignSelf: 'center', fontSize: 16, fontWeight: '500'}}>Login</Text> */}
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>
                           
                            <Text style={{alignSelf: 'center', marginTop: 16}}>Don't have an account? Signup</Text>
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient>
    </View>
  )
}

/* 
    Bước 1 : Gọi API Đăng nhập => Thunk
    Bước 2 : Lấy thông accesstoken từ API đăng nhập
    Bước 3 : Lưu vào local storage => Slice
    Bước 4 : Lấy token từ local storage => Slice
*/
