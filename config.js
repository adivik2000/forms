module.exports = {
  // CouchDB configuration
  couchdb: {
    // host: "http://sanand.couchone.com",
    // port: 80,
    cache: false,
  },

  // Secret key
  secret: "CZdS25R5MwCPCV0fpbW99NRumWiqRPC8g3MLrndLVZG43rO9YxEl07tcP6ZGLEw",

  // Cache static files for hours
  cacheHrs: 4,

  // Location of the applications folder
  apps_folder: ".",

  // Application port
  port: 8401,

  login: {
    // User list
    "default": {
      "anonymous": { "password": "", "role": [] },
      "admin": { "password": "admin", "role": ["admin"] },
    },

    "windows": {
      "domain": "itlinfosys"
    }
  }

};
