import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
  // ['CU7ZkyUfKnxYjUY1Lo71sez2D1AJLqGoTbWtuUAst1qq', { name: 'Simple Raffle' }],
  // ['Aq5cZhbR28TYqt9SVAopGQVq5Q64BLmZE3kURxCHuv3U', { name: 'Second Raffle' }],
  // ['C8MksYdZq3jasJoLkuZN6frT9TuZ2STzCkCCDqnrmKhv', { name: 'Third Raffle' }],
  // ['3kTRXdm2xKejFkNfKxw88GV2cGZaASfkjysJ48fwNsYJ', { name: 'SOL Raffle' }],
  // ['HhppMJ3x9cdNnXPZKJTR8zCzWEmNx5RGLRgx94nt8AKQ', { name: 'SOL Raffle 2' }],
  // ['5Po1nyZ9UAQzjS2KdV8b6Lwk3y9hwxrL1po2dvfn6dr9', { name: 'MEME Raffle' }],
  // [
  //   '9FoUjfUpWwhHYaGKM9G5eYab7qow3oWqdo2G5Ehj3h5L',
  //   {
  //     name: 'Oh my dRaffle',
  //     overviewImageUri: '/resources/001-mainnet-launch.gif',
  //     alternatePurchaseMints: [
  //       new PublicKey('So11111111111111111111111111111111111111112'),
  //     ],
  //   },
  // ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    'sPcMGrTuiBz3dQ5kJu9MBj65E6qBqXpZ83VYxzMpFoj',
    {
      name: 'HIGH ROLLER #726 $PNP RAFFLE',
      overviewImageUri: '/resources/PRIZE1.png',
   },
  ],
 [
    'GeUFserhuyTrLQdANwHWrcREX866pBSUskHPXFxnUFt7',
    {
      name: 'HIGH ROLLER #1080 SOL RAFFLE',
      overviewImageUri: '/resources/PRIZE2.png',
    },
  ],
  [
    '3Jf5ix2eL1Pqzk6ESH9UqB83q7LzQ29tqAmsRp1bs2MT',
    {
      name: 'HIGH ROLLER #1118 $PNP RAFFLE - WAGMI DEGEN',
      overviewImageUri: '/resources/PRIZE3.png',
    },
  ],
  [
    '8avT7STj83wQd9sEAXobj6Pmo4ZpJmQ6XzJtWyoA9Vmx',
    {
      name: 'HIGH JUICE #82 SOL RAFFLE',
      overviewImageUri: '/resources/JuiceLogo.png',
    },
  ],
  // [
    //'',
    //{
    //  name: 'LEDGER RAFFLE',
    //  overviewImageUri: '/resources/LEDGER NANO.jpg',
    //},
  //],
]);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
