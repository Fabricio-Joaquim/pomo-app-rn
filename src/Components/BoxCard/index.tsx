import { ICreateTaskForm } from '@interfaces/ICreateTaskForm'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { format } from 'date-fns'
import React from 'react'

const BoxCard = (task: ICreateTaskForm) => {
	return (
		<ContainerBox>
			<Box background={task.priority}>
				<TitleBox>
					<TextTitle>{task.title}</TextTitle>
					<Text>{format(new Date(task.date), 'dd-MM-yyyy')}</Text>
				</TitleBox>
				<TextDescription textColor={task.priority}>{task.description}</TextDescription>
			</Box>

		</ContainerBox>
	)
}

export default BoxCard

const colorPriprity = {
	'1': '#00ff00c0',
	'2': '#ff8c00c0',
	'3': '#ff0000c0',
	'4': '#ffffff'
}

const colorText = {
	'1': '#242424',
	'2': '#ffffff',
	'3': '#2c2c2c'
}

const ContainerBox = styled.View`
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
	shadow-color: #000;
	elevation: 1;
`

const Box = styled.View<
	{
		background: string
	}
>`
	width: 95%;
	border-radius: 10px;
	min-height: 200px;
	padding: 10px;
	background-color: ${(props) => colorPriprity[props.background ?? '4']};
`

const TextTitle = styled.Text`
	font-size: 18px;
	font-weight: 500;
`
const TextDescription = styled.Text`
	font-size: 14px;
	font-weight: 400;
	color: ${props => colorText[props.textColor]};
`

const TitleBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
