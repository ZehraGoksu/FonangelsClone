import React, { Component } from 'react';
import {Card,CardTitle} from 'reactstrap';
import KiviLogo from './assets/images/kivi.png';

export default class OpenedProjectCard extends Component {
  render() {
    return (
        <Card
        style={{
          width: '400px',
          height: '42rem',
          borderRadius: 25,
          fontFamily: 'Poppins,sans-serif'
        }}
        className='p-3 mx-4'
      >
        <CardTitle>
          <div className='text-center'>
            <h4>KiviERP</h4>
          </div>
        </CardTitle>
        <div>
          <div className='d-flex justify-content-center'>
            <img className='mx-2 my-5'
              alt="Alternatif Logo"
              src={KiviLogo}
              width="50%"
            /></div>
          <div className='d-flex justify-content-center my-3'>
            <span className='text-center' style={{ width: '90%', lineHeight: '150%', height: '120px', color: '#636363' }}>
            KiviERP Tek çatı altında bütüncül veri felsefesiyle farklı entegrasyonlara 
            gerek olmadan üretim ve e-ticaret yapabileceğiniz bir ERP çözümüdür...
            </span>
          </div>
          <div className='mx-1 mt-2'>
            <pre style={{ float: 'left', fontSize: '0.9em', fontFamily: 'Poppins,sans-serif', color: '#636363' }}>Fonlanan Miktar</pre>
            <pre style={{ float: 'right', fontSize: '0.9em', fontWeight: 700, fontFamily: 'Poppins,sans-serif', color: '#636363' }} >%0</pre>
          </div>

          <p style={{ backgroundColor: '#d9d9d9', borderRadius: 8 }} className='p-1 mt-5'></p>
          <div className='d-flex justify-content-between mx-1' style={{ fontSize: 17, color: '#636363' }}>
            <pre style={{ fontFamily: 'Poppins,sans-serif', color: '#f47f49', fontWeight: 600 }}>₺0</pre>
            <pre style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600 }}>₺0</pre>
          </div>
          <div className='mt-5 d-flex justify-content-center'>
             <a href='www.google.com' className='py-3 text-center px-5' style={{ textDecoration: 'none', backgroundColor: '#a4becc', border: 'none', borderRadius: 15, fontWeight: 700, fontSize: '1.1em', color: 'white' }}>YAKINDA</a>
          </div>

        </div>
      </Card>
    )
  }
}
