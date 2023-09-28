import firestore from '@react-native-firebase/firestore'
import { useToast } from '@useHooks/Toast'


interface IProps {
    id: string,
    collectionName: string,
    dataUpdate: {
        [key: string]: any
    },
    sucessMessage?: string,
    errorMessage?: string,
}

const updateFirebase = ({ id, collectionName, dataUpdate, sucessMessage, errorMessage }: IProps): Promise<unknown> => {

	const { showToast } = useToast()

	return firestore()
		.collection(collectionName)
		.doc(id)
		.update(dataUpdate)
		.then(() => {
			showToast('success', 'Success', sucessMessage ?? 'Updated successfully')
		})
		.catch(() => {
			showToast('error', 'Error', errorMessage ?? 'Error updating')
		})
}

export { updateFirebase }
