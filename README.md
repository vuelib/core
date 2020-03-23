# @kernel-js/auth<br />
[![Build Status](https://travis-ci.org/kernel-js/auth.svg?branch=master)](https://travis-ci.org/kernel-js/auth)
<!-- [![Coverage Status](https://coveralls.io/repos/github/kernel-js/auth/badge.svg?branch=master)](https://coveralls.io/github/kernel-js/auth?branch=master) -->
<br />

<!-- # Why

First of all I created this to support development of [Kernel Framework](https://www.npmjs.com/package/@kernel-js/framework).<br />
Just like the rest of the packages that make up the framework, I make the most of other existing libraries that are well 
tested on a day-to-day basis. The idea is not to reinvent the wheel, just join the ideas in a lightweight framework 
(the focus is on the client side), simple to use and make the code on the front more beautiful and organized.  -->

# Install
```cmd
npm install @kernel-js/auth
```

# Enums

<a name="storageMethods" /></a>

## StorageMethods

Exposes the possible ways of storing the data received through native browser drives.

```js
import { StorageMethods } from '@kernel-js/auth';

StorageMethods.LocalStorage
StorageMethods.CookieStorage
StorageMethods.SessionStorage
```

# Classes

<a name="oauth" /></a>

## OAuthAuthentication

Used for OAuth type password authentication. By default, it uses the model established by Laravel Passport.

	new OAuthAuthentication(config);

__Arguments__

* `config` - Object with the authentication settings.
  * `request` - It waits for an Axios instance and will be used to make the requests.
  * `storage - method` - Expect a StorageMethods enum that will tell you how to persist the data.
  * `client - id` - OAuth client id.
  * `client - scope` - Scope says you want to get (optional).
  * `client - secret` - Secret of the client OAuth.

```js
import Axios from 'axios';
import { StorageMethods, OAuthAuthentication } from '@kernel-js/auth';

new OAuthAuthentication({
  storage: {
    method: StorageMethods.LocalStorage,
  },
  request: Axios.create({
    baseURL: 'http://localhost:8000',
    headers: {},
  }),
  client: {
    id: '1',
    scope: '',
    secret: 'VRoONFr4soNZkoSYXiYZzcx8H5VfJdUt9IYk1l8o',
  },
});
```

# Methods

All classes use by default the interface Authentication that defines some common methods, being them.

<a name="login" /></a>

## Login

Method that authenticates the user and returns their access tokens, in addition to the expiration date of the user.

	new OAuthAuthentication(config...).login(data, url);

__Arguments__

* `data` -  Object that holds the user data as the username and password.
* `url (Optional)` - path in which the authentication request will be sent. By default `/oauth/token` is used.

```js
import Axios from 'axios';
import { StorageMethods, OAuthAuthentication } from '@kernel-js/auth';

const auth = new OAuthAuthentication(config...);

auth
  .login({
    'username': 'foo@foo.com',
    'password': '123456',
  })
  .then(response => {
    console.log(auth.isAuthenticated());
  });
```

<a name="logout" /></a>

## Logout

Clears user authentication data.

	new OAuthAuthentication(config...).logout();

```js
import Axios from 'axios';
import { StorageMethods, OAuthAuthentication } from '@kernel-js/auth';

const auth = new OAuthAuthentication(config...);

auth
  .logout()
  .then(response => {
    console.log(auth.isGuest());
  });
```

<a name="isGuest" /></a>

## isGuest

Check if an authenticated user exist.

	new OAuthAuthentication(config...).isGuest();

```js
import Axios from 'axios';
import { StorageMethods, OAuthAuthentication } from '@kernel-js/auth';

const auth = new OAuthAuthentication(config...);

console.log(auth.isGuest());
```

<a name="isAuthenticated" /></a>

## isAuthenticated

Opposite the isGuest method.

	new OAuthAuthentication(config...).isAuthenticated();

```js
import Axios from 'axios';
import { StorageMethods, OAuthAuthentication } from '@kernel-js/auth';

const auth = new OAuthAuthentication(config...);

console.log(auth.isAuthenticated());
```

---------------------------------------

# Authors

This library was developed by Bruno Santos, Carlos Escouto and Gustavo Siqueira

# Contribute

Please do! Check out our [Contributing guidelines](CONTRIBUTING.md).

# License

[MIT](LICENSE) © 2018-2019 Kernel JS
