# HyperRamp- P2P Onramp and Offramp Starter kit

This repository provides a starter kit for building a P2P (Peer-to-Peer) onramp and offramp platform. It includes a clean code structure and an easy-to-navigate architecture, making it simple for developers to plug in their business logic and start working without worrying about the client UI.

## Features

- **Clean Code Structure:** The project is organized with a clean and modular code structure, making it easy to understand and maintain.

- **Inbuilt Mini Design System:** This repository comes with an inbuilt mini design system, including primitive components, that you can leverage to build your user interface quickly.

- **TypeSafe with TypeScript:** The project is set up with TypeScript, ensuring type safety and improved development workflows.

## Tech Stack

- **React Native:** The project is built using React Native, allowing you to develop for both iOS and Android platforms with a single codebase.

- **Styled-Components:** Styling is done with Styled-Components, enabling you to create styled and responsive components with ease.

- **TypeScript:** Type safety and improved code quality are achieved through TypeScript, making development more robust and efficient.

## Getting Started

Follow these steps to get started with the P2P Onramp and Offramp project:

1. Clone the repository:

   ```bash
   git clone https://github.com/Koushith/HyperRamp-p2p-starter-code.git
   ```

2. Install dependencies:

   ```bash
   cd p2p-onramp-offramp
   npm install
   ```

3. Start developing your business logic and connect it to the provided components and design system.

4. Customize the design system to match your branding and visual requirements.

5. Build and test your application on both iOS and Android platforms.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## How To use it?

- Plug in your business logic. thats all

### 1. React Navigation

Integrate React Navigation for handling navigation within your app. React Navigation provides an easy and customizable way to navigate between screens and manage navigation stacks.

**Installation:**

```bash
npm install @react-navigation/native
```

1. Configure your navigation structure within the `navigation` directory.
2. Implement different navigation stacks for various sections of your app.

### 2. Primitive Components

Extend the inbuilt design system with additional primitive components that can be commonly used across your application. These might include buttons, input fields, modals, and more. Organize these components within the `components` directory.

## Folder Structure

Update the directory structure to reflect the new additions:

```
src
 - components
   - primitive
       - Input
       - TextArea
       - Card
       - Modal
       - Toasts
       - Loader, etc
    - appComponents
 - screens
   - onboarding
   - home
   - buy
   - sell
   - recieve
   - notification
   - add-new-bank
   - add-new-wallet
   - account-settings

 - navigation
   - AuthNavigator
   - MainNavigator
 - utils
   - constants
   - helpers
 - theme
     - colors
     - typography
     - spacing
     - index
 - hooks
 - redux (new directory for Redux setup)
   - actions
   - reducers
   - store
```

## Surprise----

if you are intrested in building this, we got you covered🚀

HyperRamp is a decentralized peer to peer on/off ramp based on https://www.reclaimprotocol.org/

Here is the Figma - https://www.figma.com/file/0u2xwd8lK7HI8z7WaBKADK/HyperRamp?type=design&node-id=0-1&mode=design

### How does it work?

- A has crypto on-chain
- B has fiat in his/her bank account
- A submits their bank account number and bank name to a smart contract
- B submits their bank account number and bank name to a smart contract
- A deposits crypto into an on-chain smart contract (escrow)
- B transfer the fiat to A’s bank account
- B generates a zero knowledge proof that they did the transfer
- B submits the zero knowledge proof to escrow to release the crypto

### How does Reclaim itself work?

here are some documents to read:

- https://apps.apple.com/ru/app/reclaim-wallet/id6447378796?l=en
- https://play.google.com/store/apps/details?id=com.credentialswallet
- https://docs.reclaimprotocol.org/

## Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

## Developer

**Developer:** Koushith Amin

- **Twitter:** [@koushithAmin](https://twitter.com/koushithAmin)
- **Portfolio:** [koushith.com](https://koushith.com)

## Usage

This project is designed to provide a solid foundation for building P2P onramp and offramp solutions. You can easily customize and extend it to fit your specific business requirements.

## License

This project is open-source and available under the [MIT License](LICENSE).

Happy coding! If you have any questions or need assistance, feel free to reach out to me.

---

Feel free to replace the placeholders with your actual repository information and expand the README to include more specific details about your project, such as installation instructions, usage examples, and any other relevant information.
