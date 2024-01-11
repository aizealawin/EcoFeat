import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import Style from '../Style'
import EcoFeatLogo from '../components/EcoFeatLogo'


const Landing = () => {


  return (

    
    <View style={Style.container}>
      <View style={Style.main}>
        <Text>Image</Text>
        <Text>First, we are going to ask you a few simple questions about your living situation...</Text>
        <Link href=''>
          <Text>-&gt;</Text>
        </Link>
      </View>
    </View>
  )
}

export default Landing

