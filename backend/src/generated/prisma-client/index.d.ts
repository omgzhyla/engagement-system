
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model answers
 * 
 */
export type answers = {
  vote_id: number
  user_id: string
  answer: number
  submitted_at: Date | null
}

/**
 * Model votes
 * 
 */
export type votes = {
  id: number
  title: string
  description: string
  options: Prisma.JsonValue
  created_at: Date | null
  opened_at: Date | null
  closed_at: Date | null
  status: status | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const status: {
  new: 'new',
  open: 'open',
  closed: 'closed'
};

export type status = (typeof status)[keyof typeof status]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Answers
 * const answers = await prisma.answers.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Answers
   * const answers = await prisma.answers.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.answers`: Exposes CRUD operations for the **answers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answers.findMany()
    * ```
    */
  get answers(): Prisma.answersDelegate<GlobalReject>;

  /**
   * `prisma.votes`: Exposes CRUD operations for the **votes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.votes.findMany()
    * ```
    */
  get votes(): Prisma.votesDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.1.1
   * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    answers: 'answers',
    votes: 'votes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VotesCountOutputType
   */


  export type VotesCountOutputType = {
    answers: number
  }

  export type VotesCountOutputTypeSelect = {
    answers?: boolean
  }

  export type VotesCountOutputTypeGetPayload<
    S extends boolean | null | undefined | VotesCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? VotesCountOutputType
    : S extends undefined
    ? never
    : S extends VotesCountOutputTypeArgs
    ?'include' extends U
    ? VotesCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof VotesCountOutputType ? VotesCountOutputType[P] : never
  } 
    : VotesCountOutputType
  : VotesCountOutputType




  // Custom InputTypes

  /**
   * VotesCountOutputType without action
   */
  export type VotesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VotesCountOutputType
     * 
    **/
    select?: VotesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model answers
   */


  export type AggregateAnswers = {
    _count: AnswersCountAggregateOutputType | null
    _avg: AnswersAvgAggregateOutputType | null
    _sum: AnswersSumAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  export type AnswersAvgAggregateOutputType = {
    vote_id: number | null
    answer: number | null
  }

  export type AnswersSumAggregateOutputType = {
    vote_id: number | null
    answer: number | null
  }

  export type AnswersMinAggregateOutputType = {
    vote_id: number | null
    user_id: string | null
    answer: number | null
    submitted_at: Date | null
  }

  export type AnswersMaxAggregateOutputType = {
    vote_id: number | null
    user_id: string | null
    answer: number | null
    submitted_at: Date | null
  }

  export type AnswersCountAggregateOutputType = {
    vote_id: number
    user_id: number
    answer: number
    submitted_at: number
    _all: number
  }


  export type AnswersAvgAggregateInputType = {
    vote_id?: true
    answer?: true
  }

  export type AnswersSumAggregateInputType = {
    vote_id?: true
    answer?: true
  }

  export type AnswersMinAggregateInputType = {
    vote_id?: true
    user_id?: true
    answer?: true
    submitted_at?: true
  }

  export type AnswersMaxAggregateInputType = {
    vote_id?: true
    user_id?: true
    answer?: true
    submitted_at?: true
  }

  export type AnswersCountAggregateInputType = {
    vote_id?: true
    user_id?: true
    answer?: true
    submitted_at?: true
    _all?: true
  }

  export type AnswersAggregateArgs = {
    /**
     * Filter which answers to aggregate.
     * 
    **/
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     * 
    **/
    orderBy?: Enumerable<answersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned answers
    **/
    _count?: true | AnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswersMaxAggregateInputType
  }

  export type GetAnswersAggregateType<T extends AnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswers[P]>
      : GetScalarType<T[P], AggregateAnswers[P]>
  }




  export type AnswersGroupByArgs = {
    where?: answersWhereInput
    orderBy?: Enumerable<answersOrderByWithAggregationInput>
    by: Array<AnswersScalarFieldEnum>
    having?: answersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswersCountAggregateInputType | true
    _avg?: AnswersAvgAggregateInputType
    _sum?: AnswersSumAggregateInputType
    _min?: AnswersMinAggregateInputType
    _max?: AnswersMaxAggregateInputType
  }


  export type AnswersGroupByOutputType = {
    vote_id: number
    user_id: string
    answer: number
    submitted_at: Date | null
    _count: AnswersCountAggregateOutputType | null
    _avg: AnswersAvgAggregateOutputType | null
    _sum: AnswersSumAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  type GetAnswersGroupByPayload<T extends AnswersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswersGroupByOutputType[P]>
            : GetScalarType<T[P], AnswersGroupByOutputType[P]>
        }
      >
    >


  export type answersSelect = {
    vote_id?: boolean
    user_id?: boolean
    answer?: boolean
    submitted_at?: boolean
    votes?: boolean | votesArgs
  }

  export type answersInclude = {
    votes?: boolean | votesArgs
  }

  export type answersGetPayload<
    S extends boolean | null | undefined | answersArgs,
    U = keyof S
      > = S extends true
        ? answers
    : S extends undefined
    ? never
    : S extends answersArgs | answersFindManyArgs
    ?'include' extends U
    ? answers  & {
    [P in TrueKeys<S['include']>]:
        P extends 'votes' ? votesGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'votes' ? votesGetPayload<S['select'][P]> :  P extends keyof answers ? answers[P] : never
  } 
    : answers
  : answers


  type answersCountArgs = Merge<
    Omit<answersFindManyArgs, 'select' | 'include'> & {
      select?: AnswersCountAggregateInputType | true
    }
  >

  export interface answersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Answers that matches the filter.
     * @param {answersFindUniqueArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends answersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, answersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'answers'> extends True ? CheckSelect<T, Prisma__answersClient<answers>, Prisma__answersClient<answersGetPayload<T>>> : CheckSelect<T, Prisma__answersClient<answers | null >, Prisma__answersClient<answersGetPayload<T> | null >>

    /**
     * Find the first Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindFirstArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends answersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, answersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'answers'> extends True ? CheckSelect<T, Prisma__answersClient<answers>, Prisma__answersClient<answersGetPayload<T>>> : CheckSelect<T, Prisma__answersClient<answers | null >, Prisma__answersClient<answersGetPayload<T> | null >>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answers.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answers.findMany({ take: 10 })
     * 
     * // Only select the `vote_id`
     * const answersWithVote_idOnly = await prisma.answers.findMany({ select: { vote_id: true } })
     * 
    **/
    findMany<T extends answersFindManyArgs>(
      args?: SelectSubset<T, answersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<answers>>, PrismaPromise<Array<answersGetPayload<T>>>>

    /**
     * Create a Answers.
     * @param {answersCreateArgs} args - Arguments to create a Answers.
     * @example
     * // Create one Answers
     * const Answers = await prisma.answers.create({
     *   data: {
     *     // ... data to create a Answers
     *   }
     * })
     * 
    **/
    create<T extends answersCreateArgs>(
      args: SelectSubset<T, answersCreateArgs>
    ): CheckSelect<T, Prisma__answersClient<answers>, Prisma__answersClient<answersGetPayload<T>>>

    /**
     * Create many Answers.
     *     @param {answersCreateManyArgs} args - Arguments to create many Answers.
     *     @example
     *     // Create many Answers
     *     const answers = await prisma.answers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends answersCreateManyArgs>(
      args?: SelectSubset<T, answersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Answers.
     * @param {answersDeleteArgs} args - Arguments to delete one Answers.
     * @example
     * // Delete one Answers
     * const Answers = await prisma.answers.delete({
     *   where: {
     *     // ... filter to delete one Answers
     *   }
     * })
     * 
    **/
    delete<T extends answersDeleteArgs>(
      args: SelectSubset<T, answersDeleteArgs>
    ): CheckSelect<T, Prisma__answersClient<answers>, Prisma__answersClient<answersGetPayload<T>>>

    /**
     * Update one Answers.
     * @param {answersUpdateArgs} args - Arguments to update one Answers.
     * @example
     * // Update one Answers
     * const answers = await prisma.answers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends answersUpdateArgs>(
      args: SelectSubset<T, answersUpdateArgs>
    ): CheckSelect<T, Prisma__answersClient<answers>, Prisma__answersClient<answersGetPayload<T>>>

    /**
     * Delete zero or more Answers.
     * @param {answersDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends answersDeleteManyArgs>(
      args?: SelectSubset<T, answersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends answersUpdateManyArgs>(
      args: SelectSubset<T, answersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Answers.
     * @param {answersUpsertArgs} args - Arguments to update or create a Answers.
     * @example
     * // Update or create a Answers
     * const answers = await prisma.answers.upsert({
     *   create: {
     *     // ... data to create a Answers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answers we want to update
     *   }
     * })
    **/
    upsert<T extends answersUpsertArgs>(
      args: SelectSubset<T, answersUpsertArgs>
    ): CheckSelect<T, Prisma__answersClient<answers>, Prisma__answersClient<answersGetPayload<T>>>

    /**
     * Find one Answers that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {answersFindUniqueOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends answersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, answersFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__answersClient<answers>, Prisma__answersClient<answersGetPayload<T>>>

    /**
     * Find the first Answers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindFirstOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends answersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, answersFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__answersClient<answers>, Prisma__answersClient<answersGetPayload<T>>>

    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answers.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends answersCountArgs>(
      args?: Subset<T, answersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswersAggregateArgs>(args: Subset<T, AnswersAggregateArgs>): PrismaPromise<GetAnswersAggregateType<T>>

    /**
     * Group by Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswersGroupByArgs['orderBy'] }
        : { orderBy?: AnswersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswersGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for answers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__answersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    votes<T extends votesArgs = {}>(args?: Subset<T, votesArgs>): CheckSelect<T, Prisma__votesClient<votes | null >, Prisma__votesClient<votesGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * answers base type for findUnique actions
   */
  export type answersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the answers
     * 
    **/
    select?: answersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: answersInclude | null
    /**
     * Filter, which answers to fetch.
     * 
    **/
    where: answersWhereUniqueInput
  }

  /**
   * answers: findUnique
   */
  export interface answersFindUniqueArgs extends answersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * answers base type for findFirst actions
   */
  export type answersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the answers
     * 
    **/
    select?: answersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: answersInclude | null
    /**
     * Filter, which answers to fetch.
     * 
    **/
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     * 
    **/
    orderBy?: Enumerable<answersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     * 
    **/
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     * 
    **/
    distinct?: Enumerable<AnswersScalarFieldEnum>
  }

  /**
   * answers: findFirst
   */
  export interface answersFindFirstArgs extends answersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * answers findMany
   */
  export type answersFindManyArgs = {
    /**
     * Select specific fields to fetch from the answers
     * 
    **/
    select?: answersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: answersInclude | null
    /**
     * Filter, which answers to fetch.
     * 
    **/
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     * 
    **/
    orderBy?: Enumerable<answersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing answers.
     * 
    **/
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AnswersScalarFieldEnum>
  }


  /**
   * answers create
   */
  export type answersCreateArgs = {
    /**
     * Select specific fields to fetch from the answers
     * 
    **/
    select?: answersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: answersInclude | null
    /**
     * The data needed to create a answers.
     * 
    **/
    data: XOR<answersCreateInput, answersUncheckedCreateInput>
  }


  /**
   * answers createMany
   */
  export type answersCreateManyArgs = {
    /**
     * The data used to create many answers.
     * 
    **/
    data: Enumerable<answersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * answers update
   */
  export type answersUpdateArgs = {
    /**
     * Select specific fields to fetch from the answers
     * 
    **/
    select?: answersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: answersInclude | null
    /**
     * The data needed to update a answers.
     * 
    **/
    data: XOR<answersUpdateInput, answersUncheckedUpdateInput>
    /**
     * Choose, which answers to update.
     * 
    **/
    where: answersWhereUniqueInput
  }


  /**
   * answers updateMany
   */
  export type answersUpdateManyArgs = {
    /**
     * The data used to update answers.
     * 
    **/
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     * 
    **/
    where?: answersWhereInput
  }


  /**
   * answers upsert
   */
  export type answersUpsertArgs = {
    /**
     * Select specific fields to fetch from the answers
     * 
    **/
    select?: answersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: answersInclude | null
    /**
     * The filter to search for the answers to update in case it exists.
     * 
    **/
    where: answersWhereUniqueInput
    /**
     * In case the answers found by the `where` argument doesn't exist, create a new answers with this data.
     * 
    **/
    create: XOR<answersCreateInput, answersUncheckedCreateInput>
    /**
     * In case the answers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<answersUpdateInput, answersUncheckedUpdateInput>
  }


  /**
   * answers delete
   */
  export type answersDeleteArgs = {
    /**
     * Select specific fields to fetch from the answers
     * 
    **/
    select?: answersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: answersInclude | null
    /**
     * Filter which answers to delete.
     * 
    **/
    where: answersWhereUniqueInput
  }


  /**
   * answers deleteMany
   */
  export type answersDeleteManyArgs = {
    /**
     * Filter which answers to delete
     * 
    **/
    where?: answersWhereInput
  }


  /**
   * answers: findUniqueOrThrow
   */
  export type answersFindUniqueOrThrowArgs = answersFindUniqueArgsBase
      

  /**
   * answers: findFirstOrThrow
   */
  export type answersFindFirstOrThrowArgs = answersFindFirstArgsBase
      

  /**
   * answers without action
   */
  export type answersArgs = {
    /**
     * Select specific fields to fetch from the answers
     * 
    **/
    select?: answersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: answersInclude | null
  }



  /**
   * Model votes
   */


  export type AggregateVotes = {
    _count: VotesCountAggregateOutputType | null
    _avg: VotesAvgAggregateOutputType | null
    _sum: VotesSumAggregateOutputType | null
    _min: VotesMinAggregateOutputType | null
    _max: VotesMaxAggregateOutputType | null
  }

  export type VotesAvgAggregateOutputType = {
    id: number | null
  }

  export type VotesSumAggregateOutputType = {
    id: number | null
  }

  export type VotesMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    created_at: Date | null
    opened_at: Date | null
    closed_at: Date | null
    status: status | null
  }

  export type VotesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    created_at: Date | null
    opened_at: Date | null
    closed_at: Date | null
    status: status | null
  }

  export type VotesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    options: number
    created_at: number
    opened_at: number
    closed_at: number
    status: number
    _all: number
  }


  export type VotesAvgAggregateInputType = {
    id?: true
  }

  export type VotesSumAggregateInputType = {
    id?: true
  }

  export type VotesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_at?: true
    opened_at?: true
    closed_at?: true
    status?: true
  }

  export type VotesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_at?: true
    opened_at?: true
    closed_at?: true
    status?: true
  }

  export type VotesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    options?: true
    created_at?: true
    opened_at?: true
    closed_at?: true
    status?: true
    _all?: true
  }

  export type VotesAggregateArgs = {
    /**
     * Filter which votes to aggregate.
     * 
    **/
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     * 
    **/
    orderBy?: Enumerable<votesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned votes
    **/
    _count?: true | VotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VotesMaxAggregateInputType
  }

  export type GetVotesAggregateType<T extends VotesAggregateArgs> = {
        [P in keyof T & keyof AggregateVotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVotes[P]>
      : GetScalarType<T[P], AggregateVotes[P]>
  }




  export type VotesGroupByArgs = {
    where?: votesWhereInput
    orderBy?: Enumerable<votesOrderByWithAggregationInput>
    by: Array<VotesScalarFieldEnum>
    having?: votesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VotesCountAggregateInputType | true
    _avg?: VotesAvgAggregateInputType
    _sum?: VotesSumAggregateInputType
    _min?: VotesMinAggregateInputType
    _max?: VotesMaxAggregateInputType
  }


  export type VotesGroupByOutputType = {
    id: number
    title: string
    description: string
    options: JsonValue
    created_at: Date | null
    opened_at: Date | null
    closed_at: Date | null
    status: status | null
    _count: VotesCountAggregateOutputType | null
    _avg: VotesAvgAggregateOutputType | null
    _sum: VotesSumAggregateOutputType | null
    _min: VotesMinAggregateOutputType | null
    _max: VotesMaxAggregateOutputType | null
  }

  type GetVotesGroupByPayload<T extends VotesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VotesGroupByOutputType[P]>
            : GetScalarType<T[P], VotesGroupByOutputType[P]>
        }
      >
    >


  export type votesSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    options?: boolean
    created_at?: boolean
    opened_at?: boolean
    closed_at?: boolean
    status?: boolean
    answers?: boolean | answersFindManyArgs
    _count?: boolean | VotesCountOutputTypeArgs
  }

  export type votesInclude = {
    answers?: boolean | answersFindManyArgs
    _count?: boolean | VotesCountOutputTypeArgs
  }

  export type votesGetPayload<
    S extends boolean | null | undefined | votesArgs,
    U = keyof S
      > = S extends true
        ? votes
    : S extends undefined
    ? never
    : S extends votesArgs | votesFindManyArgs
    ?'include' extends U
    ? votes  & {
    [P in TrueKeys<S['include']>]:
        P extends 'answers' ? Array < answersGetPayload<S['include'][P]>>  :
        P extends '_count' ? VotesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'answers' ? Array < answersGetPayload<S['select'][P]>>  :
        P extends '_count' ? VotesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof votes ? votes[P] : never
  } 
    : votes
  : votes


  type votesCountArgs = Merge<
    Omit<votesFindManyArgs, 'select' | 'include'> & {
      select?: VotesCountAggregateInputType | true
    }
  >

  export interface votesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Votes that matches the filter.
     * @param {votesFindUniqueArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends votesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, votesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'votes'> extends True ? CheckSelect<T, Prisma__votesClient<votes>, Prisma__votesClient<votesGetPayload<T>>> : CheckSelect<T, Prisma__votesClient<votes | null >, Prisma__votesClient<votesGetPayload<T> | null >>

    /**
     * Find the first Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesFindFirstArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends votesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, votesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'votes'> extends True ? CheckSelect<T, Prisma__votesClient<votes>, Prisma__votesClient<votesGetPayload<T>>> : CheckSelect<T, Prisma__votesClient<votes | null >, Prisma__votesClient<votesGetPayload<T> | null >>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.votes.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.votes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const votesWithIdOnly = await prisma.votes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends votesFindManyArgs>(
      args?: SelectSubset<T, votesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<votes>>, PrismaPromise<Array<votesGetPayload<T>>>>

    /**
     * Create a Votes.
     * @param {votesCreateArgs} args - Arguments to create a Votes.
     * @example
     * // Create one Votes
     * const Votes = await prisma.votes.create({
     *   data: {
     *     // ... data to create a Votes
     *   }
     * })
     * 
    **/
    create<T extends votesCreateArgs>(
      args: SelectSubset<T, votesCreateArgs>
    ): CheckSelect<T, Prisma__votesClient<votes>, Prisma__votesClient<votesGetPayload<T>>>

    /**
     * Create many Votes.
     *     @param {votesCreateManyArgs} args - Arguments to create many Votes.
     *     @example
     *     // Create many Votes
     *     const votes = await prisma.votes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends votesCreateManyArgs>(
      args?: SelectSubset<T, votesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Votes.
     * @param {votesDeleteArgs} args - Arguments to delete one Votes.
     * @example
     * // Delete one Votes
     * const Votes = await prisma.votes.delete({
     *   where: {
     *     // ... filter to delete one Votes
     *   }
     * })
     * 
    **/
    delete<T extends votesDeleteArgs>(
      args: SelectSubset<T, votesDeleteArgs>
    ): CheckSelect<T, Prisma__votesClient<votes>, Prisma__votesClient<votesGetPayload<T>>>

    /**
     * Update one Votes.
     * @param {votesUpdateArgs} args - Arguments to update one Votes.
     * @example
     * // Update one Votes
     * const votes = await prisma.votes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends votesUpdateArgs>(
      args: SelectSubset<T, votesUpdateArgs>
    ): CheckSelect<T, Prisma__votesClient<votes>, Prisma__votesClient<votesGetPayload<T>>>

    /**
     * Delete zero or more Votes.
     * @param {votesDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.votes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends votesDeleteManyArgs>(
      args?: SelectSubset<T, votesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const votes = await prisma.votes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends votesUpdateManyArgs>(
      args: SelectSubset<T, votesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Votes.
     * @param {votesUpsertArgs} args - Arguments to update or create a Votes.
     * @example
     * // Update or create a Votes
     * const votes = await prisma.votes.upsert({
     *   create: {
     *     // ... data to create a Votes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Votes we want to update
     *   }
     * })
    **/
    upsert<T extends votesUpsertArgs>(
      args: SelectSubset<T, votesUpsertArgs>
    ): CheckSelect<T, Prisma__votesClient<votes>, Prisma__votesClient<votesGetPayload<T>>>

    /**
     * Find one Votes that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {votesFindUniqueOrThrowArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends votesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, votesFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__votesClient<votes>, Prisma__votesClient<votesGetPayload<T>>>

    /**
     * Find the first Votes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesFindFirstOrThrowArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends votesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, votesFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__votesClient<votes>, Prisma__votesClient<votesGetPayload<T>>>

    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.votes.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends votesCountArgs>(
      args?: Subset<T, votesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VotesAggregateArgs>(args: Subset<T, VotesAggregateArgs>): PrismaPromise<GetVotesAggregateType<T>>

    /**
     * Group by Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VotesGroupByArgs['orderBy'] }
        : { orderBy?: VotesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVotesGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for votes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__votesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    answers<T extends answersFindManyArgs = {}>(args?: Subset<T, answersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<answers>>, PrismaPromise<Array<answersGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * votes base type for findUnique actions
   */
  export type votesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the votes
     * 
    **/
    select?: votesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: votesInclude | null
    /**
     * Filter, which votes to fetch.
     * 
    **/
    where: votesWhereUniqueInput
  }

  /**
   * votes: findUnique
   */
  export interface votesFindUniqueArgs extends votesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * votes base type for findFirst actions
   */
  export type votesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the votes
     * 
    **/
    select?: votesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: votesInclude | null
    /**
     * Filter, which votes to fetch.
     * 
    **/
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     * 
    **/
    orderBy?: Enumerable<votesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for votes.
     * 
    **/
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of votes.
     * 
    **/
    distinct?: Enumerable<VotesScalarFieldEnum>
  }

  /**
   * votes: findFirst
   */
  export interface votesFindFirstArgs extends votesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * votes findMany
   */
  export type votesFindManyArgs = {
    /**
     * Select specific fields to fetch from the votes
     * 
    **/
    select?: votesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: votesInclude | null
    /**
     * Filter, which votes to fetch.
     * 
    **/
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     * 
    **/
    orderBy?: Enumerable<votesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing votes.
     * 
    **/
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VotesScalarFieldEnum>
  }


  /**
   * votes create
   */
  export type votesCreateArgs = {
    /**
     * Select specific fields to fetch from the votes
     * 
    **/
    select?: votesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: votesInclude | null
    /**
     * The data needed to create a votes.
     * 
    **/
    data: XOR<votesCreateInput, votesUncheckedCreateInput>
  }


  /**
   * votes createMany
   */
  export type votesCreateManyArgs = {
    /**
     * The data used to create many votes.
     * 
    **/
    data: Enumerable<votesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * votes update
   */
  export type votesUpdateArgs = {
    /**
     * Select specific fields to fetch from the votes
     * 
    **/
    select?: votesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: votesInclude | null
    /**
     * The data needed to update a votes.
     * 
    **/
    data: XOR<votesUpdateInput, votesUncheckedUpdateInput>
    /**
     * Choose, which votes to update.
     * 
    **/
    where: votesWhereUniqueInput
  }


  /**
   * votes updateMany
   */
  export type votesUpdateManyArgs = {
    /**
     * The data used to update votes.
     * 
    **/
    data: XOR<votesUpdateManyMutationInput, votesUncheckedUpdateManyInput>
    /**
     * Filter which votes to update
     * 
    **/
    where?: votesWhereInput
  }


  /**
   * votes upsert
   */
  export type votesUpsertArgs = {
    /**
     * Select specific fields to fetch from the votes
     * 
    **/
    select?: votesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: votesInclude | null
    /**
     * The filter to search for the votes to update in case it exists.
     * 
    **/
    where: votesWhereUniqueInput
    /**
     * In case the votes found by the `where` argument doesn't exist, create a new votes with this data.
     * 
    **/
    create: XOR<votesCreateInput, votesUncheckedCreateInput>
    /**
     * In case the votes was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<votesUpdateInput, votesUncheckedUpdateInput>
  }


  /**
   * votes delete
   */
  export type votesDeleteArgs = {
    /**
     * Select specific fields to fetch from the votes
     * 
    **/
    select?: votesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: votesInclude | null
    /**
     * Filter which votes to delete.
     * 
    **/
    where: votesWhereUniqueInput
  }


  /**
   * votes deleteMany
   */
  export type votesDeleteManyArgs = {
    /**
     * Filter which votes to delete
     * 
    **/
    where?: votesWhereInput
  }


  /**
   * votes: findUniqueOrThrow
   */
  export type votesFindUniqueOrThrowArgs = votesFindUniqueArgsBase
      

  /**
   * votes: findFirstOrThrow
   */
  export type votesFindFirstOrThrowArgs = votesFindFirstArgsBase
      

  /**
   * votes without action
   */
  export type votesArgs = {
    /**
     * Select specific fields to fetch from the votes
     * 
    **/
    select?: votesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: votesInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AnswersScalarFieldEnum: {
    vote_id: 'vote_id',
    user_id: 'user_id',
    answer: 'answer',
    submitted_at: 'submitted_at'
  };

  export type AnswersScalarFieldEnum = (typeof AnswersScalarFieldEnum)[keyof typeof AnswersScalarFieldEnum]


  export const VotesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    options: 'options',
    created_at: 'created_at',
    opened_at: 'opened_at',
    closed_at: 'closed_at',
    status: 'status'
  };

  export type VotesScalarFieldEnum = (typeof VotesScalarFieldEnum)[keyof typeof VotesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type answersWhereInput = {
    AND?: Enumerable<answersWhereInput>
    OR?: Enumerable<answersWhereInput>
    NOT?: Enumerable<answersWhereInput>
    vote_id?: IntFilter | number
    user_id?: StringFilter | string
    answer?: IntFilter | number
    submitted_at?: DateTimeNullableFilter | Date | string | null
    votes?: XOR<VotesRelationFilter, votesWhereInput>
  }

  export type answersOrderByWithRelationInput = {
    vote_id?: SortOrder
    user_id?: SortOrder
    answer?: SortOrder
    submitted_at?: SortOrder
    votes?: votesOrderByWithRelationInput
  }

  export type answersWhereUniqueInput = {
    vote_id_user_id?: answersVote_idUser_idCompoundUniqueInput
  }

  export type answersOrderByWithAggregationInput = {
    vote_id?: SortOrder
    user_id?: SortOrder
    answer?: SortOrder
    submitted_at?: SortOrder
    _count?: answersCountOrderByAggregateInput
    _avg?: answersAvgOrderByAggregateInput
    _max?: answersMaxOrderByAggregateInput
    _min?: answersMinOrderByAggregateInput
    _sum?: answersSumOrderByAggregateInput
  }

  export type answersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<answersScalarWhereWithAggregatesInput>
    OR?: Enumerable<answersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<answersScalarWhereWithAggregatesInput>
    vote_id?: IntWithAggregatesFilter | number
    user_id?: StringWithAggregatesFilter | string
    answer?: IntWithAggregatesFilter | number
    submitted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type votesWhereInput = {
    AND?: Enumerable<votesWhereInput>
    OR?: Enumerable<votesWhereInput>
    NOT?: Enumerable<votesWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    options?: JsonFilter
    created_at?: DateTimeNullableFilter | Date | string | null
    opened_at?: DateTimeNullableFilter | Date | string | null
    closed_at?: DateTimeNullableFilter | Date | string | null
    status?: EnumstatusNullableFilter | status | null
    answers?: AnswersListRelationFilter
  }

  export type votesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    options?: SortOrder
    created_at?: SortOrder
    opened_at?: SortOrder
    closed_at?: SortOrder
    status?: SortOrder
    answers?: answersOrderByRelationAggregateInput
  }

  export type votesWhereUniqueInput = {
    id?: number
  }

  export type votesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    options?: SortOrder
    created_at?: SortOrder
    opened_at?: SortOrder
    closed_at?: SortOrder
    status?: SortOrder
    _count?: votesCountOrderByAggregateInput
    _avg?: votesAvgOrderByAggregateInput
    _max?: votesMaxOrderByAggregateInput
    _min?: votesMinOrderByAggregateInput
    _sum?: votesSumOrderByAggregateInput
  }

  export type votesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<votesScalarWhereWithAggregatesInput>
    OR?: Enumerable<votesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<votesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    options?: JsonWithAggregatesFilter
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    opened_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    closed_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    status?: EnumstatusNullableWithAggregatesFilter | status | null
  }

  export type answersCreateInput = {
    user_id: string
    answer: number
    submitted_at?: Date | string | null
    votes: votesCreateNestedOneWithoutAnswersInput
  }

  export type answersUncheckedCreateInput = {
    vote_id: number
    user_id: string
    answer: number
    submitted_at?: Date | string | null
  }

  export type answersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    votes?: votesUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateInput = {
    vote_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersCreateManyInput = {
    vote_id: number
    user_id: string
    answer: number
    submitted_at?: Date | string | null
  }

  export type answersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersUncheckedUpdateManyInput = {
    vote_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type votesCreateInput = {
    title: string
    description: string
    options: JsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    opened_at?: Date | string | null
    closed_at?: Date | string | null
    status?: status | null
    answers?: answersCreateNestedManyWithoutVotesInput
  }

  export type votesUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    options: JsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    opened_at?: Date | string | null
    closed_at?: Date | string | null
    status?: status | null
    answers?: answersUncheckedCreateNestedManyWithoutVotesInput
  }

  export type votesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | status | null
    answers?: answersUpdateManyWithoutVotesNestedInput
  }

  export type votesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | status | null
    answers?: answersUncheckedUpdateManyWithoutVotesNestedInput
  }

  export type votesCreateManyInput = {
    id?: number
    title: string
    description: string
    options: JsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    opened_at?: Date | string | null
    closed_at?: Date | string | null
    status?: status | null
  }

  export type votesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | status | null
  }

  export type votesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | status | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type VotesRelationFilter = {
    is?: votesWhereInput
    isNot?: votesWhereInput
  }

  export type answersVote_idUser_idCompoundUniqueInput = {
    vote_id: number
    user_id: string
  }

  export type answersCountOrderByAggregateInput = {
    vote_id?: SortOrder
    user_id?: SortOrder
    answer?: SortOrder
    submitted_at?: SortOrder
  }

  export type answersAvgOrderByAggregateInput = {
    vote_id?: SortOrder
    answer?: SortOrder
  }

  export type answersMaxOrderByAggregateInput = {
    vote_id?: SortOrder
    user_id?: SortOrder
    answer?: SortOrder
    submitted_at?: SortOrder
  }

  export type answersMinOrderByAggregateInput = {
    vote_id?: SortOrder
    user_id?: SortOrder
    answer?: SortOrder
    submitted_at?: SortOrder
  }

  export type answersSumOrderByAggregateInput = {
    vote_id?: SortOrder
    answer?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type EnumstatusNullableFilter = {
    equals?: status | null
    in?: Enumerable<status> | null
    notIn?: Enumerable<status> | null
    not?: NestedEnumstatusNullableFilter | status | null
  }

  export type AnswersListRelationFilter = {
    every?: answersWhereInput
    some?: answersWhereInput
    none?: answersWhereInput
  }

  export type answersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type votesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    options?: SortOrder
    created_at?: SortOrder
    opened_at?: SortOrder
    closed_at?: SortOrder
    status?: SortOrder
  }

  export type votesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type votesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    opened_at?: SortOrder
    closed_at?: SortOrder
    status?: SortOrder
  }

  export type votesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    opened_at?: SortOrder
    closed_at?: SortOrder
    status?: SortOrder
  }

  export type votesSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type EnumstatusNullableWithAggregatesFilter = {
    equals?: status | null
    in?: Enumerable<status> | null
    notIn?: Enumerable<status> | null
    not?: NestedEnumstatusNullableWithAggregatesFilter | status | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumstatusNullableFilter
    _max?: NestedEnumstatusNullableFilter
  }

  export type votesCreateNestedOneWithoutAnswersInput = {
    create?: XOR<votesCreateWithoutAnswersInput, votesUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: votesCreateOrConnectWithoutAnswersInput
    connect?: votesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type votesUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<votesCreateWithoutAnswersInput, votesUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: votesCreateOrConnectWithoutAnswersInput
    upsert?: votesUpsertWithoutAnswersInput
    connect?: votesWhereUniqueInput
    update?: XOR<votesUpdateWithoutAnswersInput, votesUncheckedUpdateWithoutAnswersInput>
  }

  export type answersCreateNestedManyWithoutVotesInput = {
    create?: XOR<Enumerable<answersCreateWithoutVotesInput>, Enumerable<answersUncheckedCreateWithoutVotesInput>>
    connectOrCreate?: Enumerable<answersCreateOrConnectWithoutVotesInput>
    createMany?: answersCreateManyVotesInputEnvelope
    connect?: Enumerable<answersWhereUniqueInput>
  }

  export type answersUncheckedCreateNestedManyWithoutVotesInput = {
    create?: XOR<Enumerable<answersCreateWithoutVotesInput>, Enumerable<answersUncheckedCreateWithoutVotesInput>>
    connectOrCreate?: Enumerable<answersCreateOrConnectWithoutVotesInput>
    createMany?: answersCreateManyVotesInputEnvelope
    connect?: Enumerable<answersWhereUniqueInput>
  }

  export type NullableEnumstatusFieldUpdateOperationsInput = {
    set?: status | null
  }

  export type answersUpdateManyWithoutVotesNestedInput = {
    create?: XOR<Enumerable<answersCreateWithoutVotesInput>, Enumerable<answersUncheckedCreateWithoutVotesInput>>
    connectOrCreate?: Enumerable<answersCreateOrConnectWithoutVotesInput>
    upsert?: Enumerable<answersUpsertWithWhereUniqueWithoutVotesInput>
    createMany?: answersCreateManyVotesInputEnvelope
    set?: Enumerable<answersWhereUniqueInput>
    disconnect?: Enumerable<answersWhereUniqueInput>
    delete?: Enumerable<answersWhereUniqueInput>
    connect?: Enumerable<answersWhereUniqueInput>
    update?: Enumerable<answersUpdateWithWhereUniqueWithoutVotesInput>
    updateMany?: Enumerable<answersUpdateManyWithWhereWithoutVotesInput>
    deleteMany?: Enumerable<answersScalarWhereInput>
  }

  export type answersUncheckedUpdateManyWithoutVotesNestedInput = {
    create?: XOR<Enumerable<answersCreateWithoutVotesInput>, Enumerable<answersUncheckedCreateWithoutVotesInput>>
    connectOrCreate?: Enumerable<answersCreateOrConnectWithoutVotesInput>
    upsert?: Enumerable<answersUpsertWithWhereUniqueWithoutVotesInput>
    createMany?: answersCreateManyVotesInputEnvelope
    set?: Enumerable<answersWhereUniqueInput>
    disconnect?: Enumerable<answersWhereUniqueInput>
    delete?: Enumerable<answersWhereUniqueInput>
    connect?: Enumerable<answersWhereUniqueInput>
    update?: Enumerable<answersUpdateWithWhereUniqueWithoutVotesInput>
    updateMany?: Enumerable<answersUpdateManyWithWhereWithoutVotesInput>
    deleteMany?: Enumerable<answersScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumstatusNullableFilter = {
    equals?: status | null
    in?: Enumerable<status> | null
    notIn?: Enumerable<status> | null
    not?: NestedEnumstatusNullableFilter | status | null
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedEnumstatusNullableWithAggregatesFilter = {
    equals?: status | null
    in?: Enumerable<status> | null
    notIn?: Enumerable<status> | null
    not?: NestedEnumstatusNullableWithAggregatesFilter | status | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumstatusNullableFilter
    _max?: NestedEnumstatusNullableFilter
  }

  export type votesCreateWithoutAnswersInput = {
    title: string
    description: string
    options: JsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    opened_at?: Date | string | null
    closed_at?: Date | string | null
    status?: status | null
  }

  export type votesUncheckedCreateWithoutAnswersInput = {
    id?: number
    title: string
    description: string
    options: JsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    opened_at?: Date | string | null
    closed_at?: Date | string | null
    status?: status | null
  }

  export type votesCreateOrConnectWithoutAnswersInput = {
    where: votesWhereUniqueInput
    create: XOR<votesCreateWithoutAnswersInput, votesUncheckedCreateWithoutAnswersInput>
  }

  export type votesUpsertWithoutAnswersInput = {
    update: XOR<votesUpdateWithoutAnswersInput, votesUncheckedUpdateWithoutAnswersInput>
    create: XOR<votesCreateWithoutAnswersInput, votesUncheckedCreateWithoutAnswersInput>
  }

  export type votesUpdateWithoutAnswersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | status | null
  }

  export type votesUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | status | null
  }

  export type answersCreateWithoutVotesInput = {
    user_id: string
    answer: number
    submitted_at?: Date | string | null
  }

  export type answersUncheckedCreateWithoutVotesInput = {
    user_id: string
    answer: number
    submitted_at?: Date | string | null
  }

  export type answersCreateOrConnectWithoutVotesInput = {
    where: answersWhereUniqueInput
    create: XOR<answersCreateWithoutVotesInput, answersUncheckedCreateWithoutVotesInput>
  }

  export type answersCreateManyVotesInputEnvelope = {
    data: Enumerable<answersCreateManyVotesInput>
    skipDuplicates?: boolean
  }

  export type answersUpsertWithWhereUniqueWithoutVotesInput = {
    where: answersWhereUniqueInput
    update: XOR<answersUpdateWithoutVotesInput, answersUncheckedUpdateWithoutVotesInput>
    create: XOR<answersCreateWithoutVotesInput, answersUncheckedCreateWithoutVotesInput>
  }

  export type answersUpdateWithWhereUniqueWithoutVotesInput = {
    where: answersWhereUniqueInput
    data: XOR<answersUpdateWithoutVotesInput, answersUncheckedUpdateWithoutVotesInput>
  }

  export type answersUpdateManyWithWhereWithoutVotesInput = {
    where: answersScalarWhereInput
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyWithoutAnswersInput>
  }

  export type answersScalarWhereInput = {
    AND?: Enumerable<answersScalarWhereInput>
    OR?: Enumerable<answersScalarWhereInput>
    NOT?: Enumerable<answersScalarWhereInput>
    vote_id?: IntFilter | number
    user_id?: StringFilter | string
    answer?: IntFilter | number
    submitted_at?: DateTimeNullableFilter | Date | string | null
  }

  export type answersCreateManyVotesInput = {
    user_id: string
    answer: number
    submitted_at?: Date | string | null
  }

  export type answersUpdateWithoutVotesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersUncheckedUpdateWithoutVotesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersUncheckedUpdateManyWithoutAnswersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}