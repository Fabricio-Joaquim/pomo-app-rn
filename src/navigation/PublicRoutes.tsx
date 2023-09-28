import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RoutesList } from './listRoutes'

const StackTab = createNativeStackNavigator()
const PublicRoutes = () => {
	return (
		<StackTab.Navigator initialRouteName='Login'>
			{
				RoutesList.map((route) => {
					if (!route.isPrivate) {
						return (
							<StackTab.Screen
								key={`route-${route.name}`}
								name={route.name}
								component={route.component}
								options={route.options}
							/>
						)
					}
				})
			}
		</StackTab.Navigator>
	)
}

export default PublicRoutes