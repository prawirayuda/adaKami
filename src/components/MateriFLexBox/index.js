import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

class MateriFlexbox extends Component {
    render() {
        return (
            <View>
                
            <View style={{
                flexDirection:'row', 
                backgroundColor:'#c8c', 
                alignItems:'center',
                justifyContent:'space-between'}}>
                <View style={{backgroundColor:'#ee2',width:50, height: 50}}></View>
                <View style={{backgroundColor:'#feca',width:50, height: 50}}></View>
                <View style={{backgroundColor:'#5f2',width:50, height: 50}}></View>
                <View style={{backgroundColor:'#7cf',width:50, height: 50}}></View>

            </View>                
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Text>Home </Text>
                    <Text>playlist </Text>
                    <Text>tes </Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image source = {{uri :'https://placeimg.com/640/480/any'}} style={{width:80, height:80, borderRadius:40}}/>
                    <View style={{marginLeft: 10}}>
                        <Text style ={{fontSize:18, fontWeight:'bold'}}>Muhammad Prawira Yuda</Text>
                        <Text>Not You</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default MateriFlexbox
