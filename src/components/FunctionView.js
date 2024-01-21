import React, { memo, useEffect,useRef, } from 'react'
import { ScrollView, Text, View,useWindowDimensions,useColorScheme } from 'react-native'

const FunctionView = memo(() => {
    const {width,height} = useWindowDimensions();
    const  ColorScheme =useColorScheme();
    console.log(ColorScheme)
    useEffect(()=>{
        console.log(width,height)
    },[])


    return (
        <View style={{ width: '100%', height: 100, backgroundColor: 'grey' }}>

            <ScrollView>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <Text>5</Text>
                <Text>6</Text>
            </ScrollView>

        </View>
    )
})

export default FunctionView