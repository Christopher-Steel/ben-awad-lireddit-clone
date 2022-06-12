import { Entity, OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {
    @PrimaryKey()
    id!: number;

    [OptionalProps]?: 'createdAt' | 'updatedAt';

    @Property({ type: 'date', defaultRaw: 'now()' })
    createdAt = new Date();

    @Property({ type: 'date', defaultRaw: 'now()', onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property({ type: 'text' })
    title!: string;
}