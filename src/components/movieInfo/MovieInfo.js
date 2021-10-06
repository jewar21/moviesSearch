import React, { useState } from 'react'

import { Chip } from 'primereact/chip'
import { Rating } from 'primereact/rating'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar'
import { Mention } from 'primereact/mention'

import '../../styles/styles.scss'
import noImage from '../../assets/noImage.png'

export const MovieInfo = ({ movieData }) => {
  const actors = movieData.Actors?.split(',')
  const genders = movieData.Genre?.split(',')
  const languages = movieData.Language?.split(',')
  const writers = movieData.Writer?.split(',')
  const value = Math.ceil(movieData.imdbRating)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [displayBasic, setDisplayBasic] = useState(false)
  const [position, setPosition] = useState('center')
  // console.log(position);

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  }

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true)

    if (position) {
      setPosition(position)
    }
  }

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false)
  }

  const renderFooter = (name) => {
    return (
      <>
        <Button
          label="Cancelar"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Enviar"
          icon="pi pi-check"
          onClick={() => onHide(name)}
          autoFocus
        />
      </>
    )
  }

  return (
    <div className="movie-info">
      <div className="movie-part1">
        {movieData.Poster !== 'N/A' ? (
          <img src={movieData.Poster} alt={'movie'} />
        ) : (
          <img src={noImage} alt={'movie'}></img>
        )}
        <Rating value={value} readOnly stars={10} cancel={false} />
      </div>
      <div className="movie-part2">
        <p>Title: {movieData.Title}</p>
        <p>Director: {movieData.Director}</p>
        <p>Country: {movieData.Country}</p>
        <p>Writer: </p>
        {writers && writers.map((writer, i) => <Chip label={writer} key={i} />)}
        <p>Awards: {movieData.Awards}</p>
        <p>Actors: </p>
        {actors && actors.map((actor, i) => <Chip label={actor} key={i} />)}
        <p>Genders: </p>
        {genders && genders.map((gender, i) => <Chip label={gender} key={i} />)}
        <p>Language: </p>
        {languages &&
          languages.map((language, i) => <Chip label={language} key={i} />)}
        <p>Plot: {movieData.Plot}</p>
        <div className="button">
          <span>Ver más tarde</span>
          <Button
            icon="pi pi-bookmark"
            className="p-button-rounded p-button-secondary"
            onClick={() => onClick('displayBasic')}
          />

          <Dialog
            header="Formulario"
            visible={displayBasic}
            position={position}
            style={{ width: '50vw' }}
            breakpoints={{ '960px': '75vw', '640px': '100vw' }}
            footer={renderFooter('displayBasic')}
            onHide={() => onHide('displayBasic')}
          >
            <div className="content-dialog">
              <span className="p-float-label">
                <InputText
                  id="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="username">Nombre</label>
              </span>
              <span className="p-float-label">
                <InputText
                  id="username"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="username">Apellidos</label>
              </span>
              <div>
                <Calendar
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.value)}
                  placeholder="Fecha"
                  showIcon
                />
              </div>
              <div>
                <Calendar
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.value)}
                  timeOnly
                  hourFormat="12"
                  placeholder="Hora / 12"
                />
              </div>
              <Mention
                field="note"
                placeholder="Deje un comentario para recordar más tarde"
                rows={5}
                cols={40}
              />
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
