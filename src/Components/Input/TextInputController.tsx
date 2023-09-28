import { Controller, ControllerProps } from 'react-hook-form'
import { TextInputProps, View } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'

interface IProps extends TextInputProps {
	control: ControllerProps<any>['control'],
	name: string,
	style?: any,
	textArea?: boolean
}

const Input = ({ control, name, style, textArea, ...rest }: IProps) => {
	return (
		<Controller
			control={control}
			render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
				<View style={{ width: textArea ? '90%' : '100%' }}>
					<TextLabel>{name}</TextLabel>
					<TextInputStyled
						onBlur={onBlur}
						style={[style]}
						placeholder={name}
						onChangeText={(value: any) => onChange(value)}
						value={value}
						{...rest}
					/>
					{error && <Erro>{error.message}</Erro>}
				</View>
			)}
			name={name}
			rules={{ required: true }}
		/>
	)
}

export default Input

const TextLabel = styled.Text`
	font-size: 18px;
	font-weight: 400;
	margin-left: 6px;
	text-transform: capitalize;
`

const TextInputStyled = styled.TextInput`
	height: 40px;
	border-color: gray;
	border-width: 1px;
	border-radius: 15px;
	min-width: 70%;
	padding-horizontal: 10px;
`

const Erro = styled.Text`
	color: red;
	margin-left: 6px;
`