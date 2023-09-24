import { Swipeable } from 'react-native-gesture-handler'
import React from 'react'

interface SwipeableItemProps {
  buttonSwipeLeft: () => React.ReactNode;
  buttonSwipeRight: () => React.ReactNode;
  children?: React.ReactNode;
}

const SwipeableItem: React.FC<SwipeableItemProps> = ({ buttonSwipeLeft, buttonSwipeRight, children }) => {
	return (
		<Swipeable
			containerStyle={{width: '100%'}}
			renderLeftActions={buttonSwipeLeft}
			renderRightActions={buttonSwipeRight}
		>
			{children}
		</Swipeable>
	)
}


export { SwipeableItem }
