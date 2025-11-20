# 🎲 Blockchain Dice Game - Play-to-Earn DApp

A fully functional, decentralized dice game built on Ethereum blockchain where players can bet on numbers 1-6 and win 6x their bet! Built with Next.js, Solidity, and modern Web3 technologies.

![Blockchain Gaming](https://img.shields.io/badge/Blockchain-Gaming-blue)
![Solidity](https://img.shields.io/badge/Solidity-^0.8.19-363636)
![Next.js](https://img.shields.io/badge/Next.js-13.4.19-black)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Overview

This is a complete Play-to-Earn (P2E) blockchain-based dice game where players can:
- 🎯 Predict numbers from 1-6
- 💰 Place bets in ETH (0.001 - 1 ETH)
- 🎊 Win 6x their bet on correct predictions
- 📊 Track statistics and game history
- 🔐 Secure, transparent, and provably fair gameplay

## ✨ Features

### 🎮 Game Mechanics
- **Dice Roll Prediction**: Choose a number between 1-6
- **Flexible Betting**: Bet anywhere from 0.001 to 1 ETH
- **High Payout**: Win 6x your bet amount on correct prediction
- **Instant Results**: Fast blockchain transactions on local testnet
- **House Edge**: Fair 5% house edge

### 💻 Frontend Features
- **Wallet Integration**: Seamless MetaMask connection via RainbowKit
- **Real-time Balance**: Live ETH balance tracking
- **Animated Dice**: Smooth rolling animations for engaging UX
- **Statistics Dashboard**: Track wins, losses, win rate, and total earnings
- **Game History**: Complete history with filtering and sorting
- **Responsive Design**: Works perfectly on desktop and mobile
- **Toast Notifications**: Real-time feedback for all actions

### 🔒 Smart Contract Features
- **Secure Betting**: Solidity-based smart contract with validation
- **Owner Controls**: Admin functions for fund management
- **Event Logging**: All games tracked on-chain
- **Fund Management**: Deposit/withdraw functions for house bankroll
- **Configurable Settings**: Adjustable bet limits and house edge

## 🛠️ Tech Stack

### Frontend
- **Next.js 13.4.19** - React framework
- **RainbowKit** - Wallet connection UI
- **Wagmi** - React hooks for Ethereum
- **TanStack Query** - Data fetching and caching
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Ethers.js** - Ethereum library
- **React Hot Toast** - Notifications
- **Lucide React** - Icons

### Blockchain
- **Solidity ^0.8.19** - Smart contract language
- **Hardhat** - Development environment
- **Ethereum** - Blockchain platform
- **Local Testnet** - For development and testing

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** v20 or higher
- **npm** or **yarn** package manager
- **MetaMask** browser extension
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/saksham-source/blockchain-project-1.git
cd blockchain-project-1
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install web3 dependencies
cd web3
npm install
cd ..
```

### 3. Start the Blockchain

```bash
# Make the script executable
chmod +x start-blockchain.sh

# Start Hardhat node and deploy contract
./start-blockchain.sh
```

This will:
- Start a local Hardhat blockchain node
- Deploy the NumberPredictionGame smart contract
- Fund the contract with 10 ETH
- Display contract address and test accounts

### 4. Configure MetaMask

1. Open MetaMask and add a new network:
   - **Network Name**: Localhost
   - **RPC URL**: http://127.0.0.1:8545
   - **Chain ID**: 1337
   - **Currency Symbol**: ETH

2. Import test account:
   - Copy private key from terminal output
   - Import into MetaMask
   - You'll have ~10,000 ETH for testing

### 5. Start the Frontend

```bash
# In a new terminal
npm run dev
```

The app will be available at `http://localhost:3001`

### 6. Start Playing! 🎮

1. Connect your MetaMask wallet
2. Select a number (1-6)
3. Enter your bet amount
4. Click "Place Bet"
5. Watch the dice roll and see if you win!

## 📁 Project Structure

```
blockchain-project-1/
├── components/           # React components
│   ├── Header.jsx       # Navigation and wallet info
│   ├── GameBoard.js     # Main game interface
│   ├── Dice.jsx         # Animated dice component
│   ├── NumberSelector.js # Number selection UI
│   ├── StatsPanel.jsx   # Statistics display
│   ├── GameHistory.jsx  # Game history table
│   └── ResultModal.jsx  # Win/loss modal
├── hooks/               # Custom React hooks
│   ├── useGameContract.js  # Contract interaction
│   └── useGameHistory.js   # History management
├── pages/               # Next.js pages
│   ├── _app.js         # App wrapper with providers
│   └── index.js        # Home page
├── config/              # Configuration files
│   └── wagmi.js        # Wagmi and RainbowKit setup
├── utils/               # Utility functions
│   ├── contract.js     # Contract utilities
│   └── contractABI.js  # Contract ABI
├── web3/                # Blockchain code
│   ├── contracts/      # Solidity contracts
│   │   └── PlayToEarn.sol
│   ├── scripts/        # Deployment scripts
│   │   ├── deploy.js
│   │   └── test-game.js
│   └── hardhat.config.js
└── styles/              # CSS styles
    └── globals.css
```

## 🎯 How to Play

### Game Rules

1. **Select a Number**: Choose any number from 1 to 6
2. **Place Your Bet**: Enter amount between 0.001 and 1 ETH
3. **Confirm Transaction**: Approve the bet in MetaMask
4. **Watch the Dice Roll**: Animated dice shows the result
5. **Collect Winnings**: If you win, 6x your bet is sent automatically!

### Betting Limits

- **Minimum Bet**: 0.001 ETH
- **Maximum Bet**: 1.0 ETH
- **Payout Multiplier**: 6x on win
- **House Edge**: 5%

### Winning Odds

- **Probability**: 1 in 6 (16.67%)
- **Payout**: 6x your bet
- **Expected Return**: ~95% (accounting for house edge)

## 📊 Smart Contract Details

### Contract Address
After deployment, you'll find the contract at the address shown in the terminal.

### Main Functions

```solidity
// Place a bet
function play(uint8 _predictedNumber) external payable

// Get game details
function getGame(uint256 _gameId) external view returns (...)

// Get player's games
function getPlayerGames(address _player, uint256 _limit) external view

// Owner functions
function depositFunds() external payable
function withdraw(uint256 _amount) external onlyOwner
function setBetLimits(uint256 _minBet, uint256 _maxBet) external onlyOwner
```

### Events

```solidity
event GamePlayed(
    uint256 indexed gameId,
    address indexed player,
    uint256 betAmount,
    uint8 predictedNumber,
    uint8 resultNumber,
    bool won,
    uint256 payout
)

event FundsDeposited(address indexed depositor, uint256 amount)
event FundsWithdrawn(address indexed owner, uint256 amount)
```

## 🔧 Development

### Run Tests

```bash
cd web3
npx hardhat test
```

### Deploy to Network

```bash
cd web3
npx hardhat run scripts/deploy.js --network <network-name>
```

### Test Game Contract

```bash
cd web3
npx hardhat run scripts/test-game.js --network localhost
```

## 🐛 Troubleshooting

### MetaMask Not Connecting
- Ensure you're on the correct network (Chain ID: 1337)
- Try disconnecting and reconnecting
- Clear MetaMask cache if needed

### Balance Shows 0
- Click the refresh icon next to balance
- Disconnect and reconnect wallet
- Verify you have ETH in your account

### Contract Not Found
- Make sure blockchain is running (`./start-blockchain.sh`)
- Check contract address in `.env.local` matches deployed address
- Verify network configuration in `config/wagmi.js`

### Transaction Fails
- Check you have enough ETH for gas
- Ensure bet amount is within limits (0.001 - 1 ETH)
- Verify contract has sufficient balance for payouts

## 📚 Additional Resources

- [Solidity Documentation](https://docs.soliditylang.org/)
- [Hardhat Guides](https://hardhat.org/getting-started/)
- [Next.js Documentation](https://nextjs.org/docs)
- [RainbowKit Docs](https://www.rainbowkit.com/docs/introduction)
- [Wagmi Documentation](https://wagmi.sh/)

## 🔮 Future Enhancements

- [ ] Chainlink VRF for provably fair randomness
- [ ] Multiple game modes (higher/lower, odd/even)
- [ ] Leaderboard system
- [ ] Token rewards (ERC-20)
- [ ] Multiplayer tournaments
- [ ] Mobile app (React Native)
- [ ] Mainnet deployment
- [ ] Social features and sharing

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⚠️ Disclaimer

This project is for educational purposes only. The random number generation used is NOT suitable for production use with real money. For production deployment, integrate Chainlink VRF or similar secure randomness solutions.

## 👨‍💻 Author

**Saksham**
- GitHub: [@saksham-source](https://github.com/saksham-source)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you learn blockchain development!

---

**Built with ❤️ using Next.js, Solidity, and Web3 technologies**
