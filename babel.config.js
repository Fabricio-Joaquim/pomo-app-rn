module.exports = function(api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
					alias: {
						'@assets': './src/Assets',
						'@components': './src/Components',
						'@pages': './src/Pages',
						'@services': './src/Service',
						'@src': './src',
						'@utils': './src/Utils',
					},
				},
			],
		],
	}
}
