import React, { Component } from 'react'
import CompletedProjectCard from './CompletedProjectCard'

export default class CompletedProject extends Component {
  render() {
    return (
        <div className='d-flex justify-content-center mb-5'>
        <div>
            <p style={{ fontSize: '3em' }} className='my-5 text-center'>Hedefine Ulaşan Projeler</p>
            <div className='d-flex justify-content-around'>
            <CompletedProjectCard></CompletedProjectCard>
            <CompletedProjectCard></CompletedProjectCard>
            <CompletedProjectCard></CompletedProjectCard>
            </div>
        </div>
    </div>
    )
  }
}
