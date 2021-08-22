import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView} from 'react-native'


const SampleComponent  = () => {
    return (
      <View>
        <View style={styles.container}>
        </View>
          <Text>Prawira </Text>
          <Yuda />
          <Photo />
          <TextInput style={{borderWidth: 1}}/>
          <BoxGreen/>
          <Profile/>
      </View>
    
    )}
  
  
  const Yuda = () => {
    return <Text>My component</Text>
  }
  
  const Photo = () => {
    return <Image source={{uri :'https://placeimg.com/640/480/arch'}} style={styles.img} />
  }
  
  //ini class component 
  class BoxGreen extends Component {
    render () {
      return <Text> Ini component dari class</Text>
    }
  }
  
  class Profile extends Component {
    render () {
      return (
        <View>
          <Image source= {{uri : 'https://placeimg.com/640/480/nature'}} style={styles.img} />
          <Text>Ini Bukan apa apa</Text>
        </View>
        )
    }
  }

  export default SampleComponent
  const styles = StyleSheet.create({
    container : {
      width : 80,
      height :80,
      backgroundColor: '#09abde'
    },
    img :{
      width : 80,
      height :80
    },
    Box1:{
      width : 100,
      height: 100,
      backgroundColor : '#5f27', 
      borderWidth: 2,
      marginTop : 20,
      marginLeft: 20  
    },
    Judul:{
      fontSize : 24,
      fontWeight : 'bold',
      color : '#10ac',
      marginLeft : 80,
      marginTop : 20 
    },
    gambar1:{
      width: 300,
      height: 200,
      borderRadius: 8
    }
  })
  
  