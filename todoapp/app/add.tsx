import{View, Text, TextInput, TouchableOpacity} from"react-native";
export default function AddScreen(){
    return(
        <View style={{ backgroundColor: "white", flex: 1, paddingTop: 60}}>
            <Text style={{color: "green",fontSize: 30}}>Add New ToDo</Text>
            <TextInput placeholder="Enter Your New Task" 
            style={{borderWidth: 1, borderColor: "gray", 
            padding: 10, borderRadius: 8}}/>
            <TouchableOpacity>
                <Text> Save New Todo </Text>
            </TouchableOpacity>
        </View>
    )
};