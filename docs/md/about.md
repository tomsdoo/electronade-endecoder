# electronade-endecoder

It's a package for [electronade](https://electronade.netlify.app/) that provides some feature about encryption.

![npm](https://img.shields.io/npm/v/electronade-endecoder)
![NPM](https://img.shields.io/npm/l/electronade-endecoder)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/electronade-endecoder)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/electronade-endecoder)
![Maintenance](https://img.shields.io/maintenance/yes/2022)

[![](https://nodei.co/npm/electronade-endecoder.svg?mini=true)](https://www.npmjs.com/package/electronade-endecoder)

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
