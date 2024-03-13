import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsLoading } from './getArticleDetails';
import { Article } from '../types/article';

describe('getArticleData.test', () => {
	test('should return empty', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				data: {},
			}
		};
		expect(getArticleDetailsData(state as StateSchema)).toEqual({});
	});
	test('should return data', () => {
		const data: Article = {
			id: '',
			title: '',
			subtitle: '',
			img: '',
			views: 1,
			createdAt: '',
			type: [],
			blocks: []
		};
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				data,
			}
		};
		expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
	});
	test('should return isLoading true value', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				isLoading: true,
			}
		};
		expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true);
	});
});
