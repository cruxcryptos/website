import { useEffect } from 'react'
import './style/HomeDemo2.scss'

import {
  DocElementTitle, FQAInfo, service_single_content, SingleCoolFact, TeamMember, timelineInfo, TokenText, VerticalSocial
} from '../../data/data-containers/data-HomeDemo2.js'

import {
  HomeDemo2About1, HomeDemo2Allocation,
  HomeDemo2BgRoadmap, HomeDemo2VideoBg4
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

let HomeDemo2 = () => {
  useEffect(() => {
    handelTitle('$CRUX CRYPTO - MMORPG P2E METAVERSE')
  }, [])

  useEffect(() => {
    if (document.title === '$CRUX CRYPTO - MMORPG P2E METAVERSE') {
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
        <SecWelcomeArea />
        <SecVerticalSocial data={VerticalSocial} />
        <SecTrust data={SingleCoolFact} />
        <SecAboutUsClient img={HomeDemo2About1} />
        <SecDemoVideo img={HomeDemo2VideoBg4} />

        <div className="clearfix" />
        <SecOurServices data={service_single_content} />
        <SecDistribution img={HomeDemo2Allocation} data={TokenText} />
         <SecOurRoadmap data={timelineInfo} img={HomeDemo2BgRoadmap} />
        <SecFAQ_Timeline FQAInfo={FQAInfo} DocElementTitle={DocElementTitle} />
        <SecTeam data={TeamMember} />    
      </div>
    </>
  )
}

export default HomeDemo2
