import React, { useContext, useEffect } from "react";
import { useHistory} from 'react-router-dom';
import OverviewProfileCard from '../components/OverviewProfileCard';
import Introducing from '../components/Introducing';
import Logo from '../constant/Logo'
import { ProfileContext } from '../context/ProfileContext';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components';
import GitHubLogin from "react-github-login";


const Home = () => {
	let history = useHistory();

	const { getAllProfiles, getProfile, clearProfile, allProfiles, profile, isLoading, error }= useContext(ProfileContext);
	const { fetchUserName, fetchAvatar, checkGraduate, isAuthenticated, github_id, userName,avatar_url, isGraduate} = useContext(AuthContext);

	const onSuccess = async (response) =>{
		const accessCode = response.code;
		const githubname = await fetchUserName(accessCode);
		 await fetchAvatar(accessCode)
		console.log('name', githubname);
		await checkGraduate(githubname);
		clearProfile();
	}

	const navigateToProfile = async ()=>{
		await getProfile(github_id)
		history.push('/viewprofile')
	}

	console.log('isauth', isAuthenticated, profile, github_id)
	useEffect(()=>{
		if(userName){
			navigateToProfile()
		}
	},[userName, github_id])

	useEffect (()=>{
		!userName&&isAuthenticated&&history.push('/createprofile')
		!isGraduate&&history.push('/notfound')
	},[ isAuthenticated, isGraduate])

    const onFailure = response => console.error(response);  

	useEffect(getAllProfiles, []);

	return (
		<Screen>
			<Header>
				<Logo/>
				<GitHub clientId='e166cb1f254d73d2fac6' //this needs to change according to heroku app configs
				onSuccess={onSuccess}
				onFailure={onFailure}
				redirectUri={'http://localhost:3000/login'}
				// redirectUri={'http://localhost:3000/login'}
				buttonText='Log in'
				/>
			</Header>
			<Introducing
				header = 'Lorem ipsum dolor sit amet'
				text = 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
		  />	
    		<Container>
				{isLoading ? <Text>Loading...</Text>
					: allProfiles && allProfiles.map(( profile, i ) => {
						return <OverviewProfileCard profile={ profile } getProfile={getProfile} avatar_Url={avatar_url} key={ i } />;
					})}
				{error && <Text>{error}</Text>}
				{/* {profile&&<Redirect to='/viewdetail'/>} */}
			</Container>
		</Screen>
	)}

export default Home;

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    background-color:${(props)=>props.theme.colors.primaryMidGray};
    height:86px;
`;

const GitHub = styled(GitHubLogin)`
	height: 56px;
	width: 106px;
	border-radius: 2px;
	color:#fff;
	margin-right:15%;
	align-self:center;
	font-weight:bold;
	font-family: Arial;
	background-color:${(props)=>props.theme.colors.primaryGreen};		
`

const Screen =styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
`;

const Container = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	width:75%;
`;

const Text = styled.p`
	fontSize:20;
`;

