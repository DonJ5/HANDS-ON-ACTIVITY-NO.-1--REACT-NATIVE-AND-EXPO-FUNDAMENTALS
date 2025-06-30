import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [name, setname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signing up with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new account</Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setname}
        style={styles.input}
        secureTextEntry
      />

      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        keyboardType="phone-pad"
        onChangeText={setPhoneNumber}
        style={styles.input}
        secureTextEntry
      />

        <TextInput
        placeholder="E-mail Address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 30,
    color: '#FB6B90'
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
    padding: 28,
  },
  button: {
    backgroundColor: '#FB6B90',
    paddingVertical: 14,
    borderRadius: 40,
    marginTop: 30,
    padding: 28
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});