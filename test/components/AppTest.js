/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import sd from 'skin-deep';

import AppComponent from 'components/App';

describe('AppComponent', () => {
    let instance, vdom;

    beforeEach(() => {
        const tree = sd.shallowRender(React.createElement(AppComponent, {}));
        instance = tree.getMountedInstance();
        vdom = tree.getRenderOutput();
    });

    it('should have a title', () => {
        expect(vdom.type).to.equal('h1');
        expect(vdom.props.children).to.deep.equal('Jon\'s Kickstarter Project');
    });
});
