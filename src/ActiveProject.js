import React, { Component } from 'react'
import ActiveProjectCard from './ActiveProjectCard'

export default class ActiveProject extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <div>
        <p style={{fontSize:'3em'}} className='my-5'>Yatırıma Açık Projeler</p>
        <div className='d-flex justify-content-center'>
        <ActiveProjectCard></ActiveProjectCard></div>
        </div>
      </div>
    )
  }
}
