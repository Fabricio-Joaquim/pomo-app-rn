### create a .env file with the following content:
```
EXPO_PUBLIC_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
```

### Install dependencies
```
yarn install
```

### copy your google-services.json file to android/app folder and in your root folder run:
```
yarn android
```

### Prebuild steps
```
npx expo prebuild --platform android
```

### Build
```
eas build --platform android --local
```