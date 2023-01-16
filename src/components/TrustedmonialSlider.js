import React from 'react'

import { trustedmonialSliderData } from '../data'

const TrustedmonialSlider = () => {
    return (
        <div class="marquee-wrapper">
            <div class="marquee-container">
                <div class="marquee-block">
                    <div class="marquee-inner to-left">
                        <span>
                            {
                                trustedmonialSliderData.map((slide, index) => {
                                    const { image, name } = slide
                                    return (
                                        <div key={index} className=' marquee-item'>
                                            {/* <img src={image} alt=''/> */}
                                            <p className='testmonial-p '>{name}</p>
                                        </div>
                                    )
                                })
                            }
                        </span>
                        <span>
                            {
                                trustedmonialSliderData.map((slide, index) => {
                                    const { image, name } = slide
                                    return (
                                        <div key={index} className=' marquee-item'>
                                            {/* <img src={image} alt=''/> */}
                                            <p className='testmonial-p '>{name}</p>
                                        </div>
                                    )
                                })
                            }
                        </span>
                    </div>
                </div>
                <div class="marquee-block">
                    <div class="marquee-inner to-right">
                        <span>
                            {
                                trustedmonialSliderData.map((slide, index) => {
                                    const { image, name } = slide
                                    return (
                                        <div key={index} className=' marquee-item'>
                                            {/* <img src={image} alt=''/> */}
                                            <p className='testmonial-p '>{name}</p>
                                        </div>
                                    )
                                })
                            }
                        </span>
                        <span>
                            {
                                trustedmonialSliderData.map((slide, index) => {
                                    const { image, name } = slide
                                    return (
                                        <div key={index} className=' marquee-item'>
                                            {/* <img src={image} alt=''/> */}
                                            <p className='testmonial-p '>{name}</p>
                                        </div>
                                    )
                                })
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedmonialSlider;