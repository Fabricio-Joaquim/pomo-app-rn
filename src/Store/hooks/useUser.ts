import { useStore } from 'zustand'
import { store } from '../index'
import { useNavigation } from '@react-navigation/native'

export const useUser = () => {

	const { user, setUser, logout } = useStore(store)


	return { user, setUser, logout }
}