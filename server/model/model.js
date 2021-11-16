// Import PG DB.
const { Pool } = require('pg');

// Attach connection URI.
const myURI = 'postgres://mzwmrclg:XHg58ZPeu-cAJ0APePTIfGYNJSwrg84S@kashin.db.elephantsql.com/mzwmrclg';

// Connect to DB.
const db = new Pool({ connectionString: myURI });

// Export query functionality.
module.exports = {
  query: async (text, params, callback) => {
    console.log(`🚀🚀 SQL queried with text🚀: ${text} and params🚀: ${params}`);
    return await db.query(text, params, callback);
  }
};