import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RoutesList, ModalList } from './listRoutes'
import React from 'react'

const PrivateRoutes = () => {
	const Stack = createNativeStackNavigator()
	return (

		<Stack.Navigator>
			<Stack.Group>
				{
					RoutesList.map((screen) => (
						<Stack.Screen
							key={`screen-${screen.name}`}
							{...screen}
						/>
					))
				}
			</Stack.Group>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				{
					ModalList.map((screen) => (
						<Stack.Screen
							key={`screen-${screen.name}`}
							{...screen}
						/>
					))
				}
			</Stack.Group>
		</Stack.Navigator>
	)
}

export default PrivateRoutes