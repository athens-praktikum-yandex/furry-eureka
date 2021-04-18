import { useSelector } from 'react-redux';
import { UserProfileState } from '@features/UserProfileForm';

export const useInitialValues = () => {
  const userProfile = useSelector((state: UserProfileState) => state.userProfile);
  return {
    email: userProfile.email || '',
    login: userProfile.login || '',
    first_name: userProfile.first_name || '',
    second_name: userProfile.second_name || '',
    display_name: userProfile.display_name || '',
    phone: userProfile.phone || '',
    oldPassword: '',
    newPassword: '',
    newPasswordAgain: '',
  };
};
