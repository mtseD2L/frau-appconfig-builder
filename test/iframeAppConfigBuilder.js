const chai = require('chai'),
	expect = chai.expect,
	sinon = require('sinon');

chai.should();
chai.use(require('sinon-chai'));

const builder = require('../lib/iframeAppConfigBuilder'),
	stream = require('stream');

const TARGET = 'example.com/path/app.js';
const OPTS = {
	version: '1.0.0.1',
	description: 'It is a small world',
	id: 'urn:d2l:fra:id:some-id'
};

describe('iframeAppConfigBuilder', () => {

	describe('build', () => {

		let coreBuilder;

		beforeEach( () => {
			coreBuilder = sinon.spy(require('../lib/appConfigBuilder'), 'build');
		});

		afterEach( () => {
			coreBuilder.restore();
		});

		it('should throw with no target', () => {
			expect(builder.build).to.throw('Missing target');
		});

		it('should pass opts to core builder', () => {
			builder.build(TARGET, OPTS);
			coreBuilder.should.have.been.calledWith(OPTS);
		});

		it('should create "loader" with schema and endpoint', () => {
			let val = builder.build(TARGET, OPTS);
			val.should.have.property('loader');
			val.loader.should.have.property('schema', 'http://apps.d2l.com/uiapps/iframeschema/v1.json' );
			val.loader.should.have.property('endpoint', TARGET );
		});

	});

	describe('buildStream', () => {

		it('should return a stream', () => {
			let val = builder.buildStream(TARGET, OPTS);
			val.should.instanceOf(stream.Stream);
		});

	});

});
