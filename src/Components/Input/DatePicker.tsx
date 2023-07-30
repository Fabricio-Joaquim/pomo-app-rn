import DateTimePicker, { BaseProps } from '@react-native-community/datetimepicker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'
import React, { useState } from 'react'
import { Text } from 'react-native'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
interface IProps extends BaseProps {
    mode?: 'date' | 'time'
    display?: 'default' | 'spinner' | 'inline',
    control: any,
    name: string,
    value?: Date
}

const DataPickerInput = ({ mode, display, control, name }: IProps) => {
	const [show, setShow] = useState(false)

	return (
		<View style={styles.container}>
			<Controller
				name={name}
				control={control}
				defaultValue={new Date()}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<View>
						<TouchableOpacity onPress={() => setShow(true)} >
							<Text> {value.toLocaleDateString()} </Text>
						</TouchableOpacity>
						{show && (
							<DateTimePicker
								testID="dateTimePicker"
								value={value}
								onChange={(event, date) => {
									setShow(false)
									onChange(date)
								}}
								mode={mode ?? 'date'}
								display={display ?? 'default'}
							/>
						)}
						<Text style={{ color: 'red', marginLeft: 6 }}>{error?.message}</Text>
					</View>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default DataPickerInput
