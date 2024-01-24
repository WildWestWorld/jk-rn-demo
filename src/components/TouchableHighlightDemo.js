import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

export default function TouchableHighlightDemo() {
    return (
        <View style={styles.root}>
            <TouchableHighlight style={styles.button} activeOpacity={0.4} underlayColor="#DDDDDD"
                onPress={() => { console.log('onPress') }}>
                <Text style={styles.txt} >按钮</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0'
    },
    button: {
        width: 300,
        height: 65,
        backgroundColor: '#2030FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 20,
        color: 'white'
    }
})