import { postFirebase } from '@services/Firebase/postCollectionFirebase'
import { schemaCreateTaskForm } from '../schema/SchemaCreateTaskForm'
import { ICreateTaskForm } from '@interfaces/ICreateTaskForm'
import { useNavigation } from '@react-navigation/native'
import { yupResolver } from '@hookform/resolvers/yup'
import { QueryEnum } from '@enums/QuerysENum'
import { useQueryClient } from 'react-query'
import { useForm } from 'react-hook-form'

const useModelCreateTaskForm = () => {
	const navigation = useNavigation()
	const queryClient = useQueryClient()
	const { register, handleSubmit, control } = useForm<ICreateTaskForm>(
		{
			resolver: yupResolver(schemaCreateTaskForm)
		}
	)
	const onSubmit = (data: ICreateTaskForm) =>
		postFirebase({
			data: { ...data, status: false, archived: false },
			collectionName: 'tasks'
		})
			.then(() => {
				queryClient.invalidateQueries(QueryEnum.GET_ALL_TASKS)
				navigation.goBack()
			})

	return (
		{
			control,
			register,
			handleSubmit: handleSubmit(onSubmit),
		}
	)
}

export { useModelCreateTaskForm }