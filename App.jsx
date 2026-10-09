import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.flex_container}>
      <StatusBar barStyle="auto" />
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Text style={{ color: "lightgreen", fontWeight: "900", marginBottom: 10, fontSize: 40 }}>Welcome to App</Text>
        <Text style={{ color: "white", fontWeight: "900", fontSize: 20, marginBottom:50 }}>This is Project 01</Text>
      </View>

      <View style={{ paddingVertical: 30, borderColor: "white", borderWidth: 1, borderRadius:8 ,marginHorizontal:8 }}>
      <Text style={{ color: "lightgreen", fontWeight: "900", fontSize: 20,marginHorizontal:"auto" }}>Register Form</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: "white", fontWeight: "500", fontSize: 15, paddingHorizontal: 20, paddingVertical: 8 }}>Full Name :</Text>
          <TextInput placeholder='Full Name' style={{ borderColor: "white", borderRadius: 6, marginHorizontal: 20, backgroundColor: "lightgray", color: "black" }} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: "white", fontWeight: "500", fontSize: 15, paddingHorizontal: 20, paddingVertical: 8 }}>Email :</Text>
          <TextInput placeholder='Email Adress' style={{ borderColor: "white", borderRadius: 6, marginHorizontal: 20, backgroundColor: "lightgray", color: "black" }} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: "white", fontWeight: "500", fontSize: 15, paddingHorizontal: 20, paddingVertical: 8 }}>Password :</Text>
          <TextInput placeholder='Password' style={{ borderColor: "white", borderRadius: 6, marginHorizontal: 20, backgroundColor: "lightgray", color: "black" }} />
        </View>
        <View style={{ marginBottom: 6 }}>
          <Text style={{ color: "white", fontWeight: "500", fontSize: 15, paddingHorizontal: 20, paddingVertical: 8 }}>Confirm Password :</Text>
          <TextInput placeholder='Confirm Password' style={{ borderColor: "white", borderRadius: 6, marginHorizontal: 20, backgroundColor: "lightgray", color: "black" }} />
        </View>
        <View style={{ marginBottom: 10, paddingHorizontal:20, paddingVertical:16 }}>
          <Button color="green" title='Submit' />
        </View>

      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  flex_container: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    backgroundColor: "dark",
    paddingTop: 50
  }
})