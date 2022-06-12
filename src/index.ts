import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import mikroConfig from "./mikro-orm.config";
import express from "express";

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);
    orm.getMigrator().up();
    const entityManager = orm.em.fork({});
    entityManager.flush();

    const app = express();
    app.get("/", (_, res) => {
        res.send("yo");
    });
    app.listen(4200, () => {
        console.log("Server started on localhost:4200");
    });
}

main();
