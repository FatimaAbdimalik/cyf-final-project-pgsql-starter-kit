import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext'
import {ProfileContext} from '../context/ProfileContext'
import styled from 'styled-components';
import StyledButton from '../constant/StyledButton';

const ViewMyProfile = ({profile}) => {
	let history = useHistory();
	const {isAuthenticated} = useContext(AuthContext)

	console.log('pro', profile)

	const handleClick = ()=>{
		history.push('/editprofile');
	};

	return (
		<Container>
			<Circle/>
			<SubCon>
				<Name>{profile.first_name} {profile.surname}</Name>
				<Description>
					{profile.location}	
				</Description>
				{isAuthenticated&&<StyledButton name='Edit profile' handleClick={handleClick} className='lg'/>}
				<Description>
					{profile.about_me}	
				</Description>
				<Description>
					{profile.about_me}	
				</Description>
				<Description>
					{profile.interest1}{profile.interest2&& `, ${profile.interest2}`}{profile.interest3&& `, ${profile.interest3}`}
				</Description>
				<SubHeads>{profile.first_name}’s skills</SubHeads>
					<SkillsContainer>
						{profile.skills&&profile.skills.map((skill)=>{
							return (
								<SkillBox>{skill}</SkillBox>	
							)
						})}
					</SkillsContainer>
					<SubHeads>Find {profile.first_name}</SubHeads>
				<SocialCon>
					<SocialSubCon>
						<SocialIcon/>
						<SocialText href={profile.linkedin_link} target='blank'>LinkedIn</SocialText>
					</SocialSubCon>
					<SocialSubCon>
						<SocialIcon/>
						<SocialText href={profile.github_link} target='blank'>GitHub</SocialText>
					</SocialSubCon>
					<SocialSubCon>
						<SocialIcon/>
						<SocialText href={profile.portfolio_link} target='blank'>Portfolio</SocialText>
					</SocialSubCon>
				</SocialCon>
			</SubCon>
		</Container>
	);
};

export default ViewMyProfile;



const Container = styled.div`
	display:flex;
	width:70%;
	margin:48px 15%;
`;


const Circle = styled.div`
	height: 100px;
	width: 157px;
	background-color: #D8D8D8;
	border-radius:50%;
`

const SubCon=styled.div`
	margin-left:36px;
`

const Name =styled.p`
	color: #000000;
 	font-family: Lato;
	font-size: 24px;
	font-weight: bold;
	letter-spacing: 0;
	line-height: 29px;
`

const Description =styled.p`
	color: #000000;
	font-family: Lato;
	font-size: 20px;
	letter-spacing: 0;
	line-height: 24px;
`
const SubHeads =styled.p`
	color: #000000;
	font-family: Lato;
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 0;
	line-height: 24px;
`

const SkillsContainer=styled.div`
	display:flex;
	margin-bottom:40px;
`

const SkillBox = styled.div`
	border: 1px solid #DEDEDE;
	border-radius: 2px;
	background-color: #F3F3F3;
	margin-right:16px;
`

const SocialCon =styled.div`

`

const SocialSubCon= styled.div`
	display:flex;
`

const SocialIcon =styled.div`
	height: 32px;
	width: 32px;
	border: 1px solid #979797;
	background-color: #D8D8D8;
	border-radius:50%;
`

const SocialText =styled.a`
	color: #0090FF;
	font-family: Lato;
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 0;
	line-height: 24px;
`

const DescHead = styled.p`
	font-size:1.2rem;
	color:black;
`