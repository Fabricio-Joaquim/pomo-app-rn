import firestore from '@react-native-firebase/firestore'
import { useToast } from '@useHooks/Toast'

interface IProps {
	id: string,
	collectionName: string,
	sucessMessage?: string,
	errorMessage?: string,
}

const deleteFirebase = ({ id, collectionName, sucessMessage, errorMessage }: IProps): Promise<unknown> => {

	const { showToast } = useToast()

	return firestore()
		.collection(collectionName)
		.doc(id)
		.delete()
		.then(() => {
			showToast('success', 'Success', sucessMessage ?? 'Deleted successfully')	
		})
		.catch(() => {
			showToast('error','Error', errorMessage ?? 'Error deleting')
		})
    
}

export { deleteFirebase }