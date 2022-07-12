import React from "react";
import { Title } from "../styles/components/Profile";

const Profile = () => {
    return (
        <div>
            <Title className="Profile-title"> Profile</Title>
            <div className="Profile-desc"> 
            I'm Piña. Yes, like fruit in traslated into spanish, I'm a Smart Contract Developer in continuous learning working mainly with DeFi protocols.
            I'm here to share my knowledge of these technologies that I have learned during these years for those who wish to learn and create incredible things.

            * Creation of DeFi projects such as DEX, flashloan, trading bot, Yield farming.
            * Creation of NFT galleries, frontend, IPFS, royalties, bot mint, marketplace.
            * DAO, voting, raffles.
            * Participation Hackathon and Bootcamp Chainlink 2021, 2022, Bootcamp Solana 2022.
            * Oracles, OpenZeppelin
            </div>
        </div>

    )
}

export default Profile;