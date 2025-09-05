# Tic-Tac-Toe

A simple Tic-Tac-Toe game built with React Native and Expo.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh/)
- [Expo Go](https://expo.dev/client) app on your mobile device.

### Installation and Running the App

1.  Clone the repository.
2.  Install the dependencies:
    ```bash
    bun install
    ```
3.  Start the development server:
    ```bash
    bun start
    ```
4.  Scan the QR code with the Expo Go app on your device.

### Other Scripts

-   `bun run android`: Run on an Android device or emulator.
-   `bun run ios`: Run on an iOS device or simulator.
-   `bun run web`: Run in a web browser.
-   `bun run format`: Format the code with Prettier.

## Technologies Implemented

-   **React:** A JavaScript library for building user interfaces.
-   **React Native:** A framework for building native apps with React.
-   **Expo:** A platform for making universal React applications.
-   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.

## Important Versions

-   **Expo:** `^53.0.0`
-   **React:** `19.0.0`
-   **React Native:** `0.79.5`
-   **TypeScript:** `^5.3.3`

## Project Structure

The project structure is as follows:

```
.
├── src
│   └── components
│       ├── board
│       │   ├── board.constants.ts
│       │   ├── board.hook.tsx
│       │   ├── board.tsx
│       │   └── board.types.ts
│       ├── game
│       │   └── game.tsx
│       └── square
│           ├── square.tsx
│           └── square.types.ts
├── App.tsx
├── package.json
└── tsconfig.json
```

-   `src/components`: Contains the main React components of the game.
    -   `board`: The game board component and its related logic.
    -   `game`: The main game component that orchestrates the game.
    -   `square`: A single square on the game board.
-   `App.tsx`: The main entry point of the application.

## Code Formatting

This project uses [Prettier](https://prettier.io/) for code formatting. To format the code, run:

```bash
bun run format
```
