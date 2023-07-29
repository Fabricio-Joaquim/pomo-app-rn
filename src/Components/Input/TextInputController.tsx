import { Controller, ControllerProps } from 'react-hook-form'
import { Text, TextInput } from 'react-native'
import React from 'react'

interface IProps{
    control: ControllerProps['control']
    name: string
}

const Input = ({control, name}:IProps) => {
	return (
		<Controller
			control={control}
			render={({ field: { onChange, onBlur, value }, fieldState:{error} }) => (
				<>
					<TextInput
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
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

export default Input