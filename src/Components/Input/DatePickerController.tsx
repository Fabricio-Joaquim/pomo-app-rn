import DateTimePicker, { BaseProps } from '@react-native-community/datetimepicker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { Controller } from 'react-hook-form'
import { View, Text } from 'react-native'
import React, { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
interface IProps extends BaseProps {
	mode: 'date' | 'time'
	display?: 'default' | 'spinner' | 'inline',
	control: any,
	name: string,
	value?: Date
	title?: string
}

const DataPickerInput = ({ mode, display, control, name, title }: IProps) => {
	const [show, setShow] = useState(false)

	return (
		<Container>
			<Controller
				name={name}
				control={control}
				defaultValue={new Date()}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<View style={{ alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
						<Label>{title}</Label>
						<Input onPress={() => setShow(true)}>
							<Icon name={mode === 'date' ? 'calendar-multiselect' : 'clock-time-eleven-outline'} size={24} color="black" />
							<Text> {mode === 'date' ? value.toLocaleDateString() : value.toLocaleTimeString().slice(0,5) } </Text>
						</Input>
						{show && (
							<DateTimePicker
								testID="dateTimePicker"
								value={value}
								onChange={(event, date) => {
									setShow(false)
									onChange(date)
								}}
								mode={mode}
								display={display ?? mode === 'date' ? 'default' : 'spinner'}
							/>
						)}
						<Text style={{ color: 'red', marginLeft: 6 }}>{error?.message}</Text>
					</View>
				)}
			/>
		</Container>
	)
}

export default DataPickerInput


const Container = styled.View`
	flex: 1;
	display: flex;
	align-items: center;
	border-radius: 5px;
	justify-content: center;
	background-color: #e4e3e31d;
`

const Label = styled.Text`
	font-size:18px;
	font-weight: 400;
	margin-left: 6px;
`

const Input = styled.TouchableOpacity`
	height: 40px;
	border-color: gray;
	border-width: 1px;
	border-radius: 15px;
	min-width: 70%;
	flex-direction: row;
	align-items: center;
	//justify-content: center;
	//padding-horizontal: 10px;
`

const Icon = styled(MaterialCommunityIcons)`
	margin-left: 6px;
	margin-right: 6px;
`