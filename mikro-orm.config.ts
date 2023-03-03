import { LoadStrategy, Options } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { BetterSqliteDriver } from "@mikro-orm/better-sqlite";
import { User } from "./src/entities/user.entity";
import { Shift } from "./src/entities/shift.entity";
import { UserShift } from "./src/entities/user-shift.entity";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";

const config: Options = {
  driver: BetterSqliteDriver,
  dbName: ":memory:",
  entities: [User, Shift, UserShift],
  metadataProvider: TsMorphMetadataProvider,
  // loadStrategy: LoadStrategy.JOINED,
  allowGlobalContext: true,
  debug: true,
  highlighter: new SqlHighlighter(),
};

export default config;
