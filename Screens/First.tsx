import * as React from "react";
import {
  SafeAreaView,
  View,
  Dimensions,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Button } from "react-native-material-ui";


const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;


export default class First extends FirstController {
  

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        {this.state.isloader ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <View>
            <View testID='email' style={{ marginTop: 50, alignItems: "center" }}>
              <TextInput
                testID="txtinput_ID"
                placeholder="Enter Asteroid ID"
                placeholderTextColor="grey"
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  height: ScreenWidth * 0.12,
                  width: ScreenWidth * 0.7,
                  paddingLeft: 15,
                }}
                onChangeText={(val) => this.setState({ id: val.trim() })}
                value={this.state.id}
              />
            </View>

            <View style={{ marginTop: 50, alignItems: "center" }}>
              <Button
              testID="btn_submit"
                primary
                text="SUBMIT"
                raised
                disabled={this.state.id == "" ? true : false}
                
                onPress={() => this.onSubmitPress()}
              />
            </View>

            <View style={{ marginTop: 150, alignItems: "center" }}>
              <Button
                primary
                testID="btn_random"
                text="Random Asteroid"
                raised
                onPress={() => this.onRandomPress()}
              />
              
            </View>

          </View>
        )}
      </SafeAreaView>
    );
  }
}
