import getLevel from '../user';

test.each([
  ['status ok', 4, 'Ваш текущий уровень: 5'],
  ['status false', '', 'Информация об уровне времменно не доступна'],
])('check  %s', (_, id, str) => {
  const result = getLevel(id);
  expect(result).toBe(str);
});
