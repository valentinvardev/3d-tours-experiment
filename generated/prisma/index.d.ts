
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
 * Model Floor
 * 
 */
export type Floor = $Result.DefaultSelection<Prisma.$FloorPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Hotspot
 * 
 */
export type Hotspot = $Result.DefaultSelection<Prisma.$HotspotPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Floors
 * const floors = await prisma.floor.findMany()
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
   * // Fetch zero or more Floors
   * const floors = await prisma.floor.findMany()
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
   * `prisma.floor`: Exposes CRUD operations for the **Floor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Floors
    * const floors = await prisma.floor.findMany()
    * ```
    */
  get floor(): Prisma.FloorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotspot`: Exposes CRUD operations for the **Hotspot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotspots
    * const hotspots = await prisma.hotspot.findMany()
    * ```
    */
  get hotspot(): Prisma.HotspotDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
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
    Floor: 'Floor',
    Room: 'Room',
    Hotspot: 'Hotspot'
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
      modelProps: "floor" | "room" | "hotspot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Floor: {
        payload: Prisma.$FloorPayload<ExtArgs>
        fields: Prisma.FloorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FloorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FloorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findFirst: {
            args: Prisma.FloorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FloorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findMany: {
            args: Prisma.FloorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          create: {
            args: Prisma.FloorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          createMany: {
            args: Prisma.FloorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FloorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          delete: {
            args: Prisma.FloorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          update: {
            args: Prisma.FloorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          deleteMany: {
            args: Prisma.FloorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FloorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FloorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          upsert: {
            args: Prisma.FloorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          aggregate: {
            args: Prisma.FloorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFloor>
          }
          groupBy: {
            args: Prisma.FloorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FloorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FloorCountArgs<ExtArgs>
            result: $Utils.Optional<FloorCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Hotspot: {
        payload: Prisma.$HotspotPayload<ExtArgs>
        fields: Prisma.HotspotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotspotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotspotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>
          }
          findFirst: {
            args: Prisma.HotspotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotspotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>
          }
          findMany: {
            args: Prisma.HotspotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>[]
          }
          create: {
            args: Prisma.HotspotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>
          }
          createMany: {
            args: Prisma.HotspotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotspotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>[]
          }
          delete: {
            args: Prisma.HotspotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>
          }
          update: {
            args: Prisma.HotspotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>
          }
          deleteMany: {
            args: Prisma.HotspotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotspotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotspotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>[]
          }
          upsert: {
            args: Prisma.HotspotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>
          }
          aggregate: {
            args: Prisma.HotspotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotspot>
          }
          groupBy: {
            args: Prisma.HotspotGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotspotGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotspotCountArgs<ExtArgs>
            result: $Utils.Optional<HotspotCountAggregateOutputType> | number
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
    floor?: FloorOmit
    room?: RoomOmit
    hotspot?: HotspotOmit
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
   * Count Type FloorCountOutputType
   */

  export type FloorCountOutputType = {
    rooms: number
  }

  export type FloorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | FloorCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorCountOutputType
     */
    select?: FloorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    hotspotsFrom: number
    hotspotsTo: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotspotsFrom?: boolean | RoomCountOutputTypeCountHotspotsFromArgs
    hotspotsTo?: boolean | RoomCountOutputTypeCountHotspotsToArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountHotspotsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotspotWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountHotspotsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotspotWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Floor
   */

  export type AggregateFloor = {
    _count: FloorCountAggregateOutputType | null
    _avg: FloorAvgAggregateOutputType | null
    _sum: FloorSumAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  export type FloorAvgAggregateOutputType = {
    order: number | null
    mapWidth: number | null
    mapHeight: number | null
  }

  export type FloorSumAggregateOutputType = {
    order: number | null
    mapWidth: number | null
    mapHeight: number | null
  }

  export type FloorMinAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    mapImagePath: string | null
    mapWidth: number | null
    mapHeight: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FloorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    mapImagePath: string | null
    mapWidth: number | null
    mapHeight: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FloorCountAggregateOutputType = {
    id: number
    name: number
    order: number
    mapImagePath: number
    mapWidth: number
    mapHeight: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FloorAvgAggregateInputType = {
    order?: true
    mapWidth?: true
    mapHeight?: true
  }

  export type FloorSumAggregateInputType = {
    order?: true
    mapWidth?: true
    mapHeight?: true
  }

  export type FloorMinAggregateInputType = {
    id?: true
    name?: true
    order?: true
    mapImagePath?: true
    mapWidth?: true
    mapHeight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FloorMaxAggregateInputType = {
    id?: true
    name?: true
    order?: true
    mapImagePath?: true
    mapWidth?: true
    mapHeight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FloorCountAggregateInputType = {
    id?: true
    name?: true
    order?: true
    mapImagePath?: true
    mapWidth?: true
    mapHeight?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FloorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floor to aggregate.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Floors
    **/
    _count?: true | FloorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FloorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FloorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FloorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FloorMaxAggregateInputType
  }

  export type GetFloorAggregateType<T extends FloorAggregateArgs> = {
        [P in keyof T & keyof AggregateFloor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFloor[P]>
      : GetScalarType<T[P], AggregateFloor[P]>
  }




  export type FloorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloorWhereInput
    orderBy?: FloorOrderByWithAggregationInput | FloorOrderByWithAggregationInput[]
    by: FloorScalarFieldEnum[] | FloorScalarFieldEnum
    having?: FloorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FloorCountAggregateInputType | true
    _avg?: FloorAvgAggregateInputType
    _sum?: FloorSumAggregateInputType
    _min?: FloorMinAggregateInputType
    _max?: FloorMaxAggregateInputType
  }

  export type FloorGroupByOutputType = {
    id: string
    name: string
    order: number
    mapImagePath: string | null
    mapWidth: number | null
    mapHeight: number | null
    createdAt: Date
    updatedAt: Date
    _count: FloorCountAggregateOutputType | null
    _avg: FloorAvgAggregateOutputType | null
    _sum: FloorSumAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  type GetFloorGroupByPayload<T extends FloorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FloorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FloorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FloorGroupByOutputType[P]>
            : GetScalarType<T[P], FloorGroupByOutputType[P]>
        }
      >
    >


  export type FloorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    mapImagePath?: boolean
    mapWidth?: boolean
    mapHeight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rooms?: boolean | Floor$roomsArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    mapImagePath?: boolean
    mapWidth?: boolean
    mapHeight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    mapImagePath?: boolean
    mapWidth?: boolean
    mapHeight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectScalar = {
    id?: boolean
    name?: boolean
    order?: boolean
    mapImagePath?: boolean
    mapWidth?: boolean
    mapHeight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FloorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "order" | "mapImagePath" | "mapWidth" | "mapHeight" | "createdAt" | "updatedAt", ExtArgs["result"]["floor"]>
  export type FloorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Floor$roomsArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FloorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FloorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FloorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Floor"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      order: number
      mapImagePath: string | null
      mapWidth: number | null
      mapHeight: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["floor"]>
    composites: {}
  }

  type FloorGetPayload<S extends boolean | null | undefined | FloorDefaultArgs> = $Result.GetResult<Prisma.$FloorPayload, S>

  type FloorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FloorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FloorCountAggregateInputType | true
    }

  export interface FloorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Floor'], meta: { name: 'Floor' } }
    /**
     * Find zero or one Floor that matches the filter.
     * @param {FloorFindUniqueArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FloorFindUniqueArgs>(args: SelectSubset<T, FloorFindUniqueArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Floor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FloorFindUniqueOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FloorFindUniqueOrThrowArgs>(args: SelectSubset<T, FloorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FloorFindFirstArgs>(args?: SelectSubset<T, FloorFindFirstArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FloorFindFirstOrThrowArgs>(args?: SelectSubset<T, FloorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Floors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Floors
     * const floors = await prisma.floor.findMany()
     * 
     * // Get first 10 Floors
     * const floors = await prisma.floor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const floorWithIdOnly = await prisma.floor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FloorFindManyArgs>(args?: SelectSubset<T, FloorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Floor.
     * @param {FloorCreateArgs} args - Arguments to create a Floor.
     * @example
     * // Create one Floor
     * const Floor = await prisma.floor.create({
     *   data: {
     *     // ... data to create a Floor
     *   }
     * })
     * 
     */
    create<T extends FloorCreateArgs>(args: SelectSubset<T, FloorCreateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Floors.
     * @param {FloorCreateManyArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FloorCreateManyArgs>(args?: SelectSubset<T, FloorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Floors and returns the data saved in the database.
     * @param {FloorCreateManyAndReturnArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Floors and only return the `id`
     * const floorWithIdOnly = await prisma.floor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FloorCreateManyAndReturnArgs>(args?: SelectSubset<T, FloorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Floor.
     * @param {FloorDeleteArgs} args - Arguments to delete one Floor.
     * @example
     * // Delete one Floor
     * const Floor = await prisma.floor.delete({
     *   where: {
     *     // ... filter to delete one Floor
     *   }
     * })
     * 
     */
    delete<T extends FloorDeleteArgs>(args: SelectSubset<T, FloorDeleteArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Floor.
     * @param {FloorUpdateArgs} args - Arguments to update one Floor.
     * @example
     * // Update one Floor
     * const floor = await prisma.floor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FloorUpdateArgs>(args: SelectSubset<T, FloorUpdateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Floors.
     * @param {FloorDeleteManyArgs} args - Arguments to filter Floors to delete.
     * @example
     * // Delete a few Floors
     * const { count } = await prisma.floor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FloorDeleteManyArgs>(args?: SelectSubset<T, FloorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FloorUpdateManyArgs>(args: SelectSubset<T, FloorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors and returns the data updated in the database.
     * @param {FloorUpdateManyAndReturnArgs} args - Arguments to update many Floors.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Floors and only return the `id`
     * const floorWithIdOnly = await prisma.floor.updateManyAndReturn({
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
    updateManyAndReturn<T extends FloorUpdateManyAndReturnArgs>(args: SelectSubset<T, FloorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Floor.
     * @param {FloorUpsertArgs} args - Arguments to update or create a Floor.
     * @example
     * // Update or create a Floor
     * const floor = await prisma.floor.upsert({
     *   create: {
     *     // ... data to create a Floor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Floor we want to update
     *   }
     * })
     */
    upsert<T extends FloorUpsertArgs>(args: SelectSubset<T, FloorUpsertArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorCountArgs} args - Arguments to filter Floors to count.
     * @example
     * // Count the number of Floors
     * const count = await prisma.floor.count({
     *   where: {
     *     // ... the filter for the Floors we want to count
     *   }
     * })
    **/
    count<T extends FloorCountArgs>(
      args?: Subset<T, FloorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FloorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FloorAggregateArgs>(args: Subset<T, FloorAggregateArgs>): Prisma.PrismaPromise<GetFloorAggregateType<T>>

    /**
     * Group by Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorGroupByArgs} args - Group by arguments.
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
      T extends FloorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FloorGroupByArgs['orderBy'] }
        : { orderBy?: FloorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FloorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFloorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Floor model
   */
  readonly fields: FloorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Floor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FloorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Floor$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Floor$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Floor model
   */
  interface FloorFieldRefs {
    readonly id: FieldRef<"Floor", 'String'>
    readonly name: FieldRef<"Floor", 'String'>
    readonly order: FieldRef<"Floor", 'Int'>
    readonly mapImagePath: FieldRef<"Floor", 'String'>
    readonly mapWidth: FieldRef<"Floor", 'Int'>
    readonly mapHeight: FieldRef<"Floor", 'Int'>
    readonly createdAt: FieldRef<"Floor", 'DateTime'>
    readonly updatedAt: FieldRef<"Floor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Floor findUnique
   */
  export type FloorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findUniqueOrThrow
   */
  export type FloorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findFirst
   */
  export type FloorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findFirstOrThrow
   */
  export type FloorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findMany
   */
  export type FloorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floors to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor create
   */
  export type FloorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to create a Floor.
     */
    data: XOR<FloorCreateInput, FloorUncheckedCreateInput>
  }

  /**
   * Floor createMany
   */
  export type FloorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
  }

  /**
   * Floor createManyAndReturn
   */
  export type FloorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
  }

  /**
   * Floor update
   */
  export type FloorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to update a Floor.
     */
    data: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
    /**
     * Choose, which Floor to update.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor updateMany
   */
  export type FloorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
  }

  /**
   * Floor updateManyAndReturn
   */
  export type FloorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
  }

  /**
   * Floor upsert
   */
  export type FloorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The filter to search for the Floor to update in case it exists.
     */
    where: FloorWhereUniqueInput
    /**
     * In case the Floor found by the `where` argument doesn't exist, create a new Floor with this data.
     */
    create: XOR<FloorCreateInput, FloorUncheckedCreateInput>
    /**
     * In case the Floor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
  }

  /**
   * Floor delete
   */
  export type FloorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter which Floor to delete.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor deleteMany
   */
  export type FloorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floors to delete
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to delete.
     */
    limit?: number
  }

  /**
   * Floor.rooms
   */
  export type Floor$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Floor without action
   */
  export type FloorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    boxX: number | null
    boxY: number | null
    boxWidth: number | null
    boxHeight: number | null
    defaultYaw: number | null
    defaultPitch: number | null
  }

  export type RoomSumAggregateOutputType = {
    boxX: number | null
    boxY: number | null
    boxWidth: number | null
    boxHeight: number | null
    defaultYaw: number | null
    defaultPitch: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    floorId: string | null
    panoramaPath: string | null
    cubemapPaths: string | null
    boxX: number | null
    boxY: number | null
    boxWidth: number | null
    boxHeight: number | null
    defaultYaw: number | null
    defaultPitch: number | null
    isStart: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    floorId: string | null
    panoramaPath: string | null
    cubemapPaths: string | null
    boxX: number | null
    boxY: number | null
    boxWidth: number | null
    boxHeight: number | null
    defaultYaw: number | null
    defaultPitch: number | null
    isStart: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    floorId: number
    panoramaPath: number
    cubemapPaths: number
    boxX: number
    boxY: number
    boxWidth: number
    boxHeight: number
    defaultYaw: number
    defaultPitch: number
    isStart: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    boxX?: true
    boxY?: true
    boxWidth?: true
    boxHeight?: true
    defaultYaw?: true
    defaultPitch?: true
  }

  export type RoomSumAggregateInputType = {
    boxX?: true
    boxY?: true
    boxWidth?: true
    boxHeight?: true
    defaultYaw?: true
    defaultPitch?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    floorId?: true
    panoramaPath?: true
    cubemapPaths?: true
    boxX?: true
    boxY?: true
    boxWidth?: true
    boxHeight?: true
    defaultYaw?: true
    defaultPitch?: true
    isStart?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    floorId?: true
    panoramaPath?: true
    cubemapPaths?: true
    boxX?: true
    boxY?: true
    boxWidth?: true
    boxHeight?: true
    defaultYaw?: true
    defaultPitch?: true
    isStart?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    floorId?: true
    panoramaPath?: true
    cubemapPaths?: true
    boxX?: true
    boxY?: true
    boxWidth?: true
    boxHeight?: true
    defaultYaw?: true
    defaultPitch?: true
    isStart?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    floorId: string
    panoramaPath: string | null
    cubemapPaths: string | null
    boxX: number | null
    boxY: number | null
    boxWidth: number | null
    boxHeight: number | null
    defaultYaw: number | null
    defaultPitch: number | null
    isStart: boolean
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    floorId?: boolean
    panoramaPath?: boolean
    cubemapPaths?: boolean
    boxX?: boolean
    boxY?: boolean
    boxWidth?: boolean
    boxHeight?: boolean
    defaultYaw?: boolean
    defaultPitch?: boolean
    isStart?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    hotspotsFrom?: boolean | Room$hotspotsFromArgs<ExtArgs>
    hotspotsTo?: boolean | Room$hotspotsToArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    floorId?: boolean
    panoramaPath?: boolean
    cubemapPaths?: boolean
    boxX?: boolean
    boxY?: boolean
    boxWidth?: boolean
    boxHeight?: boolean
    defaultYaw?: boolean
    defaultPitch?: boolean
    isStart?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    floorId?: boolean
    panoramaPath?: boolean
    cubemapPaths?: boolean
    boxX?: boolean
    boxY?: boolean
    boxWidth?: boolean
    boxHeight?: boolean
    defaultYaw?: boolean
    defaultPitch?: boolean
    isStart?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    floorId?: boolean
    panoramaPath?: boolean
    cubemapPaths?: boolean
    boxX?: boolean
    boxY?: boolean
    boxWidth?: boolean
    boxHeight?: boolean
    defaultYaw?: boolean
    defaultPitch?: boolean
    isStart?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "floorId" | "panoramaPath" | "cubemapPaths" | "boxX" | "boxY" | "boxWidth" | "boxHeight" | "defaultYaw" | "defaultPitch" | "isStart" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    hotspotsFrom?: boolean | Room$hotspotsFromArgs<ExtArgs>
    hotspotsTo?: boolean | Room$hotspotsToArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      floor: Prisma.$FloorPayload<ExtArgs>
      hotspotsFrom: Prisma.$HotspotPayload<ExtArgs>[]
      hotspotsTo: Prisma.$HotspotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      floorId: string
      panoramaPath: string | null
      cubemapPaths: string | null
      boxX: number | null
      boxY: number | null
      boxWidth: number | null
      boxHeight: number | null
      defaultYaw: number | null
      defaultPitch: number | null
      isStart: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    floor<T extends FloorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FloorDefaultArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotspotsFrom<T extends Room$hotspotsFromArgs<ExtArgs> = {}>(args?: Subset<T, Room$hotspotsFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hotspotsTo<T extends Room$hotspotsToArgs<ExtArgs> = {}>(args?: Subset<T, Room$hotspotsToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly floorId: FieldRef<"Room", 'String'>
    readonly panoramaPath: FieldRef<"Room", 'String'>
    readonly cubemapPaths: FieldRef<"Room", 'String'>
    readonly boxX: FieldRef<"Room", 'Float'>
    readonly boxY: FieldRef<"Room", 'Float'>
    readonly boxWidth: FieldRef<"Room", 'Float'>
    readonly boxHeight: FieldRef<"Room", 'Float'>
    readonly defaultYaw: FieldRef<"Room", 'Float'>
    readonly defaultPitch: FieldRef<"Room", 'Float'>
    readonly isStart: FieldRef<"Room", 'Boolean'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.hotspotsFrom
   */
  export type Room$hotspotsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    where?: HotspotWhereInput
    orderBy?: HotspotOrderByWithRelationInput | HotspotOrderByWithRelationInput[]
    cursor?: HotspotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotspotScalarFieldEnum | HotspotScalarFieldEnum[]
  }

  /**
   * Room.hotspotsTo
   */
  export type Room$hotspotsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    where?: HotspotWhereInput
    orderBy?: HotspotOrderByWithRelationInput | HotspotOrderByWithRelationInput[]
    cursor?: HotspotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotspotScalarFieldEnum | HotspotScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Hotspot
   */

  export type AggregateHotspot = {
    _count: HotspotCountAggregateOutputType | null
    _avg: HotspotAvgAggregateOutputType | null
    _sum: HotspotSumAggregateOutputType | null
    _min: HotspotMinAggregateOutputType | null
    _max: HotspotMaxAggregateOutputType | null
  }

  export type HotspotAvgAggregateOutputType = {
    yaw: number | null
    pitch: number | null
  }

  export type HotspotSumAggregateOutputType = {
    yaw: number | null
    pitch: number | null
  }

  export type HotspotMinAggregateOutputType = {
    id: string | null
    fromRoomId: string | null
    toRoomId: string | null
    yaw: number | null
    pitch: number | null
    label: string | null
    createdAt: Date | null
  }

  export type HotspotMaxAggregateOutputType = {
    id: string | null
    fromRoomId: string | null
    toRoomId: string | null
    yaw: number | null
    pitch: number | null
    label: string | null
    createdAt: Date | null
  }

  export type HotspotCountAggregateOutputType = {
    id: number
    fromRoomId: number
    toRoomId: number
    yaw: number
    pitch: number
    label: number
    createdAt: number
    _all: number
  }


  export type HotspotAvgAggregateInputType = {
    yaw?: true
    pitch?: true
  }

  export type HotspotSumAggregateInputType = {
    yaw?: true
    pitch?: true
  }

  export type HotspotMinAggregateInputType = {
    id?: true
    fromRoomId?: true
    toRoomId?: true
    yaw?: true
    pitch?: true
    label?: true
    createdAt?: true
  }

  export type HotspotMaxAggregateInputType = {
    id?: true
    fromRoomId?: true
    toRoomId?: true
    yaw?: true
    pitch?: true
    label?: true
    createdAt?: true
  }

  export type HotspotCountAggregateInputType = {
    id?: true
    fromRoomId?: true
    toRoomId?: true
    yaw?: true
    pitch?: true
    label?: true
    createdAt?: true
    _all?: true
  }

  export type HotspotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotspot to aggregate.
     */
    where?: HotspotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotspots to fetch.
     */
    orderBy?: HotspotOrderByWithRelationInput | HotspotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotspotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotspots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotspots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotspots
    **/
    _count?: true | HotspotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotspotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotspotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotspotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotspotMaxAggregateInputType
  }

  export type GetHotspotAggregateType<T extends HotspotAggregateArgs> = {
        [P in keyof T & keyof AggregateHotspot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotspot[P]>
      : GetScalarType<T[P], AggregateHotspot[P]>
  }




  export type HotspotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotspotWhereInput
    orderBy?: HotspotOrderByWithAggregationInput | HotspotOrderByWithAggregationInput[]
    by: HotspotScalarFieldEnum[] | HotspotScalarFieldEnum
    having?: HotspotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotspotCountAggregateInputType | true
    _avg?: HotspotAvgAggregateInputType
    _sum?: HotspotSumAggregateInputType
    _min?: HotspotMinAggregateInputType
    _max?: HotspotMaxAggregateInputType
  }

  export type HotspotGroupByOutputType = {
    id: string
    fromRoomId: string
    toRoomId: string
    yaw: number
    pitch: number
    label: string | null
    createdAt: Date
    _count: HotspotCountAggregateOutputType | null
    _avg: HotspotAvgAggregateOutputType | null
    _sum: HotspotSumAggregateOutputType | null
    _min: HotspotMinAggregateOutputType | null
    _max: HotspotMaxAggregateOutputType | null
  }

  type GetHotspotGroupByPayload<T extends HotspotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotspotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotspotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotspotGroupByOutputType[P]>
            : GetScalarType<T[P], HotspotGroupByOutputType[P]>
        }
      >
    >


  export type HotspotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromRoomId?: boolean
    toRoomId?: boolean
    yaw?: boolean
    pitch?: boolean
    label?: boolean
    createdAt?: boolean
    fromRoom?: boolean | RoomDefaultArgs<ExtArgs>
    toRoom?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotspot"]>

  export type HotspotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromRoomId?: boolean
    toRoomId?: boolean
    yaw?: boolean
    pitch?: boolean
    label?: boolean
    createdAt?: boolean
    fromRoom?: boolean | RoomDefaultArgs<ExtArgs>
    toRoom?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotspot"]>

  export type HotspotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromRoomId?: boolean
    toRoomId?: boolean
    yaw?: boolean
    pitch?: boolean
    label?: boolean
    createdAt?: boolean
    fromRoom?: boolean | RoomDefaultArgs<ExtArgs>
    toRoom?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotspot"]>

  export type HotspotSelectScalar = {
    id?: boolean
    fromRoomId?: boolean
    toRoomId?: boolean
    yaw?: boolean
    pitch?: boolean
    label?: boolean
    createdAt?: boolean
  }

  export type HotspotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromRoomId" | "toRoomId" | "yaw" | "pitch" | "label" | "createdAt", ExtArgs["result"]["hotspot"]>
  export type HotspotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromRoom?: boolean | RoomDefaultArgs<ExtArgs>
    toRoom?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type HotspotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromRoom?: boolean | RoomDefaultArgs<ExtArgs>
    toRoom?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type HotspotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromRoom?: boolean | RoomDefaultArgs<ExtArgs>
    toRoom?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $HotspotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotspot"
    objects: {
      fromRoom: Prisma.$RoomPayload<ExtArgs>
      toRoom: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromRoomId: string
      toRoomId: string
      yaw: number
      pitch: number
      label: string | null
      createdAt: Date
    }, ExtArgs["result"]["hotspot"]>
    composites: {}
  }

  type HotspotGetPayload<S extends boolean | null | undefined | HotspotDefaultArgs> = $Result.GetResult<Prisma.$HotspotPayload, S>

  type HotspotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotspotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotspotCountAggregateInputType | true
    }

  export interface HotspotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotspot'], meta: { name: 'Hotspot' } }
    /**
     * Find zero or one Hotspot that matches the filter.
     * @param {HotspotFindUniqueArgs} args - Arguments to find a Hotspot
     * @example
     * // Get one Hotspot
     * const hotspot = await prisma.hotspot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotspotFindUniqueArgs>(args: SelectSubset<T, HotspotFindUniqueArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotspot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotspotFindUniqueOrThrowArgs} args - Arguments to find a Hotspot
     * @example
     * // Get one Hotspot
     * const hotspot = await prisma.hotspot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotspotFindUniqueOrThrowArgs>(args: SelectSubset<T, HotspotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotspot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotFindFirstArgs} args - Arguments to find a Hotspot
     * @example
     * // Get one Hotspot
     * const hotspot = await prisma.hotspot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotspotFindFirstArgs>(args?: SelectSubset<T, HotspotFindFirstArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotspot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotFindFirstOrThrowArgs} args - Arguments to find a Hotspot
     * @example
     * // Get one Hotspot
     * const hotspot = await prisma.hotspot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotspotFindFirstOrThrowArgs>(args?: SelectSubset<T, HotspotFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotspots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotspots
     * const hotspots = await prisma.hotspot.findMany()
     * 
     * // Get first 10 Hotspots
     * const hotspots = await prisma.hotspot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotspotWithIdOnly = await prisma.hotspot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotspotFindManyArgs>(args?: SelectSubset<T, HotspotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotspot.
     * @param {HotspotCreateArgs} args - Arguments to create a Hotspot.
     * @example
     * // Create one Hotspot
     * const Hotspot = await prisma.hotspot.create({
     *   data: {
     *     // ... data to create a Hotspot
     *   }
     * })
     * 
     */
    create<T extends HotspotCreateArgs>(args: SelectSubset<T, HotspotCreateArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotspots.
     * @param {HotspotCreateManyArgs} args - Arguments to create many Hotspots.
     * @example
     * // Create many Hotspots
     * const hotspot = await prisma.hotspot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotspotCreateManyArgs>(args?: SelectSubset<T, HotspotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hotspots and returns the data saved in the database.
     * @param {HotspotCreateManyAndReturnArgs} args - Arguments to create many Hotspots.
     * @example
     * // Create many Hotspots
     * const hotspot = await prisma.hotspot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hotspots and only return the `id`
     * const hotspotWithIdOnly = await prisma.hotspot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotspotCreateManyAndReturnArgs>(args?: SelectSubset<T, HotspotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hotspot.
     * @param {HotspotDeleteArgs} args - Arguments to delete one Hotspot.
     * @example
     * // Delete one Hotspot
     * const Hotspot = await prisma.hotspot.delete({
     *   where: {
     *     // ... filter to delete one Hotspot
     *   }
     * })
     * 
     */
    delete<T extends HotspotDeleteArgs>(args: SelectSubset<T, HotspotDeleteArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotspot.
     * @param {HotspotUpdateArgs} args - Arguments to update one Hotspot.
     * @example
     * // Update one Hotspot
     * const hotspot = await prisma.hotspot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotspotUpdateArgs>(args: SelectSubset<T, HotspotUpdateArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotspots.
     * @param {HotspotDeleteManyArgs} args - Arguments to filter Hotspots to delete.
     * @example
     * // Delete a few Hotspots
     * const { count } = await prisma.hotspot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotspotDeleteManyArgs>(args?: SelectSubset<T, HotspotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotspots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotspots
     * const hotspot = await prisma.hotspot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotspotUpdateManyArgs>(args: SelectSubset<T, HotspotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotspots and returns the data updated in the database.
     * @param {HotspotUpdateManyAndReturnArgs} args - Arguments to update many Hotspots.
     * @example
     * // Update many Hotspots
     * const hotspot = await prisma.hotspot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hotspots and only return the `id`
     * const hotspotWithIdOnly = await prisma.hotspot.updateManyAndReturn({
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
    updateManyAndReturn<T extends HotspotUpdateManyAndReturnArgs>(args: SelectSubset<T, HotspotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hotspot.
     * @param {HotspotUpsertArgs} args - Arguments to update or create a Hotspot.
     * @example
     * // Update or create a Hotspot
     * const hotspot = await prisma.hotspot.upsert({
     *   create: {
     *     // ... data to create a Hotspot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotspot we want to update
     *   }
     * })
     */
    upsert<T extends HotspotUpsertArgs>(args: SelectSubset<T, HotspotUpsertArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotspots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotCountArgs} args - Arguments to filter Hotspots to count.
     * @example
     * // Count the number of Hotspots
     * const count = await prisma.hotspot.count({
     *   where: {
     *     // ... the filter for the Hotspots we want to count
     *   }
     * })
    **/
    count<T extends HotspotCountArgs>(
      args?: Subset<T, HotspotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotspotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotspot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotspotAggregateArgs>(args: Subset<T, HotspotAggregateArgs>): Prisma.PrismaPromise<GetHotspotAggregateType<T>>

    /**
     * Group by Hotspot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotGroupByArgs} args - Group by arguments.
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
      T extends HotspotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotspotGroupByArgs['orderBy'] }
        : { orderBy?: HotspotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotspotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotspotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotspot model
   */
  readonly fields: HotspotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotspot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotspotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromRoom<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toRoom<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Hotspot model
   */
  interface HotspotFieldRefs {
    readonly id: FieldRef<"Hotspot", 'String'>
    readonly fromRoomId: FieldRef<"Hotspot", 'String'>
    readonly toRoomId: FieldRef<"Hotspot", 'String'>
    readonly yaw: FieldRef<"Hotspot", 'Float'>
    readonly pitch: FieldRef<"Hotspot", 'Float'>
    readonly label: FieldRef<"Hotspot", 'String'>
    readonly createdAt: FieldRef<"Hotspot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hotspot findUnique
   */
  export type HotspotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * Filter, which Hotspot to fetch.
     */
    where: HotspotWhereUniqueInput
  }

  /**
   * Hotspot findUniqueOrThrow
   */
  export type HotspotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * Filter, which Hotspot to fetch.
     */
    where: HotspotWhereUniqueInput
  }

  /**
   * Hotspot findFirst
   */
  export type HotspotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * Filter, which Hotspot to fetch.
     */
    where?: HotspotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotspots to fetch.
     */
    orderBy?: HotspotOrderByWithRelationInput | HotspotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotspots.
     */
    cursor?: HotspotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotspots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotspots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotspots.
     */
    distinct?: HotspotScalarFieldEnum | HotspotScalarFieldEnum[]
  }

  /**
   * Hotspot findFirstOrThrow
   */
  export type HotspotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * Filter, which Hotspot to fetch.
     */
    where?: HotspotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotspots to fetch.
     */
    orderBy?: HotspotOrderByWithRelationInput | HotspotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotspots.
     */
    cursor?: HotspotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotspots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotspots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotspots.
     */
    distinct?: HotspotScalarFieldEnum | HotspotScalarFieldEnum[]
  }

  /**
   * Hotspot findMany
   */
  export type HotspotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * Filter, which Hotspots to fetch.
     */
    where?: HotspotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotspots to fetch.
     */
    orderBy?: HotspotOrderByWithRelationInput | HotspotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotspots.
     */
    cursor?: HotspotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotspots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotspots.
     */
    skip?: number
    distinct?: HotspotScalarFieldEnum | HotspotScalarFieldEnum[]
  }

  /**
   * Hotspot create
   */
  export type HotspotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotspot.
     */
    data: XOR<HotspotCreateInput, HotspotUncheckedCreateInput>
  }

  /**
   * Hotspot createMany
   */
  export type HotspotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotspots.
     */
    data: HotspotCreateManyInput | HotspotCreateManyInput[]
  }

  /**
   * Hotspot createManyAndReturn
   */
  export type HotspotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * The data used to create many Hotspots.
     */
    data: HotspotCreateManyInput | HotspotCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hotspot update
   */
  export type HotspotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotspot.
     */
    data: XOR<HotspotUpdateInput, HotspotUncheckedUpdateInput>
    /**
     * Choose, which Hotspot to update.
     */
    where: HotspotWhereUniqueInput
  }

  /**
   * Hotspot updateMany
   */
  export type HotspotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotspots.
     */
    data: XOR<HotspotUpdateManyMutationInput, HotspotUncheckedUpdateManyInput>
    /**
     * Filter which Hotspots to update
     */
    where?: HotspotWhereInput
    /**
     * Limit how many Hotspots to update.
     */
    limit?: number
  }

  /**
   * Hotspot updateManyAndReturn
   */
  export type HotspotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * The data used to update Hotspots.
     */
    data: XOR<HotspotUpdateManyMutationInput, HotspotUncheckedUpdateManyInput>
    /**
     * Filter which Hotspots to update
     */
    where?: HotspotWhereInput
    /**
     * Limit how many Hotspots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hotspot upsert
   */
  export type HotspotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotspot to update in case it exists.
     */
    where: HotspotWhereUniqueInput
    /**
     * In case the Hotspot found by the `where` argument doesn't exist, create a new Hotspot with this data.
     */
    create: XOR<HotspotCreateInput, HotspotUncheckedCreateInput>
    /**
     * In case the Hotspot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotspotUpdateInput, HotspotUncheckedUpdateInput>
  }

  /**
   * Hotspot delete
   */
  export type HotspotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * Filter which Hotspot to delete.
     */
    where: HotspotWhereUniqueInput
  }

  /**
   * Hotspot deleteMany
   */
  export type HotspotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotspots to delete
     */
    where?: HotspotWhereInput
    /**
     * Limit how many Hotspots to delete.
     */
    limit?: number
  }

  /**
   * Hotspot without action
   */
  export type HotspotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FloorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    order: 'order',
    mapImagePath: 'mapImagePath',
    mapWidth: 'mapWidth',
    mapHeight: 'mapHeight',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FloorScalarFieldEnum = (typeof FloorScalarFieldEnum)[keyof typeof FloorScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    floorId: 'floorId',
    panoramaPath: 'panoramaPath',
    cubemapPaths: 'cubemapPaths',
    boxX: 'boxX',
    boxY: 'boxY',
    boxWidth: 'boxWidth',
    boxHeight: 'boxHeight',
    defaultYaw: 'defaultYaw',
    defaultPitch: 'defaultPitch',
    isStart: 'isStart',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const HotspotScalarFieldEnum: {
    id: 'id',
    fromRoomId: 'fromRoomId',
    toRoomId: 'toRoomId',
    yaw: 'yaw',
    pitch: 'pitch',
    label: 'label',
    createdAt: 'createdAt'
  };

  export type HotspotScalarFieldEnum = (typeof HotspotScalarFieldEnum)[keyof typeof HotspotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type FloorWhereInput = {
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    id?: StringFilter<"Floor"> | string
    name?: StringFilter<"Floor"> | string
    order?: IntFilter<"Floor"> | number
    mapImagePath?: StringNullableFilter<"Floor"> | string | null
    mapWidth?: IntNullableFilter<"Floor"> | number | null
    mapHeight?: IntNullableFilter<"Floor"> | number | null
    createdAt?: DateTimeFilter<"Floor"> | Date | string
    updatedAt?: DateTimeFilter<"Floor"> | Date | string
    rooms?: RoomListRelationFilter
  }

  export type FloorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    mapImagePath?: SortOrderInput | SortOrder
    mapWidth?: SortOrderInput | SortOrder
    mapHeight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
  }

  export type FloorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    name?: StringFilter<"Floor"> | string
    order?: IntFilter<"Floor"> | number
    mapImagePath?: StringNullableFilter<"Floor"> | string | null
    mapWidth?: IntNullableFilter<"Floor"> | number | null
    mapHeight?: IntNullableFilter<"Floor"> | number | null
    createdAt?: DateTimeFilter<"Floor"> | Date | string
    updatedAt?: DateTimeFilter<"Floor"> | Date | string
    rooms?: RoomListRelationFilter
  }, "id">

  export type FloorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    mapImagePath?: SortOrderInput | SortOrder
    mapWidth?: SortOrderInput | SortOrder
    mapHeight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FloorCountOrderByAggregateInput
    _avg?: FloorAvgOrderByAggregateInput
    _max?: FloorMaxOrderByAggregateInput
    _min?: FloorMinOrderByAggregateInput
    _sum?: FloorSumOrderByAggregateInput
  }

  export type FloorScalarWhereWithAggregatesInput = {
    AND?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    OR?: FloorScalarWhereWithAggregatesInput[]
    NOT?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Floor"> | string
    name?: StringWithAggregatesFilter<"Floor"> | string
    order?: IntWithAggregatesFilter<"Floor"> | number
    mapImagePath?: StringNullableWithAggregatesFilter<"Floor"> | string | null
    mapWidth?: IntNullableWithAggregatesFilter<"Floor"> | number | null
    mapHeight?: IntNullableWithAggregatesFilter<"Floor"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Floor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Floor"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    floorId?: StringFilter<"Room"> | string
    panoramaPath?: StringNullableFilter<"Room"> | string | null
    cubemapPaths?: StringNullableFilter<"Room"> | string | null
    boxX?: FloatNullableFilter<"Room"> | number | null
    boxY?: FloatNullableFilter<"Room"> | number | null
    boxWidth?: FloatNullableFilter<"Room"> | number | null
    boxHeight?: FloatNullableFilter<"Room"> | number | null
    defaultYaw?: FloatNullableFilter<"Room"> | number | null
    defaultPitch?: FloatNullableFilter<"Room"> | number | null
    isStart?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    hotspotsFrom?: HotspotListRelationFilter
    hotspotsTo?: HotspotListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
    panoramaPath?: SortOrderInput | SortOrder
    cubemapPaths?: SortOrderInput | SortOrder
    boxX?: SortOrderInput | SortOrder
    boxY?: SortOrderInput | SortOrder
    boxWidth?: SortOrderInput | SortOrder
    boxHeight?: SortOrderInput | SortOrder
    defaultYaw?: SortOrderInput | SortOrder
    defaultPitch?: SortOrderInput | SortOrder
    isStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    floor?: FloorOrderByWithRelationInput
    hotspotsFrom?: HotspotOrderByRelationAggregateInput
    hotspotsTo?: HotspotOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    floorId?: StringFilter<"Room"> | string
    panoramaPath?: StringNullableFilter<"Room"> | string | null
    cubemapPaths?: StringNullableFilter<"Room"> | string | null
    boxX?: FloatNullableFilter<"Room"> | number | null
    boxY?: FloatNullableFilter<"Room"> | number | null
    boxWidth?: FloatNullableFilter<"Room"> | number | null
    boxHeight?: FloatNullableFilter<"Room"> | number | null
    defaultYaw?: FloatNullableFilter<"Room"> | number | null
    defaultPitch?: FloatNullableFilter<"Room"> | number | null
    isStart?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    hotspotsFrom?: HotspotListRelationFilter
    hotspotsTo?: HotspotListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
    panoramaPath?: SortOrderInput | SortOrder
    cubemapPaths?: SortOrderInput | SortOrder
    boxX?: SortOrderInput | SortOrder
    boxY?: SortOrderInput | SortOrder
    boxWidth?: SortOrderInput | SortOrder
    boxHeight?: SortOrderInput | SortOrder
    defaultYaw?: SortOrderInput | SortOrder
    defaultPitch?: SortOrderInput | SortOrder
    isStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    floorId?: StringWithAggregatesFilter<"Room"> | string
    panoramaPath?: StringNullableWithAggregatesFilter<"Room"> | string | null
    cubemapPaths?: StringNullableWithAggregatesFilter<"Room"> | string | null
    boxX?: FloatNullableWithAggregatesFilter<"Room"> | number | null
    boxY?: FloatNullableWithAggregatesFilter<"Room"> | number | null
    boxWidth?: FloatNullableWithAggregatesFilter<"Room"> | number | null
    boxHeight?: FloatNullableWithAggregatesFilter<"Room"> | number | null
    defaultYaw?: FloatNullableWithAggregatesFilter<"Room"> | number | null
    defaultPitch?: FloatNullableWithAggregatesFilter<"Room"> | number | null
    isStart?: BoolWithAggregatesFilter<"Room"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type HotspotWhereInput = {
    AND?: HotspotWhereInput | HotspotWhereInput[]
    OR?: HotspotWhereInput[]
    NOT?: HotspotWhereInput | HotspotWhereInput[]
    id?: StringFilter<"Hotspot"> | string
    fromRoomId?: StringFilter<"Hotspot"> | string
    toRoomId?: StringFilter<"Hotspot"> | string
    yaw?: FloatFilter<"Hotspot"> | number
    pitch?: FloatFilter<"Hotspot"> | number
    label?: StringNullableFilter<"Hotspot"> | string | null
    createdAt?: DateTimeFilter<"Hotspot"> | Date | string
    fromRoom?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    toRoom?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type HotspotOrderByWithRelationInput = {
    id?: SortOrder
    fromRoomId?: SortOrder
    toRoomId?: SortOrder
    yaw?: SortOrder
    pitch?: SortOrder
    label?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    fromRoom?: RoomOrderByWithRelationInput
    toRoom?: RoomOrderByWithRelationInput
  }

  export type HotspotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotspotWhereInput | HotspotWhereInput[]
    OR?: HotspotWhereInput[]
    NOT?: HotspotWhereInput | HotspotWhereInput[]
    fromRoomId?: StringFilter<"Hotspot"> | string
    toRoomId?: StringFilter<"Hotspot"> | string
    yaw?: FloatFilter<"Hotspot"> | number
    pitch?: FloatFilter<"Hotspot"> | number
    label?: StringNullableFilter<"Hotspot"> | string | null
    createdAt?: DateTimeFilter<"Hotspot"> | Date | string
    fromRoom?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    toRoom?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type HotspotOrderByWithAggregationInput = {
    id?: SortOrder
    fromRoomId?: SortOrder
    toRoomId?: SortOrder
    yaw?: SortOrder
    pitch?: SortOrder
    label?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: HotspotCountOrderByAggregateInput
    _avg?: HotspotAvgOrderByAggregateInput
    _max?: HotspotMaxOrderByAggregateInput
    _min?: HotspotMinOrderByAggregateInput
    _sum?: HotspotSumOrderByAggregateInput
  }

  export type HotspotScalarWhereWithAggregatesInput = {
    AND?: HotspotScalarWhereWithAggregatesInput | HotspotScalarWhereWithAggregatesInput[]
    OR?: HotspotScalarWhereWithAggregatesInput[]
    NOT?: HotspotScalarWhereWithAggregatesInput | HotspotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hotspot"> | string
    fromRoomId?: StringWithAggregatesFilter<"Hotspot"> | string
    toRoomId?: StringWithAggregatesFilter<"Hotspot"> | string
    yaw?: FloatWithAggregatesFilter<"Hotspot"> | number
    pitch?: FloatWithAggregatesFilter<"Hotspot"> | number
    label?: StringNullableWithAggregatesFilter<"Hotspot"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Hotspot"> | Date | string
  }

  export type FloorCreateInput = {
    id?: string
    name: string
    order?: number
    mapImagePath?: string | null
    mapWidth?: number | null
    mapHeight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateInput = {
    id?: string
    name: string
    order?: number
    mapImagePath?: string | null
    mapWidth?: number | null
    mapHeight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    mapImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    mapWidth?: NullableIntFieldUpdateOperationsInput | number | null
    mapHeight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    mapImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    mapWidth?: NullableIntFieldUpdateOperationsInput | number | null
    mapHeight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type FloorCreateManyInput = {
    id?: string
    name: string
    order?: number
    mapImagePath?: string | null
    mapWidth?: number | null
    mapHeight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FloorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    mapImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    mapWidth?: NullableIntFieldUpdateOperationsInput | number | null
    mapHeight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    mapImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    mapWidth?: NullableIntFieldUpdateOperationsInput | number | null
    mapHeight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    panoramaPath?: string | null
    cubemapPaths?: string | null
    boxX?: number | null
    boxY?: number | null
    boxWidth?: number | null
    boxHeight?: number | null
    defaultYaw?: number | null
    defaultPitch?: number | null
    isStart?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    floor: FloorCreateNestedOneWithoutRoomsInput
    hotspotsFrom?: HotspotCreateNestedManyWithoutFromRoomInput
    hotspotsTo?: HotspotCreateNestedManyWithoutToRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    floorId: string
    panoramaPath?: string | null
    cubemapPaths?: string | null
    boxX?: number | null
    boxY?: number | null
    boxWidth?: number | null
    boxHeight?: number | null
    defaultYaw?: number | null
    defaultPitch?: number | null
    isStart?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hotspotsFrom?: HotspotUncheckedCreateNestedManyWithoutFromRoomInput
    hotspotsTo?: HotspotUncheckedCreateNestedManyWithoutToRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    panoramaPath?: NullableStringFieldUpdateOperationsInput | string | null
    cubemapPaths?: NullableStringFieldUpdateOperationsInput | string | null
    boxX?: NullableFloatFieldUpdateOperationsInput | number | null
    boxY?: NullableFloatFieldUpdateOperationsInput | number | null
    boxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    boxHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultYaw?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultPitch?: NullableFloatFieldUpdateOperationsInput | number | null
    isStart?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    hotspotsFrom?: HotspotUpdateManyWithoutFromRoomNestedInput
    hotspotsTo?: HotspotUpdateManyWithoutToRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floorId?: StringFieldUpdateOperationsInput | string
    panoramaPath?: NullableStringFieldUpdateOperationsInput | string | null
    cubemapPaths?: NullableStringFieldUpdateOperationsInput | string | null
    boxX?: NullableFloatFieldUpdateOperationsInput | number | null
    boxY?: NullableFloatFieldUpdateOperationsInput | number | null
    boxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    boxHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultYaw?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultPitch?: NullableFloatFieldUpdateOperationsInput | number | null
    isStart?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotspotsFrom?: HotspotUncheckedUpdateManyWithoutFromRoomNestedInput
    hotspotsTo?: HotspotUncheckedUpdateManyWithoutToRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    floorId: string
    panoramaPath?: string | null
    cubemapPaths?: string | null
    boxX?: number | null
    boxY?: number | null
    boxWidth?: number | null
    boxHeight?: number | null
    defaultYaw?: number | null
    defaultPitch?: number | null
    isStart?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    panoramaPath?: NullableStringFieldUpdateOperationsInput | string | null
    cubemapPaths?: NullableStringFieldUpdateOperationsInput | string | null
    boxX?: NullableFloatFieldUpdateOperationsInput | number | null
    boxY?: NullableFloatFieldUpdateOperationsInput | number | null
    boxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    boxHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultYaw?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultPitch?: NullableFloatFieldUpdateOperationsInput | number | null
    isStart?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floorId?: StringFieldUpdateOperationsInput | string
    panoramaPath?: NullableStringFieldUpdateOperationsInput | string | null
    cubemapPaths?: NullableStringFieldUpdateOperationsInput | string | null
    boxX?: NullableFloatFieldUpdateOperationsInput | number | null
    boxY?: NullableFloatFieldUpdateOperationsInput | number | null
    boxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    boxHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultYaw?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultPitch?: NullableFloatFieldUpdateOperationsInput | number | null
    isStart?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotspotCreateInput = {
    id?: string
    yaw: number
    pitch: number
    label?: string | null
    createdAt?: Date | string
    fromRoom: RoomCreateNestedOneWithoutHotspotsFromInput
    toRoom: RoomCreateNestedOneWithoutHotspotsToInput
  }

  export type HotspotUncheckedCreateInput = {
    id?: string
    fromRoomId: string
    toRoomId: string
    yaw: number
    pitch: number
    label?: string | null
    createdAt?: Date | string
  }

  export type HotspotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yaw?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromRoom?: RoomUpdateOneRequiredWithoutHotspotsFromNestedInput
    toRoom?: RoomUpdateOneRequiredWithoutHotspotsToNestedInput
  }

  export type HotspotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromRoomId?: StringFieldUpdateOperationsInput | string
    toRoomId?: StringFieldUpdateOperationsInput | string
    yaw?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotspotCreateManyInput = {
    id?: string
    fromRoomId: string
    toRoomId: string
    yaw: number
    pitch: number
    label?: string | null
    createdAt?: Date | string
  }

  export type HotspotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    yaw?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotspotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromRoomId?: StringFieldUpdateOperationsInput | string
    toRoomId?: StringFieldUpdateOperationsInput | string
    yaw?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FloorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    mapImagePath?: SortOrder
    mapWidth?: SortOrder
    mapHeight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloorAvgOrderByAggregateInput = {
    order?: SortOrder
    mapWidth?: SortOrder
    mapHeight?: SortOrder
  }

  export type FloorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    mapImagePath?: SortOrder
    mapWidth?: SortOrder
    mapHeight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    mapImagePath?: SortOrder
    mapWidth?: SortOrder
    mapHeight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloorSumOrderByAggregateInput = {
    order?: SortOrder
    mapWidth?: SortOrder
    mapHeight?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloorScalarRelationFilter = {
    is?: FloorWhereInput
    isNot?: FloorWhereInput
  }

  export type HotspotListRelationFilter = {
    every?: HotspotWhereInput
    some?: HotspotWhereInput
    none?: HotspotWhereInput
  }

  export type HotspotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
    panoramaPath?: SortOrder
    cubemapPaths?: SortOrder
    boxX?: SortOrder
    boxY?: SortOrder
    boxWidth?: SortOrder
    boxHeight?: SortOrder
    defaultYaw?: SortOrder
    defaultPitch?: SortOrder
    isStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    boxX?: SortOrder
    boxY?: SortOrder
    boxWidth?: SortOrder
    boxHeight?: SortOrder
    defaultYaw?: SortOrder
    defaultPitch?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
    panoramaPath?: SortOrder
    cubemapPaths?: SortOrder
    boxX?: SortOrder
    boxY?: SortOrder
    boxWidth?: SortOrder
    boxHeight?: SortOrder
    defaultYaw?: SortOrder
    defaultPitch?: SortOrder
    isStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
    panoramaPath?: SortOrder
    cubemapPaths?: SortOrder
    boxX?: SortOrder
    boxY?: SortOrder
    boxWidth?: SortOrder
    boxHeight?: SortOrder
    defaultYaw?: SortOrder
    defaultPitch?: SortOrder
    isStart?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    boxX?: SortOrder
    boxY?: SortOrder
    boxWidth?: SortOrder
    boxHeight?: SortOrder
    defaultYaw?: SortOrder
    defaultPitch?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type HotspotCountOrderByAggregateInput = {
    id?: SortOrder
    fromRoomId?: SortOrder
    toRoomId?: SortOrder
    yaw?: SortOrder
    pitch?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type HotspotAvgOrderByAggregateInput = {
    yaw?: SortOrder
    pitch?: SortOrder
  }

  export type HotspotMaxOrderByAggregateInput = {
    id?: SortOrder
    fromRoomId?: SortOrder
    toRoomId?: SortOrder
    yaw?: SortOrder
    pitch?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type HotspotMinOrderByAggregateInput = {
    id?: SortOrder
    fromRoomId?: SortOrder
    toRoomId?: SortOrder
    yaw?: SortOrder
    pitch?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type HotspotSumOrderByAggregateInput = {
    yaw?: SortOrder
    pitch?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RoomCreateNestedManyWithoutFloorInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutFloorInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomUpdateManyWithoutFloorNestedInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutFloorInput | RoomUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutFloorInput | RoomUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutFloorInput | RoomUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutFloorNestedInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutFloorInput | RoomUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutFloorInput | RoomUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutFloorInput | RoomUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type FloorCreateNestedOneWithoutRoomsInput = {
    create?: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: FloorCreateOrConnectWithoutRoomsInput
    connect?: FloorWhereUniqueInput
  }

  export type HotspotCreateNestedManyWithoutFromRoomInput = {
    create?: XOR<HotspotCreateWithoutFromRoomInput, HotspotUncheckedCreateWithoutFromRoomInput> | HotspotCreateWithoutFromRoomInput[] | HotspotUncheckedCreateWithoutFromRoomInput[]
    connectOrCreate?: HotspotCreateOrConnectWithoutFromRoomInput | HotspotCreateOrConnectWithoutFromRoomInput[]
    createMany?: HotspotCreateManyFromRoomInputEnvelope
    connect?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
  }

  export type HotspotCreateNestedManyWithoutToRoomInput = {
    create?: XOR<HotspotCreateWithoutToRoomInput, HotspotUncheckedCreateWithoutToRoomInput> | HotspotCreateWithoutToRoomInput[] | HotspotUncheckedCreateWithoutToRoomInput[]
    connectOrCreate?: HotspotCreateOrConnectWithoutToRoomInput | HotspotCreateOrConnectWithoutToRoomInput[]
    createMany?: HotspotCreateManyToRoomInputEnvelope
    connect?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
  }

  export type HotspotUncheckedCreateNestedManyWithoutFromRoomInput = {
    create?: XOR<HotspotCreateWithoutFromRoomInput, HotspotUncheckedCreateWithoutFromRoomInput> | HotspotCreateWithoutFromRoomInput[] | HotspotUncheckedCreateWithoutFromRoomInput[]
    connectOrCreate?: HotspotCreateOrConnectWithoutFromRoomInput | HotspotCreateOrConnectWithoutFromRoomInput[]
    createMany?: HotspotCreateManyFromRoomInputEnvelope
    connect?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
  }

  export type HotspotUncheckedCreateNestedManyWithoutToRoomInput = {
    create?: XOR<HotspotCreateWithoutToRoomInput, HotspotUncheckedCreateWithoutToRoomInput> | HotspotCreateWithoutToRoomInput[] | HotspotUncheckedCreateWithoutToRoomInput[]
    connectOrCreate?: HotspotCreateOrConnectWithoutToRoomInput | HotspotCreateOrConnectWithoutToRoomInput[]
    createMany?: HotspotCreateManyToRoomInputEnvelope
    connect?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloorUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: FloorCreateOrConnectWithoutRoomsInput
    upsert?: FloorUpsertWithoutRoomsInput
    connect?: FloorWhereUniqueInput
    update?: XOR<XOR<FloorUpdateToOneWithWhereWithoutRoomsInput, FloorUpdateWithoutRoomsInput>, FloorUncheckedUpdateWithoutRoomsInput>
  }

  export type HotspotUpdateManyWithoutFromRoomNestedInput = {
    create?: XOR<HotspotCreateWithoutFromRoomInput, HotspotUncheckedCreateWithoutFromRoomInput> | HotspotCreateWithoutFromRoomInput[] | HotspotUncheckedCreateWithoutFromRoomInput[]
    connectOrCreate?: HotspotCreateOrConnectWithoutFromRoomInput | HotspotCreateOrConnectWithoutFromRoomInput[]
    upsert?: HotspotUpsertWithWhereUniqueWithoutFromRoomInput | HotspotUpsertWithWhereUniqueWithoutFromRoomInput[]
    createMany?: HotspotCreateManyFromRoomInputEnvelope
    set?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    disconnect?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    delete?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    connect?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    update?: HotspotUpdateWithWhereUniqueWithoutFromRoomInput | HotspotUpdateWithWhereUniqueWithoutFromRoomInput[]
    updateMany?: HotspotUpdateManyWithWhereWithoutFromRoomInput | HotspotUpdateManyWithWhereWithoutFromRoomInput[]
    deleteMany?: HotspotScalarWhereInput | HotspotScalarWhereInput[]
  }

  export type HotspotUpdateManyWithoutToRoomNestedInput = {
    create?: XOR<HotspotCreateWithoutToRoomInput, HotspotUncheckedCreateWithoutToRoomInput> | HotspotCreateWithoutToRoomInput[] | HotspotUncheckedCreateWithoutToRoomInput[]
    connectOrCreate?: HotspotCreateOrConnectWithoutToRoomInput | HotspotCreateOrConnectWithoutToRoomInput[]
    upsert?: HotspotUpsertWithWhereUniqueWithoutToRoomInput | HotspotUpsertWithWhereUniqueWithoutToRoomInput[]
    createMany?: HotspotCreateManyToRoomInputEnvelope
    set?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    disconnect?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    delete?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    connect?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    update?: HotspotUpdateWithWhereUniqueWithoutToRoomInput | HotspotUpdateWithWhereUniqueWithoutToRoomInput[]
    updateMany?: HotspotUpdateManyWithWhereWithoutToRoomInput | HotspotUpdateManyWithWhereWithoutToRoomInput[]
    deleteMany?: HotspotScalarWhereInput | HotspotScalarWhereInput[]
  }

  export type HotspotUncheckedUpdateManyWithoutFromRoomNestedInput = {
    create?: XOR<HotspotCreateWithoutFromRoomInput, HotspotUncheckedCreateWithoutFromRoomInput> | HotspotCreateWithoutFromRoomInput[] | HotspotUncheckedCreateWithoutFromRoomInput[]
    connectOrCreate?: HotspotCreateOrConnectWithoutFromRoomInput | HotspotCreateOrConnectWithoutFromRoomInput[]
    upsert?: HotspotUpsertWithWhereUniqueWithoutFromRoomInput | HotspotUpsertWithWhereUniqueWithoutFromRoomInput[]
    createMany?: HotspotCreateManyFromRoomInputEnvelope
    set?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    disconnect?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    delete?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    connect?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    update?: HotspotUpdateWithWhereUniqueWithoutFromRoomInput | HotspotUpdateWithWhereUniqueWithoutFromRoomInput[]
    updateMany?: HotspotUpdateManyWithWhereWithoutFromRoomInput | HotspotUpdateManyWithWhereWithoutFromRoomInput[]
    deleteMany?: HotspotScalarWhereInput | HotspotScalarWhereInput[]
  }

  export type HotspotUncheckedUpdateManyWithoutToRoomNestedInput = {
    create?: XOR<HotspotCreateWithoutToRoomInput, HotspotUncheckedCreateWithoutToRoomInput> | HotspotCreateWithoutToRoomInput[] | HotspotUncheckedCreateWithoutToRoomInput[]
    connectOrCreate?: HotspotCreateOrConnectWithoutToRoomInput | HotspotCreateOrConnectWithoutToRoomInput[]
    upsert?: HotspotUpsertWithWhereUniqueWithoutToRoomInput | HotspotUpsertWithWhereUniqueWithoutToRoomInput[]
    createMany?: HotspotCreateManyToRoomInputEnvelope
    set?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    disconnect?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    delete?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    connect?: HotspotWhereUniqueInput | HotspotWhereUniqueInput[]
    update?: HotspotUpdateWithWhereUniqueWithoutToRoomInput | HotspotUpdateWithWhereUniqueWithoutToRoomInput[]
    updateMany?: HotspotUpdateManyWithWhereWithoutToRoomInput | HotspotUpdateManyWithWhereWithoutToRoomInput[]
    deleteMany?: HotspotScalarWhereInput | HotspotScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutHotspotsFromInput = {
    create?: XOR<RoomCreateWithoutHotspotsFromInput, RoomUncheckedCreateWithoutHotspotsFromInput>
    connectOrCreate?: RoomCreateOrConnectWithoutHotspotsFromInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutHotspotsToInput = {
    create?: XOR<RoomCreateWithoutHotspotsToInput, RoomUncheckedCreateWithoutHotspotsToInput>
    connectOrCreate?: RoomCreateOrConnectWithoutHotspotsToInput
    connect?: RoomWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomUpdateOneRequiredWithoutHotspotsFromNestedInput = {
    create?: XOR<RoomCreateWithoutHotspotsFromInput, RoomUncheckedCreateWithoutHotspotsFromInput>
    connectOrCreate?: RoomCreateOrConnectWithoutHotspotsFromInput
    upsert?: RoomUpsertWithoutHotspotsFromInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutHotspotsFromInput, RoomUpdateWithoutHotspotsFromInput>, RoomUncheckedUpdateWithoutHotspotsFromInput>
  }

  export type RoomUpdateOneRequiredWithoutHotspotsToNestedInput = {
    create?: XOR<RoomCreateWithoutHotspotsToInput, RoomUncheckedCreateWithoutHotspotsToInput>
    connectOrCreate?: RoomCreateOrConnectWithoutHotspotsToInput
    upsert?: RoomUpsertWithoutHotspotsToInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutHotspotsToInput, RoomUpdateWithoutHotspotsToInput>, RoomUncheckedUpdateWithoutHotspotsToInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RoomCreateWithoutFloorInput = {
    id?: string
    name: string
    panoramaPath?: string | null
    cubemapPaths?: string | null
    boxX?: number | null
    boxY?: number | null
    boxWidth?: number | null
    boxHeight?: number | null
    defaultYaw?: number | null
    defaultPitch?: number | null
    isStart?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hotspotsFrom?: HotspotCreateNestedManyWithoutFromRoomInput
    hotspotsTo?: HotspotCreateNestedManyWithoutToRoomInput
  }

  export type RoomUncheckedCreateWithoutFloorInput = {
    id?: string
    name: string
    panoramaPath?: string | null
    cubemapPaths?: string | null
    boxX?: number | null
    boxY?: number | null
    boxWidth?: number | null
    boxHeight?: number | null
    defaultYaw?: number | null
    defaultPitch?: number | null
    isStart?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hotspotsFrom?: HotspotUncheckedCreateNestedManyWithoutFromRoomInput
    hotspotsTo?: HotspotUncheckedCreateNestedManyWithoutToRoomInput
  }

  export type RoomCreateOrConnectWithoutFloorInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput>
  }

  export type RoomCreateManyFloorInputEnvelope = {
    data: RoomCreateManyFloorInput | RoomCreateManyFloorInput[]
  }

  export type RoomUpsertWithWhereUniqueWithoutFloorInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutFloorInput, RoomUncheckedUpdateWithoutFloorInput>
    create: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutFloorInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutFloorInput, RoomUncheckedUpdateWithoutFloorInput>
  }

  export type RoomUpdateManyWithWhereWithoutFloorInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutFloorInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    floorId?: StringFilter<"Room"> | string
    panoramaPath?: StringNullableFilter<"Room"> | string | null
    cubemapPaths?: StringNullableFilter<"Room"> | string | null
    boxX?: FloatNullableFilter<"Room"> | number | null
    boxY?: FloatNullableFilter<"Room"> | number | null
    boxWidth?: FloatNullableFilter<"Room"> | number | null
    boxHeight?: FloatNullableFilter<"Room"> | number | null
    defaultYaw?: FloatNullableFilter<"Room"> | number | null
    defaultPitch?: FloatNullableFilter<"Room"> | number | null
    isStart?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type FloorCreateWithoutRoomsInput = {
    id?: string
    name: string
    order?: number
    mapImagePath?: string | null
    mapWidth?: number | null
    mapHeight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FloorUncheckedCreateWithoutRoomsInput = {
    id?: string
    name: string
    order?: number
    mapImagePath?: string | null
    mapWidth?: number | null
    mapHeight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FloorCreateOrConnectWithoutRoomsInput = {
    where: FloorWhereUniqueInput
    create: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
  }

  export type HotspotCreateWithoutFromRoomInput = {
    id?: string
    yaw: number
    pitch: number
    label?: string | null
    createdAt?: Date | string
    toRoom: RoomCreateNestedOneWithoutHotspotsToInput
  }

  export type HotspotUncheckedCreateWithoutFromRoomInput = {
    id?: string
    toRoomId: string
    yaw: number
    pitch: number
    label?: string | null
    createdAt?: Date | string
  }

  export type HotspotCreateOrConnectWithoutFromRoomInput = {
    where: HotspotWhereUniqueInput
    create: XOR<HotspotCreateWithoutFromRoomInput, HotspotUncheckedCreateWithoutFromRoomInput>
  }

  export type HotspotCreateManyFromRoomInputEnvelope = {
    data: HotspotCreateManyFromRoomInput | HotspotCreateManyFromRoomInput[]
  }

  export type HotspotCreateWithoutToRoomInput = {
    id?: string
    yaw: number
    pitch: number
    label?: string | null
    createdAt?: Date | string
    fromRoom: RoomCreateNestedOneWithoutHotspotsFromInput
  }

  export type HotspotUncheckedCreateWithoutToRoomInput = {
    id?: string
    fromRoomId: string
    yaw: number
    pitch: number
    label?: string | null
    createdAt?: Date | string
  }

  export type HotspotCreateOrConnectWithoutToRoomInput = {
    where: HotspotWhereUniqueInput
    create: XOR<HotspotCreateWithoutToRoomInput, HotspotUncheckedCreateWithoutToRoomInput>
  }

  export type HotspotCreateManyToRoomInputEnvelope = {
    data: HotspotCreateManyToRoomInput | HotspotCreateManyToRoomInput[]
  }

  export type FloorUpsertWithoutRoomsInput = {
    update: XOR<FloorUpdateWithoutRoomsInput, FloorUncheckedUpdateWithoutRoomsInput>
    create: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    where?: FloorWhereInput
  }

  export type FloorUpdateToOneWithWhereWithoutRoomsInput = {
    where?: FloorWhereInput
    data: XOR<FloorUpdateWithoutRoomsInput, FloorUncheckedUpdateWithoutRoomsInput>
  }

  export type FloorUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    mapImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    mapWidth?: NullableIntFieldUpdateOperationsInput | number | null
    mapHeight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloorUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    mapImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    mapWidth?: NullableIntFieldUpdateOperationsInput | number | null
    mapHeight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotspotUpsertWithWhereUniqueWithoutFromRoomInput = {
    where: HotspotWhereUniqueInput
    update: XOR<HotspotUpdateWithoutFromRoomInput, HotspotUncheckedUpdateWithoutFromRoomInput>
    create: XOR<HotspotCreateWithoutFromRoomInput, HotspotUncheckedCreateWithoutFromRoomInput>
  }

  export type HotspotUpdateWithWhereUniqueWithoutFromRoomInput = {
    where: HotspotWhereUniqueInput
    data: XOR<HotspotUpdateWithoutFromRoomInput, HotspotUncheckedUpdateWithoutFromRoomInput>
  }

  export type HotspotUpdateManyWithWhereWithoutFromRoomInput = {
    where: HotspotScalarWhereInput
    data: XOR<HotspotUpdateManyMutationInput, HotspotUncheckedUpdateManyWithoutFromRoomInput>
  }

  export type HotspotScalarWhereInput = {
    AND?: HotspotScalarWhereInput | HotspotScalarWhereInput[]
    OR?: HotspotScalarWhereInput[]
    NOT?: HotspotScalarWhereInput | HotspotScalarWhereInput[]
    id?: StringFilter<"Hotspot"> | string
    fromRoomId?: StringFilter<"Hotspot"> | string
    toRoomId?: StringFilter<"Hotspot"> | string
    yaw?: FloatFilter<"Hotspot"> | number
    pitch?: FloatFilter<"Hotspot"> | number
    label?: StringNullableFilter<"Hotspot"> | string | null
    createdAt?: DateTimeFilter<"Hotspot"> | Date | string
  }

  export type HotspotUpsertWithWhereUniqueWithoutToRoomInput = {
    where: HotspotWhereUniqueInput
    update: XOR<HotspotUpdateWithoutToRoomInput, HotspotUncheckedUpdateWithoutToRoomInput>
    create: XOR<HotspotCreateWithoutToRoomInput, HotspotUncheckedCreateWithoutToRoomInput>
  }

  export type HotspotUpdateWithWhereUniqueWithoutToRoomInput = {
    where: HotspotWhereUniqueInput
    data: XOR<HotspotUpdateWithoutToRoomInput, HotspotUncheckedUpdateWithoutToRoomInput>
  }

  export type HotspotUpdateManyWithWhereWithoutToRoomInput = {
    where: HotspotScalarWhereInput
    data: XOR<HotspotUpdateManyMutationInput, HotspotUncheckedUpdateManyWithoutToRoomInput>
  }

  export type RoomCreateWithoutHotspotsFromInput = {
    id?: string
    name: string
    panoramaPath?: string | null
    cubemapPaths?: string | null
    boxX?: number | null
    boxY?: number | null
    boxWidth?: number | null
    boxHeight?: number | null
    defaultYaw?: number | null
    defaultPitch?: number | null
    isStart?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    floor: FloorCreateNestedOneWithoutRoomsInput
    hotspotsTo?: HotspotCreateNestedManyWithoutToRoomInput
  }

  export type RoomUncheckedCreateWithoutHotspotsFromInput = {
    id?: string
    name: string
    floorId: string
    panoramaPath?: string | null
    cubemapPaths?: string | null
    boxX?: number | null
    boxY?: number | null
    boxWidth?: number | null
    boxHeight?: number | null
    defaultYaw?: number | null
    defaultPitch?: number | null
    isStart?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hotspotsTo?: HotspotUncheckedCreateNestedManyWithoutToRoomInput
  }

  export type RoomCreateOrConnectWithoutHotspotsFromInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHotspotsFromInput, RoomUncheckedCreateWithoutHotspotsFromInput>
  }

  export type RoomCreateWithoutHotspotsToInput = {
    id?: string
    name: string
    panoramaPath?: string | null
    cubemapPaths?: string | null
    boxX?: number | null
    boxY?: number | null
    boxWidth?: number | null
    boxHeight?: number | null
    defaultYaw?: number | null
    defaultPitch?: number | null
    isStart?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    floor: FloorCreateNestedOneWithoutRoomsInput
    hotspotsFrom?: HotspotCreateNestedManyWithoutFromRoomInput
  }

  export type RoomUncheckedCreateWithoutHotspotsToInput = {
    id?: string
    name: string
    floorId: string
    panoramaPath?: string | null
    cubemapPaths?: string | null
    boxX?: number | null
    boxY?: number | null
    boxWidth?: number | null
    boxHeight?: number | null
    defaultYaw?: number | null
    defaultPitch?: number | null
    isStart?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hotspotsFrom?: HotspotUncheckedCreateNestedManyWithoutFromRoomInput
  }

  export type RoomCreateOrConnectWithoutHotspotsToInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHotspotsToInput, RoomUncheckedCreateWithoutHotspotsToInput>
  }

  export type RoomUpsertWithoutHotspotsFromInput = {
    update: XOR<RoomUpdateWithoutHotspotsFromInput, RoomUncheckedUpdateWithoutHotspotsFromInput>
    create: XOR<RoomCreateWithoutHotspotsFromInput, RoomUncheckedCreateWithoutHotspotsFromInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutHotspotsFromInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutHotspotsFromInput, RoomUncheckedUpdateWithoutHotspotsFromInput>
  }

  export type RoomUpdateWithoutHotspotsFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    panoramaPath?: NullableStringFieldUpdateOperationsInput | string | null
    cubemapPaths?: NullableStringFieldUpdateOperationsInput | string | null
    boxX?: NullableFloatFieldUpdateOperationsInput | number | null
    boxY?: NullableFloatFieldUpdateOperationsInput | number | null
    boxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    boxHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultYaw?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultPitch?: NullableFloatFieldUpdateOperationsInput | number | null
    isStart?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    hotspotsTo?: HotspotUpdateManyWithoutToRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutHotspotsFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floorId?: StringFieldUpdateOperationsInput | string
    panoramaPath?: NullableStringFieldUpdateOperationsInput | string | null
    cubemapPaths?: NullableStringFieldUpdateOperationsInput | string | null
    boxX?: NullableFloatFieldUpdateOperationsInput | number | null
    boxY?: NullableFloatFieldUpdateOperationsInput | number | null
    boxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    boxHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultYaw?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultPitch?: NullableFloatFieldUpdateOperationsInput | number | null
    isStart?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotspotsTo?: HotspotUncheckedUpdateManyWithoutToRoomNestedInput
  }

  export type RoomUpsertWithoutHotspotsToInput = {
    update: XOR<RoomUpdateWithoutHotspotsToInput, RoomUncheckedUpdateWithoutHotspotsToInput>
    create: XOR<RoomCreateWithoutHotspotsToInput, RoomUncheckedCreateWithoutHotspotsToInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutHotspotsToInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutHotspotsToInput, RoomUncheckedUpdateWithoutHotspotsToInput>
  }

  export type RoomUpdateWithoutHotspotsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    panoramaPath?: NullableStringFieldUpdateOperationsInput | string | null
    cubemapPaths?: NullableStringFieldUpdateOperationsInput | string | null
    boxX?: NullableFloatFieldUpdateOperationsInput | number | null
    boxY?: NullableFloatFieldUpdateOperationsInput | number | null
    boxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    boxHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultYaw?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultPitch?: NullableFloatFieldUpdateOperationsInput | number | null
    isStart?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    hotspotsFrom?: HotspotUpdateManyWithoutFromRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutHotspotsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floorId?: StringFieldUpdateOperationsInput | string
    panoramaPath?: NullableStringFieldUpdateOperationsInput | string | null
    cubemapPaths?: NullableStringFieldUpdateOperationsInput | string | null
    boxX?: NullableFloatFieldUpdateOperationsInput | number | null
    boxY?: NullableFloatFieldUpdateOperationsInput | number | null
    boxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    boxHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultYaw?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultPitch?: NullableFloatFieldUpdateOperationsInput | number | null
    isStart?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotspotsFrom?: HotspotUncheckedUpdateManyWithoutFromRoomNestedInput
  }

  export type RoomCreateManyFloorInput = {
    id?: string
    name: string
    panoramaPath?: string | null
    cubemapPaths?: string | null
    boxX?: number | null
    boxY?: number | null
    boxWidth?: number | null
    boxHeight?: number | null
    defaultYaw?: number | null
    defaultPitch?: number | null
    isStart?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateWithoutFloorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    panoramaPath?: NullableStringFieldUpdateOperationsInput | string | null
    cubemapPaths?: NullableStringFieldUpdateOperationsInput | string | null
    boxX?: NullableFloatFieldUpdateOperationsInput | number | null
    boxY?: NullableFloatFieldUpdateOperationsInput | number | null
    boxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    boxHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultYaw?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultPitch?: NullableFloatFieldUpdateOperationsInput | number | null
    isStart?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotspotsFrom?: HotspotUpdateManyWithoutFromRoomNestedInput
    hotspotsTo?: HotspotUpdateManyWithoutToRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutFloorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    panoramaPath?: NullableStringFieldUpdateOperationsInput | string | null
    cubemapPaths?: NullableStringFieldUpdateOperationsInput | string | null
    boxX?: NullableFloatFieldUpdateOperationsInput | number | null
    boxY?: NullableFloatFieldUpdateOperationsInput | number | null
    boxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    boxHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultYaw?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultPitch?: NullableFloatFieldUpdateOperationsInput | number | null
    isStart?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotspotsFrom?: HotspotUncheckedUpdateManyWithoutFromRoomNestedInput
    hotspotsTo?: HotspotUncheckedUpdateManyWithoutToRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutFloorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    panoramaPath?: NullableStringFieldUpdateOperationsInput | string | null
    cubemapPaths?: NullableStringFieldUpdateOperationsInput | string | null
    boxX?: NullableFloatFieldUpdateOperationsInput | number | null
    boxY?: NullableFloatFieldUpdateOperationsInput | number | null
    boxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    boxHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultYaw?: NullableFloatFieldUpdateOperationsInput | number | null
    defaultPitch?: NullableFloatFieldUpdateOperationsInput | number | null
    isStart?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotspotCreateManyFromRoomInput = {
    id?: string
    toRoomId: string
    yaw: number
    pitch: number
    label?: string | null
    createdAt?: Date | string
  }

  export type HotspotCreateManyToRoomInput = {
    id?: string
    fromRoomId: string
    yaw: number
    pitch: number
    label?: string | null
    createdAt?: Date | string
  }

  export type HotspotUpdateWithoutFromRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    yaw?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toRoom?: RoomUpdateOneRequiredWithoutHotspotsToNestedInput
  }

  export type HotspotUncheckedUpdateWithoutFromRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    toRoomId?: StringFieldUpdateOperationsInput | string
    yaw?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotspotUncheckedUpdateManyWithoutFromRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    toRoomId?: StringFieldUpdateOperationsInput | string
    yaw?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotspotUpdateWithoutToRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    yaw?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromRoom?: RoomUpdateOneRequiredWithoutHotspotsFromNestedInput
  }

  export type HotspotUncheckedUpdateWithoutToRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromRoomId?: StringFieldUpdateOperationsInput | string
    yaw?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotspotUncheckedUpdateManyWithoutToRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromRoomId?: StringFieldUpdateOperationsInput | string
    yaw?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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