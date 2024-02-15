import { Button, StyleSheet, Text, View ,Animated} from 'react-native'
import React,{useRef} from 'react'

export default function Animate1() {
  const marginLeft = useRef(new Animated.Value(0)).current;

  // const rotate = useRef(new Animated.Value(0)).current;


  // const scale = useRef(new Animated.Value(1)).current

  // const rotateValue = rotate.interpolate({
  //   inputRange:[0,45],
  //   outputRange:['0deg','45deg']
  // })


  return (
    <View style={styles.root}>
      <Button title='按钮' onPress={()=>{
            Animated.spring(marginLeft,{
                toValue:200,
                useNativeDriver:false,
                
                // bounciness:2,
                // speed:24

                // tension:40,
                // friction:1

                stiffness:100,
                damping:10,
                mass:1

            }).start()

      }}></Button>

      <Animated.View style={[styles.view,
        {marginLeft:marginLeft}
        // {transform:[{rotate:rotateValue}]}
        // {transform:[{scale:scale}]}

        ]}></Animated.View>

    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    },
    view:{
      width:100,
      height:100,
      backgroundColor:'#3050ff',
      marginTop:20
    }

})