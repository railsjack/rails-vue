const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)


process.env.NODE_ENV = process.env.NODE_ENV || 'production'
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

/*environment.config.optimization.minimizer = [
	new UglifyJSPlugin({
		uglifyOptions: {
			collapse_vars: false
		}
	})
]*/

module.exports = environment
