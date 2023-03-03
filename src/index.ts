import { MikroORM } from "@mikro-orm/core";
import config from "../mikro-orm.config";
import { Shift } from "./entities/shift.entity";
import { UserShift } from "./entities/user-shift.entity";
import { User } from "./entities/user.entity";

let orm: MikroORM;

async function beforeAll() {
  orm = await MikroORM.init(config);
  await orm.schema.refreshDatabase();
}

async function main() {
  const newUser = orm.em.create(User, { name: "U1" });
  await orm.em.persist(newUser).flush();

  const newShift = orm.em.create(Shift, { name: "Morning" });
  await orm.em.persist(newShift).flush();

  const newUserShift = orm.em.create(UserShift, { id: 1, shift: newShift, user: newUser, coordinate: "das" });
  await orm.em.persist(newUserShift).flush();

  const user = await orm.em.findOne(User, newUser.id, {
    populate: ["shifts"],
    fields: ["*", "shifts.name"],
  });

  /**
   * Expected Result
   *  {
   *      id: 1,
   *      name : "U1",
   *      shifts : [{ name: "Morning" }]
   *  }
   */

  console.log(JSON.stringify(user));
}

async function initiate() {
  await beforeAll();
  await main();
}

initiate();
