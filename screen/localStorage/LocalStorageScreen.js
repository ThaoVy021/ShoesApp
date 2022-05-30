import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { saveLocalStorage, getLocalStorage } from '../../common/LocalStorage'
import { KEY_LOCAL_STORAGE } from '../../common/Constant'

/* 
    master data:  => nhunưgx dữ liệu ko đổi
    token: => chứng thực dùng để gọi API nào đó mà bên BE yêu cầuu
    link: 
    - singup: Link tao tai khoan
    - singup: đăng nhập
*/

export default function LocalStorageScreen() {

    const onSaveLocalStorage = () => {
        saveLocalStorage(KEY_LOCAL_STORAGE, "hello local Storage")
    }

    const onGetLocalStorage = () => {
        let data = getLocalStorage(KEY_LOCAL_STORAGE)
        .then((data)=> console.log(`Gia tri: ${data}`))
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Result: </Text>

      <TouchableOpacity 
        style={[ styles.btn ,styles.btn__secondary]}
        onPress={() => onSaveLocalStorage()}
      >
        <Text style={styles.btn__text}>Save Local Storage</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[ styles.btn ,styles.btn__primary]}
        onPress={() => onGetLocalStorage()}
      >
        <Text style={styles.btn__text}>Get Local Storage</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        padding: 16,
        borderRadius: 5,
        margin: 5
    },
    btn__primary: {
        backgroundColor: 'blue',
    },
    btn__secondary: {
        backgroundColor: 'red',
    },
    btn__text: {
        color: '#FFF'
    }
})