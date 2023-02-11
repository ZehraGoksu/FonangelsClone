import React, { Component } from 'react'
import { Card, CardTitle} from 'reactstrap';
import SugarLogo from './assets/images/sugarLogo.png'
import UserLogo from './assets/images/UserSugar.png'

export default class CompletedProjectCard extends Component {
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
          <div style={{float: 'left'}} >
            <div className='d-flex align-items-center'>
              <img src={UserLogo} style={{ borderRadius: 20, float: 'left' }} width='40px' height='40px' alt="Abdurrahman" />
              <span className='ms-2' style={{ fontWeight: 600, float: 'right', color: '#313a3f', fontSize: '1.1em', lineHeight: '20px' }}>Abdurrahman <br></br> TÜRKERİ</span></div>
          </div>
         
        </CardTitle>
        <div>
          <div className='d-flex justify-content-center mt-3'>
            <img className='m-2'
              alt="Sugar Logo"
              src={SugarLogo}
              width="50%"
            /></div>

            
          <div className='mx-1 mt-4 mb-5'>
            <table style={{color:'#636363', marginBottom:'5px', width:'100%', fontSize:'17px'}}>
              <tr style={{lineHeight: '250%', borderBottom: '1px solid #d9d9d9'}}>
                <td>Toplam Yatırım</td>
                <th style={{float:'right',fontSize:'21px'}}>₺1,750,000</th>
              </tr>
              <tr style={{lineHeight: '250%', borderBottom: '1px solid #d9d9d9'}}>
                <td>Hedeflenen Yatırım</td>
                <th style={{float:'right',fontSize:'21px'}}>₺1,750,000</th>
              </tr>
              <tr style={{lineHeight: '250%', borderBottom: '1px solid #d9d9d9'}}>
                <td>Fonlama Yüzdesi</td>
                <th style={{float:'right',fontSize:'21px'}}>%100</th>
              </tr>
              <tr style={{lineHeight: '250%', borderBottom: '1px solid #d9d9d9'}}>
                <td>Yatırımcı Sayısı</td>
                <th style={{float:'right',fontSize:'21px'}}>200</th>
              </tr>
              <tr style={{lineHeight: '250%'}}>
                <td>En Yüksek Yatırım Tutarı</td>
                <th style={{float:'right',fontSize:'21px'}}>₺250,000</th>
              </tr>
            </table>
          </div>

          <div className='mt-5 d-flex justify-content-center'>
             <a href='www.google.com' className='py-3 text-center px-5' style={{ textDecoration: 'none', backgroundColor: '#a4becc', border: 'none', borderRadius: 15, fontWeight: 700, fontSize: '1.1em', color: 'white' }}>İncele</a>
          </div>

        </div>
      </Card>
    )
  }
}
