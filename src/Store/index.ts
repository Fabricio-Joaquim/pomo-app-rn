import AsyncStorage from '@react-native-async-storage/async-storage'
import { createJSONStorage, persist } from 'zustand/middleware'
import { UserStateType, userState } from './SliceUser'
import { create } from 'zustand'

type typeStore = UserStateType

export const store = create<typeStore>()(
	persist(
		(...a) => ({
			...userState(...a)
		}),
		{
			name: 'store',
			storage: createJSONStorage(() => AsyncStorage),
		}
	))