import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function ButtonDemo() {
    return (
        <View style={styles.root}>
            <Button title="按钮" color={"green"}   style={{width:200,height:56,backgroundColor:'red'}}    disabled={false} onPress={()=>{
                console.log('onPress')
            }}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0'
    },
})