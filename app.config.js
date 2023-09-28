import 'dotenv/config'

export default {
	'expo': {
		'name': 'pomo-app-rn',
		'slug': 'pomo-app-rn',
		'version': '1.0.0',
		'assetBundlePatterns': [
			'**/*'
		],
		'android': {
			'googleServicesFile': './google-services.json',
			'package': 'com.anonymous.pomoapprn'
		},
		'plugins': [
			'@react-native-firebase/app',
			'@react-native-google-signin/google-signin'
		],
		'splash': {
			'image': './src//assets/splash.jpg',
			'resizeMode': 'contain',
			'backgroundColor': '#25292e'
		},
		'icon': './src/assets/logo.png',
		'extra': {
			'eas': {
				'projectId': process.env.EAS_PROJECT_ID,
			}
		}
	}
}
