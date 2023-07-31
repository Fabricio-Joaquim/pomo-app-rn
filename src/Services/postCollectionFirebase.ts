import firestore from '@react-native-firebase/firestore'
import { useToast } from '@useHooks/Toast'

interface IProps {
	data: { [key: string]: unknown },
	collectionName: string,
	sucessMessage?: string,
	errorMessage?: string,
}

const postFirebase = ({ data, collectionName, sucessMessage, errorMessage }: IProps): Promise<unknown> => {

	const { showToast } = useToast()

	console.log(data, collectionName)
	return firestore()
		.collection(collectionName)
		.add(data)
		.then(() => {
			showToast('success', 'Success', sucessMessage || `${collectionName} added!`)
		})
		.catch(() => {
			showToast('error','Error', errorMessage || `Error adding ${collectionName}!`)
		})
}

export { postFirebase }