
export const Promise = async(category) => {
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=xQqJl6LqZwI23rHQzwHWEh7KuVhKFLDL`;
    const respuesta=await fetch(url);
    const {data}=await respuesta.json();
    const recive=data.map(img=>(
        {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    ))
    // const
    return recive
}
