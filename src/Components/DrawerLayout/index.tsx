import { DrawerLayout, DrawerLayoutAndroid } from 'react-native-gesture-handler'
import { View, Text, useWindowDimensions } from 'react-native'
import { useGoogleAuth } from '@services/useGoogleAuth'
import ImageProfile from '@assets/noProfileImage.png'
import { SimpleLineIcons } from '@expo/vector-icons'
import { Image, Name } from '@components/Header'
import { useUser } from '@useHookStore/useUser'
import styled from 'styled-components/native'
import React, { useRef } from 'react'
interface IProps {
	children: React.ReactNode
}

const MyDrawerLayout = ({ children }: IProps) => {
	const { user } = useUser()
	const { Logout } = useGoogleAuth()
	const dimensionWidth = useWindowDimensions().width / 2
	const drawerRef = useRef<DrawerLayoutAndroid>(null)

	const namesub: string[] = user?.user?.displayName?.split(' ') ?? ['']
	const ImageItem = user?.user.photoURL ? { uri: user?.user.photoURL } : ImageProfile

	const onLogout = () => {
		Logout()
		drawerRef?.current?.closeDrawer()
	}

	return (
		<DrawerLayout
			drawerWidth={dimensionWidth}
			ref={drawerRef}
			drawerPosition="left"
			renderNavigationView={() => (
				<View style={{
					flex: 1,
					padding: 20,
					backgroundColor: 'lightgray',
					alignItems: 'center',
					height: '100%',
				}}>
					<Image source={ImageItem} />
					<Name>{`${namesub[0]} ${namesub[1]}`}</Name>
					<Text>{user?.user.email}</Text>
					<ButtonLogout onPress={onLogout}>
						<SimpleLineIcons name="logout" size={24} color="white" /><TextLogout>Logout</TextLogout>
					</ButtonLogout>
				</View>
			)}
		>
			{children}
		</DrawerLayout>
	)
}

export { MyDrawerLayout }

const ButtonLogout = styled.TouchableOpacity`
	position: absolute;
	bottom: 10px;
	background-color: #ff0000cf;
	flex-direction: row;
	gap: 10px;
	align-items: center;
	padding: 10px;
	border-radius: 8px;
`
const TextLogout = styled.Text`
	color: #fff;
	font-size: 18px;
	font-weight: 400;
`