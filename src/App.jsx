import Aos from 'aos'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import HomeDemo2 from './template/HomeDemo2'
import HomeDemo2Audit from './template/HomeDemo2Audit'
import 'aos/dist/aos.css'
import './assets/css/bootstrap.min.css'
import './assets/css/General.css'
import './assets/css/responsive.css'
import ApiSupply from './data/ApiSupply'

import 'bootstrap/dist/js/bootstrap.bundle.min'

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    })
  }, [])

  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomeDemo2} />
        <Route exact path="/audit">
          <HomeDemo2Audit />
        </Route>
        <Route exact path="/audited">
          <HomeDemo2Audit />
        </Route>
        <Route path="/auditfusiontech">
          <HomeDemo2Audit />
        </Route>
         <Route path='*' component={HomeDemo2} />
      </Switch>
    </div>
  )
}

export default App
