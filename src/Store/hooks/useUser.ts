import { useStore } from 'zustand'
import { store } from '../index'

export const useUser = () => {
	const { user, setUser, logout } = useStore(store)

	return { user, setUser, logout }
}