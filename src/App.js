import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import MyProjects from './components/MyProjects'
import MyCertificates from './components/MyCertificates'
import ViewaCertificate from './components/ViewaCertificate'
import MyDesigns from './components/myDesigns'
import Loader from './components/Loader'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Loader} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/mydesigns" component={MyDesigns} />
      <Route exact path="/myprojects" component={MyProjects} />
      <Route exact path="/MyCertificates" component={MyCertificates} />
      <Route exact path="/:id" component={ViewaCertificate} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
