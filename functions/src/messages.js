import connectDb from "./connectDb.js";

export function getAllMessages(req, res) {
  const db = connectDb();
  db.collection("messages").get()
    .then(snapshot => {
      const messageArray = snapshot.docs.map(doc => {
        let restaurant = doc.data();
        restaurant.id = doc.id;
        return restaurant;
      });
      res.send(messageArray.reverse());
    })
    .catch(err => {
      res.status(500).send(err);
    });
}


export function addMessage(req, res) {
    if(!req.body) {
      res.status(401).send('Invalid request');
      return;
    }
    const db = connectDb();
    db.collection('messages').add(req.body)
      .then(doc => {
        res.send('Message created ' + doc.id)
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }