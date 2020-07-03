const url =
  "https://newsapi.org/v2/everything?q=covid+nyc+brooklyn&apiKey=fb2fd8763bd44dd89591a2c193024c16";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}


