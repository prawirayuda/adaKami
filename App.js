import React, {useEffect, useState} from 'react'
import { Button, StyleSheet, Text, View,Image } from 'react-native'

const App = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email : '',
    first_name :'',
    last_name : ''
  })

  const [dataJob, setDataJob] = useState ({
    name : '',
    job : '',
  })
  useEffect(() => {

    // fetch('https://reqres.in/api/users/2')
    // .then(response => response.json())
    // .then(json => console.log(json))

    // Call API Method POST
    // const dataForAPI = {
    //     "name": "morpheus",
    //     "job": "leader"
    // }
    
    // console.log('data object: ', dataForAPI)
    // console.log('data stringify : ', JSON.stringify(dataForAPI))
    // fetch('https://reqres.in/api/users',{
    //   method: 'POST',
    //   headers : {
    //     'Content-Type' : 'application/json'
    //   },
    //   body : JSON.stringify(dataForAPI)
    // })
    // .then(response => response.json())
    // .then (json => {
    //   console.log('post response : ',json)
    // })
  }, [])
  

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setDataUser(json.data)
    })
  }

  const postData =()=> {
    const dataForAPI = {
    "name": "morpheus",
    "job": "leader"
    }
    
    console.log('data object: ', dataForAPI)
    console.log('data stringify : ', JSON.stringify(dataForAPI))
    fetch('https://reqres.in/api/users',{
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(dataForAPI)
    })
    .then(response => response.json())
    .then (json => {
      console.log('post response : ',json)
      setDataJob(json)
    })

  }
  return (
    <View style={styles.container}>
      <Text style= {styles.textTitle}>Call API dengan axios  </Text>
      <Button title="GET DATA" onPress={getData} />
      <Text style= {styles.textTitle}>Response GET DATA </Text>
      <Image source={{uri : dataUser.avatar}} style={styles.avatar} />
      <Text> {`Name : ${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>`Email : {dataUser.email}`</Text>

      <View style={styles.line}/>
      <Button title="POST DATA" onPress={postData}/>
      <Text>Respons Post data </Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View> 
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding : 20
  },
  textTitle :{
    textAlign: 'center'
  },
  line: {
    height: 2,
    backgroundColor:'black',
    marginVertical: 20
  },
  avatar: {
    height: 80,
    width :80,
    borderRadius: 80/2

  }
})
