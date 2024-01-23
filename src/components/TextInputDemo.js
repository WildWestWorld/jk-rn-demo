import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useRef } from 'react'

export default function TextInputDemo() {

    const inputRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 2000)

    }, [])


    return (
        <View style={styles.root}>
            <TextInput style={styles.input} autoFocus={false} ref={inputRef} blurOnSubmit={true} caretHidden={false} defaultValue='默认内容' editable={true} keyboardType='default' returnKeyType='go'></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0'
    },
    input: {
        width: '100%',
        height: 56,
        backgroundColor: '#D0D0D0',
        fontSize: 24,
        color: '#333333',
        fontWeight: 'bold'
    }
})