import Aos from 'aos'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import HomeDemo2 from './template/HomeDemo2'
import imagemeta from './assets/img/core-img/meta-crux.png'
import 'aos/dist/aos.css'
import './assets/css/bootstrap.min.css'
import './assets/css/General.css'
import './assets/css/responsive.css'

import 'bootstrap/dist/js/bootstrap.bundle.min'

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" data-react-helmet="true"/>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          data-react-helmet="true" />
        <title>$CRUX World - MMORPG Metaverse</title>
        <meta name="title" content="$CRUX World - MMORPG Metaverse" data-react-helmet="true"/>
        <meta
          name="description"
          content="$CRUX powers a Survival MMORPG Game with a token-based economy
          (Play-to-Earn) system on Binance Smart Chain."
          data-react-helmet="true"/>

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0="
          crossorigin="anonymous"
        />

        <meta property="og:type" content="website" data-react-helmet="true"/>
        <meta
          property="og:url"
          content="https://jocular-melba-09c752.netlify.app/" data-react-helmet="true"
        />
        <meta property="og:title" content="$CRUX World - MMORPG Metaverse" data-react-helmet="true" />
        <meta
          property="og:description"
          content="$CRUX powers a Survival MMORPG Game with a token-based economy
          (Play-to-Earn) system on Binance Smart Chain. "
          data-react-helmet="true"
        />
        <meta property="og:image" content={imagemeta} />

        <meta property="twitter:card" content="summary_large_image" data-react-helmet="true"/>
        <meta
          property="twitter:url"
          content="https://jocular-melba-09c752.netlify.app/"
          data-react-helmet="true"
        />
        <meta
          property="twitter:title"
          content="$CRUX World - MMORPG Metaverse"
          data-react-helmet="true"
        />
        <meta
          property="twitter:description"
          content="$CRUX powers a Survival MMORPG Game with a token-based economy
          (Play-to-Earn) system on Binance Smart Chain. "
          data-react-helmet="true"
        />
        <meta property="twitter:image" content={imagemeta} data-react-helmet="true"/>
      </Helmet>
      <Switch>
        <Route path="/" component={HomeDemo2} />
      </Switch>
    </div>
  )
}

export default App
