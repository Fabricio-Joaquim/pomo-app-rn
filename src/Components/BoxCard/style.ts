import styled from 'styled-components/native'

const colorPriprity = {
	'1': '#00ff00c0',
	'2': '#ff8c00c0',
	'3': '#ff0000c0',
	'4': '#ffffff'
}

const colorText = {
	'1': '#242424',
	'2': '#ffffff',
	'3': '#2c2c2c'
}

export const ContainerBox = styled.View`
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin: 10px 0;
	justify-content: center;
	shadow-color: #000;
	elevation: 1;
`

export const Box = styled.View`
	width: 95%;
	border-radius: 10px;
	height: 200px;
	padding: 10px;
	background-color: ${(props) => colorPriprity[props.background ?? '4']};
`

export const TextTitle = styled.Text`
	font-size: 18px;
	font-weight: 500;
	width: 80%;
`

export const TextDescription = styled.Text`
	font-size: 14px;
	font-weight: 400;
	color: ${(props) => colorText[props.textColor]};
	text-align: justify;
`

export const TitleBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const ButtonLeftSwipe = styled.TouchableOpacity`
	background-color: #02ff2c;
	justify-content: center;
	align-items: flex-start;
	border-radius: 0 15px 15px 0;
	align-items: center;
	padding: 10px;
`
export const ButtonRightSwipe = styled(ButtonLeftSwipe)`
	background-color: red;
	border-radius: 15px 0 0 15px;
`