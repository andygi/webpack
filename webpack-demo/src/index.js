const css = require('./style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// change or add the icon you want to use
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faCartArrowDown, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faCartArrowDown, faTrash)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
