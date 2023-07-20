import { View, Text, useWindowDimensions } from 'react-native'
import { DrawerLayout } from 'react-native-gesture-handler'
import { Image, Name, Profile } from '@components/Header'
import { useGoogleAuth } from '@services/useGoogleAuth'
import { useUser } from '@useHookStore/useUser'
import React, { useRef } from 'react'
import { TouchableOpacity } from 'react-native'

interface IProps {
    children: React.ReactNode
}

const MyDrawerLayout = ({children}:IProps) => {
	const drawerRef = useRef(null)
	const {user} = useUser()
	const { Logout } = useGoogleAuth()
	const dimensionWidth = useWindowDimensions().width/2
	const openDrawer = () => {
		drawerRef.current.openDrawer()
	}
  
	const closeDrawer = () => {
		drawerRef.current.closeDrawer()
	}
	const namesub: string[] = user?.user.displayName?.split(' ') ?? ['']

	return (
		<DrawerLayout
			drawerWidth={dimensionWidth}
			drawerPosition="left"
			renderNavigationView={() => (
				<View style={{
					flex: 1,
					padding: 20,
					backgroundColor: 'lightgray',
					alignItems: 'center',
					height: '100%',
				}}>
					<Image source={{uri: user?.user?.photoURL }} />
					<Name>{`${namesub[0]} ${namesub[1]}`}</Name>
					<Text>{user?.user.email}</Text>

					<TouchableOpacity style={{ position:'absolute', bottom:10, backgroundColor:'#d3d3', padding:10, borderRadius:10 }} onPress={() => Logout()}>
						<Text>Logout</Text>
					</TouchableOpacity>
				</View>
			)}
		>
			{children}
		</DrawerLayout>
	)
}
  
  
export {MyDrawerLayout}
  