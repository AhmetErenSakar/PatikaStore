import React from 'react'
import { Text, View, TextInput, FlatList, StyleSheet } from 'react-native'


import data from './StoreData.json'
import Card from './src/Card'

function App() {

    const handleRender = ({ item }) => <Card data={item} />


    return (
        <View >
            <Text style={styles.title}>PATIKASTORE</Text>
            <TextInput placeholder='Ara...' style={styles.Input} />
            <FlatList numColumns={2} keyExtractor={item => item.id.toString()} data={data} renderItem={({ item }) => handleRender({ item })} />
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 38,
        color: 'purple',
        fontWeight: 'bold'
    },
    Input: {
        backgroundColor: '#D3D3D3',
        borderRadius: 15,
        padding: 10,
        margin: 10,

    }
})

export default App