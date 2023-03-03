import { Entity, ManyToOne, Property, Ref } from "@mikro-orm/core";
import { BaseEntity } from "./base-entity.entity";
import { Shift } from "./shift.entity";
import { User } from "./user.entity";

@Entity()
export class UserShift extends BaseEntity {
  @ManyToOne({ primary: true })
  shift!: Shift;

  @ManyToOne({ primary: true })
  user!: User;

  @Property({ nullable: true, default: "ss" })
  coordinate?: string;
}
