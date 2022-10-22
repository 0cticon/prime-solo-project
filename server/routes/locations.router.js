const express = require('express');
const Pool = require('pg-pool');
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
});

module.exports = router;
