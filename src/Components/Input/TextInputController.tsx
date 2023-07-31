import { Controller, ControllerProps } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'
import React from 'react'

interface IProps{
    control: ControllerProps<any>['control'],
    name: string
}

const Input = ({control, name}:IProps) => {
	return (
		<Controller
			control={control}
			render={({ field: { onChange, onBlur, value }, fieldState:{error} }) => (
				<View style={{}}>
					<Text style={{fontSize:18, fontWeight:'400', marginLeft:6}} >{name}</Text>
					<TextInput
						onBlur={onBlur}
						style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 15, minWidth: '70%', paddingHorizontal: 10 }}
						placeholder={name}
						onChangeText={value => onChange(value)}
						value={value}
					/>
					{error && <Text style={{color:'red', marginLeft:6}}>{error.message}</Text>}
				</View>
			)}
			name={name}
			rules={{ required: true }}
		/>
	)
}

export default Input