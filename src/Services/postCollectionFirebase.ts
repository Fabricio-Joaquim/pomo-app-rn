import firestore from '@react-native-firebase/firestore'

interface IProps {
	data: { [key: string]: unknown },
	collectionName: string
}

const postFirebase = ({ data, collectionName }: IProps): Promise<unknown> => {
	console.log(data, collectionName)
	return firestore()
		.collection(collectionName)
		.add(data)
		.then(() => {
			console.log(`${collectionName} added!`)
		})
		.catch((error) => {
			console.log(error)
		})
}

export { postFirebase }