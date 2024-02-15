import { Animated, Button, StyleSheet, Text, View, LayoutAnimation, Image } from 'react-native'
import React, { useRef, useState } from 'react'

import icon_avatar from '../assets/images/default_avatar.png'


export default function Animate3() {
    // const marginLeft = useRef(new Animated.Value(10)).current;

    const [showView, setShowView] = useState(false)
    const [showRight, setShowRight] = useState(false)

    return (
        <View style={styles.root}>
            <Button title='按钮' onPress={() => {
                // LayoutAnimation.configureNext(
                //     // LayoutAnimation.Presets.spring，
                //     LayoutAnimation.Presets.easeInEaseOut,
                //     () => {
                //         console.log('动画结束')
                //     },
                //     () => {
                //         console.log('动画异常')
                //     }

                // )

                // setShowView(true)

                LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.spring
                )
                setShowRight(true)
            }}></Button>

            {/* <Animated.View style={[styles.view, { marginLeft: marginLeft }]}></Animated.View> */}
            {/* {showView && <View style={[styles.view]}></View>} */}

            <View style={[styles.view, { flexDirection: showRight ? "row-reverse" : "row" }]}>
                <Image style={styles.img} source={icon_avatar}></Image>
                <Text style={styles.txt}>这是一段自我介绍</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view: {
        width: '100%',
        height: 100,
        backgroundColor: '#F5F5F5',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    img: {
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    txt: {
        fontSize: 20,
        color: '#303030',
        fontWeight: 'bold',
        marginHorizontal: 20,
    }


})