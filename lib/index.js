import umdAppConfigBuilder from './umdAppConfigBuilder';
import htmlAppConfigBuilder from './htmlAppConfigBuilder';
import iframeAppConfigBuilder from './iframeAppConfigBuilder';
import appConfigBuilder from './appConfigBuilder';

appConfigBuilder.umd = umdAppConfigBuilder;
appConfigBuilder.html = htmlAppConfigBuilder;
appConfigBuilder.iframe = iframeAppConfigBuilder;

export default {
	appConfigBuilder: appConfigBuilder
};
