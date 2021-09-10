var push = require('web-push');

let vapidKeys = {
    publicKey: 'BGLLkYqXZ560JeDiUq_Oa4Jx3nIMkX6sqN22B_O2hHc8o5AM0M9R89FyWBn4n4pijlrLoNWQFoic6Ad2HmwhK2A',
    privateKey: 'k2FnEaimd8zkjpK-ndVIjjIoHri9o7AFiIWaSjSNe5w'
  };
let vapidKeys = push.generateVAPIDKeys();
console.log(vapidKeys);

push.setVapidDetails('mailto:shuvashishpaul64@gmail.com',vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub,'test message');

