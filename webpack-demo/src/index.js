const css = require('./style.scss');

import _ from 'lodash';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', 'with sass and babel'], ' ');

    return element;
}

document.body.appendChild(component());