import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Navgation from '@navigation/Navigation'
import '@unistyles/unistyles'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@states/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
export default function App() {
    return (
        <GestureHandlerRootView>

            <Provider store={store} >
                <PersistGate loading={null} persistor={persistor}>
                    <Navgation />
                </PersistGate>
            </Provider>

        </GestureHandlerRootView>
    )
}
