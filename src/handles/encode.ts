import { SecretKey } from "endecoder";

type Params = {
  plainText: string;
  password: string;
  salt: string;
};

export function encode(
  event: any,
  { plainText, password, salt }: Params
) {
  return SecretKey.activate({
    password,
    salt
  })
    .encode(plainText);
}
