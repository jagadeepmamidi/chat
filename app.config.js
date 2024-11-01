import 'dotenv/config';


export default{
  "expo": {
    "name": "chat1",
    "slug": "chat1",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra:{
  apiKey: "AIzaSyBI5ZRMGiCz-SII_IaI8OtRBEuiBUa2RUE",
  authDomain: "chatapp-3793e.firebaseapp.com",
  projectId: "chatapp-3793e",
  storageBucket: "chatapp-3793e.appspot.com",
  messagingSenderId: "472289996953",
  appId: "1:472289996953:web:7fa468624bfe549dde0808"
    }
  }
}
