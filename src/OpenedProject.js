import React, { Component } from 'react'
import OpenedProjectCard from './OpenedProjectCard'

export default class OpenedProject extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <div>
                    <p style={{ fontSize: '3em' }} className='my-5 text-center'>Yatırıma Açılacak Projeler</p>
                    <div className='d-flex justify-content-around'>
                        <OpenedProjectCard></OpenedProjectCard>
                        <OpenedProjectCard></OpenedProjectCard>
                    </div>
                </div>
            </div>
        )
    }
}
