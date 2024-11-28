export const perPage = 12;

const controller = new AbortController();
const signal = controller.signal;

export async function imagesApi(search, page) {
  const apiKey = '45783196-139a151e53248a74253d58f65';
  const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
  return await fetch(url, { signal }).then(res => res.json());
}