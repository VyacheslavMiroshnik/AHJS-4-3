import fetchData from './http';

export default function getLevel(id) {
  const response = fetchData((id) ? `https://server/user/${id}` : null);
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }
  return 'Информация об уровне времменно не доступна';
}
