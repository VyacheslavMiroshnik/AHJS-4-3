export default function fetchData(url) {
  if (url) {
    return { status: 'ok', level: 5 };
  }
  return { status: 'false' };
}
