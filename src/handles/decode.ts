import { SecretKey } from "endecoder";

type Params = {
  encodedText: string;
  password: string;
  salt: string;
};

export function decode(event: any, { encodedText, password, salt }: Params) {
  return SecretKey.activate({
    password,
    salt,
  }).decode(encodedText);
}
