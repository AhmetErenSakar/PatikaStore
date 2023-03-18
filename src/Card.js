import React from 'react'
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native'

function Card({ data }) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageContainer} source={{ uri: data.imgURL }}>
                <View style={styles.imageOverlay} />
            </ImageBackground>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.price}>{data.price}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 220,
        height: 350,
        backgroundColor: '#D3D3D3',
        margin: 10,
        padding: 10,
        flex: 1,
        borderRadius: 10,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
        marginVertical: 5,
    },
    imageOverlay: {
        flex: 1,
        width: '80%',
        height: '100%',
    },
    title: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})



export default Card