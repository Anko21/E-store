import React from 'react'
import './_cat-nav.scss'
import { useSelector } from 'react-redux'
import categorySlice from '../../store/slices/categorySlice/categorySlice'

const CatNav = () => {

const categories = useSelector(categorySlice.getInitialState)

  return (
    <div>
      <div className='cat-nav-container container'>
        <ul>
          { categories.map((cat)=>{
            return (
              <li className='list-items'><a href='#'>{cat}</a></li>
            )
          }
        )}
        </ul>
      </div>
    </div>
  )
}

export default CatNav