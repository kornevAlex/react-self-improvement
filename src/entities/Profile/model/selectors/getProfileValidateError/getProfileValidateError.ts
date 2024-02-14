import { StateSchema } from 'app/providers/StoreProvider';


export const getProfileValidateError = ({ profile }: StateSchema) => profile?.validateErrors;
