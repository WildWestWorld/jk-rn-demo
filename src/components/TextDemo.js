import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TextDemo() {


    return (
        <View>
            <Text numberOfLines={1} ellipsizeMode='tail' selectable={true} selectionColor='#D0D0D0'  allowFontScaling={false}>123</Text>
        </View>
    )
}

const styles = StyleSheet.create({


})