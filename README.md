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
{"request_id":"a7d37d00-e066-11e6-afcb-452332f8cf95","level":"info","message":"{\"data\":\"test\"}","timestamp":"2017-01-22T05:50:18.834Z"}
```
