const express = require('express');
const fs = require('fs');
const router = express.Router();
const pics = require('./state');

// router.get('/',(res, req)=>{
//   res.status(200).json({ message: 'Connected!' });
// });
// fs.readFile()
// router.use('/pics', pics);
//
// module.exports = router;

router.use('/',(req, res, next)=>{
  next();
});

fs.readdir(__dirname, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  //listing all files using forEach
  files.forEach((file)=> {
    if(file !== 'index.js') {
      const route = require(`./${file}`);
      route(router);
      console.log(file);
    }
  });
});

module.exports = router;