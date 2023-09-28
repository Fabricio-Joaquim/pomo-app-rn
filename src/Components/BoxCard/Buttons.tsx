import { ButtonLeftSwipe, ButtonRightSwipe } from './style'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { UseMutateFunction } from 'react-query'
import { Text } from 'react-native'

export const ButtonLeft = (mutate: UseMutateFunction<unknown, unknown, string>, id: string | undefined) => {
	return (
		<ButtonLeftSwipe
			onPress={() => mutate(id ?? '')}
		>
			<FontAwesome name="check-square-o" size={24} color="black" />
			<Text style={{ fontWeight: '700' }}>
                DONE
			</Text>
		</ButtonLeftSwipe>
	)
}

export const ButtonRight = (mutate: UseMutateFunction<unknown, unknown, string>, id: string | undefined) =>
	<ButtonRightSwipe
		onPress={() => mutate(id ?? '')}>
		<Entypo name="trash" size={24} color="black" />
		<Text style={{ fontWeight: '700' }}>
            DELETE
		</Text>
	</ButtonRightSwipe>
