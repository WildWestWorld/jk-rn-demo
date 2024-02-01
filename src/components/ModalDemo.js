import { StyleSheet, Text, View, Modal, SectionList, Button, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SectionData } from '../constants/Data'

import icon_close_modal from '../assets/images/icon_close_modal.png'

export default function ModalDemo() {

    const [visible, setVisible] = useState(false)


    const renderItem = ({ item, index, section }) => {
        return <Text style={styles.txt}>{item}</Text>
    }


    const renderSectionHeader = ({ section }) => {
        return (<Text style={styles.sectionHeaderTxt}>{section.type}</Text>)
    }

    const ListHeader = (
        <View style={styles.header}
        ><Text>列表头部</Text>

            <TouchableOpacity style={styles.closeButton} onPress={() => hideModal()}>
                <Image source={icon_close_modal} style={styles.closeImg}></Image>
            </TouchableOpacity>

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

    const showModal = () => {
        setVisible(true)
    }

    const hideModal = () => {
        setVisible(false);
        console.log('onDismiss')
    }


    return (
        <View style={styles.root}>
            <Button title='按钮' onPress={() => showModal()}></Button>


            <Modal visible={visible}  transparent={true} onRequestClose={() => hideModal()}
                statusBarTranslucent={true}
                animationType='slide'
                onShow={()=>console.log('onShow ...')}
                onDismiss={()=>console.log('onDismiss ...')}
            >

                <View style={styles.blank}></View>

                <View style={styles.content}>
                    <SectionList
                        style={styles.sectionList} sections={SectionData} renderItem={renderItem}
                        keyExtractor={(item, index) => `${item}-${index}`} contentContainerStyle={styles.containerStyle}
                        ListHeaderComponent={ListHeader}
                        ListFooterComponent={ListFooter}
                        ListEmptyComponent={ListEmpty}

                        renderSectionHeader={renderSectionHeader}
                        ItemSeparatorComponent={() => {
                            return <View style={styles.separator}></View>
                        }}
                        stickySectionHeadersEnabled={true}
                    ></SectionList>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 16
    },
    content: {
        width: '100%',
        height: '90%',
        backgroundColor: '#ff000030',
    },
    blank:{
        width:'100%',
        height:'10%',
        backgroundColor:'#00000050'
    },
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
        backgroundColor: 'white',
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
    },
    closeButton: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 16
    },
    closeImg: {
        width: 24,
        height: 24,
    }
})