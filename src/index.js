import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { ProviderData } from './hooks/useData'

ReactDOM.render(
  <ProviderData>
    <App />
  </ProviderData>
  , document.getElementById('app'),
)
