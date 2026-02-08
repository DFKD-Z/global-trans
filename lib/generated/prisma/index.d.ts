
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectMember
 * 
 */
export type ProjectMember = $Result.DefaultSelection<Prisma.$ProjectMemberPayload>
/**
 * Model ProjectLanguage
 * 
 */
export type ProjectLanguage = $Result.DefaultSelection<Prisma.$ProjectLanguagePayload>
/**
 * Model Version
 * 
 */
export type Version = $Result.DefaultSelection<Prisma.$VersionPayload>
/**
 * Model TransKey
 * 
 */
export type TransKey = $Result.DefaultSelection<Prisma.$TransKeyPayload>
/**
 * Model TransValue
 * 
 */
export type TransValue = $Result.DefaultSelection<Prisma.$TransValuePayload>
/**
 * Model PlatformLanguage
 * 
 */
export type PlatformLanguage = $Result.DefaultSelection<Prisma.$PlatformLanguagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMember`: Exposes CRUD operations for the **ProjectMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMembers
    * const projectMembers = await prisma.projectMember.findMany()
    * ```
    */
  get projectMember(): Prisma.ProjectMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectLanguage`: Exposes CRUD operations for the **ProjectLanguage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectLanguages
    * const projectLanguages = await prisma.projectLanguage.findMany()
    * ```
    */
  get projectLanguage(): Prisma.ProjectLanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.version`: Exposes CRUD operations for the **Version** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Versions
    * const versions = await prisma.version.findMany()
    * ```
    */
  get version(): Prisma.VersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transKey`: Exposes CRUD operations for the **TransKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransKeys
    * const transKeys = await prisma.transKey.findMany()
    * ```
    */
  get transKey(): Prisma.TransKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transValue`: Exposes CRUD operations for the **TransValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransValues
    * const transValues = await prisma.transValue.findMany()
    * ```
    */
  get transValue(): Prisma.TransValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platformLanguage`: Exposes CRUD operations for the **PlatformLanguage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlatformLanguages
    * const platformLanguages = await prisma.platformLanguage.findMany()
    * ```
    */
  get platformLanguage(): Prisma.PlatformLanguageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Project: 'Project',
    ProjectMember: 'ProjectMember',
    ProjectLanguage: 'ProjectLanguage',
    Version: 'Version',
    TransKey: 'TransKey',
    TransValue: 'TransValue',
    PlatformLanguage: 'PlatformLanguage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "projectMember" | "projectLanguage" | "version" | "transKey" | "transValue" | "platformLanguage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectMember: {
        payload: Prisma.$ProjectMemberPayload<ExtArgs>
        fields: Prisma.ProjectMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findFirst: {
            args: Prisma.ProjectMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findMany: {
            args: Prisma.ProjectMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          create: {
            args: Prisma.ProjectMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          createMany: {
            args: Prisma.ProjectMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          delete: {
            args: Prisma.ProjectMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          update: {
            args: Prisma.ProjectMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          upsert: {
            args: Prisma.ProjectMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          aggregate: {
            args: Prisma.ProjectMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMember>
          }
          groupBy: {
            args: Prisma.ProjectMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberCountAggregateOutputType> | number
          }
        }
      }
      ProjectLanguage: {
        payload: Prisma.$ProjectLanguagePayload<ExtArgs>
        fields: Prisma.ProjectLanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectLanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectLanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          findFirst: {
            args: Prisma.ProjectLanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectLanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          findMany: {
            args: Prisma.ProjectLanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>[]
          }
          create: {
            args: Prisma.ProjectLanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          createMany: {
            args: Prisma.ProjectLanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectLanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>[]
          }
          delete: {
            args: Prisma.ProjectLanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          update: {
            args: Prisma.ProjectLanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          deleteMany: {
            args: Prisma.ProjectLanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectLanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectLanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>[]
          }
          upsert: {
            args: Prisma.ProjectLanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          aggregate: {
            args: Prisma.ProjectLanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectLanguage>
          }
          groupBy: {
            args: Prisma.ProjectLanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectLanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectLanguageCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectLanguageCountAggregateOutputType> | number
          }
        }
      }
      Version: {
        payload: Prisma.$VersionPayload<ExtArgs>
        fields: Prisma.VersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>
          }
          findFirst: {
            args: Prisma.VersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>
          }
          findMany: {
            args: Prisma.VersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>[]
          }
          create: {
            args: Prisma.VersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>
          }
          createMany: {
            args: Prisma.VersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>[]
          }
          delete: {
            args: Prisma.VersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>
          }
          update: {
            args: Prisma.VersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>
          }
          deleteMany: {
            args: Prisma.VersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>[]
          }
          upsert: {
            args: Prisma.VersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>
          }
          aggregate: {
            args: Prisma.VersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVersion>
          }
          groupBy: {
            args: Prisma.VersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<VersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.VersionCountArgs<ExtArgs>
            result: $Utils.Optional<VersionCountAggregateOutputType> | number
          }
        }
      }
      TransKey: {
        payload: Prisma.$TransKeyPayload<ExtArgs>
        fields: Prisma.TransKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransKeyPayload>
          }
          findFirst: {
            args: Prisma.TransKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransKeyPayload>
          }
          findMany: {
            args: Prisma.TransKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransKeyPayload>[]
          }
          create: {
            args: Prisma.TransKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransKeyPayload>
          }
          createMany: {
            args: Prisma.TransKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransKeyPayload>[]
          }
          delete: {
            args: Prisma.TransKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransKeyPayload>
          }
          update: {
            args: Prisma.TransKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransKeyPayload>
          }
          deleteMany: {
            args: Prisma.TransKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransKeyPayload>[]
          }
          upsert: {
            args: Prisma.TransKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransKeyPayload>
          }
          aggregate: {
            args: Prisma.TransKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransKey>
          }
          groupBy: {
            args: Prisma.TransKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransKeyCountArgs<ExtArgs>
            result: $Utils.Optional<TransKeyCountAggregateOutputType> | number
          }
        }
      }
      TransValue: {
        payload: Prisma.$TransValuePayload<ExtArgs>
        fields: Prisma.TransValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransValuePayload>
          }
          findFirst: {
            args: Prisma.TransValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransValuePayload>
          }
          findMany: {
            args: Prisma.TransValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransValuePayload>[]
          }
          create: {
            args: Prisma.TransValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransValuePayload>
          }
          createMany: {
            args: Prisma.TransValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransValuePayload>[]
          }
          delete: {
            args: Prisma.TransValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransValuePayload>
          }
          update: {
            args: Prisma.TransValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransValuePayload>
          }
          deleteMany: {
            args: Prisma.TransValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransValuePayload>[]
          }
          upsert: {
            args: Prisma.TransValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransValuePayload>
          }
          aggregate: {
            args: Prisma.TransValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransValue>
          }
          groupBy: {
            args: Prisma.TransValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransValueCountArgs<ExtArgs>
            result: $Utils.Optional<TransValueCountAggregateOutputType> | number
          }
        }
      }
      PlatformLanguage: {
        payload: Prisma.$PlatformLanguagePayload<ExtArgs>
        fields: Prisma.PlatformLanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformLanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformLanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformLanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformLanguagePayload>
          }
          findFirst: {
            args: Prisma.PlatformLanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformLanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformLanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformLanguagePayload>
          }
          findMany: {
            args: Prisma.PlatformLanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformLanguagePayload>[]
          }
          create: {
            args: Prisma.PlatformLanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformLanguagePayload>
          }
          createMany: {
            args: Prisma.PlatformLanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformLanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformLanguagePayload>[]
          }
          delete: {
            args: Prisma.PlatformLanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformLanguagePayload>
          }
          update: {
            args: Prisma.PlatformLanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformLanguagePayload>
          }
          deleteMany: {
            args: Prisma.PlatformLanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformLanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatformLanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformLanguagePayload>[]
          }
          upsert: {
            args: Prisma.PlatformLanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformLanguagePayload>
          }
          aggregate: {
            args: Prisma.PlatformLanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatformLanguage>
          }
          groupBy: {
            args: Prisma.PlatformLanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformLanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformLanguageCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformLanguageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    project?: ProjectOmit
    projectMember?: ProjectMemberOmit
    projectLanguage?: ProjectLanguageOmit
    version?: VersionOmit
    transKey?: TransKeyOmit
    transValue?: TransValueOmit
    platformLanguage?: PlatformLanguageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    languages: number
    versions: number
    members: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    languages?: boolean | ProjectCountOutputTypeCountLanguagesArgs
    versions?: boolean | ProjectCountOutputTypeCountVersionsArgs
    members?: boolean | ProjectCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectLanguageWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VersionWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }


  /**
   * Count Type VersionCountOutputType
   */

  export type VersionCountOutputType = {
    keys: number
  }

  export type VersionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keys?: boolean | VersionCountOutputTypeCountKeysArgs
  }

  // Custom InputTypes
  /**
   * VersionCountOutputType without action
   */
  export type VersionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionCountOutputType
     */
    select?: VersionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VersionCountOutputType without action
   */
  export type VersionCountOutputTypeCountKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransKeyWhereInput
  }


  /**
   * Count Type TransKeyCountOutputType
   */

  export type TransKeyCountOutputType = {
    values: number
  }

  export type TransKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | TransKeyCountOutputTypeCountValuesArgs
  }

  // Custom InputTypes
  /**
   * TransKeyCountOutputType without action
   */
  export type TransKeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKeyCountOutputType
     */
    select?: TransKeyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransKeyCountOutputType without action
   */
  export type TransKeyCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransValueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    isSuperAdmin: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    isSuperAdmin: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    isSuperAdmin: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isSuperAdmin?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isSuperAdmin?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isSuperAdmin?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    isSuperAdmin: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    isSuperAdmin?: boolean
    createdAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    isSuperAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    isSuperAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    isSuperAdmin?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "isSuperAdmin" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      isSuperAdmin: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isSuperAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    languages?: boolean | Project$languagesArgs<ExtArgs>
    versions?: boolean | Project$versionsArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    languages?: boolean | Project$languagesArgs<ExtArgs>
    versions?: boolean | Project$versionsArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      languages: Prisma.$ProjectLanguagePayload<ExtArgs>[]
      versions: Prisma.$VersionPayload<ExtArgs>[]
      members: Prisma.$ProjectMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    languages<T extends Project$languagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$languagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    versions<T extends Project$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Project$membersArgs<ExtArgs> = {}>(args?: Subset<T, Project$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.languages
   */
  export type Project$languagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    where?: ProjectLanguageWhereInput
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    cursor?: ProjectLanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * Project.versions
   */
  export type Project$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    where?: VersionWhereInput
    orderBy?: VersionOrderByWithRelationInput | VersionOrderByWithRelationInput[]
    cursor?: VersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VersionScalarFieldEnum | VersionScalarFieldEnum[]
  }

  /**
   * Project.members
   */
  export type Project$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMember
   */

  export type AggregateProjectMember = {
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  export type ProjectMemberMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    role: string | null
  }

  export type ProjectMemberMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    role: string | null
  }

  export type ProjectMemberCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    role: number
    _all: number
  }


  export type ProjectMemberMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    role?: true
  }

  export type ProjectMemberMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    role?: true
  }

  export type ProjectMemberCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    role?: true
    _all?: true
  }

  export type ProjectMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMember to aggregate.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMembers
    **/
    _count?: true | ProjectMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type GetProjectMemberAggregateType<T extends ProjectMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMember[P]>
      : GetScalarType<T[P], AggregateProjectMember[P]>
  }




  export type ProjectMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithAggregationInput | ProjectMemberOrderByWithAggregationInput[]
    by: ProjectMemberScalarFieldEnum[] | ProjectMemberScalarFieldEnum
    having?: ProjectMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMemberCountAggregateInputType | true
    _min?: ProjectMemberMinAggregateInputType
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type ProjectMemberGroupByOutputType = {
    id: string
    projectId: string
    userId: string
    role: string
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  type GetProjectMemberGroupByPayload<T extends ProjectMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
  }

  export type ProjectMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "role", ExtArgs["result"]["projectMember"]>
  export type ProjectMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMember"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      userId: string
      role: string
    }, ExtArgs["result"]["projectMember"]>
    composites: {}
  }

  type ProjectMemberGetPayload<S extends boolean | null | undefined | ProjectMemberDefaultArgs> = $Result.GetResult<Prisma.$ProjectMemberPayload, S>

  type ProjectMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMemberCountAggregateInputType | true
    }

  export interface ProjectMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMember'], meta: { name: 'ProjectMember' } }
    /**
     * Find zero or one ProjectMember that matches the filter.
     * @param {ProjectMemberFindUniqueArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMemberFindUniqueArgs>(args: SelectSubset<T, ProjectMemberFindUniqueArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMemberFindUniqueOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMemberFindFirstArgs>(args?: SelectSubset<T, ProjectMemberFindFirstArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany()
     * 
     * // Get first 10 ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectMemberFindManyArgs>(args?: SelectSubset<T, ProjectMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMember.
     * @param {ProjectMemberCreateArgs} args - Arguments to create a ProjectMember.
     * @example
     * // Create one ProjectMember
     * const ProjectMember = await prisma.projectMember.create({
     *   data: {
     *     // ... data to create a ProjectMember
     *   }
     * })
     * 
     */
    create<T extends ProjectMemberCreateArgs>(args: SelectSubset<T, ProjectMemberCreateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMembers.
     * @param {ProjectMemberCreateManyArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMemberCreateManyArgs>(args?: SelectSubset<T, ProjectMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectMembers and returns the data saved in the database.
     * @param {ProjectMemberCreateManyAndReturnArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectMembers and only return the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectMember.
     * @param {ProjectMemberDeleteArgs} args - Arguments to delete one ProjectMember.
     * @example
     * // Delete one ProjectMember
     * const ProjectMember = await prisma.projectMember.delete({
     *   where: {
     *     // ... filter to delete one ProjectMember
     *   }
     * })
     * 
     */
    delete<T extends ProjectMemberDeleteArgs>(args: SelectSubset<T, ProjectMemberDeleteArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMember.
     * @param {ProjectMemberUpdateArgs} args - Arguments to update one ProjectMember.
     * @example
     * // Update one ProjectMember
     * const projectMember = await prisma.projectMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMemberUpdateArgs>(args: SelectSubset<T, ProjectMemberUpdateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMembers.
     * @param {ProjectMemberDeleteManyArgs} args - Arguments to filter ProjectMembers to delete.
     * @example
     * // Delete a few ProjectMembers
     * const { count } = await prisma.projectMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMemberDeleteManyArgs>(args?: SelectSubset<T, ProjectMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMemberUpdateManyArgs>(args: SelectSubset<T, ProjectMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers and returns the data updated in the database.
     * @param {ProjectMemberUpdateManyAndReturnArgs} args - Arguments to update many ProjectMembers.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectMembers and only return the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectMember.
     * @param {ProjectMemberUpsertArgs} args - Arguments to update or create a ProjectMember.
     * @example
     * // Update or create a ProjectMember
     * const projectMember = await prisma.projectMember.upsert({
     *   create: {
     *     // ... data to create a ProjectMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMember we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMemberUpsertArgs>(args: SelectSubset<T, ProjectMemberUpsertArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberCountArgs} args - Arguments to filter ProjectMembers to count.
     * @example
     * // Count the number of ProjectMembers
     * const count = await prisma.projectMember.count({
     *   where: {
     *     // ... the filter for the ProjectMembers we want to count
     *   }
     * })
    **/
    count<T extends ProjectMemberCountArgs>(
      args?: Subset<T, ProjectMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectMemberAggregateArgs>(args: Subset<T, ProjectMemberAggregateArgs>): Prisma.PrismaPromise<GetProjectMemberAggregateType<T>>

    /**
     * Group by ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberGroupByArgs} args - Group by arguments.
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
      T extends ProjectMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMemberGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMember model
   */
  readonly fields: ProjectMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectMember model
   */
  interface ProjectMemberFieldRefs {
    readonly id: FieldRef<"ProjectMember", 'String'>
    readonly projectId: FieldRef<"ProjectMember", 'String'>
    readonly userId: FieldRef<"ProjectMember", 'String'>
    readonly role: FieldRef<"ProjectMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMember findUnique
   */
  export type ProjectMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findUniqueOrThrow
   */
  export type ProjectMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findFirst
   */
  export type ProjectMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findFirstOrThrow
   */
  export type ProjectMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findMany
   */
  export type ProjectMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember create
   */
  export type ProjectMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMember.
     */
    data: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
  }

  /**
   * ProjectMember createMany
   */
  export type ProjectMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMember createManyAndReturn
   */
  export type ProjectMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMember update
   */
  export type ProjectMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMember.
     */
    data: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
    /**
     * Choose, which ProjectMember to update.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember updateMany
   */
  export type ProjectMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number
  }

  /**
   * ProjectMember updateManyAndReturn
   */
  export type ProjectMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMember upsert
   */
  export type ProjectMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMember to update in case it exists.
     */
    where: ProjectMemberWhereUniqueInput
    /**
     * In case the ProjectMember found by the `where` argument doesn't exist, create a new ProjectMember with this data.
     */
    create: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
    /**
     * In case the ProjectMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
  }

  /**
   * ProjectMember delete
   */
  export type ProjectMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter which ProjectMember to delete.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember deleteMany
   */
  export type ProjectMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMembers to delete
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to delete.
     */
    limit?: number
  }

  /**
   * ProjectMember without action
   */
  export type ProjectMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
  }


  /**
   * Model ProjectLanguage
   */

  export type AggregateProjectLanguage = {
    _count: ProjectLanguageCountAggregateOutputType | null
    _min: ProjectLanguageMinAggregateOutputType | null
    _max: ProjectLanguageMaxAggregateOutputType | null
  }

  export type ProjectLanguageMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    code: string | null
    isSource: boolean | null
  }

  export type ProjectLanguageMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    code: string | null
    isSource: boolean | null
  }

  export type ProjectLanguageCountAggregateOutputType = {
    id: number
    projectId: number
    code: number
    isSource: number
    _all: number
  }


  export type ProjectLanguageMinAggregateInputType = {
    id?: true
    projectId?: true
    code?: true
    isSource?: true
  }

  export type ProjectLanguageMaxAggregateInputType = {
    id?: true
    projectId?: true
    code?: true
    isSource?: true
  }

  export type ProjectLanguageCountAggregateInputType = {
    id?: true
    projectId?: true
    code?: true
    isSource?: true
    _all?: true
  }

  export type ProjectLanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectLanguage to aggregate.
     */
    where?: ProjectLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLanguages to fetch.
     */
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectLanguages
    **/
    _count?: true | ProjectLanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectLanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectLanguageMaxAggregateInputType
  }

  export type GetProjectLanguageAggregateType<T extends ProjectLanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectLanguage[P]>
      : GetScalarType<T[P], AggregateProjectLanguage[P]>
  }




  export type ProjectLanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectLanguageWhereInput
    orderBy?: ProjectLanguageOrderByWithAggregationInput | ProjectLanguageOrderByWithAggregationInput[]
    by: ProjectLanguageScalarFieldEnum[] | ProjectLanguageScalarFieldEnum
    having?: ProjectLanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectLanguageCountAggregateInputType | true
    _min?: ProjectLanguageMinAggregateInputType
    _max?: ProjectLanguageMaxAggregateInputType
  }

  export type ProjectLanguageGroupByOutputType = {
    id: string
    projectId: string
    code: string
    isSource: boolean
    _count: ProjectLanguageCountAggregateOutputType | null
    _min: ProjectLanguageMinAggregateOutputType | null
    _max: ProjectLanguageMaxAggregateOutputType | null
  }

  type GetProjectLanguageGroupByPayload<T extends ProjectLanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectLanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectLanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectLanguageGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectLanguageGroupByOutputType[P]>
        }
      >
    >


  export type ProjectLanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    code?: boolean
    isSource?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectLanguage"]>

  export type ProjectLanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    code?: boolean
    isSource?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectLanguage"]>

  export type ProjectLanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    code?: boolean
    isSource?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectLanguage"]>

  export type ProjectLanguageSelectScalar = {
    id?: boolean
    projectId?: boolean
    code?: boolean
    isSource?: boolean
  }

  export type ProjectLanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "code" | "isSource", ExtArgs["result"]["projectLanguage"]>
  export type ProjectLanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectLanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectLanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectLanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectLanguage"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      code: string
      isSource: boolean
    }, ExtArgs["result"]["projectLanguage"]>
    composites: {}
  }

  type ProjectLanguageGetPayload<S extends boolean | null | undefined | ProjectLanguageDefaultArgs> = $Result.GetResult<Prisma.$ProjectLanguagePayload, S>

  type ProjectLanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectLanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectLanguageCountAggregateInputType | true
    }

  export interface ProjectLanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectLanguage'], meta: { name: 'ProjectLanguage' } }
    /**
     * Find zero or one ProjectLanguage that matches the filter.
     * @param {ProjectLanguageFindUniqueArgs} args - Arguments to find a ProjectLanguage
     * @example
     * // Get one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectLanguageFindUniqueArgs>(args: SelectSubset<T, ProjectLanguageFindUniqueArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectLanguage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectLanguageFindUniqueOrThrowArgs} args - Arguments to find a ProjectLanguage
     * @example
     * // Get one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectLanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectLanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectLanguage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageFindFirstArgs} args - Arguments to find a ProjectLanguage
     * @example
     * // Get one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectLanguageFindFirstArgs>(args?: SelectSubset<T, ProjectLanguageFindFirstArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectLanguage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageFindFirstOrThrowArgs} args - Arguments to find a ProjectLanguage
     * @example
     * // Get one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectLanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectLanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectLanguages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectLanguages
     * const projectLanguages = await prisma.projectLanguage.findMany()
     * 
     * // Get first 10 ProjectLanguages
     * const projectLanguages = await prisma.projectLanguage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectLanguageWithIdOnly = await prisma.projectLanguage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectLanguageFindManyArgs>(args?: SelectSubset<T, ProjectLanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectLanguage.
     * @param {ProjectLanguageCreateArgs} args - Arguments to create a ProjectLanguage.
     * @example
     * // Create one ProjectLanguage
     * const ProjectLanguage = await prisma.projectLanguage.create({
     *   data: {
     *     // ... data to create a ProjectLanguage
     *   }
     * })
     * 
     */
    create<T extends ProjectLanguageCreateArgs>(args: SelectSubset<T, ProjectLanguageCreateArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectLanguages.
     * @param {ProjectLanguageCreateManyArgs} args - Arguments to create many ProjectLanguages.
     * @example
     * // Create many ProjectLanguages
     * const projectLanguage = await prisma.projectLanguage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectLanguageCreateManyArgs>(args?: SelectSubset<T, ProjectLanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectLanguages and returns the data saved in the database.
     * @param {ProjectLanguageCreateManyAndReturnArgs} args - Arguments to create many ProjectLanguages.
     * @example
     * // Create many ProjectLanguages
     * const projectLanguage = await prisma.projectLanguage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectLanguages and only return the `id`
     * const projectLanguageWithIdOnly = await prisma.projectLanguage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectLanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectLanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectLanguage.
     * @param {ProjectLanguageDeleteArgs} args - Arguments to delete one ProjectLanguage.
     * @example
     * // Delete one ProjectLanguage
     * const ProjectLanguage = await prisma.projectLanguage.delete({
     *   where: {
     *     // ... filter to delete one ProjectLanguage
     *   }
     * })
     * 
     */
    delete<T extends ProjectLanguageDeleteArgs>(args: SelectSubset<T, ProjectLanguageDeleteArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectLanguage.
     * @param {ProjectLanguageUpdateArgs} args - Arguments to update one ProjectLanguage.
     * @example
     * // Update one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectLanguageUpdateArgs>(args: SelectSubset<T, ProjectLanguageUpdateArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectLanguages.
     * @param {ProjectLanguageDeleteManyArgs} args - Arguments to filter ProjectLanguages to delete.
     * @example
     * // Delete a few ProjectLanguages
     * const { count } = await prisma.projectLanguage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectLanguageDeleteManyArgs>(args?: SelectSubset<T, ProjectLanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectLanguages
     * const projectLanguage = await prisma.projectLanguage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectLanguageUpdateManyArgs>(args: SelectSubset<T, ProjectLanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectLanguages and returns the data updated in the database.
     * @param {ProjectLanguageUpdateManyAndReturnArgs} args - Arguments to update many ProjectLanguages.
     * @example
     * // Update many ProjectLanguages
     * const projectLanguage = await prisma.projectLanguage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectLanguages and only return the `id`
     * const projectLanguageWithIdOnly = await prisma.projectLanguage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectLanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectLanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectLanguage.
     * @param {ProjectLanguageUpsertArgs} args - Arguments to update or create a ProjectLanguage.
     * @example
     * // Update or create a ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.upsert({
     *   create: {
     *     // ... data to create a ProjectLanguage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectLanguage we want to update
     *   }
     * })
     */
    upsert<T extends ProjectLanguageUpsertArgs>(args: SelectSubset<T, ProjectLanguageUpsertArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageCountArgs} args - Arguments to filter ProjectLanguages to count.
     * @example
     * // Count the number of ProjectLanguages
     * const count = await prisma.projectLanguage.count({
     *   where: {
     *     // ... the filter for the ProjectLanguages we want to count
     *   }
     * })
    **/
    count<T extends ProjectLanguageCountArgs>(
      args?: Subset<T, ProjectLanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectLanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectLanguageAggregateArgs>(args: Subset<T, ProjectLanguageAggregateArgs>): Prisma.PrismaPromise<GetProjectLanguageAggregateType<T>>

    /**
     * Group by ProjectLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageGroupByArgs} args - Group by arguments.
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
      T extends ProjectLanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectLanguageGroupByArgs['orderBy'] }
        : { orderBy?: ProjectLanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectLanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectLanguage model
   */
  readonly fields: ProjectLanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectLanguage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectLanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectLanguage model
   */
  interface ProjectLanguageFieldRefs {
    readonly id: FieldRef<"ProjectLanguage", 'String'>
    readonly projectId: FieldRef<"ProjectLanguage", 'String'>
    readonly code: FieldRef<"ProjectLanguage", 'String'>
    readonly isSource: FieldRef<"ProjectLanguage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProjectLanguage findUnique
   */
  export type ProjectLanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguage to fetch.
     */
    where: ProjectLanguageWhereUniqueInput
  }

  /**
   * ProjectLanguage findUniqueOrThrow
   */
  export type ProjectLanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguage to fetch.
     */
    where: ProjectLanguageWhereUniqueInput
  }

  /**
   * ProjectLanguage findFirst
   */
  export type ProjectLanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguage to fetch.
     */
    where?: ProjectLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLanguages to fetch.
     */
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectLanguages.
     */
    cursor?: ProjectLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectLanguages.
     */
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * ProjectLanguage findFirstOrThrow
   */
  export type ProjectLanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguage to fetch.
     */
    where?: ProjectLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLanguages to fetch.
     */
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectLanguages.
     */
    cursor?: ProjectLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectLanguages.
     */
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * ProjectLanguage findMany
   */
  export type ProjectLanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguages to fetch.
     */
    where?: ProjectLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLanguages to fetch.
     */
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectLanguages.
     */
    cursor?: ProjectLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLanguages.
     */
    skip?: number
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * ProjectLanguage create
   */
  export type ProjectLanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectLanguage.
     */
    data: XOR<ProjectLanguageCreateInput, ProjectLanguageUncheckedCreateInput>
  }

  /**
   * ProjectLanguage createMany
   */
  export type ProjectLanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectLanguages.
     */
    data: ProjectLanguageCreateManyInput | ProjectLanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectLanguage createManyAndReturn
   */
  export type ProjectLanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectLanguages.
     */
    data: ProjectLanguageCreateManyInput | ProjectLanguageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectLanguage update
   */
  export type ProjectLanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectLanguage.
     */
    data: XOR<ProjectLanguageUpdateInput, ProjectLanguageUncheckedUpdateInput>
    /**
     * Choose, which ProjectLanguage to update.
     */
    where: ProjectLanguageWhereUniqueInput
  }

  /**
   * ProjectLanguage updateMany
   */
  export type ProjectLanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectLanguages.
     */
    data: XOR<ProjectLanguageUpdateManyMutationInput, ProjectLanguageUncheckedUpdateManyInput>
    /**
     * Filter which ProjectLanguages to update
     */
    where?: ProjectLanguageWhereInput
    /**
     * Limit how many ProjectLanguages to update.
     */
    limit?: number
  }

  /**
   * ProjectLanguage updateManyAndReturn
   */
  export type ProjectLanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * The data used to update ProjectLanguages.
     */
    data: XOR<ProjectLanguageUpdateManyMutationInput, ProjectLanguageUncheckedUpdateManyInput>
    /**
     * Filter which ProjectLanguages to update
     */
    where?: ProjectLanguageWhereInput
    /**
     * Limit how many ProjectLanguages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectLanguage upsert
   */
  export type ProjectLanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectLanguage to update in case it exists.
     */
    where: ProjectLanguageWhereUniqueInput
    /**
     * In case the ProjectLanguage found by the `where` argument doesn't exist, create a new ProjectLanguage with this data.
     */
    create: XOR<ProjectLanguageCreateInput, ProjectLanguageUncheckedCreateInput>
    /**
     * In case the ProjectLanguage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectLanguageUpdateInput, ProjectLanguageUncheckedUpdateInput>
  }

  /**
   * ProjectLanguage delete
   */
  export type ProjectLanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter which ProjectLanguage to delete.
     */
    where: ProjectLanguageWhereUniqueInput
  }

  /**
   * ProjectLanguage deleteMany
   */
  export type ProjectLanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectLanguages to delete
     */
    where?: ProjectLanguageWhereInput
    /**
     * Limit how many ProjectLanguages to delete.
     */
    limit?: number
  }

  /**
   * ProjectLanguage without action
   */
  export type ProjectLanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
  }


  /**
   * Model Version
   */

  export type AggregateVersion = {
    _count: VersionCountAggregateOutputType | null
    _min: VersionMinAggregateOutputType | null
    _max: VersionMaxAggregateOutputType | null
  }

  export type VersionMinAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type VersionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type VersionCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    createdAt: number
    _all: number
  }


  export type VersionMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    createdAt?: true
  }

  export type VersionMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    createdAt?: true
  }

  export type VersionCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    createdAt?: true
    _all?: true
  }

  export type VersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Version to aggregate.
     */
    where?: VersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Versions to fetch.
     */
    orderBy?: VersionOrderByWithRelationInput | VersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Versions
    **/
    _count?: true | VersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VersionMaxAggregateInputType
  }

  export type GetVersionAggregateType<T extends VersionAggregateArgs> = {
        [P in keyof T & keyof AggregateVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVersion[P]>
      : GetScalarType<T[P], AggregateVersion[P]>
  }




  export type VersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VersionWhereInput
    orderBy?: VersionOrderByWithAggregationInput | VersionOrderByWithAggregationInput[]
    by: VersionScalarFieldEnum[] | VersionScalarFieldEnum
    having?: VersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VersionCountAggregateInputType | true
    _min?: VersionMinAggregateInputType
    _max?: VersionMaxAggregateInputType
  }

  export type VersionGroupByOutputType = {
    id: string
    name: string
    projectId: string
    createdAt: Date
    _count: VersionCountAggregateOutputType | null
    _min: VersionMinAggregateOutputType | null
    _max: VersionMaxAggregateOutputType | null
  }

  type GetVersionGroupByPayload<T extends VersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VersionGroupByOutputType[P]>
            : GetScalarType<T[P], VersionGroupByOutputType[P]>
        }
      >
    >


  export type VersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    keys?: boolean | Version$keysArgs<ExtArgs>
    _count?: boolean | VersionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["version"]>

  export type VersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["version"]>

  export type VersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["version"]>

  export type VersionSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
    createdAt?: boolean
  }

  export type VersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "projectId" | "createdAt", ExtArgs["result"]["version"]>
  export type VersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    keys?: boolean | Version$keysArgs<ExtArgs>
    _count?: boolean | VersionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type VersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $VersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Version"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      keys: Prisma.$TransKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      projectId: string
      createdAt: Date
    }, ExtArgs["result"]["version"]>
    composites: {}
  }

  type VersionGetPayload<S extends boolean | null | undefined | VersionDefaultArgs> = $Result.GetResult<Prisma.$VersionPayload, S>

  type VersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VersionCountAggregateInputType | true
    }

  export interface VersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Version'], meta: { name: 'Version' } }
    /**
     * Find zero or one Version that matches the filter.
     * @param {VersionFindUniqueArgs} args - Arguments to find a Version
     * @example
     * // Get one Version
     * const version = await prisma.version.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VersionFindUniqueArgs>(args: SelectSubset<T, VersionFindUniqueArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Version that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VersionFindUniqueOrThrowArgs} args - Arguments to find a Version
     * @example
     * // Get one Version
     * const version = await prisma.version.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VersionFindUniqueOrThrowArgs>(args: SelectSubset<T, VersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Version that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionFindFirstArgs} args - Arguments to find a Version
     * @example
     * // Get one Version
     * const version = await prisma.version.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VersionFindFirstArgs>(args?: SelectSubset<T, VersionFindFirstArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Version that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionFindFirstOrThrowArgs} args - Arguments to find a Version
     * @example
     * // Get one Version
     * const version = await prisma.version.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VersionFindFirstOrThrowArgs>(args?: SelectSubset<T, VersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Versions
     * const versions = await prisma.version.findMany()
     * 
     * // Get first 10 Versions
     * const versions = await prisma.version.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const versionWithIdOnly = await prisma.version.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VersionFindManyArgs>(args?: SelectSubset<T, VersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Version.
     * @param {VersionCreateArgs} args - Arguments to create a Version.
     * @example
     * // Create one Version
     * const Version = await prisma.version.create({
     *   data: {
     *     // ... data to create a Version
     *   }
     * })
     * 
     */
    create<T extends VersionCreateArgs>(args: SelectSubset<T, VersionCreateArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Versions.
     * @param {VersionCreateManyArgs} args - Arguments to create many Versions.
     * @example
     * // Create many Versions
     * const version = await prisma.version.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VersionCreateManyArgs>(args?: SelectSubset<T, VersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Versions and returns the data saved in the database.
     * @param {VersionCreateManyAndReturnArgs} args - Arguments to create many Versions.
     * @example
     * // Create many Versions
     * const version = await prisma.version.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Versions and only return the `id`
     * const versionWithIdOnly = await prisma.version.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VersionCreateManyAndReturnArgs>(args?: SelectSubset<T, VersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Version.
     * @param {VersionDeleteArgs} args - Arguments to delete one Version.
     * @example
     * // Delete one Version
     * const Version = await prisma.version.delete({
     *   where: {
     *     // ... filter to delete one Version
     *   }
     * })
     * 
     */
    delete<T extends VersionDeleteArgs>(args: SelectSubset<T, VersionDeleteArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Version.
     * @param {VersionUpdateArgs} args - Arguments to update one Version.
     * @example
     * // Update one Version
     * const version = await prisma.version.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VersionUpdateArgs>(args: SelectSubset<T, VersionUpdateArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Versions.
     * @param {VersionDeleteManyArgs} args - Arguments to filter Versions to delete.
     * @example
     * // Delete a few Versions
     * const { count } = await prisma.version.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VersionDeleteManyArgs>(args?: SelectSubset<T, VersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Versions
     * const version = await prisma.version.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VersionUpdateManyArgs>(args: SelectSubset<T, VersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Versions and returns the data updated in the database.
     * @param {VersionUpdateManyAndReturnArgs} args - Arguments to update many Versions.
     * @example
     * // Update many Versions
     * const version = await prisma.version.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Versions and only return the `id`
     * const versionWithIdOnly = await prisma.version.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VersionUpdateManyAndReturnArgs>(args: SelectSubset<T, VersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Version.
     * @param {VersionUpsertArgs} args - Arguments to update or create a Version.
     * @example
     * // Update or create a Version
     * const version = await prisma.version.upsert({
     *   create: {
     *     // ... data to create a Version
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Version we want to update
     *   }
     * })
     */
    upsert<T extends VersionUpsertArgs>(args: SelectSubset<T, VersionUpsertArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionCountArgs} args - Arguments to filter Versions to count.
     * @example
     * // Count the number of Versions
     * const count = await prisma.version.count({
     *   where: {
     *     // ... the filter for the Versions we want to count
     *   }
     * })
    **/
    count<T extends VersionCountArgs>(
      args?: Subset<T, VersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VersionAggregateArgs>(args: Subset<T, VersionAggregateArgs>): Prisma.PrismaPromise<GetVersionAggregateType<T>>

    /**
     * Group by Version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionGroupByArgs} args - Group by arguments.
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
      T extends VersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VersionGroupByArgs['orderBy'] }
        : { orderBy?: VersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Version model
   */
  readonly fields: VersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Version.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    keys<T extends Version$keysArgs<ExtArgs> = {}>(args?: Subset<T, Version$keysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Version model
   */
  interface VersionFieldRefs {
    readonly id: FieldRef<"Version", 'String'>
    readonly name: FieldRef<"Version", 'String'>
    readonly projectId: FieldRef<"Version", 'String'>
    readonly createdAt: FieldRef<"Version", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Version findUnique
   */
  export type VersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * Filter, which Version to fetch.
     */
    where: VersionWhereUniqueInput
  }

  /**
   * Version findUniqueOrThrow
   */
  export type VersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * Filter, which Version to fetch.
     */
    where: VersionWhereUniqueInput
  }

  /**
   * Version findFirst
   */
  export type VersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * Filter, which Version to fetch.
     */
    where?: VersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Versions to fetch.
     */
    orderBy?: VersionOrderByWithRelationInput | VersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Versions.
     */
    cursor?: VersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Versions.
     */
    distinct?: VersionScalarFieldEnum | VersionScalarFieldEnum[]
  }

  /**
   * Version findFirstOrThrow
   */
  export type VersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * Filter, which Version to fetch.
     */
    where?: VersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Versions to fetch.
     */
    orderBy?: VersionOrderByWithRelationInput | VersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Versions.
     */
    cursor?: VersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Versions.
     */
    distinct?: VersionScalarFieldEnum | VersionScalarFieldEnum[]
  }

  /**
   * Version findMany
   */
  export type VersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * Filter, which Versions to fetch.
     */
    where?: VersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Versions to fetch.
     */
    orderBy?: VersionOrderByWithRelationInput | VersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Versions.
     */
    cursor?: VersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Versions.
     */
    skip?: number
    distinct?: VersionScalarFieldEnum | VersionScalarFieldEnum[]
  }

  /**
   * Version create
   */
  export type VersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * The data needed to create a Version.
     */
    data: XOR<VersionCreateInput, VersionUncheckedCreateInput>
  }

  /**
   * Version createMany
   */
  export type VersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Versions.
     */
    data: VersionCreateManyInput | VersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Version createManyAndReturn
   */
  export type VersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * The data used to create many Versions.
     */
    data: VersionCreateManyInput | VersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Version update
   */
  export type VersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * The data needed to update a Version.
     */
    data: XOR<VersionUpdateInput, VersionUncheckedUpdateInput>
    /**
     * Choose, which Version to update.
     */
    where: VersionWhereUniqueInput
  }

  /**
   * Version updateMany
   */
  export type VersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Versions.
     */
    data: XOR<VersionUpdateManyMutationInput, VersionUncheckedUpdateManyInput>
    /**
     * Filter which Versions to update
     */
    where?: VersionWhereInput
    /**
     * Limit how many Versions to update.
     */
    limit?: number
  }

  /**
   * Version updateManyAndReturn
   */
  export type VersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * The data used to update Versions.
     */
    data: XOR<VersionUpdateManyMutationInput, VersionUncheckedUpdateManyInput>
    /**
     * Filter which Versions to update
     */
    where?: VersionWhereInput
    /**
     * Limit how many Versions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Version upsert
   */
  export type VersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * The filter to search for the Version to update in case it exists.
     */
    where: VersionWhereUniqueInput
    /**
     * In case the Version found by the `where` argument doesn't exist, create a new Version with this data.
     */
    create: XOR<VersionCreateInput, VersionUncheckedCreateInput>
    /**
     * In case the Version was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VersionUpdateInput, VersionUncheckedUpdateInput>
  }

  /**
   * Version delete
   */
  export type VersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * Filter which Version to delete.
     */
    where: VersionWhereUniqueInput
  }

  /**
   * Version deleteMany
   */
  export type VersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Versions to delete
     */
    where?: VersionWhereInput
    /**
     * Limit how many Versions to delete.
     */
    limit?: number
  }

  /**
   * Version.keys
   */
  export type Version$keysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyInclude<ExtArgs> | null
    where?: TransKeyWhereInput
    orderBy?: TransKeyOrderByWithRelationInput | TransKeyOrderByWithRelationInput[]
    cursor?: TransKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransKeyScalarFieldEnum | TransKeyScalarFieldEnum[]
  }

  /**
   * Version without action
   */
  export type VersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
  }


  /**
   * Model TransKey
   */

  export type AggregateTransKey = {
    _count: TransKeyCountAggregateOutputType | null
    _min: TransKeyMinAggregateOutputType | null
    _max: TransKeyMaxAggregateOutputType | null
  }

  export type TransKeyMinAggregateOutputType = {
    id: string | null
    name: string | null
    comment: string | null
    versionId: string | null
  }

  export type TransKeyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    comment: string | null
    versionId: string | null
  }

  export type TransKeyCountAggregateOutputType = {
    id: number
    name: number
    comment: number
    versionId: number
    _all: number
  }


  export type TransKeyMinAggregateInputType = {
    id?: true
    name?: true
    comment?: true
    versionId?: true
  }

  export type TransKeyMaxAggregateInputType = {
    id?: true
    name?: true
    comment?: true
    versionId?: true
  }

  export type TransKeyCountAggregateInputType = {
    id?: true
    name?: true
    comment?: true
    versionId?: true
    _all?: true
  }

  export type TransKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransKey to aggregate.
     */
    where?: TransKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransKeys to fetch.
     */
    orderBy?: TransKeyOrderByWithRelationInput | TransKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransKeys
    **/
    _count?: true | TransKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransKeyMaxAggregateInputType
  }

  export type GetTransKeyAggregateType<T extends TransKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateTransKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransKey[P]>
      : GetScalarType<T[P], AggregateTransKey[P]>
  }




  export type TransKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransKeyWhereInput
    orderBy?: TransKeyOrderByWithAggregationInput | TransKeyOrderByWithAggregationInput[]
    by: TransKeyScalarFieldEnum[] | TransKeyScalarFieldEnum
    having?: TransKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransKeyCountAggregateInputType | true
    _min?: TransKeyMinAggregateInputType
    _max?: TransKeyMaxAggregateInputType
  }

  export type TransKeyGroupByOutputType = {
    id: string
    name: string
    comment: string | null
    versionId: string
    _count: TransKeyCountAggregateOutputType | null
    _min: TransKeyMinAggregateOutputType | null
    _max: TransKeyMaxAggregateOutputType | null
  }

  type GetTransKeyGroupByPayload<T extends TransKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransKeyGroupByOutputType[P]>
            : GetScalarType<T[P], TransKeyGroupByOutputType[P]>
        }
      >
    >


  export type TransKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    comment?: boolean
    versionId?: boolean
    version?: boolean | VersionDefaultArgs<ExtArgs>
    values?: boolean | TransKey$valuesArgs<ExtArgs>
    _count?: boolean | TransKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transKey"]>

  export type TransKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    comment?: boolean
    versionId?: boolean
    version?: boolean | VersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transKey"]>

  export type TransKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    comment?: boolean
    versionId?: boolean
    version?: boolean | VersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transKey"]>

  export type TransKeySelectScalar = {
    id?: boolean
    name?: boolean
    comment?: boolean
    versionId?: boolean
  }

  export type TransKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "comment" | "versionId", ExtArgs["result"]["transKey"]>
  export type TransKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    version?: boolean | VersionDefaultArgs<ExtArgs>
    values?: boolean | TransKey$valuesArgs<ExtArgs>
    _count?: boolean | TransKeyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    version?: boolean | VersionDefaultArgs<ExtArgs>
  }
  export type TransKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    version?: boolean | VersionDefaultArgs<ExtArgs>
  }

  export type $TransKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransKey"
    objects: {
      version: Prisma.$VersionPayload<ExtArgs>
      values: Prisma.$TransValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      comment: string | null
      versionId: string
    }, ExtArgs["result"]["transKey"]>
    composites: {}
  }

  type TransKeyGetPayload<S extends boolean | null | undefined | TransKeyDefaultArgs> = $Result.GetResult<Prisma.$TransKeyPayload, S>

  type TransKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransKeyCountAggregateInputType | true
    }

  export interface TransKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransKey'], meta: { name: 'TransKey' } }
    /**
     * Find zero or one TransKey that matches the filter.
     * @param {TransKeyFindUniqueArgs} args - Arguments to find a TransKey
     * @example
     * // Get one TransKey
     * const transKey = await prisma.transKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransKeyFindUniqueArgs>(args: SelectSubset<T, TransKeyFindUniqueArgs<ExtArgs>>): Prisma__TransKeyClient<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransKeyFindUniqueOrThrowArgs} args - Arguments to find a TransKey
     * @example
     * // Get one TransKey
     * const transKey = await prisma.transKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, TransKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransKeyClient<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransKeyFindFirstArgs} args - Arguments to find a TransKey
     * @example
     * // Get one TransKey
     * const transKey = await prisma.transKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransKeyFindFirstArgs>(args?: SelectSubset<T, TransKeyFindFirstArgs<ExtArgs>>): Prisma__TransKeyClient<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransKeyFindFirstOrThrowArgs} args - Arguments to find a TransKey
     * @example
     * // Get one TransKey
     * const transKey = await prisma.transKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, TransKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransKeyClient<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransKeys
     * const transKeys = await prisma.transKey.findMany()
     * 
     * // Get first 10 TransKeys
     * const transKeys = await prisma.transKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transKeyWithIdOnly = await prisma.transKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransKeyFindManyArgs>(args?: SelectSubset<T, TransKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransKey.
     * @param {TransKeyCreateArgs} args - Arguments to create a TransKey.
     * @example
     * // Create one TransKey
     * const TransKey = await prisma.transKey.create({
     *   data: {
     *     // ... data to create a TransKey
     *   }
     * })
     * 
     */
    create<T extends TransKeyCreateArgs>(args: SelectSubset<T, TransKeyCreateArgs<ExtArgs>>): Prisma__TransKeyClient<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransKeys.
     * @param {TransKeyCreateManyArgs} args - Arguments to create many TransKeys.
     * @example
     * // Create many TransKeys
     * const transKey = await prisma.transKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransKeyCreateManyArgs>(args?: SelectSubset<T, TransKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransKeys and returns the data saved in the database.
     * @param {TransKeyCreateManyAndReturnArgs} args - Arguments to create many TransKeys.
     * @example
     * // Create many TransKeys
     * const transKey = await prisma.transKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransKeys and only return the `id`
     * const transKeyWithIdOnly = await prisma.transKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, TransKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransKey.
     * @param {TransKeyDeleteArgs} args - Arguments to delete one TransKey.
     * @example
     * // Delete one TransKey
     * const TransKey = await prisma.transKey.delete({
     *   where: {
     *     // ... filter to delete one TransKey
     *   }
     * })
     * 
     */
    delete<T extends TransKeyDeleteArgs>(args: SelectSubset<T, TransKeyDeleteArgs<ExtArgs>>): Prisma__TransKeyClient<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransKey.
     * @param {TransKeyUpdateArgs} args - Arguments to update one TransKey.
     * @example
     * // Update one TransKey
     * const transKey = await prisma.transKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransKeyUpdateArgs>(args: SelectSubset<T, TransKeyUpdateArgs<ExtArgs>>): Prisma__TransKeyClient<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransKeys.
     * @param {TransKeyDeleteManyArgs} args - Arguments to filter TransKeys to delete.
     * @example
     * // Delete a few TransKeys
     * const { count } = await prisma.transKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransKeyDeleteManyArgs>(args?: SelectSubset<T, TransKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransKeys
     * const transKey = await prisma.transKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransKeyUpdateManyArgs>(args: SelectSubset<T, TransKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransKeys and returns the data updated in the database.
     * @param {TransKeyUpdateManyAndReturnArgs} args - Arguments to update many TransKeys.
     * @example
     * // Update many TransKeys
     * const transKey = await prisma.transKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransKeys and only return the `id`
     * const transKeyWithIdOnly = await prisma.transKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, TransKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransKey.
     * @param {TransKeyUpsertArgs} args - Arguments to update or create a TransKey.
     * @example
     * // Update or create a TransKey
     * const transKey = await prisma.transKey.upsert({
     *   create: {
     *     // ... data to create a TransKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransKey we want to update
     *   }
     * })
     */
    upsert<T extends TransKeyUpsertArgs>(args: SelectSubset<T, TransKeyUpsertArgs<ExtArgs>>): Prisma__TransKeyClient<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransKeyCountArgs} args - Arguments to filter TransKeys to count.
     * @example
     * // Count the number of TransKeys
     * const count = await prisma.transKey.count({
     *   where: {
     *     // ... the filter for the TransKeys we want to count
     *   }
     * })
    **/
    count<T extends TransKeyCountArgs>(
      args?: Subset<T, TransKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransKeyAggregateArgs>(args: Subset<T, TransKeyAggregateArgs>): Prisma.PrismaPromise<GetTransKeyAggregateType<T>>

    /**
     * Group by TransKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransKeyGroupByArgs} args - Group by arguments.
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
      T extends TransKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransKeyGroupByArgs['orderBy'] }
        : { orderBy?: TransKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TransKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransKey model
   */
  readonly fields: TransKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    version<T extends VersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VersionDefaultArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    values<T extends TransKey$valuesArgs<ExtArgs> = {}>(args?: Subset<T, TransKey$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransKey model
   */
  interface TransKeyFieldRefs {
    readonly id: FieldRef<"TransKey", 'String'>
    readonly name: FieldRef<"TransKey", 'String'>
    readonly comment: FieldRef<"TransKey", 'String'>
    readonly versionId: FieldRef<"TransKey", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TransKey findUnique
   */
  export type TransKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyInclude<ExtArgs> | null
    /**
     * Filter, which TransKey to fetch.
     */
    where: TransKeyWhereUniqueInput
  }

  /**
   * TransKey findUniqueOrThrow
   */
  export type TransKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyInclude<ExtArgs> | null
    /**
     * Filter, which TransKey to fetch.
     */
    where: TransKeyWhereUniqueInput
  }

  /**
   * TransKey findFirst
   */
  export type TransKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyInclude<ExtArgs> | null
    /**
     * Filter, which TransKey to fetch.
     */
    where?: TransKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransKeys to fetch.
     */
    orderBy?: TransKeyOrderByWithRelationInput | TransKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransKeys.
     */
    cursor?: TransKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransKeys.
     */
    distinct?: TransKeyScalarFieldEnum | TransKeyScalarFieldEnum[]
  }

  /**
   * TransKey findFirstOrThrow
   */
  export type TransKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyInclude<ExtArgs> | null
    /**
     * Filter, which TransKey to fetch.
     */
    where?: TransKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransKeys to fetch.
     */
    orderBy?: TransKeyOrderByWithRelationInput | TransKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransKeys.
     */
    cursor?: TransKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransKeys.
     */
    distinct?: TransKeyScalarFieldEnum | TransKeyScalarFieldEnum[]
  }

  /**
   * TransKey findMany
   */
  export type TransKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyInclude<ExtArgs> | null
    /**
     * Filter, which TransKeys to fetch.
     */
    where?: TransKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransKeys to fetch.
     */
    orderBy?: TransKeyOrderByWithRelationInput | TransKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransKeys.
     */
    cursor?: TransKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransKeys.
     */
    skip?: number
    distinct?: TransKeyScalarFieldEnum | TransKeyScalarFieldEnum[]
  }

  /**
   * TransKey create
   */
  export type TransKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a TransKey.
     */
    data: XOR<TransKeyCreateInput, TransKeyUncheckedCreateInput>
  }

  /**
   * TransKey createMany
   */
  export type TransKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransKeys.
     */
    data: TransKeyCreateManyInput | TransKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransKey createManyAndReturn
   */
  export type TransKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * The data used to create many TransKeys.
     */
    data: TransKeyCreateManyInput | TransKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransKey update
   */
  export type TransKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a TransKey.
     */
    data: XOR<TransKeyUpdateInput, TransKeyUncheckedUpdateInput>
    /**
     * Choose, which TransKey to update.
     */
    where: TransKeyWhereUniqueInput
  }

  /**
   * TransKey updateMany
   */
  export type TransKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransKeys.
     */
    data: XOR<TransKeyUpdateManyMutationInput, TransKeyUncheckedUpdateManyInput>
    /**
     * Filter which TransKeys to update
     */
    where?: TransKeyWhereInput
    /**
     * Limit how many TransKeys to update.
     */
    limit?: number
  }

  /**
   * TransKey updateManyAndReturn
   */
  export type TransKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * The data used to update TransKeys.
     */
    data: XOR<TransKeyUpdateManyMutationInput, TransKeyUncheckedUpdateManyInput>
    /**
     * Filter which TransKeys to update
     */
    where?: TransKeyWhereInput
    /**
     * Limit how many TransKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransKey upsert
   */
  export type TransKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the TransKey to update in case it exists.
     */
    where: TransKeyWhereUniqueInput
    /**
     * In case the TransKey found by the `where` argument doesn't exist, create a new TransKey with this data.
     */
    create: XOR<TransKeyCreateInput, TransKeyUncheckedCreateInput>
    /**
     * In case the TransKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransKeyUpdateInput, TransKeyUncheckedUpdateInput>
  }

  /**
   * TransKey delete
   */
  export type TransKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyInclude<ExtArgs> | null
    /**
     * Filter which TransKey to delete.
     */
    where: TransKeyWhereUniqueInput
  }

  /**
   * TransKey deleteMany
   */
  export type TransKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransKeys to delete
     */
    where?: TransKeyWhereInput
    /**
     * Limit how many TransKeys to delete.
     */
    limit?: number
  }

  /**
   * TransKey.values
   */
  export type TransKey$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueInclude<ExtArgs> | null
    where?: TransValueWhereInput
    orderBy?: TransValueOrderByWithRelationInput | TransValueOrderByWithRelationInput[]
    cursor?: TransValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransValueScalarFieldEnum | TransValueScalarFieldEnum[]
  }

  /**
   * TransKey without action
   */
  export type TransKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransKey
     */
    select?: TransKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransKey
     */
    omit?: TransKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransKeyInclude<ExtArgs> | null
  }


  /**
   * Model TransValue
   */

  export type AggregateTransValue = {
    _count: TransValueCountAggregateOutputType | null
    _min: TransValueMinAggregateOutputType | null
    _max: TransValueMaxAggregateOutputType | null
  }

  export type TransValueMinAggregateOutputType = {
    id: string | null
    keyId: string | null
    langCode: string | null
    content: string | null
    isAiTranslated: boolean | null
  }

  export type TransValueMaxAggregateOutputType = {
    id: string | null
    keyId: string | null
    langCode: string | null
    content: string | null
    isAiTranslated: boolean | null
  }

  export type TransValueCountAggregateOutputType = {
    id: number
    keyId: number
    langCode: number
    content: number
    isAiTranslated: number
    _all: number
  }


  export type TransValueMinAggregateInputType = {
    id?: true
    keyId?: true
    langCode?: true
    content?: true
    isAiTranslated?: true
  }

  export type TransValueMaxAggregateInputType = {
    id?: true
    keyId?: true
    langCode?: true
    content?: true
    isAiTranslated?: true
  }

  export type TransValueCountAggregateInputType = {
    id?: true
    keyId?: true
    langCode?: true
    content?: true
    isAiTranslated?: true
    _all?: true
  }

  export type TransValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransValue to aggregate.
     */
    where?: TransValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransValues to fetch.
     */
    orderBy?: TransValueOrderByWithRelationInput | TransValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransValues
    **/
    _count?: true | TransValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransValueMaxAggregateInputType
  }

  export type GetTransValueAggregateType<T extends TransValueAggregateArgs> = {
        [P in keyof T & keyof AggregateTransValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransValue[P]>
      : GetScalarType<T[P], AggregateTransValue[P]>
  }




  export type TransValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransValueWhereInput
    orderBy?: TransValueOrderByWithAggregationInput | TransValueOrderByWithAggregationInput[]
    by: TransValueScalarFieldEnum[] | TransValueScalarFieldEnum
    having?: TransValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransValueCountAggregateInputType | true
    _min?: TransValueMinAggregateInputType
    _max?: TransValueMaxAggregateInputType
  }

  export type TransValueGroupByOutputType = {
    id: string
    keyId: string
    langCode: string
    content: string
    isAiTranslated: boolean
    _count: TransValueCountAggregateOutputType | null
    _min: TransValueMinAggregateOutputType | null
    _max: TransValueMaxAggregateOutputType | null
  }

  type GetTransValueGroupByPayload<T extends TransValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransValueGroupByOutputType[P]>
            : GetScalarType<T[P], TransValueGroupByOutputType[P]>
        }
      >
    >


  export type TransValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyId?: boolean
    langCode?: boolean
    content?: boolean
    isAiTranslated?: boolean
    key?: boolean | TransKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transValue"]>

  export type TransValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyId?: boolean
    langCode?: boolean
    content?: boolean
    isAiTranslated?: boolean
    key?: boolean | TransKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transValue"]>

  export type TransValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyId?: boolean
    langCode?: boolean
    content?: boolean
    isAiTranslated?: boolean
    key?: boolean | TransKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transValue"]>

  export type TransValueSelectScalar = {
    id?: boolean
    keyId?: boolean
    langCode?: boolean
    content?: boolean
    isAiTranslated?: boolean
  }

  export type TransValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyId" | "langCode" | "content" | "isAiTranslated", ExtArgs["result"]["transValue"]>
  export type TransValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    key?: boolean | TransKeyDefaultArgs<ExtArgs>
  }
  export type TransValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    key?: boolean | TransKeyDefaultArgs<ExtArgs>
  }
  export type TransValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    key?: boolean | TransKeyDefaultArgs<ExtArgs>
  }

  export type $TransValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransValue"
    objects: {
      key: Prisma.$TransKeyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyId: string
      langCode: string
      content: string
      isAiTranslated: boolean
    }, ExtArgs["result"]["transValue"]>
    composites: {}
  }

  type TransValueGetPayload<S extends boolean | null | undefined | TransValueDefaultArgs> = $Result.GetResult<Prisma.$TransValuePayload, S>

  type TransValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransValueCountAggregateInputType | true
    }

  export interface TransValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransValue'], meta: { name: 'TransValue' } }
    /**
     * Find zero or one TransValue that matches the filter.
     * @param {TransValueFindUniqueArgs} args - Arguments to find a TransValue
     * @example
     * // Get one TransValue
     * const transValue = await prisma.transValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransValueFindUniqueArgs>(args: SelectSubset<T, TransValueFindUniqueArgs<ExtArgs>>): Prisma__TransValueClient<$Result.GetResult<Prisma.$TransValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransValueFindUniqueOrThrowArgs} args - Arguments to find a TransValue
     * @example
     * // Get one TransValue
     * const transValue = await prisma.transValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransValueFindUniqueOrThrowArgs>(args: SelectSubset<T, TransValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransValueClient<$Result.GetResult<Prisma.$TransValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransValueFindFirstArgs} args - Arguments to find a TransValue
     * @example
     * // Get one TransValue
     * const transValue = await prisma.transValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransValueFindFirstArgs>(args?: SelectSubset<T, TransValueFindFirstArgs<ExtArgs>>): Prisma__TransValueClient<$Result.GetResult<Prisma.$TransValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransValueFindFirstOrThrowArgs} args - Arguments to find a TransValue
     * @example
     * // Get one TransValue
     * const transValue = await prisma.transValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransValueFindFirstOrThrowArgs>(args?: SelectSubset<T, TransValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransValueClient<$Result.GetResult<Prisma.$TransValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransValues
     * const transValues = await prisma.transValue.findMany()
     * 
     * // Get first 10 TransValues
     * const transValues = await prisma.transValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transValueWithIdOnly = await prisma.transValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransValueFindManyArgs>(args?: SelectSubset<T, TransValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransValue.
     * @param {TransValueCreateArgs} args - Arguments to create a TransValue.
     * @example
     * // Create one TransValue
     * const TransValue = await prisma.transValue.create({
     *   data: {
     *     // ... data to create a TransValue
     *   }
     * })
     * 
     */
    create<T extends TransValueCreateArgs>(args: SelectSubset<T, TransValueCreateArgs<ExtArgs>>): Prisma__TransValueClient<$Result.GetResult<Prisma.$TransValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransValues.
     * @param {TransValueCreateManyArgs} args - Arguments to create many TransValues.
     * @example
     * // Create many TransValues
     * const transValue = await prisma.transValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransValueCreateManyArgs>(args?: SelectSubset<T, TransValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransValues and returns the data saved in the database.
     * @param {TransValueCreateManyAndReturnArgs} args - Arguments to create many TransValues.
     * @example
     * // Create many TransValues
     * const transValue = await prisma.transValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransValues and only return the `id`
     * const transValueWithIdOnly = await prisma.transValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransValueCreateManyAndReturnArgs>(args?: SelectSubset<T, TransValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransValue.
     * @param {TransValueDeleteArgs} args - Arguments to delete one TransValue.
     * @example
     * // Delete one TransValue
     * const TransValue = await prisma.transValue.delete({
     *   where: {
     *     // ... filter to delete one TransValue
     *   }
     * })
     * 
     */
    delete<T extends TransValueDeleteArgs>(args: SelectSubset<T, TransValueDeleteArgs<ExtArgs>>): Prisma__TransValueClient<$Result.GetResult<Prisma.$TransValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransValue.
     * @param {TransValueUpdateArgs} args - Arguments to update one TransValue.
     * @example
     * // Update one TransValue
     * const transValue = await prisma.transValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransValueUpdateArgs>(args: SelectSubset<T, TransValueUpdateArgs<ExtArgs>>): Prisma__TransValueClient<$Result.GetResult<Prisma.$TransValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransValues.
     * @param {TransValueDeleteManyArgs} args - Arguments to filter TransValues to delete.
     * @example
     * // Delete a few TransValues
     * const { count } = await prisma.transValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransValueDeleteManyArgs>(args?: SelectSubset<T, TransValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransValues
     * const transValue = await prisma.transValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransValueUpdateManyArgs>(args: SelectSubset<T, TransValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransValues and returns the data updated in the database.
     * @param {TransValueUpdateManyAndReturnArgs} args - Arguments to update many TransValues.
     * @example
     * // Update many TransValues
     * const transValue = await prisma.transValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransValues and only return the `id`
     * const transValueWithIdOnly = await prisma.transValue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransValueUpdateManyAndReturnArgs>(args: SelectSubset<T, TransValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransValue.
     * @param {TransValueUpsertArgs} args - Arguments to update or create a TransValue.
     * @example
     * // Update or create a TransValue
     * const transValue = await prisma.transValue.upsert({
     *   create: {
     *     // ... data to create a TransValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransValue we want to update
     *   }
     * })
     */
    upsert<T extends TransValueUpsertArgs>(args: SelectSubset<T, TransValueUpsertArgs<ExtArgs>>): Prisma__TransValueClient<$Result.GetResult<Prisma.$TransValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransValueCountArgs} args - Arguments to filter TransValues to count.
     * @example
     * // Count the number of TransValues
     * const count = await prisma.transValue.count({
     *   where: {
     *     // ... the filter for the TransValues we want to count
     *   }
     * })
    **/
    count<T extends TransValueCountArgs>(
      args?: Subset<T, TransValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransValueAggregateArgs>(args: Subset<T, TransValueAggregateArgs>): Prisma.PrismaPromise<GetTransValueAggregateType<T>>

    /**
     * Group by TransValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransValueGroupByArgs} args - Group by arguments.
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
      T extends TransValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransValueGroupByArgs['orderBy'] }
        : { orderBy?: TransValueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TransValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransValue model
   */
  readonly fields: TransValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    key<T extends TransKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransKeyDefaultArgs<ExtArgs>>): Prisma__TransKeyClient<$Result.GetResult<Prisma.$TransKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransValue model
   */
  interface TransValueFieldRefs {
    readonly id: FieldRef<"TransValue", 'String'>
    readonly keyId: FieldRef<"TransValue", 'String'>
    readonly langCode: FieldRef<"TransValue", 'String'>
    readonly content: FieldRef<"TransValue", 'String'>
    readonly isAiTranslated: FieldRef<"TransValue", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TransValue findUnique
   */
  export type TransValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueInclude<ExtArgs> | null
    /**
     * Filter, which TransValue to fetch.
     */
    where: TransValueWhereUniqueInput
  }

  /**
   * TransValue findUniqueOrThrow
   */
  export type TransValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueInclude<ExtArgs> | null
    /**
     * Filter, which TransValue to fetch.
     */
    where: TransValueWhereUniqueInput
  }

  /**
   * TransValue findFirst
   */
  export type TransValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueInclude<ExtArgs> | null
    /**
     * Filter, which TransValue to fetch.
     */
    where?: TransValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransValues to fetch.
     */
    orderBy?: TransValueOrderByWithRelationInput | TransValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransValues.
     */
    cursor?: TransValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransValues.
     */
    distinct?: TransValueScalarFieldEnum | TransValueScalarFieldEnum[]
  }

  /**
   * TransValue findFirstOrThrow
   */
  export type TransValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueInclude<ExtArgs> | null
    /**
     * Filter, which TransValue to fetch.
     */
    where?: TransValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransValues to fetch.
     */
    orderBy?: TransValueOrderByWithRelationInput | TransValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransValues.
     */
    cursor?: TransValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransValues.
     */
    distinct?: TransValueScalarFieldEnum | TransValueScalarFieldEnum[]
  }

  /**
   * TransValue findMany
   */
  export type TransValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueInclude<ExtArgs> | null
    /**
     * Filter, which TransValues to fetch.
     */
    where?: TransValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransValues to fetch.
     */
    orderBy?: TransValueOrderByWithRelationInput | TransValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransValues.
     */
    cursor?: TransValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransValues.
     */
    skip?: number
    distinct?: TransValueScalarFieldEnum | TransValueScalarFieldEnum[]
  }

  /**
   * TransValue create
   */
  export type TransValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueInclude<ExtArgs> | null
    /**
     * The data needed to create a TransValue.
     */
    data: XOR<TransValueCreateInput, TransValueUncheckedCreateInput>
  }

  /**
   * TransValue createMany
   */
  export type TransValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransValues.
     */
    data: TransValueCreateManyInput | TransValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransValue createManyAndReturn
   */
  export type TransValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * The data used to create many TransValues.
     */
    data: TransValueCreateManyInput | TransValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransValue update
   */
  export type TransValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueInclude<ExtArgs> | null
    /**
     * The data needed to update a TransValue.
     */
    data: XOR<TransValueUpdateInput, TransValueUncheckedUpdateInput>
    /**
     * Choose, which TransValue to update.
     */
    where: TransValueWhereUniqueInput
  }

  /**
   * TransValue updateMany
   */
  export type TransValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransValues.
     */
    data: XOR<TransValueUpdateManyMutationInput, TransValueUncheckedUpdateManyInput>
    /**
     * Filter which TransValues to update
     */
    where?: TransValueWhereInput
    /**
     * Limit how many TransValues to update.
     */
    limit?: number
  }

  /**
   * TransValue updateManyAndReturn
   */
  export type TransValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * The data used to update TransValues.
     */
    data: XOR<TransValueUpdateManyMutationInput, TransValueUncheckedUpdateManyInput>
    /**
     * Filter which TransValues to update
     */
    where?: TransValueWhereInput
    /**
     * Limit how many TransValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransValue upsert
   */
  export type TransValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueInclude<ExtArgs> | null
    /**
     * The filter to search for the TransValue to update in case it exists.
     */
    where: TransValueWhereUniqueInput
    /**
     * In case the TransValue found by the `where` argument doesn't exist, create a new TransValue with this data.
     */
    create: XOR<TransValueCreateInput, TransValueUncheckedCreateInput>
    /**
     * In case the TransValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransValueUpdateInput, TransValueUncheckedUpdateInput>
  }

  /**
   * TransValue delete
   */
  export type TransValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueInclude<ExtArgs> | null
    /**
     * Filter which TransValue to delete.
     */
    where: TransValueWhereUniqueInput
  }

  /**
   * TransValue deleteMany
   */
  export type TransValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransValues to delete
     */
    where?: TransValueWhereInput
    /**
     * Limit how many TransValues to delete.
     */
    limit?: number
  }

  /**
   * TransValue without action
   */
  export type TransValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransValue
     */
    select?: TransValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransValue
     */
    omit?: TransValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransValueInclude<ExtArgs> | null
  }


  /**
   * Model PlatformLanguage
   */

  export type AggregatePlatformLanguage = {
    _count: PlatformLanguageCountAggregateOutputType | null
    _avg: PlatformLanguageAvgAggregateOutputType | null
    _sum: PlatformLanguageSumAggregateOutputType | null
    _min: PlatformLanguageMinAggregateOutputType | null
    _max: PlatformLanguageMaxAggregateOutputType | null
  }

  export type PlatformLanguageAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type PlatformLanguageSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type PlatformLanguageMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    sortOrder: number | null
  }

  export type PlatformLanguageMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    sortOrder: number | null
  }

  export type PlatformLanguageCountAggregateOutputType = {
    id: number
    code: number
    name: number
    sortOrder: number
    _all: number
  }


  export type PlatformLanguageAvgAggregateInputType = {
    sortOrder?: true
  }

  export type PlatformLanguageSumAggregateInputType = {
    sortOrder?: true
  }

  export type PlatformLanguageMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    sortOrder?: true
  }

  export type PlatformLanguageMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    sortOrder?: true
  }

  export type PlatformLanguageCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    sortOrder?: true
    _all?: true
  }

  export type PlatformLanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformLanguage to aggregate.
     */
    where?: PlatformLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformLanguages to fetch.
     */
    orderBy?: PlatformLanguageOrderByWithRelationInput | PlatformLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlatformLanguages
    **/
    _count?: true | PlatformLanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformLanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformLanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformLanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformLanguageMaxAggregateInputType
  }

  export type GetPlatformLanguageAggregateType<T extends PlatformLanguageAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatformLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatformLanguage[P]>
      : GetScalarType<T[P], AggregatePlatformLanguage[P]>
  }




  export type PlatformLanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformLanguageWhereInput
    orderBy?: PlatformLanguageOrderByWithAggregationInput | PlatformLanguageOrderByWithAggregationInput[]
    by: PlatformLanguageScalarFieldEnum[] | PlatformLanguageScalarFieldEnum
    having?: PlatformLanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformLanguageCountAggregateInputType | true
    _avg?: PlatformLanguageAvgAggregateInputType
    _sum?: PlatformLanguageSumAggregateInputType
    _min?: PlatformLanguageMinAggregateInputType
    _max?: PlatformLanguageMaxAggregateInputType
  }

  export type PlatformLanguageGroupByOutputType = {
    id: string
    code: string
    name: string
    sortOrder: number
    _count: PlatformLanguageCountAggregateOutputType | null
    _avg: PlatformLanguageAvgAggregateOutputType | null
    _sum: PlatformLanguageSumAggregateOutputType | null
    _min: PlatformLanguageMinAggregateOutputType | null
    _max: PlatformLanguageMaxAggregateOutputType | null
  }

  type GetPlatformLanguageGroupByPayload<T extends PlatformLanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformLanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformLanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformLanguageGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformLanguageGroupByOutputType[P]>
        }
      >
    >


  export type PlatformLanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    sortOrder?: boolean
  }, ExtArgs["result"]["platformLanguage"]>

  export type PlatformLanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    sortOrder?: boolean
  }, ExtArgs["result"]["platformLanguage"]>

  export type PlatformLanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    sortOrder?: boolean
  }, ExtArgs["result"]["platformLanguage"]>

  export type PlatformLanguageSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    sortOrder?: boolean
  }

  export type PlatformLanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "sortOrder", ExtArgs["result"]["platformLanguage"]>

  export type $PlatformLanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlatformLanguage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      sortOrder: number
    }, ExtArgs["result"]["platformLanguage"]>
    composites: {}
  }

  type PlatformLanguageGetPayload<S extends boolean | null | undefined | PlatformLanguageDefaultArgs> = $Result.GetResult<Prisma.$PlatformLanguagePayload, S>

  type PlatformLanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformLanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformLanguageCountAggregateInputType | true
    }

  export interface PlatformLanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlatformLanguage'], meta: { name: 'PlatformLanguage' } }
    /**
     * Find zero or one PlatformLanguage that matches the filter.
     * @param {PlatformLanguageFindUniqueArgs} args - Arguments to find a PlatformLanguage
     * @example
     * // Get one PlatformLanguage
     * const platformLanguage = await prisma.platformLanguage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformLanguageFindUniqueArgs>(args: SelectSubset<T, PlatformLanguageFindUniqueArgs<ExtArgs>>): Prisma__PlatformLanguageClient<$Result.GetResult<Prisma.$PlatformLanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlatformLanguage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformLanguageFindUniqueOrThrowArgs} args - Arguments to find a PlatformLanguage
     * @example
     * // Get one PlatformLanguage
     * const platformLanguage = await prisma.platformLanguage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformLanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformLanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformLanguageClient<$Result.GetResult<Prisma.$PlatformLanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlatformLanguage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformLanguageFindFirstArgs} args - Arguments to find a PlatformLanguage
     * @example
     * // Get one PlatformLanguage
     * const platformLanguage = await prisma.platformLanguage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformLanguageFindFirstArgs>(args?: SelectSubset<T, PlatformLanguageFindFirstArgs<ExtArgs>>): Prisma__PlatformLanguageClient<$Result.GetResult<Prisma.$PlatformLanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlatformLanguage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformLanguageFindFirstOrThrowArgs} args - Arguments to find a PlatformLanguage
     * @example
     * // Get one PlatformLanguage
     * const platformLanguage = await prisma.platformLanguage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformLanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformLanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformLanguageClient<$Result.GetResult<Prisma.$PlatformLanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlatformLanguages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformLanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlatformLanguages
     * const platformLanguages = await prisma.platformLanguage.findMany()
     * 
     * // Get first 10 PlatformLanguages
     * const platformLanguages = await prisma.platformLanguage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformLanguageWithIdOnly = await prisma.platformLanguage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformLanguageFindManyArgs>(args?: SelectSubset<T, PlatformLanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlatformLanguage.
     * @param {PlatformLanguageCreateArgs} args - Arguments to create a PlatformLanguage.
     * @example
     * // Create one PlatformLanguage
     * const PlatformLanguage = await prisma.platformLanguage.create({
     *   data: {
     *     // ... data to create a PlatformLanguage
     *   }
     * })
     * 
     */
    create<T extends PlatformLanguageCreateArgs>(args: SelectSubset<T, PlatformLanguageCreateArgs<ExtArgs>>): Prisma__PlatformLanguageClient<$Result.GetResult<Prisma.$PlatformLanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlatformLanguages.
     * @param {PlatformLanguageCreateManyArgs} args - Arguments to create many PlatformLanguages.
     * @example
     * // Create many PlatformLanguages
     * const platformLanguage = await prisma.platformLanguage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformLanguageCreateManyArgs>(args?: SelectSubset<T, PlatformLanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlatformLanguages and returns the data saved in the database.
     * @param {PlatformLanguageCreateManyAndReturnArgs} args - Arguments to create many PlatformLanguages.
     * @example
     * // Create many PlatformLanguages
     * const platformLanguage = await prisma.platformLanguage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlatformLanguages and only return the `id`
     * const platformLanguageWithIdOnly = await prisma.platformLanguage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformLanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformLanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformLanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlatformLanguage.
     * @param {PlatformLanguageDeleteArgs} args - Arguments to delete one PlatformLanguage.
     * @example
     * // Delete one PlatformLanguage
     * const PlatformLanguage = await prisma.platformLanguage.delete({
     *   where: {
     *     // ... filter to delete one PlatformLanguage
     *   }
     * })
     * 
     */
    delete<T extends PlatformLanguageDeleteArgs>(args: SelectSubset<T, PlatformLanguageDeleteArgs<ExtArgs>>): Prisma__PlatformLanguageClient<$Result.GetResult<Prisma.$PlatformLanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlatformLanguage.
     * @param {PlatformLanguageUpdateArgs} args - Arguments to update one PlatformLanguage.
     * @example
     * // Update one PlatformLanguage
     * const platformLanguage = await prisma.platformLanguage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformLanguageUpdateArgs>(args: SelectSubset<T, PlatformLanguageUpdateArgs<ExtArgs>>): Prisma__PlatformLanguageClient<$Result.GetResult<Prisma.$PlatformLanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlatformLanguages.
     * @param {PlatformLanguageDeleteManyArgs} args - Arguments to filter PlatformLanguages to delete.
     * @example
     * // Delete a few PlatformLanguages
     * const { count } = await prisma.platformLanguage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformLanguageDeleteManyArgs>(args?: SelectSubset<T, PlatformLanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformLanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlatformLanguages
     * const platformLanguage = await prisma.platformLanguage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformLanguageUpdateManyArgs>(args: SelectSubset<T, PlatformLanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformLanguages and returns the data updated in the database.
     * @param {PlatformLanguageUpdateManyAndReturnArgs} args - Arguments to update many PlatformLanguages.
     * @example
     * // Update many PlatformLanguages
     * const platformLanguage = await prisma.platformLanguage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlatformLanguages and only return the `id`
     * const platformLanguageWithIdOnly = await prisma.platformLanguage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlatformLanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatformLanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformLanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlatformLanguage.
     * @param {PlatformLanguageUpsertArgs} args - Arguments to update or create a PlatformLanguage.
     * @example
     * // Update or create a PlatformLanguage
     * const platformLanguage = await prisma.platformLanguage.upsert({
     *   create: {
     *     // ... data to create a PlatformLanguage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlatformLanguage we want to update
     *   }
     * })
     */
    upsert<T extends PlatformLanguageUpsertArgs>(args: SelectSubset<T, PlatformLanguageUpsertArgs<ExtArgs>>): Prisma__PlatformLanguageClient<$Result.GetResult<Prisma.$PlatformLanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlatformLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformLanguageCountArgs} args - Arguments to filter PlatformLanguages to count.
     * @example
     * // Count the number of PlatformLanguages
     * const count = await prisma.platformLanguage.count({
     *   where: {
     *     // ... the filter for the PlatformLanguages we want to count
     *   }
     * })
    **/
    count<T extends PlatformLanguageCountArgs>(
      args?: Subset<T, PlatformLanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformLanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlatformLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformLanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlatformLanguageAggregateArgs>(args: Subset<T, PlatformLanguageAggregateArgs>): Prisma.PrismaPromise<GetPlatformLanguageAggregateType<T>>

    /**
     * Group by PlatformLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformLanguageGroupByArgs} args - Group by arguments.
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
      T extends PlatformLanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformLanguageGroupByArgs['orderBy'] }
        : { orderBy?: PlatformLanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PlatformLanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlatformLanguage model
   */
  readonly fields: PlatformLanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlatformLanguage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformLanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlatformLanguage model
   */
  interface PlatformLanguageFieldRefs {
    readonly id: FieldRef<"PlatformLanguage", 'String'>
    readonly code: FieldRef<"PlatformLanguage", 'String'>
    readonly name: FieldRef<"PlatformLanguage", 'String'>
    readonly sortOrder: FieldRef<"PlatformLanguage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlatformLanguage findUnique
   */
  export type PlatformLanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLanguage
     */
    select?: PlatformLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformLanguage
     */
    omit?: PlatformLanguageOmit<ExtArgs> | null
    /**
     * Filter, which PlatformLanguage to fetch.
     */
    where: PlatformLanguageWhereUniqueInput
  }

  /**
   * PlatformLanguage findUniqueOrThrow
   */
  export type PlatformLanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLanguage
     */
    select?: PlatformLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformLanguage
     */
    omit?: PlatformLanguageOmit<ExtArgs> | null
    /**
     * Filter, which PlatformLanguage to fetch.
     */
    where: PlatformLanguageWhereUniqueInput
  }

  /**
   * PlatformLanguage findFirst
   */
  export type PlatformLanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLanguage
     */
    select?: PlatformLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformLanguage
     */
    omit?: PlatformLanguageOmit<ExtArgs> | null
    /**
     * Filter, which PlatformLanguage to fetch.
     */
    where?: PlatformLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformLanguages to fetch.
     */
    orderBy?: PlatformLanguageOrderByWithRelationInput | PlatformLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformLanguages.
     */
    cursor?: PlatformLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformLanguages.
     */
    distinct?: PlatformLanguageScalarFieldEnum | PlatformLanguageScalarFieldEnum[]
  }

  /**
   * PlatformLanguage findFirstOrThrow
   */
  export type PlatformLanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLanguage
     */
    select?: PlatformLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformLanguage
     */
    omit?: PlatformLanguageOmit<ExtArgs> | null
    /**
     * Filter, which PlatformLanguage to fetch.
     */
    where?: PlatformLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformLanguages to fetch.
     */
    orderBy?: PlatformLanguageOrderByWithRelationInput | PlatformLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformLanguages.
     */
    cursor?: PlatformLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformLanguages.
     */
    distinct?: PlatformLanguageScalarFieldEnum | PlatformLanguageScalarFieldEnum[]
  }

  /**
   * PlatformLanguage findMany
   */
  export type PlatformLanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLanguage
     */
    select?: PlatformLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformLanguage
     */
    omit?: PlatformLanguageOmit<ExtArgs> | null
    /**
     * Filter, which PlatformLanguages to fetch.
     */
    where?: PlatformLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformLanguages to fetch.
     */
    orderBy?: PlatformLanguageOrderByWithRelationInput | PlatformLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlatformLanguages.
     */
    cursor?: PlatformLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformLanguages.
     */
    skip?: number
    distinct?: PlatformLanguageScalarFieldEnum | PlatformLanguageScalarFieldEnum[]
  }

  /**
   * PlatformLanguage create
   */
  export type PlatformLanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLanguage
     */
    select?: PlatformLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformLanguage
     */
    omit?: PlatformLanguageOmit<ExtArgs> | null
    /**
     * The data needed to create a PlatformLanguage.
     */
    data: XOR<PlatformLanguageCreateInput, PlatformLanguageUncheckedCreateInput>
  }

  /**
   * PlatformLanguage createMany
   */
  export type PlatformLanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlatformLanguages.
     */
    data: PlatformLanguageCreateManyInput | PlatformLanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformLanguage createManyAndReturn
   */
  export type PlatformLanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLanguage
     */
    select?: PlatformLanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformLanguage
     */
    omit?: PlatformLanguageOmit<ExtArgs> | null
    /**
     * The data used to create many PlatformLanguages.
     */
    data: PlatformLanguageCreateManyInput | PlatformLanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformLanguage update
   */
  export type PlatformLanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLanguage
     */
    select?: PlatformLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformLanguage
     */
    omit?: PlatformLanguageOmit<ExtArgs> | null
    /**
     * The data needed to update a PlatformLanguage.
     */
    data: XOR<PlatformLanguageUpdateInput, PlatformLanguageUncheckedUpdateInput>
    /**
     * Choose, which PlatformLanguage to update.
     */
    where: PlatformLanguageWhereUniqueInput
  }

  /**
   * PlatformLanguage updateMany
   */
  export type PlatformLanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlatformLanguages.
     */
    data: XOR<PlatformLanguageUpdateManyMutationInput, PlatformLanguageUncheckedUpdateManyInput>
    /**
     * Filter which PlatformLanguages to update
     */
    where?: PlatformLanguageWhereInput
    /**
     * Limit how many PlatformLanguages to update.
     */
    limit?: number
  }

  /**
   * PlatformLanguage updateManyAndReturn
   */
  export type PlatformLanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLanguage
     */
    select?: PlatformLanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformLanguage
     */
    omit?: PlatformLanguageOmit<ExtArgs> | null
    /**
     * The data used to update PlatformLanguages.
     */
    data: XOR<PlatformLanguageUpdateManyMutationInput, PlatformLanguageUncheckedUpdateManyInput>
    /**
     * Filter which PlatformLanguages to update
     */
    where?: PlatformLanguageWhereInput
    /**
     * Limit how many PlatformLanguages to update.
     */
    limit?: number
  }

  /**
   * PlatformLanguage upsert
   */
  export type PlatformLanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLanguage
     */
    select?: PlatformLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformLanguage
     */
    omit?: PlatformLanguageOmit<ExtArgs> | null
    /**
     * The filter to search for the PlatformLanguage to update in case it exists.
     */
    where: PlatformLanguageWhereUniqueInput
    /**
     * In case the PlatformLanguage found by the `where` argument doesn't exist, create a new PlatformLanguage with this data.
     */
    create: XOR<PlatformLanguageCreateInput, PlatformLanguageUncheckedCreateInput>
    /**
     * In case the PlatformLanguage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformLanguageUpdateInput, PlatformLanguageUncheckedUpdateInput>
  }

  /**
   * PlatformLanguage delete
   */
  export type PlatformLanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLanguage
     */
    select?: PlatformLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformLanguage
     */
    omit?: PlatformLanguageOmit<ExtArgs> | null
    /**
     * Filter which PlatformLanguage to delete.
     */
    where: PlatformLanguageWhereUniqueInput
  }

  /**
   * PlatformLanguage deleteMany
   */
  export type PlatformLanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformLanguages to delete
     */
    where?: PlatformLanguageWhereInput
    /**
     * Limit how many PlatformLanguages to delete.
     */
    limit?: number
  }

  /**
   * PlatformLanguage without action
   */
  export type PlatformLanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformLanguage
     */
    select?: PlatformLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformLanguage
     */
    omit?: PlatformLanguageOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    isSuperAdmin: 'isSuperAdmin',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectMemberScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    role: 'role'
  };

  export type ProjectMemberScalarFieldEnum = (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum]


  export const ProjectLanguageScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    code: 'code',
    isSource: 'isSource'
  };

  export type ProjectLanguageScalarFieldEnum = (typeof ProjectLanguageScalarFieldEnum)[keyof typeof ProjectLanguageScalarFieldEnum]


  export const VersionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectId: 'projectId',
    createdAt: 'createdAt'
  };

  export type VersionScalarFieldEnum = (typeof VersionScalarFieldEnum)[keyof typeof VersionScalarFieldEnum]


  export const TransKeyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    comment: 'comment',
    versionId: 'versionId'
  };

  export type TransKeyScalarFieldEnum = (typeof TransKeyScalarFieldEnum)[keyof typeof TransKeyScalarFieldEnum]


  export const TransValueScalarFieldEnum: {
    id: 'id',
    keyId: 'keyId',
    langCode: 'langCode',
    content: 'content',
    isAiTranslated: 'isAiTranslated'
  };

  export type TransValueScalarFieldEnum = (typeof TransValueScalarFieldEnum)[keyof typeof TransValueScalarFieldEnum]


  export const PlatformLanguageScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    sortOrder: 'sortOrder'
  };

  export type PlatformLanguageScalarFieldEnum = (typeof PlatformLanguageScalarFieldEnum)[keyof typeof PlatformLanguageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isSuperAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isSuperAdmin?: SortOrder
    createdAt?: SortOrder
    projects?: ProjectMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isSuperAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectMemberListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isSuperAdmin?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isSuperAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    languages?: ProjectLanguageListRelationFilter
    versions?: VersionListRelationFilter
    members?: ProjectMemberListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    languages?: ProjectLanguageOrderByRelationAggregateInput
    versions?: VersionOrderByRelationAggregateInput
    members?: ProjectMemberOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    languages?: ProjectLanguageListRelationFilter
    versions?: VersionListRelationFilter
    members?: ProjectMemberListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectMemberWhereInput = {
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    id?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    userId?: StringFilter<"ProjectMember"> | string
    role?: StringFilter<"ProjectMember"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectMemberOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ProjectMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_userId?: ProjectMemberProjectIdUserIdCompoundUniqueInput
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    projectId?: StringFilter<"ProjectMember"> | string
    userId?: StringFilter<"ProjectMember"> | string
    role?: StringFilter<"ProjectMember"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "projectId_userId">

  export type ProjectMemberOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    _count?: ProjectMemberCountOrderByAggregateInput
    _max?: ProjectMemberMaxOrderByAggregateInput
    _min?: ProjectMemberMinOrderByAggregateInput
  }

  export type ProjectMemberScalarWhereWithAggregatesInput = {
    AND?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    OR?: ProjectMemberScalarWhereWithAggregatesInput[]
    NOT?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectMember"> | string
    projectId?: StringWithAggregatesFilter<"ProjectMember"> | string
    userId?: StringWithAggregatesFilter<"ProjectMember"> | string
    role?: StringWithAggregatesFilter<"ProjectMember"> | string
  }

  export type ProjectLanguageWhereInput = {
    AND?: ProjectLanguageWhereInput | ProjectLanguageWhereInput[]
    OR?: ProjectLanguageWhereInput[]
    NOT?: ProjectLanguageWhereInput | ProjectLanguageWhereInput[]
    id?: StringFilter<"ProjectLanguage"> | string
    projectId?: StringFilter<"ProjectLanguage"> | string
    code?: StringFilter<"ProjectLanguage"> | string
    isSource?: BoolFilter<"ProjectLanguage"> | boolean
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectLanguageOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    code?: SortOrder
    isSource?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectLanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectLanguageWhereInput | ProjectLanguageWhereInput[]
    OR?: ProjectLanguageWhereInput[]
    NOT?: ProjectLanguageWhereInput | ProjectLanguageWhereInput[]
    projectId?: StringFilter<"ProjectLanguage"> | string
    code?: StringFilter<"ProjectLanguage"> | string
    isSource?: BoolFilter<"ProjectLanguage"> | boolean
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectLanguageOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    code?: SortOrder
    isSource?: SortOrder
    _count?: ProjectLanguageCountOrderByAggregateInput
    _max?: ProjectLanguageMaxOrderByAggregateInput
    _min?: ProjectLanguageMinOrderByAggregateInput
  }

  export type ProjectLanguageScalarWhereWithAggregatesInput = {
    AND?: ProjectLanguageScalarWhereWithAggregatesInput | ProjectLanguageScalarWhereWithAggregatesInput[]
    OR?: ProjectLanguageScalarWhereWithAggregatesInput[]
    NOT?: ProjectLanguageScalarWhereWithAggregatesInput | ProjectLanguageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectLanguage"> | string
    projectId?: StringWithAggregatesFilter<"ProjectLanguage"> | string
    code?: StringWithAggregatesFilter<"ProjectLanguage"> | string
    isSource?: BoolWithAggregatesFilter<"ProjectLanguage"> | boolean
  }

  export type VersionWhereInput = {
    AND?: VersionWhereInput | VersionWhereInput[]
    OR?: VersionWhereInput[]
    NOT?: VersionWhereInput | VersionWhereInput[]
    id?: StringFilter<"Version"> | string
    name?: StringFilter<"Version"> | string
    projectId?: StringFilter<"Version"> | string
    createdAt?: DateTimeFilter<"Version"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    keys?: TransKeyListRelationFilter
  }

  export type VersionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    keys?: TransKeyOrderByRelationAggregateInput
  }

  export type VersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VersionWhereInput | VersionWhereInput[]
    OR?: VersionWhereInput[]
    NOT?: VersionWhereInput | VersionWhereInput[]
    name?: StringFilter<"Version"> | string
    projectId?: StringFilter<"Version"> | string
    createdAt?: DateTimeFilter<"Version"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    keys?: TransKeyListRelationFilter
  }, "id">

  export type VersionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    _count?: VersionCountOrderByAggregateInput
    _max?: VersionMaxOrderByAggregateInput
    _min?: VersionMinOrderByAggregateInput
  }

  export type VersionScalarWhereWithAggregatesInput = {
    AND?: VersionScalarWhereWithAggregatesInput | VersionScalarWhereWithAggregatesInput[]
    OR?: VersionScalarWhereWithAggregatesInput[]
    NOT?: VersionScalarWhereWithAggregatesInput | VersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Version"> | string
    name?: StringWithAggregatesFilter<"Version"> | string
    projectId?: StringWithAggregatesFilter<"Version"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Version"> | Date | string
  }

  export type TransKeyWhereInput = {
    AND?: TransKeyWhereInput | TransKeyWhereInput[]
    OR?: TransKeyWhereInput[]
    NOT?: TransKeyWhereInput | TransKeyWhereInput[]
    id?: StringFilter<"TransKey"> | string
    name?: StringFilter<"TransKey"> | string
    comment?: StringNullableFilter<"TransKey"> | string | null
    versionId?: StringFilter<"TransKey"> | string
    version?: XOR<VersionScalarRelationFilter, VersionWhereInput>
    values?: TransValueListRelationFilter
  }

  export type TransKeyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    comment?: SortOrderInput | SortOrder
    versionId?: SortOrder
    version?: VersionOrderByWithRelationInput
    values?: TransValueOrderByRelationAggregateInput
  }

  export type TransKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    versionId_name?: TransKeyVersionIdNameCompoundUniqueInput
    AND?: TransKeyWhereInput | TransKeyWhereInput[]
    OR?: TransKeyWhereInput[]
    NOT?: TransKeyWhereInput | TransKeyWhereInput[]
    name?: StringFilter<"TransKey"> | string
    comment?: StringNullableFilter<"TransKey"> | string | null
    versionId?: StringFilter<"TransKey"> | string
    version?: XOR<VersionScalarRelationFilter, VersionWhereInput>
    values?: TransValueListRelationFilter
  }, "id" | "versionId_name">

  export type TransKeyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    comment?: SortOrderInput | SortOrder
    versionId?: SortOrder
    _count?: TransKeyCountOrderByAggregateInput
    _max?: TransKeyMaxOrderByAggregateInput
    _min?: TransKeyMinOrderByAggregateInput
  }

  export type TransKeyScalarWhereWithAggregatesInput = {
    AND?: TransKeyScalarWhereWithAggregatesInput | TransKeyScalarWhereWithAggregatesInput[]
    OR?: TransKeyScalarWhereWithAggregatesInput[]
    NOT?: TransKeyScalarWhereWithAggregatesInput | TransKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransKey"> | string
    name?: StringWithAggregatesFilter<"TransKey"> | string
    comment?: StringNullableWithAggregatesFilter<"TransKey"> | string | null
    versionId?: StringWithAggregatesFilter<"TransKey"> | string
  }

  export type TransValueWhereInput = {
    AND?: TransValueWhereInput | TransValueWhereInput[]
    OR?: TransValueWhereInput[]
    NOT?: TransValueWhereInput | TransValueWhereInput[]
    id?: StringFilter<"TransValue"> | string
    keyId?: StringFilter<"TransValue"> | string
    langCode?: StringFilter<"TransValue"> | string
    content?: StringFilter<"TransValue"> | string
    isAiTranslated?: BoolFilter<"TransValue"> | boolean
    key?: XOR<TransKeyScalarRelationFilter, TransKeyWhereInput>
  }

  export type TransValueOrderByWithRelationInput = {
    id?: SortOrder
    keyId?: SortOrder
    langCode?: SortOrder
    content?: SortOrder
    isAiTranslated?: SortOrder
    key?: TransKeyOrderByWithRelationInput
  }

  export type TransValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyId_langCode?: TransValueKeyIdLangCodeCompoundUniqueInput
    AND?: TransValueWhereInput | TransValueWhereInput[]
    OR?: TransValueWhereInput[]
    NOT?: TransValueWhereInput | TransValueWhereInput[]
    keyId?: StringFilter<"TransValue"> | string
    langCode?: StringFilter<"TransValue"> | string
    content?: StringFilter<"TransValue"> | string
    isAiTranslated?: BoolFilter<"TransValue"> | boolean
    key?: XOR<TransKeyScalarRelationFilter, TransKeyWhereInput>
  }, "id" | "keyId_langCode">

  export type TransValueOrderByWithAggregationInput = {
    id?: SortOrder
    keyId?: SortOrder
    langCode?: SortOrder
    content?: SortOrder
    isAiTranslated?: SortOrder
    _count?: TransValueCountOrderByAggregateInput
    _max?: TransValueMaxOrderByAggregateInput
    _min?: TransValueMinOrderByAggregateInput
  }

  export type TransValueScalarWhereWithAggregatesInput = {
    AND?: TransValueScalarWhereWithAggregatesInput | TransValueScalarWhereWithAggregatesInput[]
    OR?: TransValueScalarWhereWithAggregatesInput[]
    NOT?: TransValueScalarWhereWithAggregatesInput | TransValueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransValue"> | string
    keyId?: StringWithAggregatesFilter<"TransValue"> | string
    langCode?: StringWithAggregatesFilter<"TransValue"> | string
    content?: StringWithAggregatesFilter<"TransValue"> | string
    isAiTranslated?: BoolWithAggregatesFilter<"TransValue"> | boolean
  }

  export type PlatformLanguageWhereInput = {
    AND?: PlatformLanguageWhereInput | PlatformLanguageWhereInput[]
    OR?: PlatformLanguageWhereInput[]
    NOT?: PlatformLanguageWhereInput | PlatformLanguageWhereInput[]
    id?: StringFilter<"PlatformLanguage"> | string
    code?: StringFilter<"PlatformLanguage"> | string
    name?: StringFilter<"PlatformLanguage"> | string
    sortOrder?: IntFilter<"PlatformLanguage"> | number
  }

  export type PlatformLanguageOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
  }

  export type PlatformLanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PlatformLanguageWhereInput | PlatformLanguageWhereInput[]
    OR?: PlatformLanguageWhereInput[]
    NOT?: PlatformLanguageWhereInput | PlatformLanguageWhereInput[]
    name?: StringFilter<"PlatformLanguage"> | string
    sortOrder?: IntFilter<"PlatformLanguage"> | number
  }, "id" | "code">

  export type PlatformLanguageOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    _count?: PlatformLanguageCountOrderByAggregateInput
    _avg?: PlatformLanguageAvgOrderByAggregateInput
    _max?: PlatformLanguageMaxOrderByAggregateInput
    _min?: PlatformLanguageMinOrderByAggregateInput
    _sum?: PlatformLanguageSumOrderByAggregateInput
  }

  export type PlatformLanguageScalarWhereWithAggregatesInput = {
    AND?: PlatformLanguageScalarWhereWithAggregatesInput | PlatformLanguageScalarWhereWithAggregatesInput[]
    OR?: PlatformLanguageScalarWhereWithAggregatesInput[]
    NOT?: PlatformLanguageScalarWhereWithAggregatesInput | PlatformLanguageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlatformLanguage"> | string
    code?: StringWithAggregatesFilter<"PlatformLanguage"> | string
    name?: StringWithAggregatesFilter<"PlatformLanguage"> | string
    sortOrder?: IntWithAggregatesFilter<"PlatformLanguage"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    isSuperAdmin?: boolean
    createdAt?: Date | string
    projects?: ProjectMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    isSuperAdmin?: boolean
    createdAt?: Date | string
    projects?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    isSuperAdmin?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    languages?: ProjectLanguageCreateNestedManyWithoutProjectInput
    versions?: VersionCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    languages?: ProjectLanguageUncheckedCreateNestedManyWithoutProjectInput
    versions?: VersionUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    languages?: ProjectLanguageUpdateManyWithoutProjectNestedInput
    versions?: VersionUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    languages?: ProjectLanguageUncheckedUpdateManyWithoutProjectNestedInput
    versions?: VersionUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateInput = {
    id?: string
    role: string
    project: ProjectCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectMemberUncheckedCreateInput = {
    id?: string
    projectId: string
    userId: string
    role: string
  }

  export type ProjectMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMemberCreateManyInput = {
    id?: string
    projectId: string
    userId: string
    role: string
  }

  export type ProjectMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectLanguageCreateInput = {
    id?: string
    code: string
    isSource?: boolean
    project: ProjectCreateNestedOneWithoutLanguagesInput
  }

  export type ProjectLanguageUncheckedCreateInput = {
    id?: string
    projectId: string
    code: string
    isSource?: boolean
  }

  export type ProjectLanguageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isSource?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectUpdateOneRequiredWithoutLanguagesNestedInput
  }

  export type ProjectLanguageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isSource?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectLanguageCreateManyInput = {
    id?: string
    projectId: string
    code: string
    isSource?: boolean
  }

  export type ProjectLanguageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isSource?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectLanguageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isSource?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VersionCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutVersionsInput
    keys?: TransKeyCreateNestedManyWithoutVersionInput
  }

  export type VersionUncheckedCreateInput = {
    id?: string
    name: string
    projectId: string
    createdAt?: Date | string
    keys?: TransKeyUncheckedCreateNestedManyWithoutVersionInput
  }

  export type VersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutVersionsNestedInput
    keys?: TransKeyUpdateManyWithoutVersionNestedInput
  }

  export type VersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keys?: TransKeyUncheckedUpdateManyWithoutVersionNestedInput
  }

  export type VersionCreateManyInput = {
    id?: string
    name: string
    projectId: string
    createdAt?: Date | string
  }

  export type VersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransKeyCreateInput = {
    id?: string
    name: string
    comment?: string | null
    version: VersionCreateNestedOneWithoutKeysInput
    values?: TransValueCreateNestedManyWithoutKeyInput
  }

  export type TransKeyUncheckedCreateInput = {
    id?: string
    name: string
    comment?: string | null
    versionId: string
    values?: TransValueUncheckedCreateNestedManyWithoutKeyInput
  }

  export type TransKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    version?: VersionUpdateOneRequiredWithoutKeysNestedInput
    values?: TransValueUpdateManyWithoutKeyNestedInput
  }

  export type TransKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    versionId?: StringFieldUpdateOperationsInput | string
    values?: TransValueUncheckedUpdateManyWithoutKeyNestedInput
  }

  export type TransKeyCreateManyInput = {
    id?: string
    name: string
    comment?: string | null
    versionId: string
  }

  export type TransKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    versionId?: StringFieldUpdateOperationsInput | string
  }

  export type TransValueCreateInput = {
    id?: string
    langCode: string
    content: string
    isAiTranslated?: boolean
    key: TransKeyCreateNestedOneWithoutValuesInput
  }

  export type TransValueUncheckedCreateInput = {
    id?: string
    keyId: string
    langCode: string
    content: string
    isAiTranslated?: boolean
  }

  export type TransValueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    langCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAiTranslated?: BoolFieldUpdateOperationsInput | boolean
    key?: TransKeyUpdateOneRequiredWithoutValuesNestedInput
  }

  export type TransValueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyId?: StringFieldUpdateOperationsInput | string
    langCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAiTranslated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransValueCreateManyInput = {
    id?: string
    keyId: string
    langCode: string
    content: string
    isAiTranslated?: boolean
  }

  export type TransValueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    langCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAiTranslated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransValueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyId?: StringFieldUpdateOperationsInput | string
    langCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAiTranslated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlatformLanguageCreateInput = {
    id?: string
    code: string
    name: string
    sortOrder?: number
  }

  export type PlatformLanguageUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    sortOrder?: number
  }

  export type PlatformLanguageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type PlatformLanguageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type PlatformLanguageCreateManyInput = {
    id?: string
    code: string
    name: string
    sortOrder?: number
  }

  export type PlatformLanguageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type PlatformLanguageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectMemberListRelationFilter = {
    every?: ProjectMemberWhereInput
    some?: ProjectMemberWhereInput
    none?: ProjectMemberWhereInput
  }

  export type ProjectMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isSuperAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isSuperAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isSuperAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectLanguageListRelationFilter = {
    every?: ProjectLanguageWhereInput
    some?: ProjectLanguageWhereInput
    none?: ProjectLanguageWhereInput
  }

  export type VersionListRelationFilter = {
    every?: VersionWhereInput
    some?: VersionWhereInput
    none?: VersionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectLanguageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectMemberProjectIdUserIdCompoundUniqueInput = {
    projectId: string
    userId: string
  }

  export type ProjectMemberCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type ProjectMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type ProjectMemberMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type ProjectLanguageCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    code?: SortOrder
    isSource?: SortOrder
  }

  export type ProjectLanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    code?: SortOrder
    isSource?: SortOrder
  }

  export type ProjectLanguageMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    code?: SortOrder
    isSource?: SortOrder
  }

  export type TransKeyListRelationFilter = {
    every?: TransKeyWhereInput
    some?: TransKeyWhereInput
    none?: TransKeyWhereInput
  }

  export type TransKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VersionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type VersionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type VersionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type VersionScalarRelationFilter = {
    is?: VersionWhereInput
    isNot?: VersionWhereInput
  }

  export type TransValueListRelationFilter = {
    every?: TransValueWhereInput
    some?: TransValueWhereInput
    none?: TransValueWhereInput
  }

  export type TransValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransKeyVersionIdNameCompoundUniqueInput = {
    versionId: string
    name: string
  }

  export type TransKeyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    versionId?: SortOrder
  }

  export type TransKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    versionId?: SortOrder
  }

  export type TransKeyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    versionId?: SortOrder
  }

  export type TransKeyScalarRelationFilter = {
    is?: TransKeyWhereInput
    isNot?: TransKeyWhereInput
  }

  export type TransValueKeyIdLangCodeCompoundUniqueInput = {
    keyId: string
    langCode: string
  }

  export type TransValueCountOrderByAggregateInput = {
    id?: SortOrder
    keyId?: SortOrder
    langCode?: SortOrder
    content?: SortOrder
    isAiTranslated?: SortOrder
  }

  export type TransValueMaxOrderByAggregateInput = {
    id?: SortOrder
    keyId?: SortOrder
    langCode?: SortOrder
    content?: SortOrder
    isAiTranslated?: SortOrder
  }

  export type TransValueMinOrderByAggregateInput = {
    id?: SortOrder
    keyId?: SortOrder
    langCode?: SortOrder
    content?: SortOrder
    isAiTranslated?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PlatformLanguageCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
  }

  export type PlatformLanguageAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type PlatformLanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
  }

  export type PlatformLanguageMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
  }

  export type PlatformLanguageSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProjectMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type ProjectLanguageCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectLanguageCreateWithoutProjectInput, ProjectLanguageUncheckedCreateWithoutProjectInput> | ProjectLanguageCreateWithoutProjectInput[] | ProjectLanguageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectLanguageCreateOrConnectWithoutProjectInput | ProjectLanguageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectLanguageCreateManyProjectInputEnvelope
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
  }

  export type VersionCreateNestedManyWithoutProjectInput = {
    create?: XOR<VersionCreateWithoutProjectInput, VersionUncheckedCreateWithoutProjectInput> | VersionCreateWithoutProjectInput[] | VersionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutProjectInput | VersionCreateOrConnectWithoutProjectInput[]
    createMany?: VersionCreateManyProjectInputEnvelope
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
  }

  export type ProjectMemberCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type ProjectLanguageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectLanguageCreateWithoutProjectInput, ProjectLanguageUncheckedCreateWithoutProjectInput> | ProjectLanguageCreateWithoutProjectInput[] | ProjectLanguageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectLanguageCreateOrConnectWithoutProjectInput | ProjectLanguageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectLanguageCreateManyProjectInputEnvelope
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
  }

  export type VersionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<VersionCreateWithoutProjectInput, VersionUncheckedCreateWithoutProjectInput> | VersionCreateWithoutProjectInput[] | VersionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutProjectInput | VersionCreateOrConnectWithoutProjectInput[]
    createMany?: VersionCreateManyProjectInputEnvelope
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectLanguageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectLanguageCreateWithoutProjectInput, ProjectLanguageUncheckedCreateWithoutProjectInput> | ProjectLanguageCreateWithoutProjectInput[] | ProjectLanguageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectLanguageCreateOrConnectWithoutProjectInput | ProjectLanguageCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput | ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectLanguageCreateManyProjectInputEnvelope
    set?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    disconnect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    delete?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    update?: ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput | ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectLanguageUpdateManyWithWhereWithoutProjectInput | ProjectLanguageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
  }

  export type VersionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<VersionCreateWithoutProjectInput, VersionUncheckedCreateWithoutProjectInput> | VersionCreateWithoutProjectInput[] | VersionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutProjectInput | VersionCreateOrConnectWithoutProjectInput[]
    upsert?: VersionUpsertWithWhereUniqueWithoutProjectInput | VersionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: VersionCreateManyProjectInputEnvelope
    set?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    disconnect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    delete?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    update?: VersionUpdateWithWhereUniqueWithoutProjectInput | VersionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: VersionUpdateManyWithWhereWithoutProjectInput | VersionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: VersionScalarWhereInput | VersionScalarWhereInput[]
  }

  export type ProjectMemberUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type ProjectLanguageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectLanguageCreateWithoutProjectInput, ProjectLanguageUncheckedCreateWithoutProjectInput> | ProjectLanguageCreateWithoutProjectInput[] | ProjectLanguageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectLanguageCreateOrConnectWithoutProjectInput | ProjectLanguageCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput | ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectLanguageCreateManyProjectInputEnvelope
    set?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    disconnect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    delete?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    update?: ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput | ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectLanguageUpdateManyWithWhereWithoutProjectInput | ProjectLanguageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
  }

  export type VersionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<VersionCreateWithoutProjectInput, VersionUncheckedCreateWithoutProjectInput> | VersionCreateWithoutProjectInput[] | VersionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutProjectInput | VersionCreateOrConnectWithoutProjectInput[]
    upsert?: VersionUpsertWithWhereUniqueWithoutProjectInput | VersionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: VersionCreateManyProjectInputEnvelope
    set?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    disconnect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    delete?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    update?: VersionUpdateWithWhereUniqueWithoutProjectInput | VersionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: VersionUpdateManyWithWhereWithoutProjectInput | VersionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: VersionScalarWhereInput | VersionScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutMembersInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    upsert?: ProjectUpsertWithoutMembersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMembersInput, ProjectUpdateWithoutMembersInput>, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectCreateNestedOneWithoutLanguagesInput = {
    create?: XOR<ProjectCreateWithoutLanguagesInput, ProjectUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLanguagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutLanguagesNestedInput = {
    create?: XOR<ProjectCreateWithoutLanguagesInput, ProjectUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLanguagesInput
    upsert?: ProjectUpsertWithoutLanguagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLanguagesInput, ProjectUpdateWithoutLanguagesInput>, ProjectUncheckedUpdateWithoutLanguagesInput>
  }

  export type ProjectCreateNestedOneWithoutVersionsInput = {
    create?: XOR<ProjectCreateWithoutVersionsInput, ProjectUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutVersionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type TransKeyCreateNestedManyWithoutVersionInput = {
    create?: XOR<TransKeyCreateWithoutVersionInput, TransKeyUncheckedCreateWithoutVersionInput> | TransKeyCreateWithoutVersionInput[] | TransKeyUncheckedCreateWithoutVersionInput[]
    connectOrCreate?: TransKeyCreateOrConnectWithoutVersionInput | TransKeyCreateOrConnectWithoutVersionInput[]
    createMany?: TransKeyCreateManyVersionInputEnvelope
    connect?: TransKeyWhereUniqueInput | TransKeyWhereUniqueInput[]
  }

  export type TransKeyUncheckedCreateNestedManyWithoutVersionInput = {
    create?: XOR<TransKeyCreateWithoutVersionInput, TransKeyUncheckedCreateWithoutVersionInput> | TransKeyCreateWithoutVersionInput[] | TransKeyUncheckedCreateWithoutVersionInput[]
    connectOrCreate?: TransKeyCreateOrConnectWithoutVersionInput | TransKeyCreateOrConnectWithoutVersionInput[]
    createMany?: TransKeyCreateManyVersionInputEnvelope
    connect?: TransKeyWhereUniqueInput | TransKeyWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<ProjectCreateWithoutVersionsInput, ProjectUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutVersionsInput
    upsert?: ProjectUpsertWithoutVersionsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutVersionsInput, ProjectUpdateWithoutVersionsInput>, ProjectUncheckedUpdateWithoutVersionsInput>
  }

  export type TransKeyUpdateManyWithoutVersionNestedInput = {
    create?: XOR<TransKeyCreateWithoutVersionInput, TransKeyUncheckedCreateWithoutVersionInput> | TransKeyCreateWithoutVersionInput[] | TransKeyUncheckedCreateWithoutVersionInput[]
    connectOrCreate?: TransKeyCreateOrConnectWithoutVersionInput | TransKeyCreateOrConnectWithoutVersionInput[]
    upsert?: TransKeyUpsertWithWhereUniqueWithoutVersionInput | TransKeyUpsertWithWhereUniqueWithoutVersionInput[]
    createMany?: TransKeyCreateManyVersionInputEnvelope
    set?: TransKeyWhereUniqueInput | TransKeyWhereUniqueInput[]
    disconnect?: TransKeyWhereUniqueInput | TransKeyWhereUniqueInput[]
    delete?: TransKeyWhereUniqueInput | TransKeyWhereUniqueInput[]
    connect?: TransKeyWhereUniqueInput | TransKeyWhereUniqueInput[]
    update?: TransKeyUpdateWithWhereUniqueWithoutVersionInput | TransKeyUpdateWithWhereUniqueWithoutVersionInput[]
    updateMany?: TransKeyUpdateManyWithWhereWithoutVersionInput | TransKeyUpdateManyWithWhereWithoutVersionInput[]
    deleteMany?: TransKeyScalarWhereInput | TransKeyScalarWhereInput[]
  }

  export type TransKeyUncheckedUpdateManyWithoutVersionNestedInput = {
    create?: XOR<TransKeyCreateWithoutVersionInput, TransKeyUncheckedCreateWithoutVersionInput> | TransKeyCreateWithoutVersionInput[] | TransKeyUncheckedCreateWithoutVersionInput[]
    connectOrCreate?: TransKeyCreateOrConnectWithoutVersionInput | TransKeyCreateOrConnectWithoutVersionInput[]
    upsert?: TransKeyUpsertWithWhereUniqueWithoutVersionInput | TransKeyUpsertWithWhereUniqueWithoutVersionInput[]
    createMany?: TransKeyCreateManyVersionInputEnvelope
    set?: TransKeyWhereUniqueInput | TransKeyWhereUniqueInput[]
    disconnect?: TransKeyWhereUniqueInput | TransKeyWhereUniqueInput[]
    delete?: TransKeyWhereUniqueInput | TransKeyWhereUniqueInput[]
    connect?: TransKeyWhereUniqueInput | TransKeyWhereUniqueInput[]
    update?: TransKeyUpdateWithWhereUniqueWithoutVersionInput | TransKeyUpdateWithWhereUniqueWithoutVersionInput[]
    updateMany?: TransKeyUpdateManyWithWhereWithoutVersionInput | TransKeyUpdateManyWithWhereWithoutVersionInput[]
    deleteMany?: TransKeyScalarWhereInput | TransKeyScalarWhereInput[]
  }

  export type VersionCreateNestedOneWithoutKeysInput = {
    create?: XOR<VersionCreateWithoutKeysInput, VersionUncheckedCreateWithoutKeysInput>
    connectOrCreate?: VersionCreateOrConnectWithoutKeysInput
    connect?: VersionWhereUniqueInput
  }

  export type TransValueCreateNestedManyWithoutKeyInput = {
    create?: XOR<TransValueCreateWithoutKeyInput, TransValueUncheckedCreateWithoutKeyInput> | TransValueCreateWithoutKeyInput[] | TransValueUncheckedCreateWithoutKeyInput[]
    connectOrCreate?: TransValueCreateOrConnectWithoutKeyInput | TransValueCreateOrConnectWithoutKeyInput[]
    createMany?: TransValueCreateManyKeyInputEnvelope
    connect?: TransValueWhereUniqueInput | TransValueWhereUniqueInput[]
  }

  export type TransValueUncheckedCreateNestedManyWithoutKeyInput = {
    create?: XOR<TransValueCreateWithoutKeyInput, TransValueUncheckedCreateWithoutKeyInput> | TransValueCreateWithoutKeyInput[] | TransValueUncheckedCreateWithoutKeyInput[]
    connectOrCreate?: TransValueCreateOrConnectWithoutKeyInput | TransValueCreateOrConnectWithoutKeyInput[]
    createMany?: TransValueCreateManyKeyInputEnvelope
    connect?: TransValueWhereUniqueInput | TransValueWhereUniqueInput[]
  }

  export type VersionUpdateOneRequiredWithoutKeysNestedInput = {
    create?: XOR<VersionCreateWithoutKeysInput, VersionUncheckedCreateWithoutKeysInput>
    connectOrCreate?: VersionCreateOrConnectWithoutKeysInput
    upsert?: VersionUpsertWithoutKeysInput
    connect?: VersionWhereUniqueInput
    update?: XOR<XOR<VersionUpdateToOneWithWhereWithoutKeysInput, VersionUpdateWithoutKeysInput>, VersionUncheckedUpdateWithoutKeysInput>
  }

  export type TransValueUpdateManyWithoutKeyNestedInput = {
    create?: XOR<TransValueCreateWithoutKeyInput, TransValueUncheckedCreateWithoutKeyInput> | TransValueCreateWithoutKeyInput[] | TransValueUncheckedCreateWithoutKeyInput[]
    connectOrCreate?: TransValueCreateOrConnectWithoutKeyInput | TransValueCreateOrConnectWithoutKeyInput[]
    upsert?: TransValueUpsertWithWhereUniqueWithoutKeyInput | TransValueUpsertWithWhereUniqueWithoutKeyInput[]
    createMany?: TransValueCreateManyKeyInputEnvelope
    set?: TransValueWhereUniqueInput | TransValueWhereUniqueInput[]
    disconnect?: TransValueWhereUniqueInput | TransValueWhereUniqueInput[]
    delete?: TransValueWhereUniqueInput | TransValueWhereUniqueInput[]
    connect?: TransValueWhereUniqueInput | TransValueWhereUniqueInput[]
    update?: TransValueUpdateWithWhereUniqueWithoutKeyInput | TransValueUpdateWithWhereUniqueWithoutKeyInput[]
    updateMany?: TransValueUpdateManyWithWhereWithoutKeyInput | TransValueUpdateManyWithWhereWithoutKeyInput[]
    deleteMany?: TransValueScalarWhereInput | TransValueScalarWhereInput[]
  }

  export type TransValueUncheckedUpdateManyWithoutKeyNestedInput = {
    create?: XOR<TransValueCreateWithoutKeyInput, TransValueUncheckedCreateWithoutKeyInput> | TransValueCreateWithoutKeyInput[] | TransValueUncheckedCreateWithoutKeyInput[]
    connectOrCreate?: TransValueCreateOrConnectWithoutKeyInput | TransValueCreateOrConnectWithoutKeyInput[]
    upsert?: TransValueUpsertWithWhereUniqueWithoutKeyInput | TransValueUpsertWithWhereUniqueWithoutKeyInput[]
    createMany?: TransValueCreateManyKeyInputEnvelope
    set?: TransValueWhereUniqueInput | TransValueWhereUniqueInput[]
    disconnect?: TransValueWhereUniqueInput | TransValueWhereUniqueInput[]
    delete?: TransValueWhereUniqueInput | TransValueWhereUniqueInput[]
    connect?: TransValueWhereUniqueInput | TransValueWhereUniqueInput[]
    update?: TransValueUpdateWithWhereUniqueWithoutKeyInput | TransValueUpdateWithWhereUniqueWithoutKeyInput[]
    updateMany?: TransValueUpdateManyWithWhereWithoutKeyInput | TransValueUpdateManyWithWhereWithoutKeyInput[]
    deleteMany?: TransValueScalarWhereInput | TransValueScalarWhereInput[]
  }

  export type TransKeyCreateNestedOneWithoutValuesInput = {
    create?: XOR<TransKeyCreateWithoutValuesInput, TransKeyUncheckedCreateWithoutValuesInput>
    connectOrCreate?: TransKeyCreateOrConnectWithoutValuesInput
    connect?: TransKeyWhereUniqueInput
  }

  export type TransKeyUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<TransKeyCreateWithoutValuesInput, TransKeyUncheckedCreateWithoutValuesInput>
    connectOrCreate?: TransKeyCreateOrConnectWithoutValuesInput
    upsert?: TransKeyUpsertWithoutValuesInput
    connect?: TransKeyWhereUniqueInput
    update?: XOR<XOR<TransKeyUpdateToOneWithWhereWithoutValuesInput, TransKeyUpdateWithoutValuesInput>, TransKeyUncheckedUpdateWithoutValuesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProjectMemberCreateWithoutUserInput = {
    id?: string
    role: string
    project: ProjectCreateNestedOneWithoutMembersInput
  }

  export type ProjectMemberUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    role: string
  }

  export type ProjectMemberCreateOrConnectWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }

  export type ProjectMemberCreateManyUserInputEnvelope = {
    data: ProjectMemberCreateManyUserInput | ProjectMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutUserInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectMemberScalarWhereInput = {
    AND?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    OR?: ProjectMemberScalarWhereInput[]
    NOT?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    id?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    userId?: StringFilter<"ProjectMember"> | string
    role?: StringFilter<"ProjectMember"> | string
  }

  export type ProjectLanguageCreateWithoutProjectInput = {
    id?: string
    code: string
    isSource?: boolean
  }

  export type ProjectLanguageUncheckedCreateWithoutProjectInput = {
    id?: string
    code: string
    isSource?: boolean
  }

  export type ProjectLanguageCreateOrConnectWithoutProjectInput = {
    where: ProjectLanguageWhereUniqueInput
    create: XOR<ProjectLanguageCreateWithoutProjectInput, ProjectLanguageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectLanguageCreateManyProjectInputEnvelope = {
    data: ProjectLanguageCreateManyProjectInput | ProjectLanguageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type VersionCreateWithoutProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    keys?: TransKeyCreateNestedManyWithoutVersionInput
  }

  export type VersionUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    keys?: TransKeyUncheckedCreateNestedManyWithoutVersionInput
  }

  export type VersionCreateOrConnectWithoutProjectInput = {
    where: VersionWhereUniqueInput
    create: XOR<VersionCreateWithoutProjectInput, VersionUncheckedCreateWithoutProjectInput>
  }

  export type VersionCreateManyProjectInputEnvelope = {
    data: VersionCreateManyProjectInput | VersionCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMemberCreateWithoutProjectInput = {
    id?: string
    role: string
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectMemberUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    role: string
  }

  export type ProjectMemberCreateOrConnectWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberCreateManyProjectInputEnvelope = {
    data: ProjectMemberCreateManyProjectInput | ProjectMemberCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectLanguageWhereUniqueInput
    update: XOR<ProjectLanguageUpdateWithoutProjectInput, ProjectLanguageUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectLanguageCreateWithoutProjectInput, ProjectLanguageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectLanguageWhereUniqueInput
    data: XOR<ProjectLanguageUpdateWithoutProjectInput, ProjectLanguageUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectLanguageUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectLanguageScalarWhereInput
    data: XOR<ProjectLanguageUpdateManyMutationInput, ProjectLanguageUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectLanguageScalarWhereInput = {
    AND?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
    OR?: ProjectLanguageScalarWhereInput[]
    NOT?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
    id?: StringFilter<"ProjectLanguage"> | string
    projectId?: StringFilter<"ProjectLanguage"> | string
    code?: StringFilter<"ProjectLanguage"> | string
    isSource?: BoolFilter<"ProjectLanguage"> | boolean
  }

  export type VersionUpsertWithWhereUniqueWithoutProjectInput = {
    where: VersionWhereUniqueInput
    update: XOR<VersionUpdateWithoutProjectInput, VersionUncheckedUpdateWithoutProjectInput>
    create: XOR<VersionCreateWithoutProjectInput, VersionUncheckedCreateWithoutProjectInput>
  }

  export type VersionUpdateWithWhereUniqueWithoutProjectInput = {
    where: VersionWhereUniqueInput
    data: XOR<VersionUpdateWithoutProjectInput, VersionUncheckedUpdateWithoutProjectInput>
  }

  export type VersionUpdateManyWithWhereWithoutProjectInput = {
    where: VersionScalarWhereInput
    data: XOR<VersionUpdateManyMutationInput, VersionUncheckedUpdateManyWithoutProjectInput>
  }

  export type VersionScalarWhereInput = {
    AND?: VersionScalarWhereInput | VersionScalarWhereInput[]
    OR?: VersionScalarWhereInput[]
    NOT?: VersionScalarWhereInput | VersionScalarWhereInput[]
    id?: StringFilter<"Version"> | string
    name?: StringFilter<"Version"> | string
    projectId?: StringFilter<"Version"> | string
    createdAt?: DateTimeFilter<"Version"> | Date | string
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    languages?: ProjectLanguageCreateNestedManyWithoutProjectInput
    versions?: VersionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    languages?: ProjectLanguageUncheckedCreateNestedManyWithoutProjectInput
    versions?: VersionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMembersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    email: string
    password: string
    isSuperAdmin?: boolean
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    email: string
    password: string
    isSuperAdmin?: boolean
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectUpsertWithoutMembersInput = {
    update: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMembersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    languages?: ProjectLanguageUpdateManyWithoutProjectNestedInput
    versions?: VersionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    languages?: ProjectLanguageUncheckedUpdateManyWithoutProjectNestedInput
    versions?: VersionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutLanguagesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    versions?: VersionCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLanguagesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    versions?: VersionUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLanguagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLanguagesInput, ProjectUncheckedCreateWithoutLanguagesInput>
  }

  export type ProjectUpsertWithoutLanguagesInput = {
    update: XOR<ProjectUpdateWithoutLanguagesInput, ProjectUncheckedUpdateWithoutLanguagesInput>
    create: XOR<ProjectCreateWithoutLanguagesInput, ProjectUncheckedCreateWithoutLanguagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLanguagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLanguagesInput, ProjectUncheckedUpdateWithoutLanguagesInput>
  }

  export type ProjectUpdateWithoutLanguagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: VersionUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLanguagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: VersionUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutVersionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    languages?: ProjectLanguageCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutVersionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    languages?: ProjectLanguageUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutVersionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutVersionsInput, ProjectUncheckedCreateWithoutVersionsInput>
  }

  export type TransKeyCreateWithoutVersionInput = {
    id?: string
    name: string
    comment?: string | null
    values?: TransValueCreateNestedManyWithoutKeyInput
  }

  export type TransKeyUncheckedCreateWithoutVersionInput = {
    id?: string
    name: string
    comment?: string | null
    values?: TransValueUncheckedCreateNestedManyWithoutKeyInput
  }

  export type TransKeyCreateOrConnectWithoutVersionInput = {
    where: TransKeyWhereUniqueInput
    create: XOR<TransKeyCreateWithoutVersionInput, TransKeyUncheckedCreateWithoutVersionInput>
  }

  export type TransKeyCreateManyVersionInputEnvelope = {
    data: TransKeyCreateManyVersionInput | TransKeyCreateManyVersionInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutVersionsInput = {
    update: XOR<ProjectUpdateWithoutVersionsInput, ProjectUncheckedUpdateWithoutVersionsInput>
    create: XOR<ProjectCreateWithoutVersionsInput, ProjectUncheckedCreateWithoutVersionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutVersionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutVersionsInput, ProjectUncheckedUpdateWithoutVersionsInput>
  }

  export type ProjectUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    languages?: ProjectLanguageUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    languages?: ProjectLanguageUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TransKeyUpsertWithWhereUniqueWithoutVersionInput = {
    where: TransKeyWhereUniqueInput
    update: XOR<TransKeyUpdateWithoutVersionInput, TransKeyUncheckedUpdateWithoutVersionInput>
    create: XOR<TransKeyCreateWithoutVersionInput, TransKeyUncheckedCreateWithoutVersionInput>
  }

  export type TransKeyUpdateWithWhereUniqueWithoutVersionInput = {
    where: TransKeyWhereUniqueInput
    data: XOR<TransKeyUpdateWithoutVersionInput, TransKeyUncheckedUpdateWithoutVersionInput>
  }

  export type TransKeyUpdateManyWithWhereWithoutVersionInput = {
    where: TransKeyScalarWhereInput
    data: XOR<TransKeyUpdateManyMutationInput, TransKeyUncheckedUpdateManyWithoutVersionInput>
  }

  export type TransKeyScalarWhereInput = {
    AND?: TransKeyScalarWhereInput | TransKeyScalarWhereInput[]
    OR?: TransKeyScalarWhereInput[]
    NOT?: TransKeyScalarWhereInput | TransKeyScalarWhereInput[]
    id?: StringFilter<"TransKey"> | string
    name?: StringFilter<"TransKey"> | string
    comment?: StringNullableFilter<"TransKey"> | string | null
    versionId?: StringFilter<"TransKey"> | string
  }

  export type VersionCreateWithoutKeysInput = {
    id?: string
    name: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutVersionsInput
  }

  export type VersionUncheckedCreateWithoutKeysInput = {
    id?: string
    name: string
    projectId: string
    createdAt?: Date | string
  }

  export type VersionCreateOrConnectWithoutKeysInput = {
    where: VersionWhereUniqueInput
    create: XOR<VersionCreateWithoutKeysInput, VersionUncheckedCreateWithoutKeysInput>
  }

  export type TransValueCreateWithoutKeyInput = {
    id?: string
    langCode: string
    content: string
    isAiTranslated?: boolean
  }

  export type TransValueUncheckedCreateWithoutKeyInput = {
    id?: string
    langCode: string
    content: string
    isAiTranslated?: boolean
  }

  export type TransValueCreateOrConnectWithoutKeyInput = {
    where: TransValueWhereUniqueInput
    create: XOR<TransValueCreateWithoutKeyInput, TransValueUncheckedCreateWithoutKeyInput>
  }

  export type TransValueCreateManyKeyInputEnvelope = {
    data: TransValueCreateManyKeyInput | TransValueCreateManyKeyInput[]
    skipDuplicates?: boolean
  }

  export type VersionUpsertWithoutKeysInput = {
    update: XOR<VersionUpdateWithoutKeysInput, VersionUncheckedUpdateWithoutKeysInput>
    create: XOR<VersionCreateWithoutKeysInput, VersionUncheckedCreateWithoutKeysInput>
    where?: VersionWhereInput
  }

  export type VersionUpdateToOneWithWhereWithoutKeysInput = {
    where?: VersionWhereInput
    data: XOR<VersionUpdateWithoutKeysInput, VersionUncheckedUpdateWithoutKeysInput>
  }

  export type VersionUpdateWithoutKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type VersionUncheckedUpdateWithoutKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransValueUpsertWithWhereUniqueWithoutKeyInput = {
    where: TransValueWhereUniqueInput
    update: XOR<TransValueUpdateWithoutKeyInput, TransValueUncheckedUpdateWithoutKeyInput>
    create: XOR<TransValueCreateWithoutKeyInput, TransValueUncheckedCreateWithoutKeyInput>
  }

  export type TransValueUpdateWithWhereUniqueWithoutKeyInput = {
    where: TransValueWhereUniqueInput
    data: XOR<TransValueUpdateWithoutKeyInput, TransValueUncheckedUpdateWithoutKeyInput>
  }

  export type TransValueUpdateManyWithWhereWithoutKeyInput = {
    where: TransValueScalarWhereInput
    data: XOR<TransValueUpdateManyMutationInput, TransValueUncheckedUpdateManyWithoutKeyInput>
  }

  export type TransValueScalarWhereInput = {
    AND?: TransValueScalarWhereInput | TransValueScalarWhereInput[]
    OR?: TransValueScalarWhereInput[]
    NOT?: TransValueScalarWhereInput | TransValueScalarWhereInput[]
    id?: StringFilter<"TransValue"> | string
    keyId?: StringFilter<"TransValue"> | string
    langCode?: StringFilter<"TransValue"> | string
    content?: StringFilter<"TransValue"> | string
    isAiTranslated?: BoolFilter<"TransValue"> | boolean
  }

  export type TransKeyCreateWithoutValuesInput = {
    id?: string
    name: string
    comment?: string | null
    version: VersionCreateNestedOneWithoutKeysInput
  }

  export type TransKeyUncheckedCreateWithoutValuesInput = {
    id?: string
    name: string
    comment?: string | null
    versionId: string
  }

  export type TransKeyCreateOrConnectWithoutValuesInput = {
    where: TransKeyWhereUniqueInput
    create: XOR<TransKeyCreateWithoutValuesInput, TransKeyUncheckedCreateWithoutValuesInput>
  }

  export type TransKeyUpsertWithoutValuesInput = {
    update: XOR<TransKeyUpdateWithoutValuesInput, TransKeyUncheckedUpdateWithoutValuesInput>
    create: XOR<TransKeyCreateWithoutValuesInput, TransKeyUncheckedCreateWithoutValuesInput>
    where?: TransKeyWhereInput
  }

  export type TransKeyUpdateToOneWithWhereWithoutValuesInput = {
    where?: TransKeyWhereInput
    data: XOR<TransKeyUpdateWithoutValuesInput, TransKeyUncheckedUpdateWithoutValuesInput>
  }

  export type TransKeyUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    version?: VersionUpdateOneRequiredWithoutKeysNestedInput
  }

  export type TransKeyUncheckedUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    versionId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMemberCreateManyUserInput = {
    id?: string
    projectId: string
    role: string
  }

  export type ProjectMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectLanguageCreateManyProjectInput = {
    id?: string
    code: string
    isSource?: boolean
  }

  export type VersionCreateManyProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type ProjectMemberCreateManyProjectInput = {
    id?: string
    userId: string
    role: string
  }

  export type ProjectLanguageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isSource?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectLanguageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isSource?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectLanguageUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isSource?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VersionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keys?: TransKeyUpdateManyWithoutVersionNestedInput
  }

  export type VersionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keys?: TransKeyUncheckedUpdateManyWithoutVersionNestedInput
  }

  export type VersionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type TransKeyCreateManyVersionInput = {
    id?: string
    name: string
    comment?: string | null
  }

  export type TransKeyUpdateWithoutVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    values?: TransValueUpdateManyWithoutKeyNestedInput
  }

  export type TransKeyUncheckedUpdateWithoutVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    values?: TransValueUncheckedUpdateManyWithoutKeyNestedInput
  }

  export type TransKeyUncheckedUpdateManyWithoutVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransValueCreateManyKeyInput = {
    id?: string
    langCode: string
    content: string
    isAiTranslated?: boolean
  }

  export type TransValueUpdateWithoutKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    langCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAiTranslated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransValueUncheckedUpdateWithoutKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    langCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAiTranslated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransValueUncheckedUpdateManyWithoutKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    langCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAiTranslated?: BoolFieldUpdateOperationsInput | boolean
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