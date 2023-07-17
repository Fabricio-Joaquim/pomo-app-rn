import { LinearGradient } from 'expo-linear-gradient'
import { useUser } from '@useHookStore/useUser'
import styled from 'styled-components/native'
import React from 'react'

const Header: React.FC = () => {

	const { user } = useUser()
	const namesub: string[] = user?.user.displayName?.split(' ') ?? ['']

	return (
		<Container
			colors={['black', 'gray']}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
		>
			<Profile>
				<Image source={{uri: user?.user?.photoURL }} />
				<Name>{`${namesub[0]} ${namesub[1]}`}</Name>
			</Profile>
                
		</Container>
	)
}

export default Header


export const Image = styled.Image`
	height: 96px;
	width: 96px;
	border-radius: 48px;
`

export const Name = styled.Text`
	font-size: 14px;
	font-weight: bold;
	color: #fff;
	`

const Container = styled(LinearGradient)`
	align-items: flex-end;
	justify-content: flex-end;
	background-color: red;
    width: 100%;
	padding: 16px;
`

export const Profile = styled.View`
    align-items: center;
`