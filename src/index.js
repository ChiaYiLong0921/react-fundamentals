import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81uAjftkMtL._AC_UL900_SR900,600_.jpg"
    alt="Why a Daughter Needs a Dad"
  />
)
const Title = () => <h2>Why a Daughter Needs a Dad</h2>
const Author = () => {
  return <h4>Gregory E. Lang</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
