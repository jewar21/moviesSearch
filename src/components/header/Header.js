import React from 'react'

import '../../styles/styles.scss'

export const Header = (props) => {
  return (
    <header>
      <h1>{props.heading}</h1>
      <p>¿Qué película estás buscando?</p>
    </header>
  )
}
