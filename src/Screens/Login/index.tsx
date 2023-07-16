import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import {useGoogleAuth} from '@services/useGoogleAuth'
import { Button, Text, View } from 'react-native'
import React from 'react'

const Login: React.FC = () => {

	const { signIn, Logout, getCurrentUser } = useGoogleAuth()

	return (
		<View>
			<Text> Login </Text>
			<GoogleSigninButton onPress={signIn} />
			<Button title="Logout" onPress={Logout} />
		</View>
	)
}

export default Login