import { ICreateTaskForm } from '@interfaces/ICreateTaskForm'
import { getFirebase } from '@services/getCollectionFirebae'
import BoxCard from '@components/BoxCard'
import { FlatList } from 'react-native'
import React from 'react'

const Home: React.FC = () => {

	const [tasks, setTasks] = React.useState<ICreateTaskForm[]>([])
	const [refreshing, setRefreshing] = React.useState(false)

	React.useEffect(() => {
		getFirebase({ collectionName: 'tasks' })
			.then(setTasks)
			.finally(() => setRefreshing(false))
	},[refreshing])

	return (
		<FlatList
			data={tasks}
			renderItem={({ item }) => <BoxCard key={item.id} {...item} />}
			showsVerticalScrollIndicator={false}
			keyExtractor={(item) => item.id!.toString()}
			refreshing={refreshing}	
			onRefresh={() => setRefreshing(!refreshing)}
		/>
	)
}

export default Home

