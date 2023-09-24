import * as yup from 'yup'

export const schemaCreateTaskForm = yup.object().shape({
	title: yup.string().required('Title is required'),
	description: yup.string().required('Description is required'),
	priority: yup.string().required('Priority is required'),
	date: yup.string().required('Date is required'),
	time: yup.string().required('Time is required'),
})
