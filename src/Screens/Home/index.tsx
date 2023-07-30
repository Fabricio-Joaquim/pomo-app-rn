import { getFirebase } from '@services/getCollectionFirebae'
import BoxCard from '@components/BoxCard'
import { View } from 'react-native'
import React from 'react'

const Home: React.FC = () => {


	getFirebase({collectionName:'Tasks'}).then((doc) => {
		console.log(doc)
	}).catch((err) => {
		console.log(err)
	})

	return (
		<View>
			<BoxCard />
		</View>
	)
}

export default Home
