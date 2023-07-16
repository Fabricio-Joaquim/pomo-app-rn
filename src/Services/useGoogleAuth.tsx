import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useUser } from '@useHookStore/useUser'
import auth from '@react-native-firebase/auth'
import { GoogleConfig } from '@services/api'

const useGoogleAuth = () => {

	GoogleConfig
	const { setUser, logout } = useUser()
	const signIn = async () => {
		GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
			.then(() => {
				GoogleSignin.signIn().then(({ idToken }) => {
					const googleCredential = auth.GoogleAuthProvider.credential(idToken)
					auth().signInWithCredential(googleCredential).then((user) => {
						setUser(user)
					})
				})
			})
	}

	const Logout = async () => {
		Promise.all([
			GoogleSignin.signOut(),
			GoogleSignin.revokeAccess()
		]).then(() => {
			logout()
		})
	}

	const isSignedIn = async () => {
		const isSignedIn = await GoogleSignin.isSignedIn()
		return isSignedIn
	}

	const getCurrentUser = async () => {
		const currentUser = await GoogleSignin.getCurrentUser()
		return currentUser
	}

	return {
		signIn,
		Logout,
		isSignedIn,
		getCurrentUser
	}
}

export { useGoogleAuth }