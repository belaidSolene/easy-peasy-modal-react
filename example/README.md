This example was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It is linked to the react-simple-modal package in the parent directory for development purposes.

You can run `npm install` and then `npm start` to test your package.

\*\*Troubleshooting

If you encounter the following error when starting the project:

```bash
opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

```

You can resolve it by using the following command instead:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm start

```
