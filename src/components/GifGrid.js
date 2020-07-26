import React from "react";

export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Wonder+Woman+Gadot&limit=10&api_key=SZZLWGgeFiJ8sbZc22Q00spEzQY0l8QQ";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
  };

  getGifs();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
