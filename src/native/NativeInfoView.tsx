import { StyleSheet, Text, UIManager, View, ViewProps, findNodeHandle, requireNativeComponent } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { avatarUri } from '../constants/Uri'

type NativeInfoViewType = ViewProps | {
  avatar: string,
  onShapeChange: (e: any) => void
}

// 我们在原生设置的名字
const NativeInfoViewAndroid = requireNativeComponent<NativeInfoViewType>('NativeInfoView')

export default function NativeInfoView() {

  const nativeRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      sendCommandToNative('setShape', ['round'])
    }, 3000)

  }, [])

  //JS操作原生
  const sendCommandToNative = (command: string, params: any[]) => {
    //要错做原生先要获取 他在原生的Id
    const viewId = findNodeHandle(nativeRef.current);
    //  UIManager. 后面必须是在原生声明的名字
    //@ts-ignore
    const commands = UIManager.NativeInfoView.Commands[command].toString();
    // .Commands[command].toString();
    // console.log(commands)
    UIManager.dispatchViewManagerCommand(viewId, commands, params )
  }

  return (
    <NativeInfoViewAndroid ref={nativeRef} style={styles.infoView} avatar={avatarUri} onShapeChange={(e: any) => {
      console.log(e.nativeEvent.shape)
    }}></NativeInfoViewAndroid>
  )
}

const styles = StyleSheet.create({
  infoView: {
    width: '100%',
    height: '100%'
  }
})