

const getcamps =  (req, res) => {
    db.query("SELECT * FROM refugeetable", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }) };
    module.exports =  getcamps;