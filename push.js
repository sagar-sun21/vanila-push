var push = require('web-push');

let vapidKeys = {
    publicKey: 'BF3AisMNRxtLPhamBOs_a12eRmnaEb2Shhby2IscxI77SuBlAJziM4_G49jer_lnw6ohwQTi7gA7HXfv6YrBmqc',
    privateKey: '09_TFssjHGjnura5CtmxB3iJqidDantvb6tV9Iiz96Q'
  };
// let vapidKeys = push.generateVAPIDKeys();

push.setVapidDetails('mailto:shuvashishpaul64@gmail.com',vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub,'test message');

// console.log(vapidKeys);