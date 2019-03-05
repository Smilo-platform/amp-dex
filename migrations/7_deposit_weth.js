const WETH = artifacts.require('./contracts/utils/WETH9.sol');
const BNB = artifacts.require('./contracts/tokens/BNB.sol');
const OMG = artifacts.require('./contracts/tokens/OMG.sol');
const ZRX = artifacts.require('./contracts/tokens/ZRX.sol');
const AE = artifacts.require('./contracts/tokens/AE.sol');
const TRX = artifacts.require('./contracts/tokens/TRX.sol');
const MKR = artifacts.require('./contracts/tokens/MKR.sol');
const BAT = artifacts.require('./contracts/tokens/BAT.sol');
const REP = artifacts.require('./contracts/tokens/REP.sol');
const BTM = artifacts.require('./contracts/tokens/BTM.sol');
const NPXS = artifacts.require('./contracts/tokens/NPXS.sol');
const WTC = artifacts.require('./contracts/tokens/WTC.sol');
const KCS = artifacts.require('./contracts/tokens/KCS.sol');
const GNT = artifacts.require('./contracts/tokens/GNT.sol');
const PPT = artifacts.require('./contracts/tokens/PPT.sol');
const SNT = artifacts.require('./contracts/tokens/SNT.sol');
const DGX = artifacts.require('./contracts/tokens/DGX.sol');
const MITH = artifacts.require('./contracts/tokens/MITH.sol');
const AION = artifacts.require('./contracts/tokens/AION.sol');
const LRC = artifacts.require('./contracts/tokens/LRC.sol');
const FUN = artifacts.require('./contracts/tokens/FUN.sol');
const KNC = artifacts.require('./contracts/tokens/KNC.sol');
const LOOM = artifacts.require('./contracts/tokens/LOOM.sol');
const PRFT = artifacts.require('./contracts/tokens/PRFT.sol');

let weth;


// Decimal
const decimals = web3.utils.toBN(18);
// Amount of token
const tokenAmount = web3.utils.toBN(10000);

const tokenAmountHex = '0x' + tokenAmount.mul(web3.utils.toBN(10).pow(decimals)).toString('hex');

module.exports = function (deployer, network, accounts) {
  if (network === 'development') return

    WETH.deployed()
        .then(async (_weth) => {
            weth = _weth;
            let deposits = []

            for(let account of accounts) {
              deposits.push(weth.deposit({ from: account, value: tokenAmountHex }))
            }

            await Promise.all(deposits)
        })
};