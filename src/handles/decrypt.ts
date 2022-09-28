import { SecretKey } from "endecoder";

interface Params {
  encodedText: string;
  password: string;
  salt: string;
}

export async function decrypt(
  event: any,
  { encodedText, password, salt }: Params
): Promise<Buffer> {
  return await SecretKey.activate({
    password,
    salt,
  }).decrypt(encodedText);
}
