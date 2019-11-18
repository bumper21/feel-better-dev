import React from 'react'
require('dotenv').config()
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import App from '../components/App'
import 'bootstrap/dist/css/bootstrap.min.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={App} />
    </Router>,

    document.getElementById("reactComponent").appendChild(document.createElement("div")),
  )
})
