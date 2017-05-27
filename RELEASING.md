# Releasing

## Android

This document describes the process of releasing a new software version to the Android Store. Adapted from [source](https://facebook.github.io/react-native/docs/signed-apk-android.html).

### Prerequisites

Generate a release key.

```` sh
cd android/app
keytool -genkey -v -keystore next-train-ct-release-key.keystore -alias next-train-ct-key-alias -keyalg RSA -keysize 2048 -validity 10000
````

Ensure it is not being tracked by version control.

Save it somewhere secure.

Add it to your Mac OS Keychain.

### Releasing

Generate an APK:

```` sh
cd android && ./gradlew assembleRelease
````

Upload the APK file (`android/app/build/outputs/apk/app-release.apk`) to the [Google Play Developer Console](https://play.google.com/apps/publish/).
