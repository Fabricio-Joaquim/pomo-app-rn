import { View, Text, useWindowDimensions } from 'react-native'
import { DrawerLayout } from 'react-native-gesture-handler'
import React, { useRef } from 'react'
import { Image, Name, Profile } from '@components/Header'
import { useUser } from '@useHookStore/useUser'

interface IProps {
    children: React.ReactNode
}

const MyDrawerLayout = ({children}:IProps) => {
	const drawerRef = useRef(null)
	const {user} = useUser()
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
				}}>
					<Profile>
						<Image source={{uri: user?.user?.photoURL }} />
						<Name>{`${namesub[0]} ${namesub[1]}`}</Name>
					</Profile>
				</View>
			)}
		>
			{children}
		</DrawerLayout>
	)
}
  
  
export {MyDrawerLayout}
  