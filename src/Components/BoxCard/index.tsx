import styled from 'styled-components/native'
import React from 'react'
	
const BoxCard: React.FC = () => {
	return (
		<ContainerBox>
			<Box>
				<TextTitle>Client Review & Feedback</TextTitle>
				<TextDescription>Crypto Wallet Redsign</TextDescription>
			</Box>
		</ContainerBox>
	)
}

export default BoxCard

const ContainerBox = styled.View`
	justify-content: center;
	align-items: center;
	gap: 10px;
`

const Box = styled.View`
	width: 95%;
	min-height: 200px;
	background-color: white;
	border-radius: 10px;
	elevation: 18;
	shadow-color: #000;
	padding: 20px;
`

const TextTitle = styled.Text`
	font-size: 18px;
	font-weight: 500;
`
const TextDescription = styled.Text`
	font-size: 14px;
	font-weight: 400;
	color: gray;
`