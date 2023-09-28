import { useNavigation } from '@react-navigation/native'
import { ModalRoutesEnum } from '@enums/RoutesEnum'
import DropDownPicker from 'react-native-dropdown-picker'
import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'
import React, { useState } from 'react'
import { Text } from 'react-native'
import { format } from 'date-fns'

const HeaderTask: React.FC = () => {

	const Today = format(new Date(), 'EEEE, dd MMMM  yy')
	const navigation = useNavigation()
	const NewTask = () => navigation.navigate(ModalRoutesEnum.Register)

	const [genderOpen, setGenderOpen] = useState(false)
	const [genderValue, setShowStatus] = useState(null)
	const [gender, setGender] = useState([
		{ label: 'All', value: 'all' },
		{ label: 'Completed', value: 'completed' },
		{ label: 'Uncompleted', value: 'uncompleted' }
	])

	return (
		<>
			<ContainerData>
				<ViewData>
					<Text style={{ fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold' }}>{'Today\'s Task'}</Text>
					<Text style={{color:'gray'}}>{Today}</Text>
				</ViewData>
				<ButtonNewTask onPress={NewTask}>
					<AntDesign name="plus" size={18} color="#0059ffea" /><Text style={{ color: '#0059ffea' }}>New Task</Text>
				</ButtonNewTask>
			</ContainerData>
			<DropDownPicker
				open={genderOpen}
				value={genderValue} //genderValue
				items={gender}
				setOpen={setGenderOpen}
				setValue={setShowStatus}
				setItems={setGender}
				placeholder="Select Gender"
				onChangeValue={(value) => console.log(value)}
			/>
		</>
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
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	padding: 20px;
`

const ViewData = styled.View`
	justify-content: space-between;
`