import { Image } from "expo-image";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('@/assets/images/MarkZuckerberg.jpg')} style = {styles.image}></Image>

      <Text style = {styles.txt}>Mark Zuckerberg</Text>

      <Text style = {styles.txt2}>CEO Meta</Text>
    </View>
  );
}
const styles ={

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
},
txt: {

  fontWeight: "bold",
  fontSize: '24px',
},
txt2: {

  fontSize: '18px'
},
image: {
  
  width: 250,
  height: 300,
  borderRadius:20
}}
