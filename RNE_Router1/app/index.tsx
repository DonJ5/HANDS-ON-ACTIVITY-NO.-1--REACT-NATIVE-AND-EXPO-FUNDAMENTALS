import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>


      <Text style= {styles.txt} >Say Hello to your new app</Text>
      <Pressable style={styles.logInBtn}>
              <Link href="/login" style={styles.loginbtntext}> Login </Link>
            </Pressable>
      <Pressable style = {styles.signupBtn}>
      <Link href="/signup" style = {styles.signupTxt}>Signup</Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingTop: 150,
      backgroundColor: '#EFEBE0'
    },
    logInBtn: {
    backgroundColor: '#0E86D4',
    paddingVertical: 14,
    borderRadius: 30,
    padding: 100,
    marginBottom: 15,
    },
    loginbtntext:{
      color: "white",
      fontSize: 20,
    },
    txt:{
      fontSize: 30,
      paddingBottom: 100,
      fontStyle: "italic",
    },
    signupBtn:{
    backgroundColor: 'Transparent',
    paddingVertical: 14,
    borderRadius: 30,
    padding: 100,
    borderWidth: 2,
    },
    signupTxt: {
      color: "black",
      fontSize: 18,
    }
})