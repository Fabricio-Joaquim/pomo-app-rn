import auth from '@react-native-firebase/auth'
import { useToast } from '../../hooks/Toast'
import BoxCard from '@components/BoxCard'
import { View } from 'react-native'
import React from 'react'

const Home: React.FC = () => {

	const { showToast } = useToast()

	const getDAta = async () => {
		await auth().app.firestore().collection('Tasks').get().then((doc) => {
			console.log(doc.forEach((d) => {
				console.log(d.data())
				showToast('success', d.data().nome, 'teste')
			}
			))

		}).catch((err) => {
			console.log(err)
		})
	}

	return (
		<View>
			<BoxCard />
		</View>
	)
}

export default Home

