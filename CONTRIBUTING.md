# Contributing

## Installation

```sh
git clone git@github.com:data-creative/NextTrainCT.git
cd NextTrainCT/
```

## Prerequisites

> Setup instructions below adapted from:
>   + [How to set up a Dev Env on Mac](http://data-creative.info/reference-docs/2015/07/18/how-to-set-up-a-mac-development-environment/)
>   + [How to set up a React Native dev env on Mac](http://data-creative.info/reference-docs/2016/07/22/react-native-android-dev-env-setup-from-scratch/)


General Prerequisites:

  + Homebrew
  + Git
  + NVM, Node.js, and NPM
  + React, React Native, React Native CLI

Android Prerequisites:

  + Android Studio
  + Watchman
  + Gradle

### General Prerequisites

#### NVM, Node.js and NPM

[Install or Update NVM](https://github.com/nvm-sh/nvm#install-script):

``` sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

It should append some stuff into your bash profile:

```sh
# ~/.bash_profile
export NVM_DIR="/Users/YOUR_USERNAME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```

Verify / detect existing NVM installation:

```sh
command -v nvm #> nvm
nvm --version #> 0.32.0
```

Use NVM to check for available Node.js versions, and install a specific version:

```sh
nvm install node # installs most recent version
#> Now using node v12.6.0 (npm v6.9.0)
# ... OR...
nvm ls-remote  # checks for available versions
nvm install 12.6.0 # installs a specific version, and automatically starts using it
```

Verify Node.js installation:

```sh
which node #> /Users/YOUR_USERNAME/.nvm/versions/node/v12.6.0/bin/node
node --version #> v12.6.0
```

This also installs the [Node Package Manager (NPM)](https://www.npmjs.com/). Verify NPM installation:

```sh
which npm #> /Users/YOUR_USERNAME/.nvm/versions/node/v12.6.0/bin/npm
npm --version #> 6.9.0
```

Great, now we can use NPM to install packages.

#### Watchman

Installing / updating Watchman:

```sh
brew install watchman
#brew upgrade watchman
```

Verifying / detecting Watchman:

```sh
which watchman
watchman --version
```

#### React and React Native

Install Package dependencies from the "package.json" file, including React, and React Native:

```sh
npm install
```

#### React Native CLI

Install React Native CLI:

```sh
npm install -g react-native-cli # deprecated / legacy? https://github.com/react-native-community/cli#about
```

Verify / detect React Native:

```sh
which react-native #> /Users/YOUR_USERNAME/.nvm/versions/node/v12.6.0/bin/react-native
react-native --version
#> react-native-cli: 2.0.1
#> react-native: 0.60.0
```

Install and link peer dependencies, if necessary:

```sh
react-native link
```

### Android Prerequisites

#### Java Development Kit

```sh
javac -version #> javac 1.8.0_131
```

#### Gradle

[The gradle daemon](https://docs.gradle.org/2.9/userguide/gradle_daemon.html) speeds-up build times. [Install](https://docs.gradle.org/current/userguide/installation.html) Gradle:

```sh
brew install gradle
```

Detect / verify:

```sh
which gradle #> /usr/local/bin/gradle
gradle -v #> Gradle 5.5 ...
```

Enable the Gradle Daemon (MAYBE NOT NECESSARY?):

```sh
touch ~/.gradle/gradle.properties
echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties
```

#### Android Studio

[Download](https://developer.android.com/studio/index.html) and [install](https://developer.android.com/studio/install.html) Android Studio 3.4.2. Then configure the path as necessary:

```sh
# ~/.bash_profile
export ANDROID_HOME="/Users/YOUR_USERNAME/Library/Android/sdk"
export PATH=~/Library/Android/sdk/tools:$PATH # enables `android` commands (DEPRECATED?)
export PATH=~/Library/Android/sdk/platform-tools:$PATH # enables `adb` commands (DEPRECATED?)
export PATH=~/Library/Android/sdk/tools/bin:$PATH # enables `sdkmanager` and `avdmanager` commands
```

Detecting:

```sh
which android #> /Users/YOUR_USERNAME/Library/Android/sdk/tools/android
##> The "android" command is deprecated.
##> For manual SDK, AVD, and project management, please use Android Studio.
##> For command-line tools, use tools/bin/sdkmanager and tools/bin/avdmanager
which sdkmanager #> /Users/YOUR_USERNAME/Library/Android/sdk/tools/bin/sdkmanager
which avdmanager #> /Users/YOUR_USERNAME/Library/Android/sdk/tools/bin/avdmanager

which adb #> /Users/YOUR_USERNAME/Library/Android/sdk/platform-tools/adb
adb --version #> Android Debug Bridge version 1.0.39
```

##### Android Virtual Devices

If you'd like to setup an emulator, follow these instructions.

In Android Studio, navigate to "Tools" > "SDK Manager":

  + In the "SDK Platforms" tab, check the box for **"Android 9.0 (Pie) - API level 28"**, and click "OK" to download.
  + In the "SDK Tools" tab, check the "Show Package Details" box in the bottom right-hand corner. Expand the "Android SDK Build Tools" line to reveal numerous versions of the build tools that can be downloaded - some say they are obsolete. Check the box for **"Android SDK Build Tools 29.0.1"**, then click "Apply" to initiate a download.

After these downloads complete, you should see the following new folders, respectively:

    /Users/YOUR_USERNAME/Library/Android/sdk/platforms/android-23
    /Users/YOUR_USERNAME/Library/Android/sdk/build-tools/23.0.1

In Android Studio, navigate to "Tools" > "AVD Manager", then create a new virtual device, choosing your desired device type (e.g. "Pixel 5"), and check the version of the API you installed above. If asked, install the "Pie (API Level 28, Android 9.0)" System Image.

##### HAXM

If you experience HAXM installation issues, download [version 7.5.1 from source](https://github.com/intel/haxm/releases/tag/v7.5.1) and manually extract into this directory:

    /Users/YOUR_USERNAME/Library/Android/sdk/extras/intel

Then run the installer.

<hr>

## Running Locally

### Running on Android

Can run on an emulator or on your device. To run on your device, plug in your phone to your computer via USB port. Otherwise, to run an emulator: open Android Studio, navigate to "Tools" > "Android" > "AVD Manager", then choose one of your existing AVDs and click the play button to launch.

Ensure there is either a device or an emulator running:

```sh
adb devices
#avdmanager list avd
```

Build the application onto the device:

```sh
react-native run-android
```

Check console logs:

```sh
react-native log-android
```

### Running on iOS

Build the application onto the device:

```sh
react-native run-ios
```
