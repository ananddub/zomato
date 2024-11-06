import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ShareStateProvider } from './SharedContext'
import UserBottomTab from './UserBottomTab'

export default function AnimatedTab() {
    return (
        <ShareStateProvider >
            <UserBottomTab />
        </ShareStateProvider>
    )
}

