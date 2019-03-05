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
const DAI = artifacts.require('./contracts/tokens/DAI.sol');
const TUSD = artifacts.require('./contracts/tokens/TUSD.sol');
const USDC = artifacts.require('./contracts/tokens/USDC.sol');


// Decimal
const decimals = web3.utils.toBN(18);
// Amount of token
const tokenAmount = web3.utils.toBN(10000000000);

const tokenAmountHex = '0x' + tokenAmount.mul(web3.utils.toBN(10).pow(decimals)).toString('hex');

module.exports = function (deployer, network, accounts) {
    let admin = accounts[0]
    deployer.deploy(BNB, admin, tokenAmountHex).then(async () => {
        await deployer.deploy(OMG, admin, tokenAmountHex);
        await deployer.deploy(ZRX, admin, tokenAmountHex);
        await deployer.deploy(AE, admin, tokenAmountHex);
        await deployer.deploy(TRX, admin, tokenAmountHex);
        await deployer.deploy(MKR, admin, tokenAmountHex);
        await deployer.deploy(BAT, admin, tokenAmountHex);
        await deployer.deploy(REP, admin, tokenAmountHex);
        await deployer.deploy(BTM, admin, tokenAmountHex);
        await deployer.deploy(NPXS, admin, tokenAmountHex);
        await deployer.deploy(WTC, admin, tokenAmountHex);
        await deployer.deploy(KCS, admin, tokenAmountHex);
        await deployer.deploy(GNT, admin, tokenAmountHex);
        await deployer.deploy(PPT, admin, tokenAmountHex);
        await deployer.deploy(SNT, admin, tokenAmountHex);
        await deployer.deploy(DGX, admin, tokenAmountHex);
        await deployer.deploy(MITH, admin, tokenAmountHex);
        await deployer.deploy(AION, admin, tokenAmountHex);
        await deployer.deploy(LRC, admin, tokenAmountHex);
        await deployer.deploy(FUN, admin, tokenAmountHex);
        await deployer.deploy(LRC, admin, tokenAmountHex);
        await deployer.deploy(FUN, admin, tokenAmountHex);
        await deployer.deploy(KNC, admin, tokenAmountHex);
        await deployer.deploy(LOOM, admin, tokenAmountHex);
        await deployer.deploy(PRFT, admin, tokenAmountHex);
        await deployer.deploy(TUSD, admin, tokenAmountHex);
        await deployer.deploy(DAI, admin, tokenAmountHex);
        await deployer.deploy(TUSD, admin, tokenAmountHex);
        await deployer.deploy(USDC, admin, tokenAmountHex);
    })
};
