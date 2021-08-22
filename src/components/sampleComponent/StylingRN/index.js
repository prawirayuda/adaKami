import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Gambar1 from '../../../image/img1.jpg'


const StylingReactNativeComponent = () => {
    return (
      <View>
        <Text style={styles.Judul}>Styling Component</Text>
  
       
        <View style={{padding:12, backgroundColor:'#f2f2', width: 325,height: 400, borderRadius: 8}}>
          <Image source = {Gambar1} style={styles.gambar1}/>
          <Text style={{fontWeight:'bold', marginTop: 20, fontSize: 18}}>New Menu For You</Text>
          <Text style={{fontWeight:'200', marginTop: 10, fontSize: 14}}>Delicious</Text>
          <Text style={{fontWeight:'bold', marginTop: 10, fontSize: 18, color: 'red'}}>Rp 1000 </Text>
          <View style={{backgroundColor:'#6fc', paddingVertical:6,borderRadius:25, marginTop:20}}>
            <Text style={{fontSize:14, textAlign: 'center',fontWeight:'bold', fontSize:18}}>BELI</Text>
          </View>
          
        </View>
      </View>
    )
  }

  export default StylingReactNativeComponent

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
