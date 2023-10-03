import 'dotenv/config'

export default {
	expo: {
		name: 'FullAPP',
		slug: 'pomo-app-rn',
		version: '1.0.0',
		assetBundlePatterns: [
			'**/*'
		],
		android: {
			googleServicesFile: './google-services.json',
			package: 'com.pomoapprn',
			versionCode: 1,
			'backgroundColor': '#25292e',
			'adaptiveIcon': {
				'foregroundImage': './src/assets/logo.png',
				'backgroundColor': '#25292e'
			}
		},
		plugins: [
			'@react-native-firebase/app',
			'@react-native-google-signin/google-signin',
			'@react-native-firebase/perf',
			'@react-native-firebase/crashlytics'
		],
		splash: {
			image: './src/assets/splash.png',
			resizeMode: 'contain',
			backgroundColor: '#25292e'
		},
		icon: './src/assets/logo.png',
		extra: {
			eas: {
				projectId: process.env.EAS_PROJECT_ID,
			}
		}
	}
}
