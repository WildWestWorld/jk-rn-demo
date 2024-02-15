import { Button, FlatList, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState, useMemo } from 'react'

import { ListData, ListData2 } from '../constants/Data'

import { TypeColors } from '../constants/Data'

export default function ConsumeList() {
    const [data, setData] = useState<any>(ListData)
    const [showType, setShowType] = useState<boolean>(true)

    // const calculateTotal = useMemo(() => {
    //     console.log('重新计算合计')

    //     return data.map((item: any, index: any) => {
    //         return item.amount
    //     }).reduce((item: number, currentTotal: number) => {
    //         return item + currentTotal
    //     })
    // }, [data])

    const totalAmountView = useMemo(() => {
        console.log('123')

        const total = data.map((item: any, index: any) => {
            return item.amount
        }).reduce((item: number, currentTotal: number) => {
            return item + currentTotal
        })

        return (
            <View style={styles.totalLayout}>
                <Text style={styles.titleTxt}>{total}</Text>
                <Text style={styles.titleTxt}>合计：</Text>
            </View>
        )
    }, [data])


    const renderItem = ({ item, index }: any) => {

        const styles = StyleSheet.create({
            itemLayout: {
                width: '100%',
                padding: 16,
                flexDirection: 'column',
                borderBottomWidth: 1,
                borderBlockColor: '#E0E0E0'
            },
            labelRow: {
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center'
            },
            labelTxt: {
                flex: 1,
                fontSize: 14,
                color: '#666'
            },
            valueRow: {
                marginTop: 12,
            },
            first: {
                flex: 0.4,
            },
            secound: {
                flex: 0.3
            },
            last: {
                flex: 0.6
            },
            valueTxt: {
                flex: 1,
                fontSize: 16,
                color: '#333',
                fontWeight: 'bold'
            },
            typeLayout: {
                flex: 0.3
            },
            typeTxt: {
                width: 20,
                height: 20,
                textAlign: 'center',
                textAlignVertical: 'center',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: 4,
                fontWeight: 'bold',
            },

        })

        return (
            <View style={styles.itemLayout}>
                <View style={styles.labelRow}>
                    <Text style={[styles.labelTxt, styles.first]}>序号</Text>
                    {showType && <Text style={[styles.labelTxt, styles.secound]}>类型</Text>}
                    <Text style={[styles.labelTxt]}>消费名称</Text>
                    <Text style={[styles.labelTxt, styles.last]}>消费金额</Text>
                </View>

                <View style={[styles.labelRow, styles.valueRow]}>
                    <Text style={[styles.valueTxt, styles.first]}>{item.index}</Text>
                    {showType && <View style={styles.typeLayout}>
                        <Text style={[styles.typeTxt, { backgroundColor: TypeColors[item.type] }]}>{item.type}</Text>
                    </View>}
                    <Text style={[styles.valueTxt]}>{item.name}</Text>
                    <Text style={[styles.valueTxt, styles.last]}>{item.amount}</Text>
                </View>

            </View>
        )

    }


    return (
        <View style={styles.root}>
            <View style={styles.titleLayout}>
                <Text style={styles.titleTxt}>消费记账单</Text>
                <Switch style={styles.switch} value={showType} onValueChange={value => setShowType(value)}>
                </Switch>
                <Button title='切换数据' onPress={() => setData(ListData2)}></Button>
            </View>
            <FlatList data={data} keyExtractor={(item, index) => `${item.index}-${item.name}`}
                renderItem={renderItem}
            >
            </FlatList>

            {/* <View style={styles.totalLayout}>
                <Text style={styles.titleTxt}>{calculateTotal}</Text>
                <Text style={styles.titleTxt}>合计：</Text>
            </View> */}
            {totalAmountView}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    titleLayout: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleTxt: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold'
    },
    totalLayout: {
        width: '100%',
        height: 60,
        flexDirection: 'row-reverse',
        borderTopWidth: 1,
        borderTopColor: '#c0c0c0',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    totalTxt: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold'
    },
    switch: {
        position: 'absolute',
        right: 16
    }
})