import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ListGroup, Card } from 'react-bootstrap';
import avatar from '../assets/icons/avatar.svg';
import StyledButton from '../constant/StyledButton';

const ViewMyProfile = ({ profile }) => {
	let history = useHistory();

	const handleClick = ()=>{
		history.push('/editprofile');
	};

	return (
		<Container>
			This is View My Profile Page
			{/* <Img variant="top" src={profile.img||avatar} />
			<ListGroup as="ul">
				<ListItem as="li"><Label>Name</Label><Value>{profile.name}</Value></ListItem>
				<ListItem as="li"><Label>Email</Label><Value>{profile.email}</Value></ListItem>
				<ListItem as="li"><Label>Website</Label><Value>{profile.website}</Value></ListItem>
				<ListItem as="li"><Label>Phone</Label><Value>{profile.phone}</Value></ListItem>
			</ListGroup>
			<StyledButton name='Edit Profile' handleClick={handleClick} /> */}
		</Container>
	);
};

export default ViewMyProfile;



const Container = styled.div`
	width:50%;
	height:70%;
	background-color:#ACD4FA; 
	margin-top:20px;
`;

const Img= styled(Card.Img)`
	width:10rem;
	margin-top:3px;
`;

const ListItem =styled(ListGroup.Item)`
	display:flex;
`;

const Label = styled.p`
	margin-left:5px;
	margin-right:40px;
`;

const Value = styled.p`
`;