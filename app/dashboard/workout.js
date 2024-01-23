import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { _COLORS } from '../../style'
import { useDispatch } from 'react-redux'
import { getTimeDuration } from '../../lib/functions'
import { useSelector } from 'react-redux'
import { endWorkout, startWorkout } from '../../store/workout'

const Workout = () => {
    const [isStart, setIsStart] = useState(false)
    const dispatch = useDispatch()
    const workoutDetails = useSelector((state) => state?.workout)

    // const workoutHandle = () => {
    //     setIsStart(isStart? false: true)
    //     const time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    //     if(isStart){
    //         const workout = {
    //             name: "",
    //             exercises: [],
    //             date: new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear(),
    //             time: time,
    //             duration: "00:00:00",
    //             calories: 0,
    //             distance: 0,
    //             location: [],
    //         }
    //         dispatch(startWorkout(workout))
    //     }else{

    //         const workout = {
    //             name: "",
    //             exercises: [],
    //             date: new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear(),
    //             time: time,
    //             duration: getTimeDuration(workoutDetails?.workout?.time, time),
    //             calories: 0,
    //             distance: 0,
    //             location: [],
    //         }
    //         dispatch(endWorkout(workout))

    //     }
    // }
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
            <Button  title={!isStart? "Start Workout": "end"} color={isStart? "red": ""} />
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