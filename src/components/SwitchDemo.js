import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function SwitchDemo() {

    const [switchValue, setSwitchValue] = useState(true)

    return (
        <View style={styles.root}>
            <Switch value={switchValue}
                onValueChange={(value) => {
                    setSwitchValue(value)
                    console.log(`value:${value}`)
                }}
                disabled={false}
                trackColor={{true:'red',false:'#808080'}}
                thumbColor={switchValue?'#2030ff':'#303030'}
            ></Switch>
        </View>
    )
}

const styles = StyleSheet.create({})