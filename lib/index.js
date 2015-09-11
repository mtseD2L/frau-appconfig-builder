var umdAppConfigBuilder = require('./umdAppConfigBuilder'),
	htmlAppConfigBuilder = require('./htmlAppConfigBuilder'),
	iframeAppConfigBuilder = require('./iframeAppConfigBuilder');

const builder = umdAppConfigBuilder;
builder[umdAppConfigBuilder.name] = umdAppConfigBuilder;
builder[htmlAppConfigBuilder.name] = htmlAppConfigBuilder;
builder[iframeAppConfigBuilder.name] = iframeAppConfigBuilder;

module.exports = builder;
