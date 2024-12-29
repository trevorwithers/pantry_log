# Pantry Log

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/dchapman1988/pantry_log) [![Version](https://img.shields.io/badge/version-0.1.0-blue)](https://github.com/dchapman1988/pantry_log)

**Pantry Log** is a cross-platform mobile application (iOS and Android) designed to help you manage your home pantry efficiently. Log your food items, track expiration dates, create smart shopping lists, and receive notifications when items are running low or expiring soon. Built with [Ionic Angular](https://ionicframework.com/) and [TypeScript](https://www.typescriptlang.org/).

<p align="center">
  <img src="screenshots/screenshot1.png" alt="Screenshot of Pantry Log app showing the main item list" width="250"/>
  <img src="screenshots/screenshot2.png" alt="Screenshot of Pantry Log app showing the add item form" width="250"/>
  <img src="screenshots/screenshot3.png" alt="Screenshot of Pantry Log app showing the shopping list" width="250"/>
</p>

## Table of Contents

*   [Features](#features)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
*   [Usage](#usage)
*   [Development](#development)
    *   [Running Locally](#running-locally)
    *   [Building for Production](#building-for-production)
    *   [Testing](#testing)
*   [Contributing](#contributing)
*   [License](#license)
*   [Acknowledgments](#acknowledgments)
*   [Contact](#contact)

## Features

*   **Item Logging:** Easily add items to your pantry with details like name, quantity, category, purchase date, and expiration date.
*   **Expiration Tracking:** Keep track of expiration dates and get notified before items expire.
*   **Smart Shopping Lists:** Generate shopping lists automatically based on low-stock items or manually add items.
*   **Low-Stock Alerts:** Receive notifications when items are running low, so you never run out of essentials.
*   **Barcode Scanning:** Quickly add items by scanning their barcodes.
*   **Categorization:** Organize your pantry items into categories for easy browsing.
*   **Search Functionality:** Quickly find items in your pantry using keywords.
*   **Customizable Settings:** Personalize the app's behavior to fit your needs (e.g., notification preferences, low-stock thresholds).
*   **Cloud Sync:** (Future Feature) Synchronize your pantry data across multiple devices using a cloud backend.
*   **User-Friendly Interface:** Intuitive and easy-to-navigate design.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (comes bundled with Node.js)
*   [Ionic CLI](https://ionicframework.com/docs/cli) (`npm install -g @ionic/cli`)
*   [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
*   [Git](https://git-scm.com/)
*   A code editor like [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), or [Sublime Text](https://www.sublimetext.com/)
*   For iOS development:
    *   [Xcode](https://developer.apple.com/xcode/) (latest version)
    *   [CocoaPods](https://cocoapods.org/) (`sudo gem install cocoapods`)
*   For Android development:
    *   [Android Studio](https://developer.android.com/studio) (latest version) with the Android SDK

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [invalid URL removed]
    cd pantry_log
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1.  Launch the **Pantry Log** app.
2.  Tap the "**+**" button to add a new item to your pantry.
3.  Enter the item's name, quantity, category, purchase date, and expiration date. You can optionally scan the item's barcode.
4.  Tap "**Save**" to add the item to your pantry.
5.  View your pantry list, sorted by expiration date or category.
6.  Tap the "**Shopping List**" tab to view items that are running low or have expired. You can also add items manually to the shopping list.
7.  Adjust notification settings and other preferences in the "**Settings**" tab.

## Development

### Running Locally

1.  **Start the development server:**

    ```bash
    ionic serve
    ```

    This will open the app in your default web browser. The app will automatically reload if you change any of the source files.

2.  **Running on a device or emulator:**

    *   **iOS:**
        ```bash
        ionic capacitor run ios -l --external
        ```

    *   **Android:**
        ```bash
        ionic capacitor run android -l --external
        ```
        (The `-l` flag enables live reload, and `--external` allows your mobile device to connect to your development server over your local network.)

### Building for Production

1.  **Create a production build:**

    ```bash
    ionic build --prod
    ```

    This command will generate optimized build files in the `www` directory.

2.  **Build for iOS/Android:**

    ```bash
    ionic capacitor build ios
    ionic capacitor build android
    ```

    This will generate the respective native project in the `ios`/`android` directory, ready to be built using Xcode/Android Studio.

### Testing

*   **Unit Tests:**

    ```bash
    ng test
    ```

    This will run the unit tests using Karma.

*   **End-to-End (E2E) Tests:**

    ```bash
    ng e2e
    ```
    This project uses Protractor for E2E testing. Make sure you have a Selenium server running before executing e2e tests.

## Contributing

We welcome contributions to Pantry Log! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix:
    *   For a new feature: `git checkout -b feature/add-barcode-scanning`
    *   For a bug fix: `git checkout -b fix/issue-42`
3.  Make your changes and commit them with clear, descriptive commit messages, following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. Example:
      ```bash
      git commit -m "feat: implement barcode scanning functionality"
      ```
4.  Push your branch to your forked repository: `git push origin feature/add-barcode-scanning`
5.  Open a pull request to the `main` branch of the original repository, providing a detailed description of your changes.

Please ensure your code adheres to the project's coding style and includes tests for any new functionality.

Before submitting a major feature, consider opening an issue to discuss it with the maintainers first.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

*   Thanks to the Ionic team for creating such a fantastic framework and the Angular team for the powerful web framework.
*   This project was inspired by other pantry management apps and the desire to create a simple, user-friendly solution for tracking food items.
