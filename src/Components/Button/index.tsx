import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

interface IProps extends TouchableOpacityProps {
    color: keyof typeof colorButton
}

const colorButton = {
	primary: '#2e86de',
	secondary: '#e84118',
	success: '#4cd137',
	danger: '#c23616',
	warning: '#fbc531',
	info: '#487eb0',
	light: '#f5f6fa',
	dark: '#222f3e',
	link: '#0097e6',
}

const Button  = (props: IProps) => {
	return (
		<ButtonPrimary {...props} />
	)
}

export { Button }

const ButtonPrimary = styled(TouchableOpacity)`
    background-color: ${props => colorButton[props.color] ?? colorButton.primary};
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    align-items: center;
    justify-content: center;
`