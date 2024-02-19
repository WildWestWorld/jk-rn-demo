import { StyleSheet, Text, View, ViewProps, requireNativeComponent } from 'react-native'
import React from 'react'


type NativeInfoViewType = ViewProps|{

}

// 我们在原生设置的名字
const NativeInfoViewAndroid  = requireNativeComponent<NativeInfoViewType>('NativeInfoView')

export default function NativeInfoView() {
  return (
    <NativeInfoViewAndroid style={styles.infoView}></NativeInfoViewAndroid>
  )
}

const styles = StyleSheet.create({
    infoView:{
        width:'100%',
        height:'100%'
    }
})