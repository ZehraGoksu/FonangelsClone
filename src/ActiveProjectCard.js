import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import AlternatifLogo from './assets/images/alternatifLogo.jpeg'
import UserLogo from './assets/images/gokturkYetim.jpg'

export default class ActiveProject extends Component {
  render() {
    return (
      <Card
        style={{
          width: '400px',
          height: '42rem',
          borderRadius: 25,
          fontFamily: 'Poppins,sans-serif'
        }}
        className='p-3'
      >
        <CardTitle>
          <div style={{ float: 'left' }} >
            <div className='d-flex align-items-center'>
              <img src={UserLogo} style={{ borderRadius: 20, float: 'left' }} width='40px' height='40px' alt="Göktürk Yetim" />
              <span className='ms-2' style={{ fontWeight: 600, float: 'right', color: '#313a3f', fontSize: '1.1em', lineHeight: '20px' }}>Göktürk <br></br> YETİM</span></div>
          </div>
          <div className='py-2 px-3' style={{ float: 'right', backgroundColor: '#0095c4', color: 'white', borderRadius: 30, fontSize: 15, border: 'none' }}><b>Teknoloji</b></div>
        </CardTitle>
        <div>
          <div className='d-flex justify-content-center'>
            <img className='m-2'
              alt="Alternatif Logo"
              src={AlternatifLogo}
              width="50%"
            /></div>
          <div className='d-flex justify-content-center my-3'>
            <span className='text-center' style={{ width: '90%', lineHeight: '150%', height: '120px', color: '#636363' }}>
              Alternatif SuperApp birçok özelliğiyle işletmeleri birer Fintech'e çevirirken onlarca
              markanın dijital cüzdanını ve kampanyalarını tek bir uygulamada birleştiren bir pazaryeridir...
            </span>
          </div>
          <div className='mx-1 mt-2'>
            <pre style={{ float: 'left', fontSize: '0.9em', fontFamily: 'Poppins,sans-serif', color: '#636363' }}>Fonlanan Miktar</pre>
            <pre style={{ float: 'right', fontSize: '0.9em', fontWeight: 700, fontFamily: 'Poppins,sans-serif', color: '#636363' }} >%24.30</pre>
          </div>

          <p style={{ backgroundColor: '#f47f49', borderRadius: 8 }} className='p-1 mt-5'></p>
          <div className='d-flex justify-content-between mx-1' style={{ fontSize: 17, color: '#636363' }}>
            <pre style={{ fontFamily: 'Poppins,sans-serif', color: '#f47f49', fontWeight: 600 }}>₺4,150,055</pre>
            <pre style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600 }}>₺16,650,000</pre>
          </div>
          <CardText className='d-flex justify-content-start my-4'>
            <small style={{ color: '#636363', fontWeight: 500 }}>Kalan Süre: 47 Gün</small>
          </CardText>
          <div className='mt-5 d-flex justify-content-between'>
            <a href='www.google.com' className='py-3 text-center me-2' style={{ textDecoration: 'none', backgroundColor: '#a4becc', border: 'none', borderRadius: 15, fontWeight: 700, fontSize: '1.1em', color: 'white',width:'50%' }}>İncele</a>
            <a href='www.google.com' className='py-3 text-center' style={{ textDecoration: 'none', backgroundColor: '#4f6069', border: 'none', borderRadius: 15, fontWeight: 700, fontSize: '1.1em', color: 'white',width:'50%'  }}>Yatırım Yap</a>
          </div>

        </div>
      </Card>
    )
  }
}

