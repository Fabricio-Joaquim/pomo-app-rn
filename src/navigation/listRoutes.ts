import { IRoutesList } from '@interfaces/IRoutersLits'
import { RoutesEnum } from '@enums/RoutesEnum'
import Login from '@screens/Login'
import Home from '@screens/Home'

const RoutesList: IRoutesList [] = [
	{
		name: RoutesEnum.Home,
		component: Home,
		isPrivate: true,
		options:{
			headerShown: false
		}
	},
	{
		name: RoutesEnum.Login,
		component: Login,
		isPrivate: false,
	}
]

export { RoutesList }