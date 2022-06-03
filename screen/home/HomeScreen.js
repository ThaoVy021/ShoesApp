import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React,{ useEffect }  from 'react'
import { fetchProducts, fetchCategories, fetchProductByCategoryId } from './HomeThunks'
import { useDispatch, useSelector } from 'react-redux'
import StaggeredList from '@mindinventory/react-native-stagger-view'
import { onSelectedCategory } from './HomeSlice'

export default function HomeScreen() {

    const dispatch = useDispatch()
    const dataProducts = useSelector((state)=>state.home.dataProducts)
    const dataCategories = useSelector((state)=>state.home.dataCategories)
    const categorySelected = useSelector((state)=>state.home.categorySelected)

    const likeIcon = require('../../assets/images/like.png')
    const iconClose = require('../../assets/images/icon_close.png')
    const iconTune = require('../../assets/images/icon_tune.png')

    useEffect(()=>{
        // dispatch(fetchProducts())
        dispatch(fetchCategories())
    },[categorySelected])

    const renderItem = (item) =>(
        <View style={{
            margin: 8, 
            padding: 16,
            backgroundColor: '#FFF',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius: 5
            }}>
            <Image source={likeIcon} style={{width:16, height: 16, alignSelf: 'flex-end'}} />
            <Image resizeMode='contain' source={{uri: item.image}} style={{width:'100%',height:100}}/>
            <Text style={{fontSize: 18, fontWeight: '500', marginTop: 16}}>{item.name}</Text>
            <Text style={{fontSize: 16, color: '#CCC',  marginTop: 16}}>${item.price}</Text>
        </View>
    )

    const renderItemCatgory = (item) => (
        <TouchableOpacity
            onPress={()=> dispatch(onSelectedCategory(item.id)) }
        >
            <Text style={{
                color: '#FFF', 
                margin: 8, 
                fontSize: 16, 
                fontWeight: '500',
                color: item.id == categorySelected ? 'red' : 'white'
                }}>
                    {item.category}
            </Text>
        </TouchableOpacity>
    )

  return (
    <View style={{flex:1}}>
        <View style={{height: 250, width: '100%', backgroundColor: '#000', position:'absolute'}} />
       
        <SafeAreaView style={{flex:1}}>
            {/* AppBar */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16}}>
                <Image source={iconClose} style={{width:24, height: 24}}/>
                <Image source={iconTune} style={{width:24, height: 24}}/>
            </View>

            {/* Category */}
            <View>
                <FlatList 
                    data={dataCategories}
                    horizontal
                    renderItem={({item}) => renderItemCatgory(item) }
                />
            </View>

            {/* Products */}
            <StaggeredList
                style={{padding: 8}}
                data={dataProducts}
                animationType={'FADE_IN_FAST'}
                renderItem={({item}) => renderItem(item)}
            />
        </SafeAreaView>
    </View>
  )
}