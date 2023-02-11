import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import './style/BannerAccount.css'
import banner1 from './assets/images/bannerIcon1.svg';
import banner2 from './assets/images/bannerIcon2.svg';
import banner3 from './assets/images/bannerIcon3.svg';

export default class BannerAccount extends Component {
    render() {
        return (
            <div className='my-5 text-center mainDiv'>
                <div className='d-flex justify-content-center mb-3 text-center'>
                    <p style={{ fontWeight: 500, fontSize: '3.1em', color: "#313a3f" }}>
                        Hesabınızı hemen oluşturun,<br></br>
                        fonangels.com'un fırsatlarla dolu dünyasına katılın.</p>
                </div>
                <Button className='py-4 px-5' style={{ fontWeight: 600, borderRadius: 50, fontSize: 30, background: 'linear-gradient(94.05deg,#d02b35 0,#f47f49 103.09%)', color: 'white', border: 'none' }}>  Hesap Oluştur  <BsFillPersonPlusFill /></Button>
                <div className='d-flex justify-content-center'>
                    <div className=' d-flex align-items-center ' style={{width:'400px'}}>
                        <div className='textPosition'>
                            <img src={banner1} alt='Sayfa Logosu' className='logoSize' />
                            <p className='textSize my-5'>Yatırım yaptım kazancım ne olacak?</p>
                            <p>Yapılan yatırımdan oluşabilecek gelir modelleri; girişimin temettü dağıtması, 
                                yatırım yapılan girişimin satılması veya halka arz edilmesi
                                ve alınan hisselerin ikincil piyasada satılması olarak sıralanabilir.</p>
                        </div>
                    </div>

                    <div className=' d-flex align-items-center' style={{width:'400px'}}>
                        <div className='textPosition'>
                            <img src={banner2} alt='Sayfa Logosu' className='logoSize' />
                            <p className='textSize my-5'>Hisselerimi satabilir miyim?</p>
                            <p>Kitle Fonlama Platformu üzerinden yatırım yaparak pay alan yatırımcılar 
                                istedikleri şekilde hisselerini satabilir veya devredebilir.
                                Kitle fonlama sistemi üzerinden alınan hisselerin alış ve satışıyla alakalı, 
                                ikincil piyasanın alt yapı çalışmaları Borsa İstanbul tarafından sürdürülmektedir.</p>
                        </div>
                    </div>

                    <div className=' d-flex align-items-center' style={{width:'400px'}}>
                        <div className='textPosition'>
                            <img src={banner3} alt='Sayfa Logosu' className='logoSize' />
                            <p className='textSize my-5'>Temettü dağıtımı olacak mı?</p>
                            <p>Karını sermayeye dahil etme veya temettü olarak dağıtma kararı Girişimcinin inisiyatifindedir. 
                                Girişimlere yatırım yaparken kar beklentisinin 1-3-5 yıl sonra gerçekleşebileceğinin 
                                göz önünde bulundurulması gerekir.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
