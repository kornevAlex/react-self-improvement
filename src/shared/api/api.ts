import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const abortController = new AbortController();

export const $api = axios.create({
	signal: abortController.signal,
	baseURL: __API__,
	headers: {
		authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
	}
});

$api.interceptors.request.use((c) => {
	if (__PROJECT__ !== 'frontend'){
		abortController.abort();
	}
	return c;
});
