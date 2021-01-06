export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ZkfY26i3QMA7OQe0hShz2C6Mwdmc9X73`;
  const respuesta = await fetch(url);

  const {data} = await respuesta.json();

  return data.map(img => {
    return {
      id : img.id,
      title : img.title,
      url : img.images?.downsized_medium.url,
    }
  });
}