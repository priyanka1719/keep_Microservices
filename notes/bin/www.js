const app = require('../app');
const config = require('../config');

app.listen(config.PORT, () => {
  //console.log(`Notes App is listening to ${config.PORT}`);
})