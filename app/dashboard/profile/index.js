import { Button, Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Image, ClipPath,  Ellipse} from "react-native-svg";
import { _COLORS } from "../../../style";

const { height, width } = Dimensions.get("window");

function Profile() {
  return (
    <SafeAreaView style={{width: width}}>
      <View style={StyleSheet.absoluteFill}>
        <Svg>
          <Image
            href={require("../../../assets/img2.jpg")}
            width={width}
            height={200}
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
      </View>
      <View style={styles.avrtar} >
        <Svg>
          {/* <ClipPath id="clipPathId">
          </ClipPath> */}
          <Image
            href={require("../../../assets/img3.jpg")}
            width={200}
            height={200}
            // clipPath="url(#clipPathId)"
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{textAlign: "center", fontSize: 30}}>Nguyen Van A</Text>
        <Text style={{textAlign: "center", fontSize: 15}}>User</Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{textAlign: "center", fontSize: 15}}>Phone: 0123456789</Text>
        <Text style={{textAlign: "center", fontSize: 15}}>Email: buddhimalinda66@gmail.com </Text>
        <Text style={{textAlign: "center", fontSize: 15}}>Address: 123, Nguyen Van Cu, Long Bien, Ha Noi</Text>
      </View>
      <View style={styles.btnView}>
        <Button title="Edit"  color={_COLORS.primary}  />
        <Button title="Share" color={_COLORS.blur} />
        <Button title="Logout" color={_COLORS.danger} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avrtar: {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 200,
    marginTop: 100,
    marginHorizontal: width/2 - 100,
    borderWidth: 10,
    // borderRadius: 100,
    borderColor: "white",
    // alignSelf: "center",
  },
  btnView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  }
});

export default Profile;
