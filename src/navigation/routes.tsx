import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {MyDrawerLayout} from '@components/DrawerLayout'
import { useGoogleAuth } from '@services/useGoogleAuth'
import PrivateRoutes from './PrivateRoutes'
import { useEffect, useState } from 'react'
import PublicRoutes from './PublicRoutes'

export const Routes = () => {
	const [isSignedIn, setIsSignedIn] = useState(false)
	const { getCurrentUser } = useGoogleAuth()
	
	useEffect(() => {
		getCurrentUser().then((user) => {
			if (user) {
				setIsSignedIn(true)
			}
		})
	}, [])

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