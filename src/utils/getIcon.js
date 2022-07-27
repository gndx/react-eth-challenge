import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const getIcon = (iconName) => {
  switch (iconName) {
    case 'facebook':
      return {
        color: '#1773EA',
        icon: <FaFacebookF />,
      };
    case 'twitter':
      return {
        color: '#1C9CEA',
        icon: <FaTwitter />,
      };
    case 'github':
      return {
        color: '#171515',
        icon: <BsGithub />,
      };
    case 'linkedin':
      return {
        color: '#0072b1',
        icon: <FaLinkedinIn />,
      };
    default:
      return null;
  }
};

export default getIcon;
