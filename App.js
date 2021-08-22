import React from 'react'
import { ScrollView } from 'react-native'
import SampleComponent from './src/components/sampleComponent'
import StylingReactNativeComponent from './src/components/sampleComponent/StylingRN'

const App = () => {
  return (
    <ScrollView>
      <SampleComponent/>
      <StylingReactNativeComponent/>
      
    </ScrollView>
  )
}




export default App


