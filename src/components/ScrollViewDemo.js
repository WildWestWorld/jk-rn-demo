import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function ScrollViewDemo() {
    const array = [1, 2, 3, 4, 5];
    const buildListView = () => {
        const array = [];
        for (let i = 0; i < 30; i++) {
            array.push(
                <Text style={styles.txt} key={`item-${i}`}>{`List item${i}`}</Text>
            )
        }
        return array
    }


    return (
        <ScrollView style={styles.root} contentContainerStyle={styles.containerStyle} keyboardDismissMode='none'>
            <TextInput style={styles.input}></TextInput>
            {buildListView()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    txt: {
        width: "100%",
        height: 56,
        textAlignVertical: 'center',
        fontSize: 24,
        color: 'black'
    },
    containerStyle: {
        paddingHorizontal: 36,
        backgroundColor: '#E0E0E0',
        paddingTop: 20,
    },
    input:{
        width:'100',
        height:60,
        backgroundColor:'#ff000050'
    }
})