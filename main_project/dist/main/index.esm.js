import { A as ActiveRouter } from './active-router-9e1bdcd6.js';
import './match-path-760e1797.js';
import './index-9d0a929f.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
