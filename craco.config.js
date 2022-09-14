const cracoSassResourcesLoader = require('craco-sass-resources-loader');
const path = require('path);

module.export = {
	plugins: [
		{
			plugin: cracoSassResourcesLoader,
			options: {
				resources: path.resolve(__dirname, 'src/styles/variables.scss')
			}
		}
	]
}
