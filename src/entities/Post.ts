import { Entity, OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {
    @PrimaryKey()
    id!: number;

    [OptionalProps]?: 'createdAt' | 'updatedAt';

    @Property({ defaultRaw: 'now' })
    createdAt = new Date();

    @Property({ defaultRaw: 'now', onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property()
    title!: string;
}