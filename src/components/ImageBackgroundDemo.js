import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

export default function ImageBackgroundDemo() {
    const viewRef = useRef(null)
    const imgRef = useRef(null)

    return (
        <View style={styles.root}>
            <ImageBackground style={styles.viewStyle} imageStyle={styles.imgStyle} source={{ uri: "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" }} ref={viewRef} imgRef={imgRef}>
                <Image style={styles.icon_logo} source={{ uri: "https://img2.baidu.com/it/u=3350495368,4002328331&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" }}></Image>
                <Text style={styles.textBank}>{`招商银行\n`}
                    <Text style={styles.cardTypeTxt}>{`储蓄卡\n\n`}</Text>
                    <Text style={styles.cardNoTxt}>**** **** **** 3068</Text>
                </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: '100%',
        flexDirection: 'column'
    },
    viewStyle: {
        width: '100%',
        height: 150,
        flexDirection: 'row',
        alignItems: 'flex-start',
        // paddingLeft: 20,
    },
    imgStyle: {
        resizeMode: 'cover',
        borderRadius: 10,
    },
    icon_logo: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginLeft: 20,
        marginTop: 20
    },
    textBank: {
        fontSize: 24,
        color: 'white',
        marginLeft: 10,
        marginTop: 21,
        fontWeight:'bold'
    },
    cardTypeTxt: {
        fontSize: 20,
        color: '#FFFFFFA0',
        fontWeight:'normal'

    },
    cardNoTxt:{
        fontSize:26,
        color:'white',
        
    }
})