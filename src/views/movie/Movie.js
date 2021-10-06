import React, { useState, useEffect, useCallback } from 'react'

import { useParams } from 'react-router-dom'
import { Skeleton } from 'primereact/skeleton';

import fetchP from '../../helpers/fetch'

import { MovieInfo } from '../../components/movieInfo/MovieInfo'

export const Movie = () => {

    const { movieId } = useParams()
    const [loading, setLoading] = useState(false)
    const [movieData, setMovieData] = useState([])
    

    const getMovie = useCallback(async () => {
        const endPoint = `?i=${movieId}&apikey=${process.env.REACT_APP_API_KEY}`
        const resp = await fetchP.fetchSinToken(endPoint)
        const body = await resp.json()
        setMovieData(body)
        setLoading(false)  
    }, [ movieId]) 

    useEffect(() => {
        setLoading(true)
        getMovie()
    }, [getMovie])

    return (
        <>
        {loading ? 
        <Skeleton width="300px" height="2rem" /> : 
        <MovieInfo movieData={movieData}/> }
        </>
        
    )
}
