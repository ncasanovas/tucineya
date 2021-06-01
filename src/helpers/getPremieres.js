import React from 'react';

export const getPremieres = async() => {
     
     const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=350f655333437185ccf33d95346bf8e6&region=AR`;
     const resp = await fetch(url);

     const data = await resp.json(); 
     
     const premieres = data.results.map ( results => {
         
          return {
             id: results.id,
             title: results.title,
             url: results.poster_path,         
          }          
     });
   
     return premieres;
}
