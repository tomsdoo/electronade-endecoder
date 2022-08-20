import { decode } from "./decode";
import { encode } from "./encode";

export const handles = [
  {
    eventName: "electronade-endecoder:encode",
    handler: encode
  },
  {
    eventName: "electronade-endecoder:decode",
    handler: decode
  }
];
