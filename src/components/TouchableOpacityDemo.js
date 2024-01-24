import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TouchableOpacityDemo() {
    return (
        <View style={styles.root}>
            <TouchableOpacity style={styles.button} activeOpacity={0.2} onPress={() => {
                console.log('onPress')
            }}
                onLongPress={() => {
                    console.log('longPress')
                }}
                delayLongPress={1000}
            >
                <Text style={styles.txt}>按钮</Text>

            </TouchableOpacity>
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
        // backgroundColor:'#2030FF'

        backgroundColor: '#2030FF',
        justifyContent: 'center',
        alignItems: 'center'

    },
    txt: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})