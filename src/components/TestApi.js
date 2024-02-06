import { StyleSheet, Text, View, Button, Alert, Dimensions, Platform, Linking, PixelRatio, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { useBackHandler } from '@react-native-community/hooks'


export default function TestApi() {

    useBackHandler(() => {
        return true;
    })


    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', (window, screen) => {
            console.log(window);
            console.log(screen);
        })

        // BackHandler.addEventListener('hardwareBackPress',backForAndroid)

        return () => {
            subscription.remove();
            // BackHandler.removeEventListener('hardwareBackPress',backForAndroid)
        }
    }, [])

    // const backForAndroid = () =>{
    //     return false;
    // }




    return (
        <View style={styles.root}>
            <Button title='按钮' onPress={() => {
                // const buttons = [{ text: '取消', onPress: () => console.log('取消') }, { text: '确定', onPress: () => console.log('确定') }]
                // Alert.alert('这是个标题','这是一个提示信息',buttons)

                // console.info('信息日志输出');
                // console.debug('调试日志输出');
                // console.warn('警告日志输出');
                // console.error('错误日志输出')

                // const name = '张三';
                // console.log('我的名字叫%s',name)

                // console.log('我是个人开发者%s,我学习RN%d年半了','张三',2)
                // const obj = {name:'张三',age:12};
                // console.log('我是一个对象:%o',obj)

                // const {width,height,scale,fontScale} = Dimensions.get('screen');
                // console.log(`width=${width},height=${height}`)
                // console.log(`scale=${scale},fontScale=${fontScale}`)

                // console.log(Platform.OS)
                // console.log(Platform.Version)
                // console.log(Platform.constants)

                // console.log(Platform.isPad)
                // console.log(Platform.isTV)

                // const s1 = {
                //     fontSize: 18
                // }
                // const s2 = {
                //     fontSize: 20,
                //     color: 'red'
                // }

                // const composeStyle = StyleSheet.compose(s1,s2);
                // console.log(composeStyle)

                // const flattenStyle = StyleSheet.flatten([s1, s2]);
                // console.log(flattenStyle)

                // console.log(StyleSheet.absoluteFill)
                // console.log(StyleSheet.hairlineWidth)
                // console.log(1 / Dimensions.get('screen').scale)

                // if (Linking.canOpenURL('http://www.baidu.com')) {
                //     Linking.openURL('https://www.baidu.com/')
                // }
                // Linking.openURL('geo:37.2122,12.222')
                // Linking.openURL('tel:10086')
                // Linking.openURL('smsto:10086')
                // Linking.openURL('mailto:10086@qq.com')

                // Linking.canOpenURL('example://gizmos').then((supported) => {
                //     if (supported) {
                //         console.log(supported)
                //       Linking.openURL('example://gizmos?name=123');
                //     } else {
                //       // URL cannot be opened
                //     }
                //   });

                // Linking.openSettings()

                // if(Platform.OS === 'android'){
                //     Linking.sendIntent('com.awesomeDemo.demo.test', [{ key: 'name', value: '张三' }])
                // }

                // console.log(Linking.getInitialURL())

                // console.log(PixelRatio.get())
                // console.log(PixelRatio.getFontScale())
                // console.log(PixelRatio.getPixelSizeForLayoutSize(200))
                // console.log(200 * PixelRatio.get())


                BackHandler.exitApp();

            }}></Button>

            <View style={styles.view}>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>

            </View>


            {/* <View style={styles.test}></View> */}
        </View>
    )
}

const styles = StyleSheet.create({

    root: {
        width: '100%',
        height: '100%',
        ...Platform.select({
            android: {
                marginTop: 20,
            },
            ios: {
                marginTop: 0,
            },
            default: {
                marginTop: 10,
            }
        })


    },
    test: {
        ...StyleSheet.absoluteFill,
        backgroundColor: '#ff000030'
    },
    view: {
        width: '100%',
        backgroundColor: 'red'
    },
    subView: {
        width: '100%',
        backgroundColor: 'green',
        height: PixelRatio.roundToNearestPixel(32.1)
    },
})