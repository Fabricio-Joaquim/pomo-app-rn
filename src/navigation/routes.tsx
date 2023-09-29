import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {MyDrawerLayout} from '@components/DrawerLayout'
import { useGoogleAuth } from '@services/useGoogleAuth'
import PrivateRoutes from './PrivateRoutes'
import { useEffect, useState } from 'react'
import PublicRoutes from './PublicRoutes'
import { useUser } from '@useHookStore/useUser'

export const Routes = () => {
	const [isSignedIn, setIsSignedIn] = useState(false)
	const { getCurrentUser } = useGoogleAuth()
	const { user } = useUser() 
	useEffect(() => {
		getCurrentUser().then((user) => {
			if (user) {
				setIsSignedIn(true)
			}
		})
	}, [user])

	return (
		<>
			{
				isSignedIn ?
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