import firestore from '@react-native-firebase/firestore'
import { useToast } from '@useHooks/Toast'

interface IProps {
	data: { [key: string]: any },
	collectionName: string,
	sucessMessage?: string,
	errorMessage?: string,
}

const postFirebase = ({ data, collectionName, sucessMessage, errorMessage }: IProps): Promise<unknown> => {

	const { showToast } = useToast()

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