import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import Style from '../Style'
import EcoFeatLogo from '../components/EcoFeatLogo'
import data from "../assets/SurveyData"


const Landing = () => {

  const questions = [data[0]]

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionClick = (answer) => {
    const nextQuestion = currentQuestion + 1; 
    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    } else {
      alert(`Test`)
    }
  }

  console.log(questions[0].question)


  return (

    
    <View style={Style.container}>
      <View style={Style.main}>
        <Text>{questions[currentQuestion].question}</Text>
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

