import { SecretKey } from "endecoder";

interface Params {
  encodedText: string;
  password: string;
  salt: string;
}

export function decode(event: any, { encodedText, password, salt }: Params): string {
  return SecretKey.activate({
    password,
    salt,
  }).decode(encodedText);
}
