# Contributing

## Prerequisites

> Setup instructions below adapted from:
>   + [How to set up a Dev Env on Mac](http://data-creative.info/reference-docs/2015/07/18/how-to-set-up-a-mac-development-environment/)
>   + [How to set up a React Native dev env on Mac](http://data-creative.info/reference-docs/2016/07/22/react-native-android-dev-env-setup-from-scratch/)


General Prerequisites:

  + Homebrew
  + Git
  + NVM, Node.js, and NPM
  + React Native

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

#### React Native

Verify / detect React Native:

```sh
which react-native #>
react-native --version
```

Install React Native:

```sh
npm install -g react-native-cli
```

#### Watchman

Verifying / detecting Watchman:

```sh
which watchman
watchman --version
```

Installing / updating Watchman:

```sh
brew install watchman
brew upgrade watchman
```









### Android Prerequisites

#### Java Development Kit

```sh
javac -version #> javac 1.8.0_131
```

#### Android Studio

[Download](https://developer.android.com/studio/index.html) and [install](https://developer.android.com/studio/install.html) Android Studio. Then configure the path as necessary:

```sh
# ~/.bash_profile
export ANDROID_HOME="/Users/YOUR_USERNAME/Library/Android/sdk"
#export PATH=~/Library/Android/sdk/tools:$PATH # enables `android` commands
#export PATH=~/Library/Android/sdk/platform-tools:$PATH # enables `adb` commands
export PATH=~/Library/Android/sdk/tools/bin:$PATH # enables `android` commands
```

Detecting:

```sh
#which android #> /Users/YOUR_USERNAME/Library/Android/sdk/tools/android
##> The "android" command is deprecated.
##> For manual SDK, AVD, and project management, please use Android Studio.
##> For command-line tools, use tools/bin/sdkmanager and tools/bin/avdmanager
#
#which adb #> /Users/YOUR_USERNAME/Library/Android/sdk/platform-tools/adb
#adb --version #> Android Debug Bridge version 1.0.39

which sdkmanager #> /Users/YOUR_USERNAME/Library/Android/sdk/tools/bin/sdkmanager
which avdmanager #> /Users/YOUR_USERNAME/Library/Android/sdk/tools/bin/avdmanager
```

#### Gradle

[The gradle daemon](https://docs.gradle.org/2.9/userguide/gradle_daemon.html) speeds-up build times. [Install](https://docs.gradle.org/current/userguide/installation.html) Gradle:

```sh
brew install gradle
```

Detect / verify:

```sh
gradle -v #>
```

Enable the Gradle Daemon:

```sh
touch ~/.gradle/gradle.properties
echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties
```











<hr>


## Installation

```` sh
git clone git@github.com:data-creative/NextTrainCT.git
cd NextTrainCT/
npm install
````


<hr>
















## Running Locally

### On Android

Install and link peer dependencies, if necessary:

```` sh
react-native link
````

Ensure there is either a device or an emulator running:

```` sh
adb devices
````

Build the application onto the device:

```` sh
react-native run-android
````

Check console logs:

```` sh
react-native log-android
````

### On iOS

Build the application onto the device:

```` sh
react-native run-ios
````
