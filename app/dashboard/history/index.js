import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { _COLORS } from '../../../style'
import ListItem from './listItem'
import { SearchBar } from 'react-native-screens'
import CheckBox from 'react-native-check-box'
import { FontAwesome5 } from '@expo/vector-icons';
function History() {
    const [isFilter, setIsFilter] = useState(false)
  return (
    <View style={styles.container} >
        <View style={styles.titlebar}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: _COLORS.black}}>List Of Workout</Text>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', opacity: isFilter? 0: 1}}>
                <Button title="Filter" color={_COLORS.primary} onPress={()=> setIsFilter(isFilter? false: true)}  />
            </View>
        </View>
        {isFilter && (
        <View style={styles.searchbar}>
            <View style={{display: 'flex', alignItems: "center", flexDirection: "row"}}>
                <FontAwesome5 name="search" size={24} color="black" />
                <TextInput style={styles.searchbarText} placeholder="Search" />
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: _COLORS.black, marginRight:5}} onPress={()=>setIsFilter(isFilter? false: true)}>X</Text>
            {/* <View>
            <CheckBox
                style={{padding: 10, marginHorizontal: 20}}
                
                leftText={"Bottom Left Light"}
            />
            </View> */}
        </View>
        )}
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
        justifyContent: 'space-between',
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
        width: "80%"
    }
})

export default History