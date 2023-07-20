import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useNavigation, NavigationProp} from '@react-navigation/native'
import { useUser } from '@useHookStore/useUser'
import auth from '@react-native-firebase/auth'
import { RoutesEnum } from '@enums/RoutesEnum'
import { GoogleConfig } from '@services/api'

const useGoogleAuth = () => {

	const navigation:NavigationProp<RoutesEnum> = useNavigation()

	GoogleConfig
	const { setUser, logout } = useUser()
	const signIn = async () => {
		GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
			.then(() => {
				GoogleSignin.signIn().then(({ idToken }) => {
					const googleCredential = auth.GoogleAuthProvider.credential(idToken)
					auth().signInWithCredential(googleCredential).then((user) => {
						setUser(user)

						navigation.navigate(RoutesEnum.Home)
					})
				})
			})
	}

	const Logout = async () => {
		GoogleSignin.signOut().then(() => {
			logout()
			navigation.navigate('Login')
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