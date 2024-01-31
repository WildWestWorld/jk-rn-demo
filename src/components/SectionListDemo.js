import { SectionList, StyleSheet, Text, View, RefreshControl } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'

import { SectionData } from '../constants/Data'


export default function SectionListDemo() {

    const renderItem = ({ item, index, section }) => {
        return <Text style={styles.txt}>{item}</Text>
    }

    const ListHeader = (
        <View style={styles.header}
        ><Text>列表头部</Text>
        </View>
    )

    const ListFooter = (
        <View style={[styles.header, styles.footer]}>
            <Text>列表尾部</Text>
        </View>
    )

    const ListEmpty = (
        <View style={styles.listEmpty}>
            <Text style={styles.extraTxt}>列表为空</Text>
        </View>
    )

    const renderSectionHeader = ({ section }) => {
        return (<Text style={styles.sectionHeaderTxt}>{section.type}</Text>)
    }


    const sectionListRef = useRef(null)

    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            sectionListRef.current.scrollToLocation({
                sectionIndex: 1,
                itemIndex: 3,
                viewPosition: 0,
                animated: true
            })
        }, 2000)
    }, [])


    return (
        <SectionList ref={sectionListRef} style={styles.sectionList} sections={SectionData} renderItem={renderItem} keyExtractor={(item, index) => `${item}-${index}`} contentContainerStyle={styles.containerStyle} keyboardDismissMode='on-drag' keyboardShouldPersistTaps='handled'
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListFooter}
            ListEmptyComponent={ListEmpty}

            renderSectionHeader={renderSectionHeader}
            ItemSeparatorComponent={() => {
                return <View style={styles.separator}></View>
            }}
            stickySectionHeadersEnabled={true}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => {
                console.log('onRefresh..')
                setRefreshing(true);

                setTimeout(() => {
                    setRefreshing(false)
                }, 1000)


            }}></RefreshControl>}

            onEndReached={() => {
                console.log('onEndReached')
            }}
            onEndReachedThreshold={0.1}


        ></SectionList>
    )
}

const styles = StyleSheet.create({
    sectionList: {
        width: '100%',
        height: '100%'
    },
    txt: {
        width: '100%',
        height: 56,
        fontSize: 20,
        color: '#333333',
        textAlignVertical: 'center'
    },
    containerStyle: {
        paddingHorizontal: 16,
        paddingTop: 20,
        backgroundColor: '#F5F5F5'
    },
    header: {
        width: '100%',
        height: 48,
        backgroundColor: '#00ff0030',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        width: '100%',
        height: 48,
        backgroundColor: '#00ff0030',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listEmpty: {
        width: '100%',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionHeaderTxt: {
        width: '100%',
        height: 36,
        backgroundColor: '#E0E0E0',
        textAlignVertical: 'center',
        paddingLeft: 16,
        fontSize: 20,
        color: '#333333',
        fontWeight: 'bold',
    },
    separator: {
        width: '100%',
        height: 2,
        backgroundColor: '#D0D0D0'
    }
})