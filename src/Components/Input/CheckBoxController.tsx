import { Controller, ControllerProps } from 'react-hook-form'
import CheckBox from '@react-native-community/checkbox'
import { Text } from 'react-native'
import * as React from 'react'

interface CheckBoxProps {
    name: string,
    control: ControllerProps['control']
}

const CheckBoxController = ({ name, control }: CheckBoxProps) => {
	return (
		<Controller
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<>
					<CheckBox
						onValueChange={value => onChange(value)}
						value={value}
					/>
					{error && <Text>{error.message}</Text>}
				</>
			)}
			name={name}
			rules={{ required: true }}
		/>
	)
}

export default CheckBoxController
