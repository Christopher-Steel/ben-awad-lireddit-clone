import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config"

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);
    orm.getMigrator().up();
    const entityManager = orm.em.fork({});
    const post = entityManager.create(Post, {title: "test"});
    await entityManager.persistAndFlush(post);

    const posts = await entityManager.find(Post, {});
    console.log(posts);
}

main();
