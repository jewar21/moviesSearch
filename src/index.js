import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './routers/AppRouter';

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'



import './styles/styles.scss'

ReactDOM.render(
    <AppRouter />,
  document.getElementById('root')
);

