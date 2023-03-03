import { Collection, Entity, ManyToMany, Property } from "@mikro-orm/core";
import { BaseEntity } from "./base-entity.entity";
import { Shift } from "./shift.entity";
import { UserShift } from "./user-shift.entity";

@Entity()
export class User extends BaseEntity {
  @Property()
  name!: string;

  @ManyToMany({
    entity: () => Shift,
    pivotEntity: () => UserShift,
  })
  shifts? = new Collection<Shift>(this);
}
