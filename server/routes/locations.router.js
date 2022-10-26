const express = require('express');
// const Pool = require('pg-pool');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const query = `SELECT * FROM locations ORDER BY "user_id" ASC`;
  pool.query(query)
  .then( result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: get all locations router', err);
    res.sendStatus(500)
  })
  // GET route code here
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
      const queryText = `INSERT INTO "locations" ("activity", "location")
                         VALUES ($1, $2) RETURNING "id";`;
      pool.query(queryText, [req.body.name, req.user.id]).then((result) => {
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
