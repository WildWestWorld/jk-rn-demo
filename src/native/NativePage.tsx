import { Button, NativeModules, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NativeInfoView from './NativeInfoView';

export default function NativePage() {
    return (
        <View style={styles.root}>
            <Button title="调用原生方法" onPress={() => {
                // !!!!!为什么这里是App 因为我们在安卓原生层设置了Module名为App
                const { App } = NativeModules;
                // // App?.openGallery();
                // App?.getVersionName().then((data: String) => {
                //     console.log(`versionName=${data}`)
                // })

                const {versionName,versionCode }  = App;
                console.log(`versionName=${versionName},version=${versionCode}`)
            }}></Button>

                <NativeInfoView></NativeInfoView>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    }

})