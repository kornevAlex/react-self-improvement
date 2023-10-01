import { AppDispatch } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

export const useApppDispatch = () => useDispatch<AppDispatch>();
