import { Button, StyleSheet, Text, View, Animated, Easing } from 'react-native'
import React, { useRef } from 'react'

export default function Animate1() {
  const marginLeft = useRef(new Animated.Value(10)).current;
  const marginTop = useRef(new Animated.Value(10)).current;

  // const rotate = useRef(new Animated.Value(0)).current;


  const scale = useRef(new Animated.Value(1)).current

  // const rotateValue = rotate.interpolate({
  //   inputRange:[0,45],
  //   outputRange:['0deg','45deg']
  // })

  // const vector = useRef(new Animated.ValueXY({x:0,y:0})).current;


  return (
    <View style={styles.root}>
      <Button title='按钮' onPress={() => {
        // Animated.timing(scale,{
        //   toValue:1.5,
        //   duration:1000,
        //   useNativeDriver:false
        // }).start();

        // Animated.decay(marginLeft, {
        //   velocity: 1,
        //   deceleration: 0.997,
        //   useNativeDriver: false
        // }).start();



        // Animated.timing(vector, {
        //   toValue:{x:300,y:400},
        //   duration: 1000,
        //   useNativeDriver: false,
        //   // easing:Easing.back(1)
        //   // easing:Easing.ease
        //   // easing:Easing.elastic(3)

        // }).start();


        const moveX = Animated.timing(marginLeft, {
          toValue: 200,
          duration: 500,
          useNativeDriver: false,
        })

        const moveY = Animated.timing(marginTop, {
          toValue: 300,
          duration: 500,
          useNativeDriver: false,
        })

        const scaleAni = Animated.timing(scale, {
          toValue: 1.5, duration: 500, useNativeDriver: false
        })
        // 一起
        // Animated.parallel([moveX,moveY,scaleAni]).start();
        // 按顺序
        // Animated.sequence([moveX,moveY,scaleAni]).start();
        //按时间差 顺序
        // Animated.stagger(1500,[moveX,moveY,scaleAni]).start();
        Animated.sequence([
          moveX,
          Animated.delay(500),

          moveY,
          Animated.delay(500),

          scaleAni,
          Animated.delay(500),
        ]).start();

        



      }}></Button>

      <Animated.View style={[styles.view,
      // { marginLeft: marginLeft }
      // {transform:[{rotate:rotateValue}]}
      // {transform:[{scale:scale}]}
      // {marginLeft:vector.x,marginTop:vector.y}
      { transform: [{ scale: scale }, { translateX: marginLeft }, { translateY: marginTop }] }
      ]}></Animated.View>

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: '#3050ff',
    marginTop: 20
  }

})