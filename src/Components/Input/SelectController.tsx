import { Picker } from '@react-native-picker/picker'
import { Controller } from 'react-hook-form'
import { Text, View } from 'react-native'

interface IProps {
    control: any,
    name: string,
    items: Array<{ label: string, value: string | number }>,
    defaultValue?: string
}

const SelectController = ({ control, name, items, defaultValue }: IProps) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<View style={{
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: 'gray',
					height: 40,
					borderRadius: 15,
				}}>
					<Picker
						style={{ minWidth: '70%',

						}}
						selectedValue={value}
						mode='dropdown'
						onValueChange={(itemValue) => onChange(itemValue)}>
						<Picker.Item label={name} enabled={false} value='' />
						{
							items.map((item) => (
								<Picker.Item
									key={`item-${item.value}`}
									{...item}
								/>
							))
						}
					</Picker>
					{error && <Text style={{ color: 'red', marginLeft: 6 }}>{error?.message}</Text>}
				</View>
			)}
		/>
	)
}

export { SelectController }