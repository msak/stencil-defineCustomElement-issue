import { A as ActiveRouter } from './active-router-14f927b2.js';
import './match-path-760e1797.js';
import './index-575de03d.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
