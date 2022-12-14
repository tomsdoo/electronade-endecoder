import { decode } from "./decode";
import { encode } from "./encode";
import { encrypt } from "./encrypt";
import { decrypt } from "./decrypt";

export const handles = [
  {
    eventName: "electronade-endecoder:encode",
    handler: encode,
  },
  {
    eventName: "electronade-endecoder:decode",
    handler: decode,
  },
  {
    eventName: "electronade-endecoder:encrypt",
    handler: encrypt,
  },
  {
    eventName: "electronade-endecoder:decrypt",
    handler: decrypt,
  },
];
