import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { _COLORS } from '../../../style'
import { useSelector, useDispatch } from 'react-redux'
import { getTimeDuration } from '../../../lib/functions'
import { startWorkout } from '../../../store/workout'
import CustomPanel from './CustomPanel'
import EditUserDetails from './editUserDetails'

function Tracking() {
  const workoutDetails = useSelector((state) => state?.workout)
  const [duration, setDuration] = useState("00:00:00")
  const dispatch = useDispatch()
  const [timeRemaining, setTimeRemaining] = useState(0);
  console.log('====================================');
  console.log(workoutDetails?.state);
  console.log('====================================');
  useEffect(() => {
    if(workoutDetails?.state === "WAITING"){
      alert("workout Not start. Please start workout?")
    }
  }, [workoutDetails])
  

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const [panelVisible, setPanelVisible] = useState(false);
  const [submittedData, setSubmittedData] = useState('');

  const handleOpenPanel = () => {
    setPanelVisible(true);
  };

  const handleClosePanel = () => {
    setPanelVisible(false);
  };

  const handleSubmitData = (data) => {
    setSubmittedData(data);
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.mapView}>

      </View>
      <View style={styles.infoView}>
        <View style={styles.animateIcon}>
          <Text>Icon</Text>
        </View>
        <View style={styles.duration}>
          <Text style={styles.durationText}>{formatTime(timeRemaining)}</Text>
        </View>
        <View style={styles.info}>
          <ScrollView>
            <View style={styles.infoTitle}>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: _COLORS.black}}>Name</Text>
                <Text style={{fontSize: 14, color: _COLORS.black}}>Start: Date & Time</Text>
                <Text style={{fontSize: 14, color: _COLORS.black}}>End: Date & Time</Text>
              </View>
              <View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: _COLORS.black}}>Distance: </Text>
                <Text style={{fontSize: 16, color: _COLORS.black}}>5 Km </Text>
              </View>
            </View>
            <View style={[styles.infoTitle, {marginVertical: 5}]}>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: _COLORS.black}}>User Details</Text>
                <Text style={{fontSize: 14, color: _COLORS.black}}>Weight: </Text>
                <Text style={{fontSize: 14, color: _COLORS.black}}>Height: </Text>
                <Text style={{fontSize: 14, color: _COLORS.black}}>Age: </Text>
                <Text style={{fontSize: 14, color: _COLORS.black}}>Gender: </Text>
                <Text style={{fontSize: 14, color: _COLORS.black}}>Body Composition: </Text>
              </View>
              <View>
                <View>
                  <Button title="Edit" onPress={handleOpenPanel} />
                  <CustomPanel
                    isVisible={panelVisible}
                    onClose={handleClosePanel}
                    onSubmit={handleSubmitData}
                    Rx={<EditUserDetails />}
                  />
                </View>
              </View>
            </View>
            
          </ScrollView>
          <View style={styles.caloriesburned}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: _COLORS.black}}>300</Text>
          </View>
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
  },
  mapView:{
    width: '100%',
    height: 300,
    backgroundColor: 'red'
  },
  infoView:{
    width: '100%',
    height: "100%",
  },
  animateIcon:{
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 6,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 50,
    top: -50
  },
  info:{
    top: -70,
    marginHorizontal: 20,
  },
  infoTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  duration:{
    top: -80,
    right: 10,
    // marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  durationText:{
    fontSize: 25,
    fontWeight: 'bold',
    color: _COLORS.black,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 6,
    marginHorizontal: 'auto',
  },
  caloriesburned:{
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 6,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 10,
  }
})

export default Tracking