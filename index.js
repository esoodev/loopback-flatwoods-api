const application = require('./dist');

module.exports = application;

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +process.env.PORT || 3000,
      host: process.env.HOST || 'localhost',
      openApiSpec: {
        // Configure servers for OpenAPI spec
        servers: [{url: 'http://127.0.0.1:3000'}],
        // Set "servers" based on HTTP request headers, default to false
        setServersFromRequest: true,
        // Maps urls for various forms of the spec. Default to:
        endpointMapping: {
          '/openapi.json': {version: '3.0.0', format: 'json'},
          '/openapi.yaml': {version: '3.0.0', format: 'yaml'},
        },
      },
    },
  };
  application.main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
