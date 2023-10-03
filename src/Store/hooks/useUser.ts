import { useStore } from 'zustand'
import { store } from '../index'

export const useUser = () => {

	const { user, setUser, logout, isAuth } = useStore(store)


	return { user, setUser, logout, isAuth }
}