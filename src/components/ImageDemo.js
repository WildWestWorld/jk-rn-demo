import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ImageDemo() {
    return (
        <View style={styles.root}>
            <Image  style={styles.img} source={{ uri: "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" }}  blurRadius={5}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5'
    },
    img:{
        width:120,
        height:120,
    }
})