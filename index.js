import express from 'express';
import config from './config.js';
import Knex from 'knex';
import { Model } from 'objection';
import router from './router.js';
import fileUpload from 'express-fileupload';

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)


async function dbConnect() {
    const knex = Knex({
        client: config.db.client,
        connection: {
            host: config.db.host,
            user: config.db.user,
            password: config.db.password,
            database: config.db.database,
        }
    });

    Model.knex(knex);
}

async function startApp() {
    try {
        app.listen(config.port, () => {
            console.log(`SERVER STARTED ON PORT ${config.port}`)
        })
        dbConnect()
    } catch (e) {
        console.error(`Error : ${e}`);
    }
}

startApp()