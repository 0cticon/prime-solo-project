const express = require('express');
// const Pool = require('pg-pool');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// GET route code here
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    const query = `SELECT * FROM "locations" WHERE "user_id" = $1 ORDER BY "id" ASC`;
    pool.query(query, [req.user.id]).then((result) => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: get all locations router', err);
      res.sendStatus(500)
    })
  }

});

router.get('/:id', (req, res) => {
  const query = `SELECT * FROM locations WHERE "id"=$1`;
  pool.query(query, [req.params.id])
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.log('error in get details', err);
      res.sendStatus(500)
    })
});


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('/locations POST route');
  console.log(req.body);
  console.log('is authenticated?', req.isAuthenticated());
  console.log('user', req.user);
  if(req.isAuthenticated()) {
      // all lowercase with singular names 
      const queryText = `INSERT INTO "locations" ("activity", "location", "user_id")
                         VALUES ($1, $2, $3) RETURNING "id";`;
      pool.query(queryText, [req.body.activity, req.body.location, req.user.id]).then((result) => {
          res.sendStatus(201);
      }).catch((e) => {
          console.log(e);
          res.sendStatus(500);
      });
  } else {
      res.sendStatus(403); // Forbidden
  }
  
});

module.exports = router;
