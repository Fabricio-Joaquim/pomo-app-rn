import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

interface IProps {
	collectionName: string;
	wheres?: {
		field: string | number;
		operator: any;
		value: any;
	}[]
}

const getFirebase = ({ collectionName, wheres }: IProps): Promise<any> => {

	const defaultQuery: FirebaseFirestoreTypes.Query = firestore().collection(collectionName)

	const query = wheres
		? wheres.reduce((acc, where) => {
			return acc.where(where.field, where.operator, where.value)
		}, defaultQuery)
		: defaultQuery

	return query
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
		.catch(() => {
		})
}

export { getFirebase }
