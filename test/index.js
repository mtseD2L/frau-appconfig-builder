import chai from 'chai';
import {appConfigBuilder} from '../lib/index';

const expect = chai.expect;

describe('index', () => {

	it('should define appConfigBuilder', () => {
		expect(appConfigBuilder).to.be.a('Object');
	});

});
