import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {MyDrawerLayout} from '@components/DrawerLayout'
import { useUser } from '@useHookStore/useUser'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

export const Routes = () => {
	const { isAuth } = useUser() 

	return (
		<>
			{
				isAuth() ?
					<GestureHandlerRootView style={{ flex: 1 }}>
						<MyDrawerLayout>
							<PrivateRoutes />
						</MyDrawerLayout>
					</GestureHandlerRootView>
					:
					<PublicRoutes />
			}
		</>
	)
}