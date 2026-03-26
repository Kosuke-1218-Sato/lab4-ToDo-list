import { View, Text, TouchableOpacity } from "react-native";//import functions
import { router } from "expo-router";//router to jump screen
import { Ionicons } from "@expo/vector-icons";//import icon

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#e5e7eb", justifyContent: "center", alignItems: "center"}}>{/*backgound*/}

      <View style={{ width: "90%", height: "90%", backgroundColor: "white", borderRadius: 20, padding: 20, 
        shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 5}}>{/*table*/}

        <Text style={{ color: "green", fontSize: 30, marginBottom: 20, textAlign: "center", fontWeight: "bold"}}>
          My ToDo List
        </Text>{/*title*/}

        <View style={{ backgroundColor: "lightblue", padding: 10, borderRadius: 8, marginBottom: 10}}>{/*small box to list*/}

          <Text style={{ color: "black", textAlign: "center" }}>
            Buy milk
            </Text>
        </View>

        <View style={{ backgroundColor: "lightblue", padding: 10, borderRadius: 8, marginBottom: 10}}>
          <Text style={{ color: "black", textAlign: "center"}}>
              Finish assignments
            </Text>
        </View>

        <View style={{ backgroundColor: "lightblue", padding: 10, borderRadius: 8, marginBottom: 10}}>
          <Text style={{ color: "black", textAlign: "center"}}>
              Go to gym
            </Text>
        </View>

        <TouchableOpacity
          style={{ backgroundColor: "yellow", marginTop: 20, alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 5,
            borderRadius: 6, flexDirection: "row", alignItems: "center"}}
          onPress={() => router.push("/Add_New_ToDo")}>{/*touchable button to jump to Add_New_ToDo screen*/}

          <Ionicons name="add" size={20} color="black" />{/*icon*/}
          <Text style={{ color: "black", fontSize: 20, marginLeft: 5}}>
            Add new ToDo
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}