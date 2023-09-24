import firestore from '@react-native-firebase/firestore'

interface IProps {
    collectionName: string;
	where?: {
		field: string | number;
		operator: any;
		value: any;
	}
}

const getFirebase = ({ collectionName, where }: IProps): Promise<any> => {

	const defaultQuery = firestore().collection(collectionName)
	const query = where ? defaultQuery.where(where.field, where.operator, where.value) : defaultQuery
	
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
