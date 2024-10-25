import React from 'react'
import './_main-component.scss'
import SideNav from '../SideNav'

const MainComponent = () => {
  return(
    <div>
        <div className='col-lg-2 col-md-3 col-sm-4'>
            <SideNav/>
        </div>

    </div>
  )
}


export default MainComponent