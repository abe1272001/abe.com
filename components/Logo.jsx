import Link from 'next/link';
import Image from 'next/image';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FaCannabis } from 'react-icons/fa';
const LogoBox = styled.span`
	font-weight: bold;
	font-size: 18px;
	display: flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;

	.logo {
		color: green;
		transition: 200ms ease;
	}

	&:hover .logo {
		transform: rotate(24deg);
	}
	&:hover .my-name {
		background: linear-gradient(
			#fd004c 16.7%,
			#fe9000 16.7%,
			#fe9000 33.4%,
			#fff020 33.4%,
			#fff020 50.1%,
			#3edf4b 50.1%,
			#3edf4b 66.8%,
			#3363ff 66.8%,
			#3363ff 83.5%,
			#b102b7 83.5%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 0.01rem #ffffff;
		line-height: 1rem;
		animation: rainbow 35s linear infinite;
	}

	@keyframes rainbow {
		100% {
			background-position: 0 20em;
		}
	}
`;

const Logo = () => {
	return (
		<Link href="/" scroll={false}>
			<a>
				<LogoBox>
					<Box className="logo">
						<FaCannabis className="logo" size="1.3rem" />
					</Box>
					<Text
						className="my-name"
						// color={useColorModeValue('gray.800', 'whiteAlpha.900')}
						ml={3}
					>
						Abe Chen
					</Text>
				</LogoBox>
			</a>
		</Link>
	);
};

export default Logo;
