import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export default function FlatListDemo() {

    const renderItem = ({ item, index }) => {
        return (
            <Text style={styles.txt}>{`List item ${item}`}</Text>
        )
    }

    const renderItem2 = ({ item, index }) => {
        return (
            <Text style={styles.txt2}>{`List item ${item}`}</Text>
        )
    }

    const ListHeader = (<View style={styles.header}><Text>123</Text></View>)

    const ListFooter = (<View style={styles.footer}></View>)

    return (
        // <FlatList style={styles.flatlist} data={data} renderItem={renderItem} keyExtractor={(item, index) => `item-${index}`} contentContainerStyle={styles.containerStyle} showsVerticalScrollIndicator={false} 
        //  onScroll={(event)=>{
        //     console.log(event.nativeEvent.contentOffset.y);
        //  }} 
        //  keyboardDismissMode='on-drag'
        //  keyboardShouldPersistTaps='handled'
        // ></FlatList>

        <FlatList style={styles.flatlist2} data={data} renderItem={renderItem2} keyExtractor={(item, index) => `item-${index}`} contentContainerStyle={styles.containerStyle} showsVerticalScrollIndicator={false}
            onScroll={(event) => {
                console.log(event.nativeEvent.contentOffset.x);
            }}
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='handled'
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListFooter}
        ></FlatList>
    )
}

const styles = StyleSheet.create({
    flatlist: {
        width: '100%',
        height: '100%'
    },
    flatlist2: {
        width: '100%',
        height: '100%'
    },


    txt: {
        width: '100%',
        height: 56,
        fontSize: 24,
        color: 'black',
        textAlignVertical: 'center'
    },
    txt2: {
        width: 200,
        height: 200,
        fontSize: 24,
        color: 'black',
        textAlignVertical: 'center'
    },
    containerStyle: {
        paddingHorizontal: 16,
        paddingTop: 20,
        backgroundColor: '#F5F5F5'
    }
})