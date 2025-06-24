import { Image } from "expo-image";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View style = {styles.container}>

      <Text style = {styles.txt}>COLLEGE OF COMPUTING AND INFORMATION SCIENCES</Text>
      
      <Image source={require('@/assets/images/ccislogo.png')} style = {styles.image}></Image>
      
      <Text style = {styles.txt2}>Developed by</Text>
      
      <Text style = {styles.txt3}>Donjie J. Castino</Text>
    </View>
  );
}
const styles = {
container: {
  flex: 1,
  paddingTop: 150,
  alignItems: "center",
  background: 'white'
},
txt: {
  
  fontWeight: "bold",
  fontSize: "25px",
  textAlign: "center"
},
image: {
  
  width:  400,
  height: 400,
},
txt2: {
  paddingTop: 140,
  fontSize: '16px',
},
txt3: {
  fontSize: '20px',
  fontWeight: 'bold'
}
}
