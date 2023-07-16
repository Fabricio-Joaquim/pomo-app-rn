import { useGoogleAuth } from '@services/useGoogleAuth'
import PrivateRoutes from './PrivateRoutes'
import { useEffect, useState } from 'react'
import PublicRoutes from './PublicRoutes'

export const Routes = () => {
	const { getCurrentUser } = useGoogleAuth()
	const [ isSignedIn, setIsSignedIn ] = useState(false)
	useEffect(() => {

		getCurrentUser().then((user) => {
			if (user) {
				setIsSignedIn(true)
			}
		}
		)
	}, [])

	return (
		<>
			{isSignedIn
				? <PrivateRoutes />
				: <PublicRoutes />
			}
		</>
	)
}