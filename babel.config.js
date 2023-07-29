module.exports = function (api) {
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
						'@useHookStore': './src/Store/hooks',
						'@interfaces': './src/Interfaces',
						'@components': './src/Components',
						'@services': './src/Services',
						'@screens': './src/Screens',
						'@useHooks': './src/hooks',
						'@assets': './src/Assets',
						'@utils': './src/Utils',
						'@enums': './src/Enums',
						'@src': './src',
					},
				},
			],
		],
	}
}
