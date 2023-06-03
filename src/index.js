import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <>
      <h1>amazon best seller</h1>
      <section className="booklist">
        {/* <EventExamples /> */}
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

// const EventExamples = () => {
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="product"
//           onChange={(e) => console.log(e.target.value)}
//           style={{ margin: '1rem 0' }}
//         />
//         <button type="submit">submit</button>
//       </form>
//       <div>
//         <button onClick={() => console.log('click me')} type="button">
//           click me
//         </button>
//       </div>
//     </section>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
