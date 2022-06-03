import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { saveLocalStorage, getLocalStorage } from '../../common/LocalStorage'
import { KEY_LOCAL_STORAGE } from '../../common/Constant'

/* 
  master data : => Những giữ liệu không đổi
  token: => Chứng thực dùng để gọi API nào đó mà bên BE yêu cầu
  link:
  - signup : Link tạo tài khoản
  - signup : Đăng nhập
*/

export default function LocalStorageScreen() {

    const onSaveLocalStorage = () => {
        let data = {
            username: "Nguyễn Văn A",
            password: "123456"
        }
        saveLocalStorage(KEY_LOCAL_STORAGE,data)
    }

    const onGetLocalStorage = () => {
        getLocalStorage(KEY_LOCAL_STORAGE)
        .then((data)=> console.log(data.username))
        
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Result : </Text>

      <TouchableOpacity
        style={[styles.btn, styles.btn__secondary]}
        onPress={()=> onSaveLocalStorage()}
      >
          <Text style={styles.btn__text}>Save Local Storage</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, styles.btn__primary]}
        onPress={()=> onGetLocalStorage()}
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
        marginTop: 8
    },
    btn__primary: {
        backgroundColor: 'blue'
    },
    btn__secondary: {
        backgroundColor: 'red'
    },
    btn__text:{
        color: "#FFF"
    }
})