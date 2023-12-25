import { StateSchema } from 'app/providers/StoreProvider';


export const getProfileIsLoading = ({ profile }: StateSchema) => profile?.isLoading;
