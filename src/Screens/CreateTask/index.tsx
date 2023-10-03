import { SelectController } from '@components/Input/SelectController'
import DataPickerInput from '@components/Input/DatePickerController'
import { useModelCreateTaskForm } from './model/ModelCreateTaskForm'
import { HeaderGoBack } from '@components/Header/HeaderGoBack'
import Input from '@components/Input/TextInputController'
import { PriorityEnum } from '@enums/PriorityEnum'
import styled from 'styled-components/native'
import { Button } from '@components/Button'
import React, { useMemo } from 'react'
import { Text } from 'react-native'

const CreateTask: React.FC = () => {

	const { control, handleSubmit } = useModelCreateTaskForm()
	const LIST = useMemo(() => [
		{ label: 'Low', value: PriorityEnum.Low },
		{ label: 'Medium', value: PriorityEnum.Medium },
		{ label: 'High', value: PriorityEnum.High }
	], [])

	return (
		<HeaderGoBack>
			<Container>
				<Text style={{ fontSize: 28, fontWeight: '700' }}>Create Task</Text>
				<ContainerColumn>
					<ColumnInput>
						<Input control={control} name='title' />
						<SelectController control={control} name='priority' items={LIST} />
					</ColumnInput>
					<ColumnInput>
						<DataPickerInput mode='date' control={control} name='date' title={'Data'} />
						<DataPickerInput mode='time' control={control} name='time' title={'Time'} />
					</ColumnInput>
					<TextArea>
						<Input control={control} name='description'
							style={{ textAlignVertical: 'top', height: 200, width: '100%' }}
							multiline={true} numberOfLines={4} />
					</TextArea>
				</ContainerColumn>
				<Button color='primary' onPress={handleSubmit}>
					<Text style={{ fontWeight: '700' }}>Create</Text>
				</Button>
			</Container>
		</HeaderGoBack>
	)
}

export default CreateTask

const Container = styled.View`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #e4e3e31d;
	padding: 0 2%;
`

const ContainerColumn = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	margin-bottom: 3%;
`

const ColumnInput = styled.View`
	width: 50%;
	gap: 20px;
	margin-top: 20px;
	align-items: center;
	justify-content: center;
`

const TextArea = styled(ColumnInput)`
	width: 100%;
`