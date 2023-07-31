import { postFirebase } from '@services/postCollectionFirebase'
import { ICreateTaskForm } from '@interfaces/ICreateTaskForm'
import { schemaCreateTaskForm } from './SchemaCreateTaskForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const useModelCreateTaskForm = () => { 
	const { register, handleSubmit, control } = useForm<ICreateTaskForm>(
		{
			resolver: yupResolver(schemaCreateTaskForm)
		}
	)
	const onSubmit = (data: ICreateTaskForm) => 
		postFirebase({data, collectionName:'tasks', sucessMessage:'Task created successfully', errorMessage:'Error creating task'})
	
	return (
		{
			control,
			register,
			handleSubmit:handleSubmit(onSubmit),
		}
	)
}

export {useModelCreateTaskForm}