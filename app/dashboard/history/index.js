import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { _COLORS } from '../../../style'
import ListItem from './listItem'
import { SearchBar } from 'react-native-screens'
import { FontAwesome5 } from '@expo/vector-icons';
function History() {
  return (
    <View style={styles.container} >
        <View style={styles.titlebar}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: _COLORS.black}}>List Of Workout</Text>
            <Button title="Filter" color={_COLORS.primary} />
        </View>
        <View style={styles.searchbar}><FontAwesome5 name="search" size={24} color="black" />
            <TextInput style={styles.searchbarText} placeholder="Search" />
        </View>
      <ScrollView style={styles.list}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: _COLORS.white,
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        // positionr: 'relative',
    
        marginHorizontal: 10,
        marginVertical: 10,
    },
    titlebar:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    list:{
        marginVertical: 10,
    },
    searchbar:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: _COLORS.light,
        borderRadius: 10,
        marginVertical: 3,
        padding: 10
    },
    searchbarText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: _COLORS.black,
        marginLeft: 10,
    }
})

export default History