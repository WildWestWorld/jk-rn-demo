import { StyleSheet, Text, View, Button, Alert, Dimensions, Platform, Linking, PixelRatio, BackHandler, PermissionsAndroid, Vibration, ToastAndroid,Keyboard, TextInput } from 'react-native'
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


        const  showSubscription =    Keyboard.addListener('keyboardDidShow',onKeyboardShow)
        const  hideubscription =  Keyboard.addListener('keyboardDidHide',onKeyboardHide)

        return () => {
            subscription.remove();
            // BackHandler.removeEventListener('hardwareBackPress',backForAndroid)

            showSubscription.remove();
            hideubscription.remove();
        }
    }, [])

    const onKeyboardShow = ()=>{
        console.log('键盘出现')
    }

    const onKeyboardHide = ()=>{
        console.log('键盘隐藏')

    }

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


                // BackHandler.exitApp();

                // console.log(PermissionsAndroid.PERMISSIONS)

                // const needPermission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

                // PermissionsAndroid.check(needPermission).then((result) => {

                //     console.log(result)
                //     if (!result) {
                //         PermissionsAndroid.request(needPermission).then((status) => {
                //             console.log(status)
                //         });
                //     }

                // })

                // PermissionsAndroid.request(
                //     PermissionsAndroid.PERMISSIONS.CAMERA,
                //     {
                //         title: 'Camera Permission',
                //         message: 'App needs access to your camera',
                //         buttonNeutral: 'Ask Me Later',
                //         buttonNegative: 'Cancel',
                //         buttonPositive: 'OK',
                //     },
                // ).then((granted) => {
                //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //         console.log('Camera permission granted');
                //     } else {
                //         console.log('Camera permission denied');
                //     }

                // });
                // PermissionsAndroid.requestMultiple([
                //     PermissionsAndroid.PERMISSIONS.CAMERA,
                //     PermissionsAndroid.PERMISSIONS.CAMERA,
                // ])

                // Vibration.vibrate(1000);
                // Vibration.cancel();

                // Vibration.vibrate([100,500,200,500]);
                // Vibration.vibrate([100,500,200,500],true);

                // ToastAndroid.show('这是一个提示',ToastAndroid.SHORT)
                // ToastAndroid.showWithGravity('这是一个提示', ToastAndroid.LONG, ToastAndroid.TOP)


                Keyboard.dismiss();

            }}></Button>

            {/* <View style={styles.view}>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>
                <View style={styles.subView}></View>

            </View> */}


            {/* <View style={styles.test}></View> */}

            <View style={[{ width: 100, height: 100, backgroundColor: '#3050ff', marginTop: 20 }, { transform: [{ translateX: 200 }] }]}></View>
            
            <TextInput style={{width:'100%',height:56,backgroundColor:'#E0E0E0'}}></TextInput>

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