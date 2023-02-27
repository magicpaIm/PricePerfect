import React from 'react'

import { featuresData, featurecardsData } from '../data';
import FeatureCard from './FeatureCard';

const Features = () => {
    const { order, title, subtitle } = featuresData
    return (
        <div className='flex flex-col w-full px-2 lg:px-10 py-10 gap-12'>
            {/* <div className='flex flex-col text-center justify-content items-center '>
                <p className='description ' >{order}</p>
                <h1 className='title' data-aos="fade-up" data-aos-delay='300'>{title}</h1>
                <p className='subtitle mx-auto' data-aos="fade-up" data-aos-delay='600'>{subtitle}</p>
            </div> */}
            {/* <div className='flex flex-col lg:flex-row justify-center gap-10'>
                {
                    featurecardsData.map((featurecardData, index) => {
                        return (
                            <FeatureCard featurecardData={featurecardData} index={index} data_aos="fade-up" data_aos_delay={(index + 1) * 200} />
                        )
                    })
                }
            </div> */}
        </div>
    )
}

export default Features;