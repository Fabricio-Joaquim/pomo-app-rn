import { QueryClient, QueryClientProvider } from 'react-query'
import { NavigationContainer } from '@react-navigation/native'
import ThemeProvider from './src/styles/Provider'
import { Routes } from './src/navigation/routes'
import Toast from 'react-native-toast-message'
import { StatusBar } from 'expo-status-bar'
import { LogBox } from 'react-native'
import * as React from 'react'

export const queryClient = new QueryClient()

function App() {
	LogBox.ignoreLogs(['ReactImageView'])
	return (
		<ThemeProvider>
			<NavigationContainer>
				<StatusBar style="auto" />
				<QueryClientProvider client={queryClient}>
					<Routes />
				</QueryClientProvider>
				<Toast />
			</NavigationContainer>
		</ThemeProvider>
	)
}


export default App