import React from "react"
import { View, Text, StyleSheet } from "react-native"
import AnimatedText from "./AnimatedText"
import ColumnChart, { ExpenseDataPoint } from "./ColumnChart/ColumnChart"
import Divider from "./Divider"
import { HeadingM, SubheadingM } from "./Text"

const styles = StyleSheet.create({
    bodyCard: {
        backgroundColor: '#fff',
        flex: 1, 
        marginTop: 10,
        borderRadius: 10,
        padding: 15
    },
    row: {
        flexDirection: 'row'
    }
})

type BodyCardProps = { data: Array<ExpenseDataPoint>, total: number }
const BodyCard: React.FC<BodyCardProps> = ({ data, total }) => {

    return (
    <View style={styles.bodyCard}>
        <HeadingM color='#000'>Spending - Last 7 days</HeadingM>
        <ColumnChart data={data} />
        <Divider />
        <View style={{ paddingVertical: 10 }}>
        <SubheadingM color='#ccc'>Total this month</SubheadingM>
        <View style={[styles.row, { padding: 10 }]}>
            <View style={{ flex: 1 }}>
                <AnimatedText total={total} prefix={"$ "} />
            </View>
            <View>
                <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>+2.4%</Text>
                <Text>from last month</Text>
            </View>
        </View>
        </View>
    </View>
)}

export default BodyCard