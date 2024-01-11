import { View, Text, Pressable, TextInput } from 'react-native'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import Style from '../Style'
import EcoFeatLogo from '../components/EcoFeatLogo'
import data from "../assets/SurveyData"



const Landing = () => {

  const questions = [data]
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [number, onChangeNumber] = useState('')
  
  let content


  if (questions[0][currentQuestion].answers !== null) {
    content = questions[0][currentQuestion].answers.map((answer)=> (
      <Pressable onPressIn={() => handleOptionClick()}>
        <Text>{answer}</Text>
      </Pressable>
    ))
  } else if (currentQuestion < 6){
    content = 
      <View>
        <TextInput 
          style={Style.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder='Temp'
          keyboardType='numeric'
        />
        <Pressable onPressIn={() => handleOptionClick()}>
          <Text>Submit</Text>
        </Pressable>
      </View>
  } else {
    content = 
    <View>
      <TextInput 
        style={Style.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder='Zip Code'
        keyboardType='numeric'
      />
      <Link href='/pages/comparison'>
        <Pressable>
          <Text>Submit</Text>
        </Pressable>
      </Link>
    </View>
  }

  const handleOptionClick = () => {
    
    alert(`Pressed`)
    console.log(currentQuestion)
    
    const nextQuestion = currentQuestion + 1; 
    console.log(nextQuestion)
    
    if (nextQuestion < questions[0].length){
      setCurrentQuestion(nextQuestion)
    } else if (nextQuestion === 7){
      // alert(`Test`)
      content = <Text>End of Survey</Text>
    }
  }


  return (

    
    <View style={Style.container}>
      <View style={Style.main}>
        <Text>{questions[0][currentQuestion].question}</Text>
        {content}
        {/* <Text>Image</Text>
        <Text>First, we are going to ask you a few simple questions about your living situation...</Text>
        <Link href=''>
          <Text>-&gt;</Text>
        </Link> */}
      </View>
    </View>
  )
}

export default Landing

