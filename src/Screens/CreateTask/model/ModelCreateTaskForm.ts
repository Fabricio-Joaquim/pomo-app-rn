import { postFirebase } from '@services/postCollectionFirebase'
import { ICreateTaskForm } from '@interfaces/ICreateTaskForm'
import { schemaCreateTaskForm } from '../schema/SchemaCreateTaskForm'
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
		postFirebase({data, collectionName:'tasks', sucessMessage:'Task created successfully', errorMessage:'Error creating task'})
			.then(() => {
				queryClient.invalidateQueries(QueryEnum.GET_ALL_TASKS)
				navigation.goBack()
			})
	
	return (
		{
			control,
			register,
			handleSubmit:handleSubmit(onSubmit),
		}
	)
}

export {useModelCreateTaskForm}