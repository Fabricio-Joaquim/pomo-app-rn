import { Picker } from '@react-native-picker/picker'
import styled from 'styled-components/native'
import { Controller } from 'react-hook-form'
import { View } from 'react-native'

interface IProps extends React.ComponentProps<typeof Picker> {
	control: any,
	name: string,
	items: Array<{ label: string, value: string | number }>,
	defaultValue?: string
}

const SelectController = ({ control, name, items, defaultValue, ...rest }: IProps) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<View>
					<TextLabel>{name}</TextLabel>
					<ViewPicker>
						<Picker
							style={{ minWidth: '100%' }}
							selectedValue={value}
							mode='dialog'
							placeholder='Selecione'
							onValueChange={(itemValue) => onChange(itemValue)}
							{...rest}>
							{
								items.map((item) => (
									<Picker.Item
										key={`item-${item.value}`}
										{...item}
									/>
								))
							}
						</Picker>
						{error && <ErrorLabel>{error?.message}</ErrorLabel>}
					</ViewPicker>
				</View>
			)}
		/>
	)
}

export { SelectController }

const TextLabel = styled.Text`
	font-size: 18px;
	font-weight: 400;
	margin-left: 6px;
	text-transform: capitalize;
`
const ErrorLabel = styled.Text`
	color: red;
	margin-left: 6px;
`

const ViewPicker = styled.View`
	border-style: solid;
	border-width: 1px;
	border-color: gray;
	height: 40px;
	border-radius: 15px;
	justify-content: center;
`