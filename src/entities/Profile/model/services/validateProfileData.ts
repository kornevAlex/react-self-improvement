import { Profile, ValidateProfileError } from '../types/profile';

export const validateProfileData = (profile: Profile | undefined) => {
	if (!profile){
		return [ValidateProfileError.NO_DATA];
	}

	const { firstname, lastname, age, country } = profile;
	const errors: ValidateProfileError[] = [];

	if (!firstname) errors.push(ValidateProfileError.INCORRECT_FIRSTNAME);
	if (!lastname) errors.push(ValidateProfileError.INCORRECT_LASTNAME);
	if (!age || !Number.isInteger(age)) errors.push(ValidateProfileError.INCORRECT_AGE);

	if (!country) errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    
	return errors;

};
