import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function TSDemo() {

    const onButtonPress: () => void = () => {
        // console.log('按下')
        const num1: number = 12; 
    }

    return (
        <View>
            <Button title='按钮' onPress={onButtonPress} />
        </View>
    )
}

const styles = StyleSheet.create({})