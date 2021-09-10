var push = require('web-push');

let vapidKeys = {
    publicKey: 'BF3AisMNRxtLPhamBOs_a12eRmnaEb2Shhby2IscxI77SuBlAJziM4_G49jer_lnw6ohwQTi7gA7HXfv6YrBmqc',
    privateKey: '09_TFssjHGjnura5CtmxB3iJqidDantvb6tV9Iiz96Q'
  };
// let vapidKeys = push.generateVAPIDKeys();

push.setVapidDetails('mailto:shuvashishpaul64@gmail.com',vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dkfKfONdJHE:APA91bH53aWNvjNKAhTtJxuU4WrHF0fcseNxB-GwSoTqxnRgnROtWJBO2XP4HEdA-FSMbrLPfNRaifJ1DeM_Zg86PBpJbxrVidaXPh2_v_srUn-0I9EpN2LfbpHgCTQSkYxFRgjByrx0","expirationTime":null,"keys":{"p256dh":"BECVcz72gTLAua_bPj7UcEZ2z23Wljxxg9scpPD9uHbAQpAZlgguxnusWUU_XPt4Mutatr3elfXLJRzavFo_2lw","auth":"OfFXipCIY_ntxHdxBZETzQ"}};

push.sendNotification(sub,'test message');

// console.log(vapidKeys);