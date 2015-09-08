const chai = require('chai'),
	expect = chai.expect;

import {appConfigBuilder} from '../lib/index';

describe('index', () => {

	it('should define appConfigBuilder', () => {
		expect(appConfigBuilder).to.be.a('Object');
	});

});
