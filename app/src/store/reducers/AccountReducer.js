import { Keypair } from "@solana/web3.js"
import { accountTypes } from "../action_types/accountTypes"

const programSecretKeyString = "[...]"
const programSecretKey = Uint8Array.from(JSON.parse(programSecretKeyString))
const programKeypair = Keypair.fromSecretKey(programSecretKey)

const initialState = {
  loading: false,
  isError: false,
  errMsg: null,
  wallet: null,
  accountId: "",
  programId: programKeypair.publicKey,
}
