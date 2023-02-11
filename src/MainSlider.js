import React, { Component } from 'react';
import Slider from "react-slick";
import ProjeCard from './ProjeCard.js';
import Pupa from './assets/images/pupa.jpg';
import Alternatif from './assets/images/Alternatif.jpg';

export default class MainSlider extends Component {
  render() { 
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1, 
      
    };
    
    return (
      <div> 
        <Slider {...settings}>
          {/*{slides.map(function(item){
                return (
                    <div key={item.id} className="item-slider" 
                        style={{background: `url(images/covers/${item.cover})`}}>
                        <div className="caption">
                            <h4>{item.topic}</h4>
                            <p>{item.title}</p>

                        </div>
                    </div>
                    )  
            })} */}
          <div>
            <div className='d-flex justify-content-start align-items-center' style={{ backgroundImage:  "url(" + Alternatif + ")", 
          height: '55rem',padding:'180px', paddingTop:'280px'}} >
            <ProjeCard></ProjeCard> 
            <div className='ms-5'>
              <div style={{color:'white', fontWeight: 700, fontSize: '3em', marginBottom: '24px', lineHeight: '125%'}}>
              <p>Herkes içi daha</p>
              <p>iyi bir Alternatif</p>
              <p>var.</p>
              </div>
              <p style={{color:'white', fontWeight: 400, fontSize: '1.5em', lineHeight: '150%',width:'400px'}}>Alternatif SuperApp birçok özelliğiyle işletmeleri birer Fintech'e çevirirken 
            onlarca markanın dijital cüzdanını ve kampanyalarını tek bir uygulamada birleştiren bir pazaryeridir. </p>
            </div> 
            </div>
          </div>
          
          <div>
            <div className='d-flex justify-content-start align-items-center' style={{ backgroundImage:  "url(" + Pupa + ")",height: '55rem',padding:'180px', paddingTop:'280px'}}>
            <ProjeCard ></ProjeCard>
            <div className='ms-5'>
              <div style={{color:'white', fontWeight: 700, fontSize: '3em', marginBottom: '24px', lineHeight: '125%'}}>
              <p>Odaklan, Motive</p>
              <p> ol ve Pupa Coin</p>
              <p>Kazan.</p>
              </div>
              <p style={{color:'white', fontWeight: 400, fontSize: '1.5em', lineHeight: '150%',width:'400px'}}>Focused Pupa, telefondan uzakta geçirilen vakti sosyal fayda tokeni olan PupaCoin’e dönüştürür 
              ve biriktirilen PupaCoin’ler ile sosyal sorumluluk projelerine ücretsiz bağış yapılmasını sağlar.</p>
            </div> 
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
