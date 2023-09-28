import { IRoutesList, IModalRoutesList } from '@interfaces/IRoutersLits'
import { RoutesEnum, ModalRoutesEnum } from '@enums/RoutesEnum'
import Header from '@components/Header/HeaderTast'
import Modal from '@screens/CreateTask'
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

const ModalList: IModalRoutesList[] = [
	{
		name: ModalRoutesEnum.Register,
		component: Modal,
		isPrivate: true,
		options: {
			statusBarTranslucent: true,
			headerShown: false
		}
	}
]

export { RoutesList, ModalList }