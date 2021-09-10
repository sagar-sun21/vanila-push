var push = require('web-push');

let vapidKeys = {
    publicKey: 'BF3AisMNRxtLPhamBOs_a12eRmnaEb2Shhby2IscxI77SuBlAJziM4_G49jer_lnw6ohwQTi7gA7HXfv6YrBmqc',
    privateKey: '09_TFssjHGjnura5CtmxB3iJqidDantvb6tV9Iiz96Q'
  };
// let vapidKeys = push.generateVAPIDKeys();

push.setVapidDetails('mailto:shuvashishpaul64@gmail.com',vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABhO…ltok63lRPSWQB044SOJn4p0IvFzoOpXg3_k3lXh4nF4ATZTelH9_yfr7KHTw","keys":{"auth":"PhKMNXmAVHwdv8q2duafUQ","p256dh":"BBn1_O8LqHCj28eYWP2j_v9R6DdLvgxCEfjNOfvcj6c5D-Y1V521AmdYN4yQ9pSVPKz6It8UI6DSErUzIS2E2Vs"}};

push.sendNotification(sub,'test message');

// console.log(vapidKeys);