import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { _COLORS } from '../../../style'

const ListItem = ({date, time, distance, data}) => {
    
    const [isPressed, setIsPressed] = useState(false)
  return (
    <Pressable style={[styles.container, isPressed? styles.active : {}]} onPress={()=> setIsPressed(isPressed?false:true)}>
        <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: _COLORS.black}}>Name</Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: _COLORS.black}}>Distance: </Text>
        </View>
      <View>
        <Text style={{fontSize: 14, color: _COLORS.black}}>Date: </Text>
        <Text style={{fontSize: 14, color: _COLORS.black}}>Time: </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({active:{
    backgroundColor: _COLORS.primary,
    color: '#fff',
} ,
    container:{
        marginVertical: 10,
        borderColor: _COLORS.quaternary,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    }
})

export default ListItem