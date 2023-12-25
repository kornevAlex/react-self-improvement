import { StateSchema } from 'app/providers/StoreProvider';


export const getProfileReadonly = ({ profile }: StateSchema) => profile?.readonly;
