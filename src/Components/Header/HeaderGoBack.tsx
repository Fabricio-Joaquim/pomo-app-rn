import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

const HeaderGoBack = ({ children }: {
    children: React.ReactNode
}) => {


	const navigation = useNavigation()

	return (
		<View style={{ width: '100%', padding: 10, flex:1}}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<AntDesign name="arrowleft" size={24} color="black" />
			</TouchableOpacity> 
			<View style={{ flex: 1, alignItems: 'center' }}>
				{children}
			</View>
			<View style={{ width: 24 }} />
		</View>
	)
}

export { HeaderGoBack }
