import { useSelector } from 'react-redux';
import { State } from '@store/types';

export const useInitialValues = () => {
  const userProfile = useSelector((state: State) => state.userProfile);
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
