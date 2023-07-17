import { NavigationContainer } from '@react-navigation/native'
import ThemeProvider from './src/styles/Provider'
import { Routes } from './src/navigation/routes'
import { StatusBar } from 'expo-status-bar'
import * as React from 'react'

function App() {
	return (
		<ThemeProvider>
			<NavigationContainer>
				<StatusBar style="auto" />
				<Routes />
			</NavigationContainer>
		</ThemeProvider>
	)
}


export default App