import React,{useEffect,useState} from 'react'
import Axios from "axios"
import {Card} from "../Card"
import { CardListSyle } from './CardList.style';

const Apikey="4b215c42821e0b27d8fdfdfd94341e41";
const baseImageUrl="https://image.tmdb.org/t/p/w500";

export const CardList = () => {
    const [movieData,setMovieData]=useState([]);
    useEffect(()=>{
    Axios.get("https://api.themoviedb.org/3/search/movie",{
        params: {
        api_key:Apikey,
        query:"Star Wars",
        page:1
        }
    })
    .then(response => setMovieData(response.data.results))
    },[] )
   
    return (
     
        <CardListSyle>
           {
               movieData && movieData.map((movie)=>{
                  return <Card 
                  title={movie.title}
                  imgSrc={baseImageUrl+movie.poster_path}
                  />
               })
           }
         
         </CardListSyle>
    )
}
