import { Image, StyleSheet, Text, UIManager, View, ViewProps, findNodeHandle, requireNativeComponent } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { avatarUri } from '../constants/Uri'

type NativeInfoViewGroupType = ViewProps | {

}

// 我们在原生设置的名字
const NativeInfoViewGroupAndroid = requireNativeComponent<NativeInfoViewGroupType>('NativeInfoViewGroup')

export default function NativeInfoViewGroup(props:any) {

const {children} = props;

  const nativeRef = useRef(null)




  return (
    <NativeInfoViewGroupAndroid ref={nativeRef} style={styles.infoView}>
      {/* <View style={{width:200,height:200,backgroundColor:'red'}}></View> */}

      {/* <View style={styles.content}>
        <Image style={styles.avatarImg}   source={{uri:avatarUri}}></Image>
        <View style={styles.nameLayout}>
          <Text style={styles.nameTxt}>尼古拉斯·段坤</Text>
          <Text style={styles.desTxt}>123</Text>

        </View>
      </View> */}
      {children}

    </NativeInfoViewGroupAndroid>
  )
}

const styles = StyleSheet.create({
  infoView: {
    width: '100%',
    flexDirection:'row'
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