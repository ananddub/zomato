import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LocationHeader from './LocationHeader'
import Graphics from './Graphics'
import SearchBar from './SearchBar'

export default function HeaderSection() {
    return (
        <View>
            <StatusBar
                hidden={true}
            />
            <LocationHeader />
            <SearchBar />
        </View>
    )
}

const styles = StyleSheet.create({})
