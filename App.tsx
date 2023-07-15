import { StatusBar } from 'expo-status-bar'
import React from 'react'

import Login from '@pages/Login'
import { SafeAreaView } from 'react-native'
export default function App() {
	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<Login/>
		</SafeAreaView>
	)
}
