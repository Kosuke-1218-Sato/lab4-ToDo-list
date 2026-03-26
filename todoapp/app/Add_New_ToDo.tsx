import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AddScreen() {
  return (
    <View
      style={{ flex:1, backgroundColor: "#e5e7eb", justifyContent: "center", alignItems: "center"}}>
      <View
        style={{ width: "90%", height: "90%", backgroundColor: "white", borderRadius: 20, padding: 20, 
            shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 5}}>
        <Text
          style={{ color: "green", fontSize: 30, marginBottom: 20, textAlign: "center", fontWeight: "bold"}}>
          Add New ToDo
        </Text>

        <Text style={{ color: "black", fontSize: 15, marginBottom: 5}}>
          Enter Your ToDo
        </Text>{/*text to instruct*/}

        <TextInput
          style={{ borderWidth: 1, borderColor: "gray", padding: 10, borderRadius: 8, marginBottom: 15}}/>{/*text box to input*/}

        <Text style={{ color: "black", fontSize: 15, marginBottom: 5}}>
          Description
        </Text>

        <TextInput
          multiline={true}
          textAlignVertical="top"
          style={{ borderWidth: 1, borderColor: "gray", padding: 10, borderRadius: 8, height: 100, marginBottom: 20}}/>{/*mulipul line to input more information*/}

        <TouchableOpacity
          style={{ backgroundColor: "yellow", marginTop: 10, alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 5,
            borderRadius: 6, flexDirection: "row", alignItems: "center", marginBottom: 10}}>{/*touchable box*/}
          <Ionicons name="save" size={20} color="black" />{/*icon*/}
          <Text style={{ color: "black", fontSize: 20, marginLeft: 5 }}>
            Save New Todo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: "orange", alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 6, 
            flexDirection: "row", alignItems: "center"}}
          onPress={() => router.back()}>{/*touchable box and this button to back home screen*/}
          <Ionicons name="close" size={20} color="black" />{/*icon*/}
          <Text style={{ color: "black", fontSize: 20, marginLeft: 5 }}>
            Cancel
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  )
};