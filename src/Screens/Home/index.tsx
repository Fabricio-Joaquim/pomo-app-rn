import { getFirebase } from '@services/Firebase/getCollectionFirebae'
import { StatusEnum } from '@enums/StatusEnum'
import { QueryEnum } from '@enums/QuerysENum'
import BoxCard from '@components/BoxCard'
import { FlatList } from 'react-native'
import { useQuery } from 'react-query'
import React from 'react'

const Home: React.FC = () => {

	const { data, refetch, isLoading } = useQuery(
		QueryEnum.GET_ALL_TASKS,
		() => getFirebase({
			collectionName: 'tasks',
			wheres: [{
				field: 'status',
				operator: '==',
				value: StatusEnum.IN_PROGRESS
			}]
		}
		))

	return (
		<FlatList
			data={data}
			renderItem={({ item }) => <BoxCard key={item.id} {...item} />}
			showsVerticalScrollIndicator={false}
			keyExtractor={(item) => item.id!.toString()}
			refreshing={isLoading}
			onRefresh={refetch}
		/>
	)
}

export default Home

