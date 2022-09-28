import { SecretKey } from "endecoder";

interface Params {
  plainText: string;
  password: string;
  salt: string;
}

export function encode(
  event: any,
  { plainText, password, salt }: Params
): string {
  return SecretKey.activate({
    password,
    salt,
  }).encode(plainText);
}
