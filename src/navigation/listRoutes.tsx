import { IRoutesList } from '@interfaces/IRoutersLits'
import Header from '@components/Header/HeaderTast'
import { RoutesEnum } from '@enums/RoutesEnum'
import Login from '@screens/Login'
import Home from '@screens/Home'

const RoutesList: IRoutesList[] = [
	{
		name: RoutesEnum.Home,
		component: Home,
		isPrivate: true,
		options: {
			header: Header
		}
	},
	{
		name: RoutesEnum.Login,
		component: Login,
		isPrivate: false,
		options: {
			statusBarTranslucent: true,
			headerShown: false
		}
	}
]

export { RoutesList }