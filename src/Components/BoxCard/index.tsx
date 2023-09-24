import { Box, ContainerBox, TextDescription, TextTitle, TitleBox } from './style'
import { deleteFirebase } from '@services/Firebase/deleteCollectionFirebase'
import { updateFirebase } from '@services/Firebase/updateCollectionFirebase'
import { ICreateTaskForm } from '@interfaces/ICreateTaskForm'
import { useMutation, useQueryClient } from 'react-query'
import { CollectionsEnum } from '@enums/CollectionsEnum'
import { ButtonLeft, ButtonRight } from './Buttons'
import { QueryEnum } from '@enums/QuerysENum'
import { SwipeableItem } from '../Swiper'
import React, { useMemo } from 'react'
import { Text } from 'react-native'
import { format } from 'date-fns'

const BoxCard = (task: ICreateTaskForm) => {
	const queryClient = useQueryClient()
	const deleteMutate = useMutation<unknown, unknown, string>(
		(id) => deleteFirebase({ collectionName: CollectionsEnum.TASKS, id }),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(QueryEnum.GET_ALL_TASKS)
			}
		})

	const updateMutate = useMutation<unknown, unknown, string>(
		(id) => updateFirebase({
			collectionName: CollectionsEnum.TASKS,
			id,
			dataUpdate: { ...task, status: !task.status }
		}),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(QueryEnum.GET_ALL_TASKS)
			}
		})

	const DATE = useMemo(() => format(new Date(task.date), 'dd-MM-yyyy'), [task.date])

	return (
		<SwipeableItem
			buttonSwipeLeft={() => ButtonLeft(updateMutate.mutate, task?.id ?? '')}
			buttonSwipeRight={() => ButtonRight(deleteMutate.mutate, task?.id ?? '')}
		>
			<ContainerBox>
				<Box background={task.priority}>
					<TitleBox>
						<TextTitle>{task.title}</TextTitle>
						<Text>{DATE}</Text>
					</TitleBox>
					<TextDescription ellipsizeMode='tail' numberOfLines={8} textColor={task.priority}>{task.description}</TextDescription>
				</Box>
			</ContainerBox>
		</SwipeableItem>
	)
}

export default BoxCard

