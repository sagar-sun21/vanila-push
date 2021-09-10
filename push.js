var push = require('web-push');

let vapidKeys = {
    publicKey: 'BF3AisMNRxtLPhamBOs_a12eRmnaEb2Shhby2IscxI77SuBlAJziM4_G49jer_lnw6ohwQTi7gA7HXfv6YrBmqc',
    privateKey: '09_TFssjHGjnura5CtmxB3iJqidDantvb6tV9Iiz96Q'
  };
// let vapidKeys = push.generateVAPIDKeys();

push.setVapidDetails('mailto:shuvashishpaul64@gmail.com',vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/f9dyuzP2eeY:APA91bG-A0bJs-ZMxE-TgKnRCvJF3ITG3XAfF1M_vuv7kO0MTthymwF7PoVhcD4g8BOnMqESli7cjj8MMMI7FY_sXht4TToqWuFK8OcupLDHI2gwndZd2HF_pVYQ3tIgo3hde-0mhgRV","expirationTime":null,"keys":{"p256dh":"BGtUGs9P624eY5lG85KpRHYzm5JanDPOcL11fl9nz_EV6iRuh4K43f_iF_v1jQUg6w6YxpWmCUhXhO0scxdhwFk","auth":"6ZL_tIf2PaCxIO9_Ur-YyQ"}};

push.sendNotification(sub,'test message');

// console.log(vapidKeys);