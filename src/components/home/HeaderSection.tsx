import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LocationHeader from './LocationHeader'
import Graphics from './Graphics'
import SearchBar from './SearchBar'
import MainList from '@components/list/MainList'

export default function HeaderSection() {
    return (
        <View>
            <LocationHeader />
            <SearchBar />
        </View>
    )
}

const styles = StyleSheet.create({})
