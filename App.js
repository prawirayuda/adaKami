import React from 'react'
import { StyleSheet, Text, View, Image, TextInput} from 'react-native'

const App = () => {
  return (
    <View>
      <View style={styles.container}>
      </View>
        <Text>Prawira </Text>
        <Yuda />
        <Photo />
        <TextInput style={{borderWidth: 1}}/>
    </View>
  )
}

const Yuda = () => {
  return <Text>My component</Text>
}

const Photo = () => {
  return <Image source={{uri :'https://placeimg.com/640/480/any'}} style={styles.img} />
}

export default App

const styles = StyleSheet.create({
  container : {
    width : 80,
    height :80,
    backgroundColor: '#09abde'
  },
  img :{
    width : 80,
    height :80
  }
})
