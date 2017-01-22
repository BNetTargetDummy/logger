# TargetDummy Logger

**Install**
```
$ npm i BNetTargetDummy/logger
```

**Require**
```js
const logToConsole = require('@targetdummy/logger')('console');
const logToFile = require('@targetdummy/logger')('file');
```

**Usage**
```js
const objectToBeLogged = { data: 'test' };

logToConsole.info(objectToBeLogged); // only outputs to console.
logToFile.info(objectToBeLogged); // outputs to console and persists to `targetdummy.log`
```

**Result**
```json
{"request_id":"72e118f0-e057-11e6-8fda-af6458b82cef","level":"info","message":"{ data: 'test' }","timestamp":"2017-01-22T04:01:27.554Z"}
```
