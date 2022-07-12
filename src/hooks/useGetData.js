import React,{useState,useEffect} from 'react'
import getData from '../utils/getData'

const useGetData = () => {

    const [getDataService, setGetDataService] = useState(undefined);

    //I EXPOSE MY OWN DATA.JSON IN THE NEXT URL THAT IS A DEPLOY OF ONE OF MY PROYECTS AND I EXPOSE AN ENDPOINT THAT RETRIEVE THE DATA.JSON

    useEffect(() => {
        getData('https://backendimageuploader.herokuapp.com/returnCv')
        .then(res => setGetDataService(res.data.data))
    }, [])

    const getAcademicData = () => {
        return getDataService.Academic;
    }

    const getAboutData = () => {
        return getDataService.social
    }

    const getExperienceData = () => {
        return getDataService.experience;
    };

    const getHeaderData = () => {
        var properties = [
            "name",
            "profession",
            "address",
            "email",
            "website",
            "phone",
            "avatar"
        ]
        return Object.keys(getDataService).reduce((obj,key) => {
            if(properties.includes(key))
                obj[key] = getDataService[key];
            return obj;
        },{})
    };

    const getInterestData = () => {
        return getDataService.interest;
    };

    const getLanguagesData = () => {
        return getDataService.languages;
    };

    const getProfileData = () => {
        return getDataService.Profile;
    };

    const getSkillsData = () => {
        return getDataService.skills;
    };

    return {
        getAcademicData,
        getSkillsData,
        getProfileData,
        getAboutData,
        getExperienceData,
        getLanguagesData,
        getInterestData,
        getHeaderData,
    }
}

export default useGetData;