import React from 'react'
import { Container } from './style'

const Node = ({data}) => {
  return (
    <Container>
      <p>Name: <strong>{data.name}</strong></p>
      <p>YOB: {data.yearOfBirth}</p>  
    </Container>
  )
}

export default Node