import { IRoutesList } from '@interfaces/IRoutersLits'
import { RoutesEnum } from '@enums/RoutesEnum'
import Header from '@components/Header'
import Login from '@screens/Login'
import Home from '@screens/Home'

const RoutesList: IRoutesList[] = [
	{
		name: RoutesEnum.Home,
		component: Home,
		isPrivate: true,
		options: {
			statusBarTranslucent: true,
			header: () => {
				return (
					<Header/>
				)
			}
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