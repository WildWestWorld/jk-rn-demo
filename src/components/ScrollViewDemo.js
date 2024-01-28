import { Button, ScrollView, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native'
import React, { useRef } from 'react'


const { width } = Dimensions.get('window');

export default function ScrollViewDemo() {
    const array = [1, 2, 3, 4, 5];
    const buildListView = () => {
        const array = [];
        for (let i = 0; i < 30; i++) {
            array.push(
                <Text style={styles.txt} key={`item-${i}`}>{`List item${i}`}</Text>
            )
        }
        return array
    }

    const scrollViewRef = useRef(null)


    return (
        <ScrollView ref={scrollViewRef} style={styles.root} contentContainerStyle={styles.containerStyle} keyboardDismissMode='on-drag' keyboardShouldPersistTaps='handled' onMomentumScrollBegin={() => { console.log('onBegin') }} onMomentumScrollEnd={() => { console.log('onEnd') }}
            onScroll={(event) => { console.log(event.nativeEvent.contentOffset.y) }} scrollEventThrottle={16} overScrollMode='never' scrollEnabled={true} contentOffset={{ y: 100 }} showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]}   >
            <TextInput style={styles.input}></TextInput>
            <Button title='按钮' onPress={() => scrollViewRef.current.scrollTo({y:300,animated:true})}></Button>
            {buildListView()}
        </ScrollView>

        // <ScrollView style={{ width: '100%', height: 200 }} horizontal={true} pagingEnabled={true}>
        //     <View style={{ width, height: 200, backgroundColor: 'red' }} />
        //     <View style={{ width, height: 200, backgroundColor: 'blue' }} />
        //     <View style={{ width, height: 200, backgroundColor: 'green' }} />
        // </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    txt: {
        width: "100%",
        height: 56,
        textAlignVertical: 'center',
        fontSize: 24,
        color: 'black'
    },
    containerStyle: {
        paddingHorizontal: 36,
        backgroundColor: '#E0E0E0',
        paddingTop: 20,
    },
    input: {
        width: '100',
        height: 60,
        backgroundColor: '#ff000050'
    }
})