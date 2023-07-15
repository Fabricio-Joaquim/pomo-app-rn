import React from 'react'
import { Button, Text, View } from 'react-native'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'

import auth from '@react-native-firebase/auth'
const Login: React.FC = () => {

	GoogleSignin.configure({ webClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID })

	const signIn = () => {
		GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
			.then(() => {
				GoogleSignin.signIn().then(({ idToken }) => {
					const googleCredential = auth.GoogleAuthProvider.credential(idToken)
					return auth().signInWithCredential(googleCredential).then((user) => {
						console.log(user,'user')
					}
					)
				})
			})
	}

	const Logout = async () => {
		try {
			await GoogleSignin.revokeAccess()
			await GoogleSignin.signOut()
			// Remove the user from your app's state as well
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<View>
			<Text> Login </Text>
			<GoogleSigninButton onPress={signIn} />
			<Button title="Logout" onPress={Logout} />
		</View>
	)
}

export default Login