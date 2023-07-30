import firestore from '@react-native-firebase/firestore'

interface IProps {
    collectionName: string
}

const getFirebase = ({ collectionName }: IProps): Promise<unknown> => {
	return firestore()
		.collection(collectionName)
		.get()
		.then((querySnapshot) => {
			const data = querySnapshot.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data()
				}
			})
			return data
		})
		.catch((error) => {
			console.log(error)
		})
}

export { getFirebase }