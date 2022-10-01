# electronade-endecoder

It's a package for electronade that provides some feature about encryption.
See [electronade-endecoder.netlify.app](https://electronade-endecoder.netlify.app/) for details.

![npm](https://img.shields.io/npm/v/electronade-endecoder)
![NPM](https://img.shields.io/npm/l/electronade-endecoder)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/electronade-endecoder)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/electronade-endecoder)
![Maintenance](https://img.shields.io/maintenance/yes/2022)


# Installation
``` shell
npm install electronade-endecoder
```

# What Exposed
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
        salt: string;
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

# Usage
See electronade usage for details.

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
