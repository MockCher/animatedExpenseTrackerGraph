import { StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import DATA from './../data/expenseData.json'
import HeaderCard from '../components/HeaderCard'
import BodyCard from '../components/BodyCard'
import getRandomNumber from '../utils/GetRandomNumber'
import Button from '../components/Button'


const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ]
const RND_DATA = days.map(day => ({ day: day, amount: getRandomNumber() }))

const ExpenseTracker = () => {
    
    const [expenseData, setExpenseData] = useState(DATA)
    const [sum, setSum] = useState(0) 
    
    const randomizeData = () => setExpenseData(days.map(day => ({ day: day, amount: getRandomNumber() })))

    useEffect(() => {
        setSum(expenseData.reduce((total, current) => { return total + current.amount }, 0))
    },[expenseData])

    return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        <HeaderCard balance={2000 + sum} />
        <BodyCard 
          data={expenseData.map(i => ({ label: i.day, value: i.amount }))} 
          total={sum}
        />
        <Button title='Randomize Expenses' color={'hsl(10, 79%, 65%)'} onPress={randomizeData}  />
      </View>
    </View>
  )
}

export default ExpenseTracker

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'hsl(27, 66%, 92%)',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        maxWidth: 400,
        height: 500,
    },
})