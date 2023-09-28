import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import {useGoogleAuth} from '@services/useGoogleAuth'
import styled from 'styled-components/native'
import React from 'react'

const Login: React.FC = () => {

	const { signIn } = useGoogleAuth()

	return (
		<Container>
			<GoogleSigninButton onPress={signIn} />
		</Container>
	)
}

export default Login

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: #fff;
`