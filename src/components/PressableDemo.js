import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function PressableDemo() {
    return (
        <View style={styles.root}>
            <Pressable style={(state) => {
                // const { pressed } = state;
                return [styles.button, state.pressed && styles.buttonPressed]
                // return {
                //     width: 300,
                //     height: 65,
                //     backgroundColor: pressed ? 'white' : '#2030FF',
                //     borderRadius: 10,
                //     justifyContent: 'center',
                //     alignItems: 'center'
                // }
            }}>
                {(state) => {
                    // const { pressed } = state;

                    return <Text style={state.pressed ? styles.txtPressed : styles.txt}>按 钮</Text>
                }}

                {/* <Text style={styles.txt}>按 钮</Text> */}
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#A0A0A0',
        padding: 32
    },
    button: {
        width: 300,
        height: 65,
        backgroundColor: '#2030FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    txt: {
        color: 'white',
        fontSize: 22
    },
    buttonPressed: {
        backgroundColor: 'white',

    },
    txtPressed: {
        fontSize: 22

    }
})