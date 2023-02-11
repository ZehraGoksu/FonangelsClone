import React, { Component } from 'react';
import {Card,CardTitle, CardText} from 'reactstrap';
import AlternatifLogo from './assets/images/alternatifLogo.jpeg'

export default class ProjeCard extends Component {
  render() {
    return (
        <Card
        style={{
          width: '22rem',
          height:'42rem',
          borderRadius:25
        }}
        className='p-3'
      >
          <CardTitle>
           <div className='py-2 px-3' style={{float:'left',backgroundColor:'#0095c4', color:'white',borderRadius:30,fontSize:15,border:'none'}}><b>Teknoloji</b></div>
          </CardTitle>
        <div>
        <div className='d-flex justify-content-center'>
        <img
          alt="Alternatif Logo"
          src={AlternatifLogo}
          width="70%"
        />
        </div>
         <div className='d-flex justify-content-center mt-3'>
          <button className='px-4 py-1' style={{backgroundColor:'white',borderColor:'#90e800', borderRadius:30,fontSize:16,color:'#636363'}}>
           <div className='d-flex align-items-center'><button className='p-2 mt-1 me-2' style={{backgroundColor:'#90e800', borderRadius:30, border:'none'}}></button>Yatırıma Açık</div></button>
         </div>
         <div className='d-flex justify-content-center mt-4'> 
          <p style={{fontSize:15,color:'#636363'}}>Fonlanan Yatırım</p>
         </div>
       
          <p style={{backgroundColor:'#f47f49', borderRadius:8}} className='p-1'></p>
          <div className='d-flex justify-content-between mx-2' style={{fontSize:17,color:'#636363'}}>
            <pre style={{fontFamily:'Poppins,sans-serif'}}>₺4,150,055</pre>
            <pre style={{fontFamily:'Poppins,sans-serif'}}>₺16,650,000</pre>
          </div>
          <CardText className='d-flex justify-content-around align-items-center my-4'>
            <pre style={{fontSize:20,fontFamily:'Poppins,sans-serif',color:'#636363'}}>Fonlanan </pre> <pre style={{fontSize:'1.5em',fontWeight:700 ,fontFamily:'Poppins,sans-serif',color:'#636363'}} >%24.30</pre>
          </CardText>
          <div className='d-grid gap-2 mt-4'>
            <a href='www.google.com' className='py-3 text-center px-5' style={{textDecoration:'none' ,backgroundColor:'#a4becc', border:'none',borderRadius:15,fontWeight:700, fontSize:'1.1em', color:'white'}}>İncele</a> 
            <a href='www.google.com' className='py-3 text-center px-5' style={{textDecoration:'none' ,backgroundColor:'#4f6069', border:'none',borderRadius:15,fontWeight:700, fontSize:'1.1em', color:'white'}}>Yatırım Yap</a></div>
    
        </div>
      </Card>
    )
  }
}
