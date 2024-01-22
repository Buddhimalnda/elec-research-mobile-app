import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { _COLORS } from '../../style'

const Workout = () => {
    const [isStart, setIsStart] = useState(false)
  return (
    <View style={styles.workout}>
        <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: _COLORS.black}}>Workout</Text>
            <View>

        <Text style={{fontSize: 16, fontWeight: 'bold', color: _COLORS.black}}>Last active time: </Text>
        <Text style={{fontSize: 14, color: _COLORS.black}}>Last active time: </Text>
            </View>
        </View>
        <View style={styles.container}>
            <Button  title={!isStart? "Start Workout": "end"} onPress={()=> setIsStart(isStart? false: true)} color={isStart? "red": ""} />
            <Button title="Workout" />
        </View>
    </View>
  )
}

export default Workout

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    workout: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderColor: _COLORS.quaternary,
        borderWidth: 2,
        padding: 5,
        borderRadius: 10,
    }
})