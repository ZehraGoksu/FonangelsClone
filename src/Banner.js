import React, { Component } from 'react';
import BannerBackground from './assets/images/bannerFirst.png';
import logo from './assets/images/logoFonangels.svg';

export default class Banner extends Component {
    render() {
        return (
            <div className='my-5' style={{ backgroundImage: "url(" + BannerBackground + ")", height: '500px', backgroundSize: 'cover', paddingTop: '170px' }}>
                <div className='d-flex align-items-center'>
                    <img src={logo} alt='logo' style={{ float: 'left', height: '160px', marginRight: '20px', marginLeft: '10%' }} />
                    <div style={{ float: 'left', width: '600px', fontSize: '2em', lineHeight: "140%", color: "#fff" }}>
                        Tecrübeli ekibimizle girişimciler ile yatırımcıları bir araya getiriyor ve girişimcilik
                        ekosisteminde yeni başarı hikayeleri yazıyoruz.
                    </div>
                </div>
            </div>
        )
    }
}
