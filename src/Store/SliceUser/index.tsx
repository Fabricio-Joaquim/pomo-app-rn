import { StateCreator } from 'zustand'
import { FirebaseAuthTypes  } from '@react-native-firebase/auth/lib/index'
export interface UserStateType {
    user: FirebaseAuthTypes.UserCredential | null
    setUser: (user: FirebaseAuthTypes.UserCredential) => void
    logout: () => void
}

export const userState: StateCreator<UserStateType> = (set) => ({
	user: null,
	setUser: (user: FirebaseAuthTypes.UserCredential) => set(() => ({ user })),
	logout: () => set(() => ({ user: null })),
})

