import { SecretKey } from "endecoder";

type Params = {
  plainBuffer: Buffer;
  password: string;
  salt: string;
};

export function encrypt(
  event: any,
  { plainBuffer, password, salt }: Params
) {
  return SecretKey.activate({
    password,
    salt
  })
    .encrypt(plainBuffer);
}
