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
	const onSubmit = (data: ICreateTaskForm) => console.log(data)
	return (
		{
			control,
			register,
			handleSubmit:handleSubmit(onSubmit),
		}
	)
}

export {useModelCreateTaskForm}