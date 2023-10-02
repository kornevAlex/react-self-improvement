import { StateSchema } from 'app/providers/StoreProvider';


export const getProfileData = ({ profile }: StateSchema) => profile?.data;
