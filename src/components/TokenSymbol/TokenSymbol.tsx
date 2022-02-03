import React from 'react';

//Graveyard ecosystem logos
import tombLogo from '../../assets/img/t_2OMB-01.png';
import tShareLogo from '../../assets/img/t_2SHARE-01.png';
import tombLogoPNG from '../../assets/img/2omb-01.png';
import tShareLogoPNG from '../../assets/img/t_2SHARE-01.png';
import tBondLogo from '../../assets/img/2BOND-01.png';

// import tombLogo from '../../assets/img/crypto_tomb_cash.svg';
// import tShareLogo from '../../assets/img/crypto_tomb_share.svg';
// import tombLogoPNG from '../../assets/img/crypto_tomb_cash.f2b44ef4.png';
// import tShareLogoPNG from '../../assets/img/crypto_tomb_share.bf1a6c52.png';
// import tBondLogo from '../../assets/img/crypto_tomb_bond.svg';

import tombFtmLpLogo from '../../assets/img/2OMB-WFTM.png';
import tshareFtmLpLogo from '../../assets/img/2SHARES-WFTM.png';

import wftmLogo from '../../assets/img/ftm_logo_blue.svg';
import wethLogo from '../../assets/img/weth.png';
import rtombLogo from '../../assets/img/crypto_tomb_cash.svg';
import shibaLogo from '../../assets/img/mimlogo.png';

import tombtshares from '../../assets/img/2OMB-2SHARES.png';

import usdc from '../../assets/img/USDC.png';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  TOMB: tombLogo,
  TOMBPNG: tombLogoPNG,
  TSHAREPNG: tShareLogoPNG,
  TSHARE: tShareLogo,
  TBOND: tBondLogo,
  WFTM: wftmLogo,
  WETH: wethLogo,
  MIM: shibaLogo,
  // RTOMB: rtombLogo,
  '2OMB-FTM-LP': tombFtmLpLogo,
  '2SHARE-FTM-LP': tshareFtmLpLogo,
  '2OMB-2SHARE-LP': tombtshares,
  'USDC': usdc,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    return <img src={logosBySymbol["TOMB"]} alt={`Tomb Logo`} width={size} height={size} />;
    // throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
};

export default TokenSymbol;
