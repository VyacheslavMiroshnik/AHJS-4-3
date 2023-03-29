import fetchData from '../http';
import getLevel from '../user';

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});
test.each([
  ['status ok', 4, 'https://server/user/4'],
  ['status false', 'fsdf', 'https://server/user/fsdf'],
])('check response %s', (_, id, url) => {
  fetchData.mockReturnValue({});
  getLevel(id);
  expect(fetchData).toBeCalledWith(url);
});
