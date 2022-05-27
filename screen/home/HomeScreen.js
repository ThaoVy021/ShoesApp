import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchCategories, fetchProductByCategoryId } from './HomeThunks';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import { onSelectedCategory } from './HomeSlice';

export default HomeScreen = ({navigation}) => {
 
  const dispatch = useDispatch()
  const dataProducts = useSelector((state) => state.home.dataProducts)
  const dataCategories = useSelector((state) => state.home.dataCategories)
  const categorySelected = useSelector((state) => state.home.categorySelected)

  const likeIcon = require('../../assets/images/like.png')
  const iconClose = require('../../assets/images/icon_close.png')
  const iconTune = require('../../assets/images/icon_tune.png')

  useEffect(()=>{
    // dispatch(fetchProducts())
    console.log('useEffect')
    dispatch(fetchCategories())
  },[categorySelected])

  const renderItem = (item) => (
    <View style={{
      margin: 8, 
      padding: 16,
      backgroundColor: '#FFF',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 5
    }}>
      <Image source={likeIcon} style={{width: 16, height: 16, alignSelf:'flex-end'}}/>
      <Image resizeMethod='resize' source={{uri: item.image}} style={{width: '100%', height: 100}}/>
      <Text style={{fontSize: 18, fontWeight: '500', marginTop: 16}}>{item.name}</Text>
      <Text style={{fontSize: 16, color: '#CCC', marginTop: 16}}>${item.price}</Text>
    </View>
  )

  const renderItemCategory = (item) => (
    <TouchableOpacity
      onPress={()=> dispatch(onSelectedCategory(item.id))}
    >
      <Text 
        style={{
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

    return(
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#000',width: '100%', height: 250, position: 'absolute'}}></View>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16}}>
            <Image source={iconClose} style={{width: 24, height: 24}}/>
            <Image source={iconTune} style={{width: 24, height: 24}}/>
          </View>

          <View>
            <FlatList 
              data={dataCategories}
              horizontal
              renderItem={({item}) => renderItemCategory(item)}
            />
          </View>

          <StaggeredList 
            style={{padding: 8}}
            data={dataProducts}
            animationType = {'FADE_IN_FAST'}
            renderItem={({item}) => renderItem(item)}
          />
        </SafeAreaView>
      </View>
  )
}
