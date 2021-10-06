import React, { useState, useEffect, useCallback } from 'react'

import { Paginator } from 'primereact/paginator'

import coverBody from '../../assets/coverBody.m4v'

import '../../styles/components/_body.scss'

import { MovieList } from './movieList/MovieList'
import { SearchBox } from './search/SearchBox'
import fetchP from '../../helpers/fetch'

export const Body = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [totalPage, setTotalPage] = useState(0)
  const [first, setFirst] = useState(0)
  const [rows, setRows] = useState(10)
  const [page, setPage] = useState(1)

  const getMovieRequest = useCallback(async () => {
    const endPoint = `?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`
    const resp = await fetchP.fetchSinToken(endPoint)
    const body = await resp.json()
    const search = body.Search
    if (search) {
      setTotalPage(body.totalResults)
      setMovies(search)
    }
  }, [searchValue, page])

  useEffect(() => {
    getMovieRequest()
  }, [getMovieRequest])

  const onBasicPageChange = (e) => {
    setFirst(e.first)
    setRows(e.rows)
    setPage(e.page + 1)
  }
  console.log(totalPage)
  return (
    <section>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      {movies.length !== 0 && <MovieList movies={movies} />}
      {totalPage !== 0 ? (
        <Paginator
          first={first}
          rows={rows}
          totalRecords={totalPage}
          onPageChange={onBasicPageChange}
        />
      ) : (
        <div className="cover-container">
          <video className="video" src={coverBody} autoPlay loop muted />
        </div>
      )}
    </section>
  )
}
