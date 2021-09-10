var push = require('web-push');

let vapidKeys = {
    publicKey: 'BGLLkYqXZ560JeDiUq_Oa4Jx3nIMkX6sqN22B_O2hHc8o5AM0M9R89FyWBn4n4pijlrLoNWQFoic6Ad2HmwhK2A',
    privateKey: 'k2FnEaimd8zkjpK-ndVIjjIoHri9o7AFiIWaSjSNe5w'
  };
let vapidKeys = push.generateVAPIDKeys();
console.log(vapidKeys);

push.setVapidDetails('mailto:shuvashishpaul64@gmail.com',vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d3-OVPNcGIw:APA91bGOzJgCO8Q4IliDDAx6Q8PtB1e_TQrplOpldJ8vyGO7UTP807aeHeEh3VZFp9C7ROv8Q_SynkG0VDNdGcR1YsXcDetMNbse1ESUk1NLHKa3a_uJoBWS7e7dvfK9Ven5_GRxxZyJ","expirationTime":null,"keys":{"p256dh":"BI0BMFZoeT8W54CHWpYXbJ7RqxTvgyXiX7cMM4DRDSEpOdxDysyvvuKJcQRa5P6lJ8pMU0h917m1K1no2vVPCHw","auth":"fMAW8CBYSEM8NzW3HT2dzg"}};

push.sendNotification(sub,'test message');

