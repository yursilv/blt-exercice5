const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(bodyParser());
app.use(cors({origin: '*', exposeHeaders: '*'}));
app.use(indexRoutes.routes());
app.use(usersRoutes.routes());

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
