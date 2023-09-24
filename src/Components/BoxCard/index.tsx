import { Box, ContainerBox, TextDescription, TextTitle, TitleBox, ButtonLeftSwipe, ButtonRightSwipe } from './style'
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query'
import { deleteFirebase } from '@services/deleteCollectionFirebase'
import { ICreateTaskForm } from '@interfaces/ICreateTaskForm'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { QueryEnum } from '@enums/QuerysENum'
import { SwipeableItem } from '../Swiper'
import { Text } from 'react-native'
import { format } from 'date-fns'
import React from 'react'


const ButtonLeft = (mutate: UseMutateFunction<unknown, unknown, string>, id: string | undefined) => {
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

const ButtonRight = (mutate: UseMutateFunction<unknown, unknown, string>, id: string | undefined) =>
	<ButtonRightSwipe
		onPress={() => mutate(id ?? '')}>
		<Entypo name="trash" size={24} color="black" />
		<Text style={{ fontWeight: '700' }}>
			DELETE
		</Text>
	</ButtonRightSwipe>


const BoxCard = (task: ICreateTaskForm) => {
	const queryClient = useQueryClient()
	const { mutate } = useMutation<unknown, unknown, string>(
		(id) => deleteFirebase({ collectionName: 'tasks', id }),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(QueryEnum.GET_ALL_TASKS)
			}
		})

	return (
		<SwipeableItem
			buttonSwipeLeft={() => ButtonLeft(mutate, task?.id)}
			buttonSwipeRight={() => ButtonRight(mutate, task?.id)}
		>
			<ContainerBox>
				<Box background={task.priority}>
					<TitleBox>
						<TextTitle>{task.title}</TextTitle>
						<Text>{format(new Date(task.date), 'dd-MM-yyyy')}</Text>
					</TitleBox>
					<TextDescription ellipsizeMode='tail' numberOfLines={9} textColor={task.priority}>{task.description}</TextDescription>
				</Box>
			</ContainerBox>
		</SwipeableItem>
	)
}

export default BoxCard

