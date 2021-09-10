var push = require('web-push');

let vapidKeys = {
    publicKey: 'BD-FxZKjwGjo4Q_Gj9ZKSZJZ2hp-Y55BO-XLRrRJnBZ51VAcO0i0nYj5RIJx2yezN32uR6PaWGRkXhj1XKQfG2E',
    privateKey: 'O_ktuWwZs8uzTrLyG41slp1AI8X4sYQhBF1K2K8xOmI'
  };
// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

push.setVapidDetails('mailto:shuvashishpaul64@gmail.com',vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
    endpoint:'https://fcm.googleapis.com/fcm/send/dkfKfONdJHE:APA91bH53aWNvjNKAhTtJxuU4WrHF0fcseNxB-GwSoTqxnRgnROtWJBO2XP4HEdA-FSMbrLPfNRaifJ1DeM_Zg86PBpJbxrVidaXPh2_v_srUn-0I9EpN2LfbpHgCTQSkYxFRgjByrx0',
    expirationTime:null,
    keys:{
        p256dh:'BECVcz72gTLAua_bPj7UcEZ2z23Wljxxg9scpPD9uHbAQpAZlgguxnusWUU_XPt4Mutatr3elfXLJRzavFo_2lw',
        auth:'OfFXipCIY_ntxHdxBZETzQ'
    }};

push.sendNotification(sub,'test message');

