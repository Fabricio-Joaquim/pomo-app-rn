import { ModalRoutesEnum } from '@enums/RoutesEnum'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { format } from 'date-fns'
import React from 'react'

const HeaderTask: React.FC = () => {

	const Today = format(new Date(), 'EEEE, dd MMMM  yy')
	const navigation = useNavigation()
	const NewTask = () => navigation.navigate(ModalRoutesEnum.Register)

	return (
		<ContainerData>
			<ViewData>
				<Text style={{ fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold' }}>{'Today\'s Task'}</Text>
				<Text style={{color:'gray'}}>{Today}</Text>
			</ViewData>
			<ButtonNewTask onPress={NewTask}>
				<AntDesign name="plus" size={18} color="#0059ffea" /><Text style={{ color: '#0059ffea' }}>New Task</Text>
			</ButtonNewTask>
		</ContainerData>
	)
}

export default HeaderTask

const ButtonNewTask = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	gap: 5px;
	color: #0059ffd8;
	padding: 10px 20px;
	background-color: #0059ff29;
	border-radius: 10px;
`

const ContainerData = styled.View`
	justify-content: space-around;
	flex-direction: row;
	align-items: center;
	gap: 120px;
	padding: 20px 0px;
`

const ViewData = styled.View`
	justify-content: space-between;
`