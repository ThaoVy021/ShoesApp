import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
    size: 10,
    storageBackend: AsyncStorage,
    defaultExpires: 24 * 3600 * 1000,
    enableCache: true 
})

export const saveLocalStorage = (key, data) => {
    storage.save({
        key: key,
        data: data,
        expires: 1 * 3600 * 1000 //mili seconds
    })
}

export const getLocalStorage = async (key) => {
    try{
        let result = await storage.load({
            key: key,
            autoSync: true,
            syncInBackground: true
        })

        return result
    } catch(error){
        return ""
    }
}