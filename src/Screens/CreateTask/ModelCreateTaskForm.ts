import { postFirebase } from '@services/postCollectionFirebase'
import { ICreateTaskForm } from '@interfaces/ICreateTaskForm'
import { schemaCreateTaskForm } from './SchemaCreateTaskForm'
import { useNavigation } from '@react-navigation/native'
import { yupResolver } from '@hookform/resolvers/yup'
import { RoutesEnum } from '@enums/RoutesEnum'
import { useForm } from 'react-hook-form'

const useModelCreateTaskForm = () => {
	const navigation = useNavigation() 
	const { register, handleSubmit, control } = useForm<ICreateTaskForm>(
		{
			resolver: yupResolver(schemaCreateTaskForm)
		}
	)
	const onSubmit = (data: ICreateTaskForm) => 
		postFirebase({data, collectionName:'tasks', sucessMessage:'Task created successfully', errorMessage:'Error creating task'})
			.then(() => {
				navigation.navigate(RoutesEnum.Home)
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