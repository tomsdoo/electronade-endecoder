import { SecretKey } from "endecoder";

type Params = {
  encodedText: string;
  password: string;
  salt: string;
};

export function decrypt(
  event: any,
  { encodedText, password, salt }: Params
) {
  return SecretKey.activate({
    password,
    salt
  })
    .decrypt(encodedText);
}
