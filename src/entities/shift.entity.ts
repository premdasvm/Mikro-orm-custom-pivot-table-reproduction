import { Collection, Entity, ManyToMany, Property } from "@mikro-orm/core";
import { BaseEntity } from "./base-entity.entity";
import { User } from "./user.entity";

@Entity()
export class Shift extends BaseEntity {
  @Property()
  name!: string;

  @ManyToMany(() => User, (u) => u.shifts)
  users = new Collection<User>(this);
}
