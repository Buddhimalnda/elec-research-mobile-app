import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BatteryChargLevel from './batteryChargLevel'
import MidButton from './midButton'
import FooterButton from './footerButton'
import { _COLORS } from '../../style'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* battery charging level */}
      <BatteryChargLevel />
      {/* Device on/off switch */}
      <MidButton />
      {/* patton creating btns */}
      <FooterButton /> 
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: _COLORS.white,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        positionr: 'relative',
    },
})