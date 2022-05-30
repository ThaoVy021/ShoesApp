import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles/styles'
import LinearGradient from 'react-native-linear-gradient'
import { checkLogin, getLocalAccessToken } from './LoginThunk'
import { useDispatch } from 'react-redux'

export default function LoginScreen() {
    const bg_login = require('../../assets/images/bg_login.webp')
    const icon_user = require('../../assets/images/icon_user.png')
    const icon_password = require('../../assets/images/ic_password.png')
    let email = ""
    let password = ""

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getLocalAccessToken())


    },[])

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

                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#000',
                                    borderRadius: 5,
                                    padding: 16,
                                    marginTop: 24
                                }}
                                onPress={()=> onPressLogin() }
                            >
                                <Text style={{color: 'white', alignSelf: 'center', fontSize: 16, fontWeight: '500'}}>Login</Text>
                            </TouchableOpacity>
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