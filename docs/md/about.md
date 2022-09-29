# electronade-endecoder

It's a package for [electronade](https://electronade.netlify.app/) that provides some feature about encryption.

## installation
``` shell
npm install electronade-endecoder
```

## exposed

``` typescript
electronade: {
  endecoder: {
    encode: (
      params: {
        plainText: string;
        password: string;
        salt: string;
      }
    ) => Promise<string>;

    decode: (
      params: {
        encodedText: string;
        password: string;
        salt: string;
      }
    ) => Promise<string>;

    encrypt: (
      params: {
        plainBuffer: Buffer;
        password: string;
        salt:string;
      }
    ) => Promise<string>;

    decrypt: (
      params: {
        encodedText: string;
        password: string;
        salt: string;
      }
    ) => Promise<Buffer>;
  }
}
```

## usage
``` javascript
const [
  plainText,
  password,
  salt
] = [
  "this is a test",
  "password",
  "salt"
];

const encodedText = await electronade.endecoder
  .encode({ plainText, password, salt });

assert.equal(
  await electronade.endecoder
    .decode({ encodedText, password, salt }),
  plainText
);

```
