import React, { createContext, useEffect, useState } from "react"
import getData from "../utils/getData"
import useGetData from "../utils/useGetData";

const ApiURL = 'http://localhost:3000/data';

const data = {
  "name": "Carlos García Trujillo",
  "profession": "FrontEnd Developer",
  "address": "Colombia, Manizales.",
  "email": "gtrujilloca@gmail.com",
  "website": "https://www.linkedin.com/in/carlos-garcia-a57824176/",
  "phone": "3013116212",
  "avatar": "https://avatars.githubusercontent.com/u/70419615?v=4",
  "Profile": "Systems and telecommunications engineer 🧑‍💻📡,      Platzi student 📚📝, Front-end developer 🌠👨‍💻 & Blockchain enthusiast 🌐🪙",
  "certificate": [
    {
      "date": "Jan 2021",
      "description": "Hack up furballs try to jump onto window and fall while scratching at wall. ",
      "institution": "Platzi",
      "name": "FrontEnd Developer"
    },
    {
      "date": "Jan 2021",
      "description": "Hack up furballs try to jump onto window and fall while scratching at wall. ",
      "institution": "Platzi",
      "name": "FrontEnd Developer"
    },
    {
      "date": "Jan 2021",
      "description": "Scratch at the door then walk away wack the mini furry mouse",
      "institution": "Platzi",
      "name": "Backend Developer"
    }
  ],
  "academic": [
    {
      "degree": "Systems and telecommunications engineer",
      "description": "Develop and design system information",
      "endDate": "Feb 2021",
      "institution": "University of Manizales,",
      "startDate": "Jan 2016"
    },
    {
      "degree": "Technician in accounting of commercial and financial operations",
      "description": "Develop and design system information",
      "endDate": "Jan 2014",
      "institution": "SENA",
      "startDate": "Jan 2012"
    },
    {
      "degree": "Academic Bachelor",
      "description": "Basic academic formation",
      "endDate": "Decenber 2014",
      "institution": "SIETE DE AGOSTO",
      "startDate": "Jan 2003"
    }
  ],
  "experience": [
    {
      "company": "Easynet",
      "endDate": "Present",
      "jobDescription": "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
      "jobTitle": "Developer Front-End",
      "startDate": "Jun 2021"
    },
    {
      "company": "Freedom center",
      "endDate": "Jun 2021",
      "jobDescription": "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard2.",
      "jobTitle": "Developer",
      "startDate": "Jan 2020"
    },
    {
      "company": "Test",
      "endDate": "Jan 2016",
      "jobDescription": "Meow in empty rooms lick left leg for ninety minutes, still dirty.",
      "jobTitle": "Backend",
      "startDate": "Sept 2019"
    }
  ],
  "skills": [
    {
      "name": "HTML5",
      "percentage": "75%"
    },
    {
      "name": "CSS",
      "percentage": "25%"
    },
    {
      "name": "JavaScript",
      "percentage": "55%"
    },
    {
      "name": "Typescript",
      "percentage": "55%"
    },
    {
      "name": "React",
      "percentage": "90%"
    },
    {
      "name": "Angular",
      "percentage": "70%"
    }
  ],
  "interest": [
    "javascript",
    "develop",
    "backend",
    "frontend"
  ],
  "languages": [
    {
      "name": "Spanish",
      "percentage": "90%"
    },
    {
      "name": "Chinese",
      "percentage": "0%"
    },
    {
      "name": "English",
      "percentage": "20%"
    }
  ],
  "social": [
    {
      "name": "twitter",
      "url": "https://twitter.com/Carlos_G4rcia",
      "icon" : "bxl-twitter"
    },
    {
      "name": "github",
      "url": "https://github.com/gtrujilloca",
      "icon" : "bxl-github"
    },
    {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/carlos-garcia-a57824176/",
      "icon" : "bxl-linkedin-square"
    }
  ]
}

const UserContext = createContext(data)

export const UserProvider = ({ children }) => {
  const user = useGetData(ApiURL)
  console.log(user);
  if (!user) return <div>Loading...</div>

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}


export default UserContext