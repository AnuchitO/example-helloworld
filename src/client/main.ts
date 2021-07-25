/**
 * Hello world
 */

import {
  establishConnection,
  establishPayer,
  checkProgram,
  sayHello,
  reportGreetings,
} from './hello_world';
import {
  Keypair,
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  SystemProgram,
  TransactionInstruction,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';

async function main() {
  console.log("Let's say hello to a Solana account...");

  // Establish connection to the cluster
  const connection: Connection = await establishConnection();

  // Determine who pays for the fees
  await establishPayer(connection);

  // Check if the program has been deployed
  await checkProgram(connection);

  // Say hello to an account
  await sayHello(connection);

  // Find out how many times that account has been greeted
  await reportGreetings(connection);

  console.log('Success');
}

main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },
);
