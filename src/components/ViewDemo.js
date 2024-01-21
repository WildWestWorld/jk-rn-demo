import React, { memo, useEffect, useRef } from 'react'
import { StyleSheet, View } from 'react-native'

const ViewDemo = memo(() => {

    const viewRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            console.log(viewRef)
            viewRef.current.setNativeProps({
                style: { backgroundColor: 'red' }
            })
        }, 2000)

    }, [])

    return (
        <View style={styles.root}>
            <View style={styles.subView} ref={viewRef}></View>

        </View>
    )
})


const styles = StyleSheet.create(({
    root: {
        flexDirection: "column",
        width: "100%",
        height: '100%',
        backgroundColor: "#C0C0C0"
    },
    subView: {
        width: 100,
        height: 100,
        backgroundColor: "blue",

    }
}))

export default ViewDemo