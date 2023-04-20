import { useEffect } from 'react'
import './style/HomeDemo2.scss'

import Particles from './Particles';

import {
  DocElementTitle,
  FQAInfo,
  service_single_content,
  SingleCoolFact,
  TeamMember,
  timelineInfo,
  TokenText,
  VerticalSocial,
  PartnersData
} from '../../data/data-containers/data-HomeDemo2.js'
import {
  HomeDemo2About1,
  HomeDemo2Allocation,
  HomeDemo2BgRoadmap,
  HomeDemo2VideoBg4,
} from '../../utils/allImgs'

import Header from '../../layouts/Header'
import { handelTitle } from '../../utils'

import SecAboutUsClient from './SecAboutUsClient'
import SecDemoVideo from './SecDemoVideo'
import SecDistribution from './SecDistribution'
import SecFAQ_Timeline from './SecFAQ_Timeline'
import SecOurRoadmap from './SecOurRoadmap'
import SecOurServices from './SecOurServices'
import SecTeam from './SecTeam'
import SecTrust from './SecTrust'
import SecVerticalSocial from './SecVerticalSocial'
import SecWelcomeArea from './SecWelcomeArea'
import SecSubscribe from './SecSubscribe'
import SecPartners from './SecPartners'
import SecAiPowered from './SecAiPowered';
import SecTrustPlatform from './SecTrustPlatform';
let HomeDemo2Audit = () => {
  useEffect(() => {
    handelTitle('CRUX CRYPTOS - Join the Revolution of AI-powered Gaming with CRUX CRYPTO.')
  }, [])

  useEffect(() => {
    if (document.title === 'CRUX CRYPTOS - Join the Revolution of AI-powered Gaming with CRUX CRYPTO.') {
      document.getElementsByTagName('body')[0].style.backgroundImage =
        'linear-gradient(to right, #000000, #000000)'
    } else {
      document.getElementsByTagName('body')[0].style.backgroundImage =
        'linear-gradient(to right, #000000, #000000)'
    }
  }, [])

  return (
    <>
      <Header />
      <div className="HomeDemo2">
        
        <SecDemoVideo img={HomeDemo2VideoBg4} />
        {/* <SecFAQ_Timeline FQAInfo={FQAInfo} DocElementTitle={DocElementTitle} /> */}
        
      </div>
      
      <Particles id="tsparticles" />
    </>
  )
}

export default HomeDemo2Audit
