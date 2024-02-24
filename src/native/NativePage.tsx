import { Button, Image, NativeModules, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NativeInfoView from './NativeInfoView';
import NativeInfoViewGroup from './NativeInfoViewGroup';

import { avatarUri } from '../constants/Uri'


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

                {/* <NativeInfoView></NativeInfoView> */}
                <NativeInfoViewGroup>
                        <View style={styles.content}>
        <Image style={styles.avatarImg}   source={{uri:avatarUri}}></Image>
        <View style={styles.nameLayout}>
          <Text style={styles.nameTxt}>尼古拉斯·段坤</Text>
          <Text style={styles.desTxt}>123</Text>

        </View>
      </View>


                </NativeInfoViewGroup>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    content:{
        width:"100%",
        height:120,
        flexDirection:'row',
        alignContent:'center',
        paddingHorizontal:16,
        paddingTop:10,
        backgroundColor:'white'
      },
      avatarImg:{
        width:100,
        height:100,
        resizeMode:'contain',
        borderRadius:50,
      },
      nameLayout:{
        flex:1,
        flexDirection:'column',
        marginLeft:16
      },
      nameTxt:{
        fontSize:20,
        color:'#333',
        fontWeight:'bold',
        marginTop:4,
      },
      desTxt:{
        fontSize:20,
        color:'#666',
        fontWeight:'bold',
        marginTop:4,
    
      }

})