import React, { useState } from 'react'

import {
	Picture, Img, DataContainer, Title, Info, Group,

	Social, Link, ImageContainer
} from './styles'

import {
	BsTwitter, BsFacebook, BsLinkedin, BsGithub
} from 'react-icons/bs'

const About = ({ data }) => {	
	

	const wichImage = (name) => {
		if (name == 'facebook') {
			return <BsFacebook />
		} else if (name == 'twitter') {
			return <BsTwitter />
		} else if (name == 'github') {
			return <BsGithub />
		} else {
			return <BsLinkedin />
		}
	}

	return(
		<>
			<Picture>
				<Img src={data.avatar} alt="This is a picture of me" />
			</Picture>

			<DataContainer>
				<Title className="About-title">{data.name}</Title>
				<Info>{data.profession}</Info>
				<Group>
					<Info className="About-item">{data.phone}</Info>
					<Info className="About-item">{data.email}</Info>
					<Info className="About-item">{data.website}</Info>
				</Group>
				<Info>{data.address}</Info>
			</DataContainer>

			<Social>
				{data.social.map((so, index) => (
					<Link href={so.url} key={index}>
						<ImageContainer>
							{wichImage(so.name)}
						</ImageContainer>
						<Info>{so.name}</Info>
					</Link>
				))}
			</Social>
		</>
	)
}

export default About