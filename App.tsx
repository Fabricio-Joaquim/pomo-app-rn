import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/navigation/routes'
import { StatusBar } from 'expo-status-bar'
import * as React from 'react'

function App() {
	return (
		<>			
			<StatusBar style="auto" />
			<NavigationContainer>
				<Routes />
			</NavigationContainer>
		</>
	)
}

export default App