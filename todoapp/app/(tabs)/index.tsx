import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen(){
  return(
  <View style={{ backgroundColor: "white", flex: 1, paddingTop: 60}}>
  <Text style={{ color: "green", fontSize: 30}}> My ToDo List</Text>
  <Text style={{ color: "blue"}}> Buy milk</Text>
  <Text style={{ color: "blue"}}> Take quiz</Text>
  <Text style={{ color: "blue"}}> Go to gym</Text>
  <TouchableOpacity style={{ backgroundColor: "yellow", marginTop: 20}}>
    <Text style={{ color: "black"}}>Add new ToDo</Text>
  </TouchableOpacity>
  </View>
  );
}