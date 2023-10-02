import { StateSchema } from 'app/providers/StoreProvider';


export const getProfileError = ({ profile }: StateSchema) => profile?.error || '';
