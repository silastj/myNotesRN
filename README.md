### INSTALAÇÃO

# sem typescript
npx create-expo-app my-app 

# com typescript
npx create-expo-app -t expo-template-blank-typescript

# incluir typescript
npx expo customize tsconfig.json

# RODAR ANDROID
npx run android

# RODAR IOS
npx expo ou npx expo start ou npx expo start --tunnel

# PACOTES
` <SafeAreaProvider/> `
`npx expo install react-native-safe-area-context`
`react navigation `
`npm install @react-navigation/native`
`npx expo install react-native-screens react-native-safe-area-context `
`npm install @react-navigation/native-stack`
`npm install @react-navigation/stack`
`npm install redux react-redux redux-persist `
`npm install styled-components `
`npx expo install @react-native-async-storage/async-storage `
`npm i -g @expo/ngrok@^4.1 `

-- com erro `ERROR TypeError: _RNGestureHandlerModule.default.flushOperations is not a function (it is undefined)`
-- instalar esse `npx expo install react-native-gesture-handler`