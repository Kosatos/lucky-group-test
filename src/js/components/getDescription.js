const loader = document.querySelector('.loader');

export default async function getDescription(url) {
  const response = await fetch(url);
  const responseJson = await response.json();
  const text = await responseJson[
    Math.floor(Math.random() * responseJson.length)
  ];
  loader.classList.toggle('active');
  return text;
}
