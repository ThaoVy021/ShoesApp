import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/styles';
import LinearGradient from 'react-native-linear-gradient';

export default function LoginScreen() {

  const imageBig = require('../../assets/images/bg_login.webp')
  const userIcon = require('../../assets/images/icon_user.png')
  const passwordIcon = require('../../assets/images/ic_password.png')
  
  return (
    <View style={styles.container}>
        <View style={{flex: 2}}>
            <Image resizeMode='cover' source={imageBig} style={{width: '100%', height: '100%'}}/>
            
        </View>
        <LinearGradient
            style={styles.gradientContainer}
            colors={['transparent', '#FFF', '#FFF']}
        >
            <View style={styles.linear_container}>
                <View style={styles.form_container}>
                    <View style={styles.form_container_flex}>
                        <Text style={styles.form_container_flex__title}>Login</Text> 
                        <View style={styles.form_input_container}>
                            <View style={styles.input_container}>
                                <View style={styles.input_with_image_container}>
                                    <Image source={userIcon} style={styles.input_with_image__icon}/>
                                    <TextInput placeholder='Email' style={styles.input_with_image__input}/>
                                </View>

                                <View style={{height: 1, backgroundColor: '#DFDFDF'}}></View>

                                <View style={styles.input_with_image_container}>
                                    <Image source={passwordIcon} style={styles.input_with_image__icon}/>
                                    <TextInput placeholder='Password' style={styles.input_with_image__input}/>
                                </View>
                            </View>

                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#000',
                                    borderRadius: 5,
                                    padding: 16,
                                    marginTop: 24
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        alignSelf: 'center',
                                        fontSize: 16,
                                        fontWeight: '400'
                                    }}
                                >Login</Text>
                            </TouchableOpacity>

                            <Text style={{
                                alignSelf: 'center',
                                marginTop: 16
                            }}>Don't have an account? Signup</Text>

                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient>
    </View>
  )
}
