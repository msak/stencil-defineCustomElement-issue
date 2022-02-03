import { A as ActiveRouter } from './active-router-5c26e5fb.js';
import './match-path-760e1797.js';
import './index-76361fa5.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
