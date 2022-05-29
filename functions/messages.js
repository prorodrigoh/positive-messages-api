import connectDb from "./src/connectDB.js";

export function getMessages(req, res) {
  const db = connectDb();
  db.collection("goodvibesrepo").get()
    .then(snapshot => {
      const messageArray = snapshot.docs.map(doc => {
        let message = doc.data();
        message.id = doc.id;
        return message;
      });
      res.send(messageArray.reverse());
    })
    .catch(err => {
      res.status(500).send(err);
    });
}


export function addOneMessage(req, res) {
  if(!req.body) {
    res.status(401).send('Invalid request');
    return;
  }
  const db = connectDb();
  db.collection('goodvibesrepo').add(req.body)
    .then(doc => {
      res.send('Message created ' + doc.id)
    })
    .catch(err => {
      res.status(500).send(err);
    });
}