# Bot Battlr

Welcome to **Bot Battlr**, the ultimate web app for building and managing your own custom Bot Army! Developed by a galactic web developer, this app allows you to browse through a collection of bots and enlist them in your own army. Use your strategy to build a powerful team, and manage them by releasing or discharging them when necessary.

## Features

As a user, you have the following capabilities:


### 1. Add Bots to Your Army
- **Click to Enlist**: Add an individual bot to your army by clicking on it. Once selected, the bot will be added to the `YourBotArmy` component.
- **Unique Enlistment**: Each bot can be enlisted only **once** into your army. The bot will still appear in the `BotCollection` even after enlisting.

### 2. Manage Your Army
- **Release a Bot**: You can release a bot from your army by clicking on it in the `YourBotArmy` component. Once released, the bot disappears from your army but remains available in the `BotCollection` for future enlistment.

### 4. Discharge a Bot Permanently
- **Permanent Removal**: Discharge a bot from your service forever by clicking the red button marked with an "x". This action will:
  - Delete the bot from the backend.
  - Remove the bot from the `YourBotArmy` on the frontend.

## Project Structure

- **Home.js**: The main container component, responsible for fetching bots and managing their states.
 Displays all available bots that can be enlisted in the army.
- **MyBots.js**: Displays the bots currently enlisted in your army.
- **Details.js**: Shows the detailed view of each bot.

## Usage

### Viewing Bots

- All bots are listed in the `Home` component. Click on any bot to enlist it in your army.

### Managing Your Army

- Your enlisted bots appear in the `MyBots` component. 
- Click on a bot to release it from your army, or click the "x" button to discharge it permanently.

### Discharge

- Discharging a bot removes it completely from the app, both frontend and backend.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
