# nuxt-website-lock

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![License][license-src]][license-href]

> 

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-website-lock` dependency to your project

```bash
yarn add nuxt-website-lock # or npm install nuxt-website-lock
```

2. Add `nuxt-website-lock` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-website-lock',

    // With options
    ['nuxt-website-lock', { /* module options */ }]
  ]
}
```

## Usage
To enable the website lock, you need to pass the app 2 `.env` variables

* `These variables need to be passed via .env or env key in nuxt.config.js`

| Env variable name      | Default value   | Possile values                            |
|------------------------|-----------------|-------------------------------------------|
| `WEB_SITE_LOCK_ENABLED` | default: `null` | options: `true`/`false`                   |
| `WEB_SITE_LOCK_PASSWORD` | default: `null` | any string (will be simply hashed to md5) |

## Module options
| Option name              | Description                                                                                                              | Default value                 | Possible values                |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------|-------------------------------|--------------------------------|
| `formPath`               | url at which the form for website lock will be                                                                           | default: `/website-lock`      | any string starting with slash |
| `enableServerValidation` | whether password should be validated agains BE (tailor fitted for personal use, will be expanded upon in later versions) | default: `false`              | options: `true`/`false`        |
| `cookieName`             | name of the cookie under which the hashed token will be stored                                                           | default: `websiteLock._token` | any string, cannot be `null`   |
| `cookie`                 | object storing some cookie                                                                                               |                               |                                |
| `cookie.prefix`          | prefix of `cookieName` being stored                                                                                      | default: `''`                 | any string, cannot be `null`   |
| `cookie.expires`         | number of days in which the cookie will expire                                                                           | default: `2`                  | any unsigned integer           |

## Todo
- [ ] better customizability

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Patrik Jánosdeák

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-website-lock/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-website-lock

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-website-lock.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-website-lock

[github-actions-ci-src]: https://github.com/truesteps/nuxt-website-lock/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/truesteps/nuxt-website-lock/actions?query=workflow%3Aci

[license-src]: https://img.shields.io/npm/l/nuxt-website-lock.svg
[license-href]: https://npmjs.com/package/nuxt-website-lock
