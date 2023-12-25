import { StateSchema } from 'app/providers/StoreProvider';


export const getProfileForm = ({ profile }: StateSchema) => profile?.form;
