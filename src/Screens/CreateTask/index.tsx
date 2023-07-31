import { SelectController } from '@components/Input/SelectController'
import DataPickerInput from '@components/Input/DatePickerController'
import { useModelCreateTaskForm } from './ModelCreateTaskForm'
import Input from '@components/Input/TextInputController'
import styled from 'styled-components/native'
import { Text, Button } from 'react-native'
import React, { useMemo } from 'react'

const CreateTask: React.FC = () => {

	const { control, handleSubmit } = useModelCreateTaskForm()
	const LIST = useMemo(() => [
		{ label: 'Low', value: 1 },
		{ label: 'Medium', value: 2 },
		{ label: 'High', value: 3 }
	], [])
	return (
		<Container>
			<Text style={{fontSize:28, fontWeight:'700'}}>CreateTask</Text>
			<ContainerColumn>
				<ColumnInput>
					<Input control={control} name='title' />
					<Input control={control} name='description' />
				</ColumnInput>
				<ColumnInput>
					<DataPickerInput mode='date' control={control} name='date' title={'Data'}/>
					<DataPickerInput mode='time' control={control} name='time' title={'Time'}/>
				</ColumnInput>
				<ColumnInput>
					<SelectController control={control} name='priority' items={LIST} />
				</ColumnInput>
			</ContainerColumn>
			<Button onPress={handleSubmit} title="Send" />
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
	gap: 20px;
	margin-top: 20px;
	align-items: center;
	justify-content: center;
`