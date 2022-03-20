import React from 'react'
import { Container, Item } from './style'


const Header = () => {
  return (
    <Container>
        <Item href="/">Page 1</Item>
        <Item href="/page2">Page 2</Item>
        <Item href="/page3">Page 3</Item>
    </Container>
  )
}

export default Header