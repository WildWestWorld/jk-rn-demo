import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function TouchableWithoutFeedbackDemo() {
    return (
        <View style={styles.root}>
            <TouchableWithoutFeedback>
                <View style={styles.button2}>
                        <Text style={styles.txt}>123</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0'
    },
    txt: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    button2: {
        width: 300,
        height: 65,
        backgroundColor: '#2030FF'
    }
})