import React from 'react'
import { View } from 'react-native'
import firebase from '@react-native-firebase/firestore'

const Home: React.FC = () => {

	firebase().settings({
		persistence: true,
	})

	firebase().collection('users').add({
		name: 'Ada Lovelace',
		age: 30,
	})

	return <View />
}

export default Home