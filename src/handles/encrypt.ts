import { SecretKey } from "endecoder";

interface Params {
  plainBuffer: Buffer;
  password: string;
  salt: string;
}

export async function encrypt(
  event: any,
  { plainBuffer, password, salt }: Params
): Promise<string> {
  return await SecretKey.activate({
    password,
    salt,
  }).encrypt(plainBuffer);
}
