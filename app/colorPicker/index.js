import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';
import { _COLORS } from '../../style';
import CheckBox from 'react-native-check-box'
function ColorPicker() {
  const [red, setRed] = React.useState(0)
  const [green, setGreen] = React.useState(0)
  const [blue, setBlue] = React.useState(0)

  const [topLeftLight, setTopLeftLight] = React.useState(false)
  const [topRightLight, setTopRightLight] = React.useState(false)
  const [bottomLeftLight, setBottomLeftLight] = React.useState(false)
  const [bottomRightLight, setBottomRightLight] = React.useState(false)
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Pick Your color</Text>
        <View style={styles.row}>
          <Text>R</Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={255}
            minimumTrackTintColor={_COLORS.red}
            maximumTrackTintColor="#000000"
            onValueChange={(value) => setRed(value.toPrecision(3))}
          />
          <Text>{red}</Text>
        </View>
        <View style={styles.row}>
          <Text>G</Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={255}
            minimumTrackTintColor={_COLORS.green}
            maximumTrackTintColor="#000000"
            onValueChange={(value) => setGreen(value.toPrecision(3))}
          />
          <Text>{green}</Text>
        </View>
        <View style={styles.row}>
          <Text>B</Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={255}
            minimumTrackTintColor={_COLORS.blur}
            maximumTrackTintColor="#000000"
            onValueChange={(value) => setBlue(value.toPrecision(3))}
          />
          <Text>{blue}</Text>
        </View>
      </View>
      <View style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
        <View style={{backgroundColor: `rgba(${red},${green},${blue},1)`, height: 50, width: 100, margin: 20}}></View>
      </View>
      <View>
        <Text style={styles.titleText}>Pick Your color</Text>
        <CheckBox
            style={{padding: 10, marginHorizontal: 20}}
            onClick={()=>{
              setTopLeftLight(!topLeftLight)
            }}
            isChecked={topLeftLight}
            leftText={"Top Left Light"}
        />
        <CheckBox
            style={{padding: 10, marginHorizontal: 20}}
            onClick={()=>{
              setTopRightLight(!topRightLight)
            }}
            isChecked={topRightLight}
            leftText={"Top Right Light"}
        />
        <CheckBox
            style={{padding: 10, marginHorizontal: 20}}
            onClick={()=>{
              setBottomLeftLight(!bottomLeftLight)
            }}
            isChecked={bottomLeftLight}
            leftText={"Bottom Left Light"}
        />
        <CheckBox
            style={{padding: 10, marginHorizontal: 20}}
            onClick={()=>{
              setBottomRightLight(!bottomRightLight)
            }}
            isChecked={bottomRightLight}
            leftText={"Bottom Right Light"}
        />
      </View>
      <Button title="Submit" color={_COLORS.primary} />

    </View>
  )
}

export default ColorPicker

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
})