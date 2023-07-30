import { useModelCreateTaskForm } from './ModelCreateTaskForm'
import DataPickerInput from '@components/Input/DatePicker'
import Input from '@components/Input/TextInputController'
import styled from 'styled-components/native'
import { Text, Button } from 'react-native'
import React from 'react'

const CreateTask: React.FC = () => {

	const { control, handleSubmit } = useModelCreateTaskForm()
	return (
		<Container>
			<Text>CreateTask</Text>
			<ContainerColumn>
				<ColumnInput>
					<Input control={control} name='title' />
					<Input control={control} name='description' />
				</ColumnInput>
				<ColumnInput>
					<DataPickerInput control={control} name='data'/>
					<Input control={control} name='time' />
				</ColumnInput>
				<Input control={control} name='priority' />
			</ContainerColumn>
			<Button onPress={handleSubmit} title="Dismiss" />
		</Container>
	)
}

export default CreateTask

const Container = styled.View`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #e4e3e31d;
`

const ContainerColumn = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
`

const ColumnInput = styled.View`
	width: 50%;
	align-items: center;
	justify-content: center;
`