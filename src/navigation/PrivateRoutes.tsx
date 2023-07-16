import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RoutesList } from './listRoutes'
import React from 'react'

const PrivateRoutes = () => {
	const Stack = createNativeStackNavigator()
	return (
		<Stack.Navigator>
			{
				RoutesList.map((screen) => screen.isPrivate && (
					<Stack.Screen
						key={`screen-${screen.name}`}
						name={screen.name}
						component={screen.component}
						options={screen.options}
					/>
				))
			}
		</Stack.Navigator>
	)
}

export default PrivateRoutes