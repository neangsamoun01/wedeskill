
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
 * Model RequestFriend
 * 
 */
export type RequestFriend = $Result.DefaultSelection<Prisma.$RequestFriendPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Following
 * 
 */
export type Following = $Result.DefaultSelection<Prisma.$FollowingPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseDetail
 * 
 */
export type CourseDetail = $Result.DefaultSelection<Prisma.$CourseDetailPayload>
/**
 * Model Instructor
 * 
 */
export type Instructor = $Result.DefaultSelection<Prisma.$InstructorPayload>
/**
 * Model CourseFeedback
 * 
 */
export type CourseFeedback = $Result.DefaultSelection<Prisma.$CourseFeedbackPayload>
/**
 * Model CourseSchedule
 * 
 */
export type CourseSchedule = $Result.DefaultSelection<Prisma.$CourseSchedulePayload>
/**
 * Model CourseExpectation
 * 
 */
export type CourseExpectation = $Result.DefaultSelection<Prisma.$CourseExpectationPayload>
/**
 * Model CourseRequirement
 * 
 */
export type CourseRequirement = $Result.DefaultSelection<Prisma.$CourseRequirementPayload>
/**
 * Model CoursecSection
 * 
 */
export type CoursecSection = $Result.DefaultSelection<Prisma.$CoursecSectionPayload>
/**
 * Model CourseEnroll
 * 
 */
export type CourseEnroll = $Result.DefaultSelection<Prisma.$CourseEnrollPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  INSTRUCTOR: 'INSTRUCTOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Tags: {
  development: 'development',
  database: 'database'
};

export type Tags = (typeof Tags)[keyof typeof Tags]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Tags = $Enums.Tags

export const Tags: typeof $Enums.Tags

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.requestFriend`: Exposes CRUD operations for the **RequestFriend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestFriends
    * const requestFriends = await prisma.requestFriend.findMany()
    * ```
    */
  get requestFriend(): Prisma.RequestFriendDelegate<ExtArgs>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs>;

  /**
   * `prisma.following`: Exposes CRUD operations for the **Following** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followings
    * const followings = await prisma.following.findMany()
    * ```
    */
  get following(): Prisma.FollowingDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs>;

  /**
   * `prisma.courseDetail`: Exposes CRUD operations for the **CourseDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseDetails
    * const courseDetails = await prisma.courseDetail.findMany()
    * ```
    */
  get courseDetail(): Prisma.CourseDetailDelegate<ExtArgs>;

  /**
   * `prisma.instructor`: Exposes CRUD operations for the **Instructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructors
    * const instructors = await prisma.instructor.findMany()
    * ```
    */
  get instructor(): Prisma.InstructorDelegate<ExtArgs>;

  /**
   * `prisma.courseFeedback`: Exposes CRUD operations for the **CourseFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseFeedbacks
    * const courseFeedbacks = await prisma.courseFeedback.findMany()
    * ```
    */
  get courseFeedback(): Prisma.CourseFeedbackDelegate<ExtArgs>;

  /**
   * `prisma.courseSchedule`: Exposes CRUD operations for the **CourseSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseSchedules
    * const courseSchedules = await prisma.courseSchedule.findMany()
    * ```
    */
  get courseSchedule(): Prisma.CourseScheduleDelegate<ExtArgs>;

  /**
   * `prisma.courseExpectation`: Exposes CRUD operations for the **CourseExpectation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseExpectations
    * const courseExpectations = await prisma.courseExpectation.findMany()
    * ```
    */
  get courseExpectation(): Prisma.CourseExpectationDelegate<ExtArgs>;

  /**
   * `prisma.courseRequirement`: Exposes CRUD operations for the **CourseRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseRequirements
    * const courseRequirements = await prisma.courseRequirement.findMany()
    * ```
    */
  get courseRequirement(): Prisma.CourseRequirementDelegate<ExtArgs>;

  /**
   * `prisma.coursecSection`: Exposes CRUD operations for the **CoursecSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoursecSections
    * const coursecSections = await prisma.coursecSection.findMany()
    * ```
    */
  get coursecSection(): Prisma.CoursecSectionDelegate<ExtArgs>;

  /**
   * `prisma.courseEnroll`: Exposes CRUD operations for the **CourseEnroll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseEnrolls
    * const courseEnrolls = await prisma.courseEnroll.findMany()
    * ```
    */
  get courseEnroll(): Prisma.CourseEnrollDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    RequestFriend: 'RequestFriend',
    Profile: 'Profile',
    Following: 'Following',
    Post: 'Post',
    Category: 'Category',
    Course: 'Course',
    CourseDetail: 'CourseDetail',
    Instructor: 'Instructor',
    CourseFeedback: 'CourseFeedback',
    CourseSchedule: 'CourseSchedule',
    CourseExpectation: 'CourseExpectation',
    CourseRequirement: 'CourseRequirement',
    CoursecSection: 'CoursecSection',
    CourseEnroll: 'CourseEnroll'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'requestFriend' | 'profile' | 'following' | 'post' | 'category' | 'course' | 'courseDetail' | 'instructor' | 'courseFeedback' | 'courseSchedule' | 'courseExpectation' | 'courseRequirement' | 'coursecSection' | 'courseEnroll'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RequestFriend: {
        payload: Prisma.$RequestFriendPayload<ExtArgs>
        fields: Prisma.RequestFriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFriendFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestFriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFriendFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestFriendPayload>
          }
          findFirst: {
            args: Prisma.RequestFriendFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestFriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFriendFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestFriendPayload>
          }
          findMany: {
            args: Prisma.RequestFriendFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestFriendPayload>[]
          }
          create: {
            args: Prisma.RequestFriendCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestFriendPayload>
          }
          createMany: {
            args: Prisma.RequestFriendCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RequestFriendDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestFriendPayload>
          }
          update: {
            args: Prisma.RequestFriendUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestFriendPayload>
          }
          deleteMany: {
            args: Prisma.RequestFriendDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RequestFriendUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RequestFriendUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestFriendPayload>
          }
          aggregate: {
            args: Prisma.RequestFriendAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRequestFriend>
          }
          groupBy: {
            args: Prisma.RequestFriendGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RequestFriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestFriendCountArgs<ExtArgs>,
            result: $Utils.Optional<RequestFriendCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Following: {
        payload: Prisma.$FollowingPayload<ExtArgs>
        fields: Prisma.FollowingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          findFirst: {
            args: Prisma.FollowingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          findMany: {
            args: Prisma.FollowingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>[]
          }
          create: {
            args: Prisma.FollowingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          createMany: {
            args: Prisma.FollowingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FollowingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          update: {
            args: Prisma.FollowingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          deleteMany: {
            args: Prisma.FollowingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FollowingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FollowingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          aggregate: {
            args: Prisma.FollowingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFollowing>
          }
          groupBy: {
            args: Prisma.FollowingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FollowingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowingCountArgs<ExtArgs>,
            result: $Utils.Optional<FollowingCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseDetail: {
        payload: Prisma.$CourseDetailPayload<ExtArgs>
        fields: Prisma.CourseDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseDetailPayload>
          }
          findFirst: {
            args: Prisma.CourseDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseDetailPayload>
          }
          findMany: {
            args: Prisma.CourseDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseDetailPayload>[]
          }
          create: {
            args: Prisma.CourseDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseDetailPayload>
          }
          createMany: {
            args: Prisma.CourseDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseDetailPayload>
          }
          update: {
            args: Prisma.CourseDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseDetailPayload>
          }
          deleteMany: {
            args: Prisma.CourseDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseDetailPayload>
          }
          aggregate: {
            args: Prisma.CourseDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourseDetail>
          }
          groupBy: {
            args: Prisma.CourseDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseDetailCountAggregateOutputType> | number
          }
        }
      }
      Instructor: {
        payload: Prisma.$InstructorPayload<ExtArgs>
        fields: Prisma.InstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findFirst: {
            args: Prisma.InstructorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findMany: {
            args: Prisma.InstructorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          create: {
            args: Prisma.InstructorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          createMany: {
            args: Prisma.InstructorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InstructorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          update: {
            args: Prisma.InstructorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          deleteMany: {
            args: Prisma.InstructorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InstructorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          aggregate: {
            args: Prisma.InstructorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInstructor>
          }
          groupBy: {
            args: Prisma.InstructorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorCountArgs<ExtArgs>,
            result: $Utils.Optional<InstructorCountAggregateOutputType> | number
          }
        }
      }
      CourseFeedback: {
        payload: Prisma.$CourseFeedbackPayload<ExtArgs>
        fields: Prisma.CourseFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFeedbackFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFeedbackFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseFeedbackPayload>
          }
          findFirst: {
            args: Prisma.CourseFeedbackFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFeedbackFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseFeedbackPayload>
          }
          findMany: {
            args: Prisma.CourseFeedbackFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseFeedbackPayload>[]
          }
          create: {
            args: Prisma.CourseFeedbackCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseFeedbackPayload>
          }
          createMany: {
            args: Prisma.CourseFeedbackCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseFeedbackDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseFeedbackPayload>
          }
          update: {
            args: Prisma.CourseFeedbackUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.CourseFeedbackDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseFeedbackUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseFeedbackUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseFeedbackPayload>
          }
          aggregate: {
            args: Prisma.CourseFeedbackAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourseFeedback>
          }
          groupBy: {
            args: Prisma.CourseFeedbackGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseFeedbackCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseFeedbackCountAggregateOutputType> | number
          }
        }
      }
      CourseSchedule: {
        payload: Prisma.$CourseSchedulePayload<ExtArgs>
        fields: Prisma.CourseScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseScheduleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseScheduleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseSchedulePayload>
          }
          findFirst: {
            args: Prisma.CourseScheduleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseScheduleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseSchedulePayload>
          }
          findMany: {
            args: Prisma.CourseScheduleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseSchedulePayload>[]
          }
          create: {
            args: Prisma.CourseScheduleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseSchedulePayload>
          }
          createMany: {
            args: Prisma.CourseScheduleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseScheduleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseSchedulePayload>
          }
          update: {
            args: Prisma.CourseScheduleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseSchedulePayload>
          }
          deleteMany: {
            args: Prisma.CourseScheduleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseScheduleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseScheduleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseSchedulePayload>
          }
          aggregate: {
            args: Prisma.CourseScheduleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourseSchedule>
          }
          groupBy: {
            args: Prisma.CourseScheduleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseScheduleCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseScheduleCountAggregateOutputType> | number
          }
        }
      }
      CourseExpectation: {
        payload: Prisma.$CourseExpectationPayload<ExtArgs>
        fields: Prisma.CourseExpectationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseExpectationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseExpectationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseExpectationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseExpectationPayload>
          }
          findFirst: {
            args: Prisma.CourseExpectationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseExpectationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseExpectationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseExpectationPayload>
          }
          findMany: {
            args: Prisma.CourseExpectationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseExpectationPayload>[]
          }
          create: {
            args: Prisma.CourseExpectationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseExpectationPayload>
          }
          createMany: {
            args: Prisma.CourseExpectationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseExpectationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseExpectationPayload>
          }
          update: {
            args: Prisma.CourseExpectationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseExpectationPayload>
          }
          deleteMany: {
            args: Prisma.CourseExpectationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseExpectationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseExpectationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseExpectationPayload>
          }
          aggregate: {
            args: Prisma.CourseExpectationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourseExpectation>
          }
          groupBy: {
            args: Prisma.CourseExpectationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseExpectationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseExpectationCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseExpectationCountAggregateOutputType> | number
          }
        }
      }
      CourseRequirement: {
        payload: Prisma.$CourseRequirementPayload<ExtArgs>
        fields: Prisma.CourseRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseRequirementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseRequirementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRequirementPayload>
          }
          findFirst: {
            args: Prisma.CourseRequirementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseRequirementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRequirementPayload>
          }
          findMany: {
            args: Prisma.CourseRequirementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRequirementPayload>[]
          }
          create: {
            args: Prisma.CourseRequirementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRequirementPayload>
          }
          createMany: {
            args: Prisma.CourseRequirementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseRequirementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRequirementPayload>
          }
          update: {
            args: Prisma.CourseRequirementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRequirementPayload>
          }
          deleteMany: {
            args: Prisma.CourseRequirementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseRequirementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseRequirementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRequirementPayload>
          }
          aggregate: {
            args: Prisma.CourseRequirementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourseRequirement>
          }
          groupBy: {
            args: Prisma.CourseRequirementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseRequirementCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseRequirementCountAggregateOutputType> | number
          }
        }
      }
      CoursecSection: {
        payload: Prisma.$CoursecSectionPayload<ExtArgs>
        fields: Prisma.CoursecSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursecSectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursecSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursecSectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursecSectionPayload>
          }
          findFirst: {
            args: Prisma.CoursecSectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursecSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursecSectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursecSectionPayload>
          }
          findMany: {
            args: Prisma.CoursecSectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursecSectionPayload>[]
          }
          create: {
            args: Prisma.CoursecSectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursecSectionPayload>
          }
          createMany: {
            args: Prisma.CoursecSectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CoursecSectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursecSectionPayload>
          }
          update: {
            args: Prisma.CoursecSectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursecSectionPayload>
          }
          deleteMany: {
            args: Prisma.CoursecSectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CoursecSectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CoursecSectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursecSectionPayload>
          }
          aggregate: {
            args: Prisma.CoursecSectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCoursecSection>
          }
          groupBy: {
            args: Prisma.CoursecSectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CoursecSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursecSectionCountArgs<ExtArgs>,
            result: $Utils.Optional<CoursecSectionCountAggregateOutputType> | number
          }
        }
      }
      CourseEnroll: {
        payload: Prisma.$CourseEnrollPayload<ExtArgs>
        fields: Prisma.CourseEnrollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseEnrollFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseEnrollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseEnrollFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseEnrollPayload>
          }
          findFirst: {
            args: Prisma.CourseEnrollFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseEnrollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseEnrollFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseEnrollPayload>
          }
          findMany: {
            args: Prisma.CourseEnrollFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseEnrollPayload>[]
          }
          create: {
            args: Prisma.CourseEnrollCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseEnrollPayload>
          }
          createMany: {
            args: Prisma.CourseEnrollCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseEnrollDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseEnrollPayload>
          }
          update: {
            args: Prisma.CourseEnrollUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseEnrollPayload>
          }
          deleteMany: {
            args: Prisma.CourseEnrollDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseEnrollUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseEnrollUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseEnrollPayload>
          }
          aggregate: {
            args: Prisma.CourseEnrollAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourseEnroll>
          }
          groupBy: {
            args: Prisma.CourseEnrollGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseEnrollGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseEnrollCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseEnrollCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    profile: number
    posts: number
    sentRequests: number
    receivedRequests: number
    following: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserCountOutputTypeCountProfileArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    sentRequests?: boolean | UserCountOutputTypeCountSentRequestsArgs
    receivedRequests?: boolean | UserCountOutputTypeCountReceivedRequestsArgs
    following?: boolean | UserCountOutputTypeCountFollowingArgs
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
  export type UserCountOutputTypeCountProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestFriendWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestFriendWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowingWhereInput
  }



  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    categories: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | PostCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    posts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CategoryCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    password: string | null
    email: string | null
    dateOfBirth: Date | null
    jobTitle: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    password: string | null
    email: string | null
    dateOfBirth: Date | null
    jobTitle: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    password: number
    email: number
    dateOfBirth: number
    jobTitle: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    password?: true
    email?: true
    dateOfBirth?: true
    jobTitle?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    password?: true
    email?: true
    dateOfBirth?: true
    jobTitle?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    password?: true
    email?: true
    dateOfBirth?: true
    jobTitle?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date
    jobTitle: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    email?: boolean
    dateOfBirth?: boolean
    jobTitle?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    email?: boolean
    dateOfBirth?: boolean
    jobTitle?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      sentRequests: Prisma.$RequestFriendPayload<ExtArgs>[]
      receivedRequests: Prisma.$RequestFriendPayload<ExtArgs>[]
      following: Prisma.$FollowingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      password: string
      email: string
      dateOfBirth: Date
      jobTitle: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findMany'> | Null>;

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    sentRequests<T extends User$sentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestFriendPayload<ExtArgs>, T, 'findMany'> | Null>;

    receivedRequests<T extends User$receivedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestFriendPayload<ExtArgs>, T, 'findMany'> | Null>;

    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly jobTitle: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User.sentRequests
   */
  export type User$sentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFriend
     */
    select?: RequestFriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestFriendInclude<ExtArgs> | null
    where?: RequestFriendWhereInput
    orderBy?: RequestFriendOrderByWithRelationInput | RequestFriendOrderByWithRelationInput[]
    cursor?: RequestFriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestFriendScalarFieldEnum | RequestFriendScalarFieldEnum[]
  }


  /**
   * User.receivedRequests
   */
  export type User$receivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFriend
     */
    select?: RequestFriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestFriendInclude<ExtArgs> | null
    where?: RequestFriendWhereInput
    orderBy?: RequestFriendOrderByWithRelationInput | RequestFriendOrderByWithRelationInput[]
    cursor?: RequestFriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestFriendScalarFieldEnum | RequestFriendScalarFieldEnum[]
  }


  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude<ExtArgs> | null
    where?: FollowingWhereInput
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    cursor?: FollowingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model RequestFriend
   */

  export type AggregateRequestFriend = {
    _count: RequestFriendCountAggregateOutputType | null
    _avg: RequestFriendAvgAggregateOutputType | null
    _sum: RequestFriendSumAggregateOutputType | null
    _min: RequestFriendMinAggregateOutputType | null
    _max: RequestFriendMaxAggregateOutputType | null
  }

  export type RequestFriendAvgAggregateOutputType = {
    id: number | null
    requesterId: number | null
    requestedId: number | null
  }

  export type RequestFriendSumAggregateOutputType = {
    id: number | null
    requesterId: number | null
    requestedId: number | null
  }

  export type RequestFriendMinAggregateOutputType = {
    id: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requesterId: number | null
    requestedId: number | null
  }

  export type RequestFriendMaxAggregateOutputType = {
    id: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requesterId: number | null
    requestedId: number | null
  }

  export type RequestFriendCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    updatedAt: number
    requesterId: number
    requestedId: number
    _all: number
  }


  export type RequestFriendAvgAggregateInputType = {
    id?: true
    requesterId?: true
    requestedId?: true
  }

  export type RequestFriendSumAggregateInputType = {
    id?: true
    requesterId?: true
    requestedId?: true
  }

  export type RequestFriendMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    requesterId?: true
    requestedId?: true
  }

  export type RequestFriendMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    requesterId?: true
    requestedId?: true
  }

  export type RequestFriendCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    requesterId?: true
    requestedId?: true
    _all?: true
  }

  export type RequestFriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestFriend to aggregate.
     */
    where?: RequestFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestFriends to fetch.
     */
    orderBy?: RequestFriendOrderByWithRelationInput | RequestFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestFriends
    **/
    _count?: true | RequestFriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestFriendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestFriendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestFriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestFriendMaxAggregateInputType
  }

  export type GetRequestFriendAggregateType<T extends RequestFriendAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestFriend[P]>
      : GetScalarType<T[P], AggregateRequestFriend[P]>
  }




  export type RequestFriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestFriendWhereInput
    orderBy?: RequestFriendOrderByWithAggregationInput | RequestFriendOrderByWithAggregationInput[]
    by: RequestFriendScalarFieldEnum[] | RequestFriendScalarFieldEnum
    having?: RequestFriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestFriendCountAggregateInputType | true
    _avg?: RequestFriendAvgAggregateInputType
    _sum?: RequestFriendSumAggregateInputType
    _min?: RequestFriendMinAggregateInputType
    _max?: RequestFriendMaxAggregateInputType
  }

  export type RequestFriendGroupByOutputType = {
    id: number
    status: string
    createdAt: Date
    updatedAt: Date
    requesterId: number
    requestedId: number
    _count: RequestFriendCountAggregateOutputType | null
    _avg: RequestFriendAvgAggregateOutputType | null
    _sum: RequestFriendSumAggregateOutputType | null
    _min: RequestFriendMinAggregateOutputType | null
    _max: RequestFriendMaxAggregateOutputType | null
  }

  type GetRequestFriendGroupByPayload<T extends RequestFriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestFriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestFriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestFriendGroupByOutputType[P]>
            : GetScalarType<T[P], RequestFriendGroupByOutputType[P]>
        }
      >
    >


  export type RequestFriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
    requestedId?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    requested?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestFriend"]>

  export type RequestFriendSelectScalar = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
    requestedId?: boolean
  }

  export type RequestFriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    requested?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $RequestFriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestFriend"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs>
      requested: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      createdAt: Date
      updatedAt: Date
      requesterId: number
      requestedId: number
    }, ExtArgs["result"]["requestFriend"]>
    composites: {}
  }


  type RequestFriendGetPayload<S extends boolean | null | undefined | RequestFriendDefaultArgs> = $Result.GetResult<Prisma.$RequestFriendPayload, S>

  type RequestFriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RequestFriendFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RequestFriendCountAggregateInputType | true
    }

  export interface RequestFriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestFriend'], meta: { name: 'RequestFriend' } }
    /**
     * Find zero or one RequestFriend that matches the filter.
     * @param {RequestFriendFindUniqueArgs} args - Arguments to find a RequestFriend
     * @example
     * // Get one RequestFriend
     * const requestFriend = await prisma.requestFriend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RequestFriendFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RequestFriendFindUniqueArgs<ExtArgs>>
    ): Prisma__RequestFriendClient<$Result.GetResult<Prisma.$RequestFriendPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RequestFriend that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RequestFriendFindUniqueOrThrowArgs} args - Arguments to find a RequestFriend
     * @example
     * // Get one RequestFriend
     * const requestFriend = await prisma.requestFriend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RequestFriendFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFriendFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RequestFriendClient<$Result.GetResult<Prisma.$RequestFriendPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RequestFriend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFriendFindFirstArgs} args - Arguments to find a RequestFriend
     * @example
     * // Get one RequestFriend
     * const requestFriend = await prisma.requestFriend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RequestFriendFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFriendFindFirstArgs<ExtArgs>>
    ): Prisma__RequestFriendClient<$Result.GetResult<Prisma.$RequestFriendPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RequestFriend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFriendFindFirstOrThrowArgs} args - Arguments to find a RequestFriend
     * @example
     * // Get one RequestFriend
     * const requestFriend = await prisma.requestFriend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RequestFriendFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFriendFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RequestFriendClient<$Result.GetResult<Prisma.$RequestFriendPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RequestFriends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFriendFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestFriends
     * const requestFriends = await prisma.requestFriend.findMany()
     * 
     * // Get first 10 RequestFriends
     * const requestFriends = await prisma.requestFriend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestFriendWithIdOnly = await prisma.requestFriend.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RequestFriendFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFriendFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestFriendPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RequestFriend.
     * @param {RequestFriendCreateArgs} args - Arguments to create a RequestFriend.
     * @example
     * // Create one RequestFriend
     * const RequestFriend = await prisma.requestFriend.create({
     *   data: {
     *     // ... data to create a RequestFriend
     *   }
     * })
     * 
    **/
    create<T extends RequestFriendCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RequestFriendCreateArgs<ExtArgs>>
    ): Prisma__RequestFriendClient<$Result.GetResult<Prisma.$RequestFriendPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RequestFriends.
     *     @param {RequestFriendCreateManyArgs} args - Arguments to create many RequestFriends.
     *     @example
     *     // Create many RequestFriends
     *     const requestFriend = await prisma.requestFriend.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RequestFriendCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFriendCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RequestFriend.
     * @param {RequestFriendDeleteArgs} args - Arguments to delete one RequestFriend.
     * @example
     * // Delete one RequestFriend
     * const RequestFriend = await prisma.requestFriend.delete({
     *   where: {
     *     // ... filter to delete one RequestFriend
     *   }
     * })
     * 
    **/
    delete<T extends RequestFriendDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RequestFriendDeleteArgs<ExtArgs>>
    ): Prisma__RequestFriendClient<$Result.GetResult<Prisma.$RequestFriendPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RequestFriend.
     * @param {RequestFriendUpdateArgs} args - Arguments to update one RequestFriend.
     * @example
     * // Update one RequestFriend
     * const requestFriend = await prisma.requestFriend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RequestFriendUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RequestFriendUpdateArgs<ExtArgs>>
    ): Prisma__RequestFriendClient<$Result.GetResult<Prisma.$RequestFriendPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RequestFriends.
     * @param {RequestFriendDeleteManyArgs} args - Arguments to filter RequestFriends to delete.
     * @example
     * // Delete a few RequestFriends
     * const { count } = await prisma.requestFriend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RequestFriendDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFriendDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestFriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestFriends
     * const requestFriend = await prisma.requestFriend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RequestFriendUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RequestFriendUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RequestFriend.
     * @param {RequestFriendUpsertArgs} args - Arguments to update or create a RequestFriend.
     * @example
     * // Update or create a RequestFriend
     * const requestFriend = await prisma.requestFriend.upsert({
     *   create: {
     *     // ... data to create a RequestFriend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestFriend we want to update
     *   }
     * })
    **/
    upsert<T extends RequestFriendUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RequestFriendUpsertArgs<ExtArgs>>
    ): Prisma__RequestFriendClient<$Result.GetResult<Prisma.$RequestFriendPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RequestFriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFriendCountArgs} args - Arguments to filter RequestFriends to count.
     * @example
     * // Count the number of RequestFriends
     * const count = await prisma.requestFriend.count({
     *   where: {
     *     // ... the filter for the RequestFriends we want to count
     *   }
     * })
    **/
    count<T extends RequestFriendCountArgs>(
      args?: Subset<T, RequestFriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestFriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestFriend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestFriendAggregateArgs>(args: Subset<T, RequestFriendAggregateArgs>): Prisma.PrismaPromise<GetRequestFriendAggregateType<T>>

    /**
     * Group by RequestFriend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFriendGroupByArgs} args - Group by arguments.
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
      T extends RequestFriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestFriendGroupByArgs['orderBy'] }
        : { orderBy?: RequestFriendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestFriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestFriend model
   */
  readonly fields: RequestFriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestFriend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestFriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    requested<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RequestFriend model
   */ 
  interface RequestFriendFieldRefs {
    readonly id: FieldRef<"RequestFriend", 'Int'>
    readonly status: FieldRef<"RequestFriend", 'String'>
    readonly createdAt: FieldRef<"RequestFriend", 'DateTime'>
    readonly updatedAt: FieldRef<"RequestFriend", 'DateTime'>
    readonly requesterId: FieldRef<"RequestFriend", 'Int'>
    readonly requestedId: FieldRef<"RequestFriend", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * RequestFriend findUnique
   */
  export type RequestFriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFriend
     */
    select?: RequestFriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestFriendInclude<ExtArgs> | null
    /**
     * Filter, which RequestFriend to fetch.
     */
    where: RequestFriendWhereUniqueInput
  }


  /**
   * RequestFriend findUniqueOrThrow
   */
  export type RequestFriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFriend
     */
    select?: RequestFriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestFriendInclude<ExtArgs> | null
    /**
     * Filter, which RequestFriend to fetch.
     */
    where: RequestFriendWhereUniqueInput
  }


  /**
   * RequestFriend findFirst
   */
  export type RequestFriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFriend
     */
    select?: RequestFriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestFriendInclude<ExtArgs> | null
    /**
     * Filter, which RequestFriend to fetch.
     */
    where?: RequestFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestFriends to fetch.
     */
    orderBy?: RequestFriendOrderByWithRelationInput | RequestFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestFriends.
     */
    cursor?: RequestFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestFriends.
     */
    distinct?: RequestFriendScalarFieldEnum | RequestFriendScalarFieldEnum[]
  }


  /**
   * RequestFriend findFirstOrThrow
   */
  export type RequestFriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFriend
     */
    select?: RequestFriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestFriendInclude<ExtArgs> | null
    /**
     * Filter, which RequestFriend to fetch.
     */
    where?: RequestFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestFriends to fetch.
     */
    orderBy?: RequestFriendOrderByWithRelationInput | RequestFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestFriends.
     */
    cursor?: RequestFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestFriends.
     */
    distinct?: RequestFriendScalarFieldEnum | RequestFriendScalarFieldEnum[]
  }


  /**
   * RequestFriend findMany
   */
  export type RequestFriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFriend
     */
    select?: RequestFriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestFriendInclude<ExtArgs> | null
    /**
     * Filter, which RequestFriends to fetch.
     */
    where?: RequestFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestFriends to fetch.
     */
    orderBy?: RequestFriendOrderByWithRelationInput | RequestFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestFriends.
     */
    cursor?: RequestFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestFriends.
     */
    skip?: number
    distinct?: RequestFriendScalarFieldEnum | RequestFriendScalarFieldEnum[]
  }


  /**
   * RequestFriend create
   */
  export type RequestFriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFriend
     */
    select?: RequestFriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestFriendInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestFriend.
     */
    data: XOR<RequestFriendCreateInput, RequestFriendUncheckedCreateInput>
  }


  /**
   * RequestFriend createMany
   */
  export type RequestFriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestFriends.
     */
    data: RequestFriendCreateManyInput | RequestFriendCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * RequestFriend update
   */
  export type RequestFriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFriend
     */
    select?: RequestFriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestFriendInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestFriend.
     */
    data: XOR<RequestFriendUpdateInput, RequestFriendUncheckedUpdateInput>
    /**
     * Choose, which RequestFriend to update.
     */
    where: RequestFriendWhereUniqueInput
  }


  /**
   * RequestFriend updateMany
   */
  export type RequestFriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestFriends.
     */
    data: XOR<RequestFriendUpdateManyMutationInput, RequestFriendUncheckedUpdateManyInput>
    /**
     * Filter which RequestFriends to update
     */
    where?: RequestFriendWhereInput
  }


  /**
   * RequestFriend upsert
   */
  export type RequestFriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFriend
     */
    select?: RequestFriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestFriendInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestFriend to update in case it exists.
     */
    where: RequestFriendWhereUniqueInput
    /**
     * In case the RequestFriend found by the `where` argument doesn't exist, create a new RequestFriend with this data.
     */
    create: XOR<RequestFriendCreateInput, RequestFriendUncheckedCreateInput>
    /**
     * In case the RequestFriend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestFriendUpdateInput, RequestFriendUncheckedUpdateInput>
  }


  /**
   * RequestFriend delete
   */
  export type RequestFriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFriend
     */
    select?: RequestFriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestFriendInclude<ExtArgs> | null
    /**
     * Filter which RequestFriend to delete.
     */
    where: RequestFriendWhereUniqueInput
  }


  /**
   * RequestFriend deleteMany
   */
  export type RequestFriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestFriends to delete
     */
    where?: RequestFriendWhereInput
  }


  /**
   * RequestFriend without action
   */
  export type RequestFriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestFriend
     */
    select?: RequestFriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestFriendInclude<ExtArgs> | null
  }



  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    biograpy: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    biograpy: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    biograpy: number
    profileImage: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    biograpy?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    biograpy?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    biograpy?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    biograpy: string
    profileImage: string
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    biograpy?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    biograpy?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      biograpy: string
      profileImage: string
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }


  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly biograpy: FieldRef<"Profile", 'String'>
    readonly profileImage: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly userId: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
  }



  /**
   * Model Following
   */

  export type AggregateFollowing = {
    _count: FollowingCountAggregateOutputType | null
    _avg: FollowingAvgAggregateOutputType | null
    _sum: FollowingSumAggregateOutputType | null
    _min: FollowingMinAggregateOutputType | null
    _max: FollowingMaxAggregateOutputType | null
  }

  export type FollowingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    followingId: number | null
  }

  export type FollowingSumAggregateOutputType = {
    id: number | null
    userId: number | null
    followingId: number | null
  }

  export type FollowingMinAggregateOutputType = {
    id: number | null
    userId: number | null
    followingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FollowingMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    followingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FollowingCountAggregateOutputType = {
    id: number
    userId: number
    followingId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FollowingAvgAggregateInputType = {
    id?: true
    userId?: true
    followingId?: true
  }

  export type FollowingSumAggregateInputType = {
    id?: true
    userId?: true
    followingId?: true
  }

  export type FollowingMinAggregateInputType = {
    id?: true
    userId?: true
    followingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FollowingMaxAggregateInputType = {
    id?: true
    userId?: true
    followingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FollowingCountAggregateInputType = {
    id?: true
    userId?: true
    followingId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FollowingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Following to aggregate.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Followings
    **/
    _count?: true | FollowingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowingMaxAggregateInputType
  }

  export type GetFollowingAggregateType<T extends FollowingAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowing[P]>
      : GetScalarType<T[P], AggregateFollowing[P]>
  }




  export type FollowingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowingWhereInput
    orderBy?: FollowingOrderByWithAggregationInput | FollowingOrderByWithAggregationInput[]
    by: FollowingScalarFieldEnum[] | FollowingScalarFieldEnum
    having?: FollowingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowingCountAggregateInputType | true
    _avg?: FollowingAvgAggregateInputType
    _sum?: FollowingSumAggregateInputType
    _min?: FollowingMinAggregateInputType
    _max?: FollowingMaxAggregateInputType
  }

  export type FollowingGroupByOutputType = {
    id: number
    userId: number
    followingId: number
    createdAt: Date
    updatedAt: Date
    _count: FollowingCountAggregateOutputType | null
    _avg: FollowingAvgAggregateOutputType | null
    _sum: FollowingSumAggregateOutputType | null
    _min: FollowingMinAggregateOutputType | null
    _max: FollowingMaxAggregateOutputType | null
  }

  type GetFollowingGroupByPayload<T extends FollowingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowingGroupByOutputType[P]>
            : GetScalarType<T[P], FollowingGroupByOutputType[P]>
        }
      >
    >


  export type FollowingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    followingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["following"]>

  export type FollowingSelectScalar = {
    id?: boolean
    userId?: boolean
    followingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FollowingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $FollowingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Following"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      followingId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["following"]>
    composites: {}
  }


  type FollowingGetPayload<S extends boolean | null | undefined | FollowingDefaultArgs> = $Result.GetResult<Prisma.$FollowingPayload, S>

  type FollowingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FollowingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FollowingCountAggregateInputType | true
    }

  export interface FollowingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Following'], meta: { name: 'Following' } }
    /**
     * Find zero or one Following that matches the filter.
     * @param {FollowingFindUniqueArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FollowingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FollowingFindUniqueArgs<ExtArgs>>
    ): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Following that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FollowingFindUniqueOrThrowArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FollowingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Following that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindFirstArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FollowingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowingFindFirstArgs<ExtArgs>>
    ): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Following that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindFirstOrThrowArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FollowingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Followings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followings
     * const followings = await prisma.following.findMany()
     * 
     * // Get first 10 Followings
     * const followings = await prisma.following.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followingWithIdOnly = await prisma.following.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FollowingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Following.
     * @param {FollowingCreateArgs} args - Arguments to create a Following.
     * @example
     * // Create one Following
     * const Following = await prisma.following.create({
     *   data: {
     *     // ... data to create a Following
     *   }
     * })
     * 
    **/
    create<T extends FollowingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowingCreateArgs<ExtArgs>>
    ): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Followings.
     *     @param {FollowingCreateManyArgs} args - Arguments to create many Followings.
     *     @example
     *     // Create many Followings
     *     const following = await prisma.following.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FollowingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Following.
     * @param {FollowingDeleteArgs} args - Arguments to delete one Following.
     * @example
     * // Delete one Following
     * const Following = await prisma.following.delete({
     *   where: {
     *     // ... filter to delete one Following
     *   }
     * })
     * 
    **/
    delete<T extends FollowingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FollowingDeleteArgs<ExtArgs>>
    ): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Following.
     * @param {FollowingUpdateArgs} args - Arguments to update one Following.
     * @example
     * // Update one Following
     * const following = await prisma.following.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FollowingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowingUpdateArgs<ExtArgs>>
    ): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Followings.
     * @param {FollowingDeleteManyArgs} args - Arguments to filter Followings to delete.
     * @example
     * // Delete a few Followings
     * const { count } = await prisma.following.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FollowingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followings
     * const following = await prisma.following.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FollowingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FollowingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Following.
     * @param {FollowingUpsertArgs} args - Arguments to update or create a Following.
     * @example
     * // Update or create a Following
     * const following = await prisma.following.upsert({
     *   create: {
     *     // ... data to create a Following
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Following we want to update
     *   }
     * })
    **/
    upsert<T extends FollowingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FollowingUpsertArgs<ExtArgs>>
    ): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Followings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingCountArgs} args - Arguments to filter Followings to count.
     * @example
     * // Count the number of Followings
     * const count = await prisma.following.count({
     *   where: {
     *     // ... the filter for the Followings we want to count
     *   }
     * })
    **/
    count<T extends FollowingCountArgs>(
      args?: Subset<T, FollowingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Following.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowingAggregateArgs>(args: Subset<T, FollowingAggregateArgs>): Prisma.PrismaPromise<GetFollowingAggregateType<T>>

    /**
     * Group by Following.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingGroupByArgs} args - Group by arguments.
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
      T extends FollowingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowingGroupByArgs['orderBy'] }
        : { orderBy?: FollowingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Following model
   */
  readonly fields: FollowingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Following.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Following model
   */ 
  interface FollowingFieldRefs {
    readonly id: FieldRef<"Following", 'Int'>
    readonly userId: FieldRef<"Following", 'Int'>
    readonly followingId: FieldRef<"Following", 'Int'>
    readonly createdAt: FieldRef<"Following", 'DateTime'>
    readonly updatedAt: FieldRef<"Following", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Following findUnique
   */
  export type FollowingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Following to fetch.
     */
    where: FollowingWhereUniqueInput
  }


  /**
   * Following findUniqueOrThrow
   */
  export type FollowingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Following to fetch.
     */
    where: FollowingWhereUniqueInput
  }


  /**
   * Following findFirst
   */
  export type FollowingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Following to fetch.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followings.
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followings.
     */
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }


  /**
   * Following findFirstOrThrow
   */
  export type FollowingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Following to fetch.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followings.
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followings.
     */
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }


  /**
   * Following findMany
   */
  export type FollowingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Followings to fetch.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Followings.
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }


  /**
   * Following create
   */
  export type FollowingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * The data needed to create a Following.
     */
    data: XOR<FollowingCreateInput, FollowingUncheckedCreateInput>
  }


  /**
   * Following createMany
   */
  export type FollowingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Followings.
     */
    data: FollowingCreateManyInput | FollowingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Following update
   */
  export type FollowingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * The data needed to update a Following.
     */
    data: XOR<FollowingUpdateInput, FollowingUncheckedUpdateInput>
    /**
     * Choose, which Following to update.
     */
    where: FollowingWhereUniqueInput
  }


  /**
   * Following updateMany
   */
  export type FollowingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Followings.
     */
    data: XOR<FollowingUpdateManyMutationInput, FollowingUncheckedUpdateManyInput>
    /**
     * Filter which Followings to update
     */
    where?: FollowingWhereInput
  }


  /**
   * Following upsert
   */
  export type FollowingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * The filter to search for the Following to update in case it exists.
     */
    where: FollowingWhereUniqueInput
    /**
     * In case the Following found by the `where` argument doesn't exist, create a new Following with this data.
     */
    create: XOR<FollowingCreateInput, FollowingUncheckedCreateInput>
    /**
     * In case the Following was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowingUpdateInput, FollowingUncheckedUpdateInput>
  }


  /**
   * Following delete
   */
  export type FollowingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter which Following to delete.
     */
    where: FollowingWhereUniqueInput
  }


  /**
   * Following deleteMany
   */
  export type FollowingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Followings to delete
     */
    where?: FollowingWhereInput
  }


  /**
   * Following without action
   */
  export type FollowingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude<ExtArgs> | null
  }



  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    published: boolean | null
    content: string | null
    authorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    published: boolean | null
    content: string | null
    authorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    published: number
    content: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    published?: true
    content?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    published?: true
    content?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    published?: true
    content?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    published: boolean
    content: string
    authorId: number
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    published?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | Post$categoriesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    published?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | Post$categoriesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      published: boolean
      content: string
      authorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    categories<T extends Post$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Post$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly content: FieldRef<"Post", 'String'>
    readonly authorId: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.categories
   */
  export type Post$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends Category$postsArgs<ExtArgs> = {}>(args?: Subset<T, Category$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.posts
   */
  export type Category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    instructorId: number | null
    feedbackId: number | null
    schedulteId: number | null
    courseExpectId: number | null
    courseRequireId: number | null
    coursecSectionId: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    duration: number | null
    instructorId: number | null
    feedbackId: number | null
    schedulteId: number | null
    courseExpectId: number | null
    courseRequireId: number | null
    coursecSectionId: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    courseLevel: string | null
    assistant: string | null
    imagePath: string | null
    duration: number | null
    certify: boolean | null
    published: boolean | null
    favorited: boolean | null
    instructorId: number | null
    feedbackId: number | null
    schedulteId: number | null
    courseExpectId: number | null
    courseRequireId: number | null
    coursecSectionId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    courseLevel: string | null
    assistant: string | null
    imagePath: string | null
    duration: number | null
    certify: boolean | null
    published: boolean | null
    favorited: boolean | null
    instructorId: number | null
    feedbackId: number | null
    schedulteId: number | null
    courseExpectId: number | null
    courseRequireId: number | null
    coursecSectionId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    courseLevel: number
    assistant: number
    imagePath: number
    duration: number
    certify: number
    published: number
    favorited: number
    instructorId: number
    feedbackId: number
    schedulteId: number
    courseExpectId: number
    courseRequireId: number
    coursecSectionId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    duration?: true
    instructorId?: true
    feedbackId?: true
    schedulteId?: true
    courseExpectId?: true
    courseRequireId?: true
    coursecSectionId?: true
    createdBy?: true
    updatedBy?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    duration?: true
    instructorId?: true
    feedbackId?: true
    schedulteId?: true
    courseExpectId?: true
    courseRequireId?: true
    coursecSectionId?: true
    createdBy?: true
    updatedBy?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    courseLevel?: true
    assistant?: true
    imagePath?: true
    duration?: true
    certify?: true
    published?: true
    favorited?: true
    instructorId?: true
    feedbackId?: true
    schedulteId?: true
    courseExpectId?: true
    courseRequireId?: true
    coursecSectionId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    courseLevel?: true
    assistant?: true
    imagePath?: true
    duration?: true
    certify?: true
    published?: true
    favorited?: true
    instructorId?: true
    feedbackId?: true
    schedulteId?: true
    courseExpectId?: true
    courseRequireId?: true
    coursecSectionId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    courseLevel?: true
    assistant?: true
    imagePath?: true
    duration?: true
    certify?: true
    published?: true
    favorited?: true
    instructorId?: true
    feedbackId?: true
    schedulteId?: true
    courseExpectId?: true
    courseRequireId?: true
    coursecSectionId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    title: string
    description: string
    courseLevel: string
    assistant: string | null
    imagePath: string | null
    duration: number
    certify: boolean
    published: boolean
    favorited: boolean
    instructorId: number
    feedbackId: number
    schedulteId: number
    courseExpectId: number
    courseRequireId: number
    coursecSectionId: number
    createdAt: Date
    createdBy: number
    updatedAt: Date
    updatedBy: number
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    courseLevel?: boolean
    assistant?: boolean
    imagePath?: boolean
    duration?: boolean
    certify?: boolean
    published?: boolean
    favorited?: boolean
    instructorId?: boolean
    feedbackId?: boolean
    schedulteId?: boolean
    courseExpectId?: boolean
    courseRequireId?: boolean
    coursecSectionId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    courseLevel?: boolean
    assistant?: boolean
    imagePath?: boolean
    duration?: boolean
    certify?: boolean
    published?: boolean
    favorited?: boolean
    instructorId?: boolean
    feedbackId?: boolean
    schedulteId?: boolean
    courseExpectId?: boolean
    courseRequireId?: boolean
    coursecSectionId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }


  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      courseLevel: string
      assistant: string | null
      imagePath: string | null
      duration: number
      certify: boolean
      published: boolean
      favorited: boolean
      instructorId: number
      feedbackId: number
      schedulteId: number
      courseExpectId: number
      courseRequireId: number
      coursecSectionId: number
      createdAt: Date
      createdBy: number
      updatedAt: Date
      updatedBy: number
    }, ExtArgs["result"]["course"]>
    composites: {}
  }


  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Course that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
    **/
    create<T extends CourseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseCreateArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Courses.
     *     @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
    **/
    delete<T extends CourseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
    **/
    upsert<T extends CourseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Course model
   */ 
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly courseLevel: FieldRef<"Course", 'String'>
    readonly assistant: FieldRef<"Course", 'String'>
    readonly imagePath: FieldRef<"Course", 'String'>
    readonly duration: FieldRef<"Course", 'Int'>
    readonly certify: FieldRef<"Course", 'Boolean'>
    readonly published: FieldRef<"Course", 'Boolean'>
    readonly favorited: FieldRef<"Course", 'Boolean'>
    readonly instructorId: FieldRef<"Course", 'Int'>
    readonly feedbackId: FieldRef<"Course", 'Int'>
    readonly schedulteId: FieldRef<"Course", 'Int'>
    readonly courseExpectId: FieldRef<"Course", 'Int'>
    readonly courseRequireId: FieldRef<"Course", 'Int'>
    readonly coursecSectionId: FieldRef<"Course", 'Int'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly createdBy: FieldRef<"Course", 'Int'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
    readonly updatedBy: FieldRef<"Course", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }


  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
  }


  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }


  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
  }


  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
  }



  /**
   * Model CourseDetail
   */

  export type AggregateCourseDetail = {
    _count: CourseDetailCountAggregateOutputType | null
    _avg: CourseDetailAvgAggregateOutputType | null
    _sum: CourseDetailSumAggregateOutputType | null
    _min: CourseDetailMinAggregateOutputType | null
    _max: CourseDetailMaxAggregateOutputType | null
  }

  export type CourseDetailAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    instructorId: number | null
    feedbackId: number | null
    schedulteId: number | null
    courseExpectId: number | null
    courseReqId: number | null
    coursecSectionId: number | null
  }

  export type CourseDetailSumAggregateOutputType = {
    id: number | null
    duration: number | null
    instructorId: number | null
    feedbackId: number | null
    schedulteId: number | null
    courseExpectId: number | null
    courseReqId: number | null
    coursecSectionId: number | null
  }

  export type CourseDetailMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    courseLevel: string | null
    assistant: string | null
    imagePath: string | null
    duration: number | null
    certify: boolean | null
    published: boolean | null
    favorited: boolean | null
    instructorId: number | null
    feedbackId: number | null
    schedulteId: number | null
    courseExpectId: number | null
    courseReqId: number | null
    coursecSectionId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseDetailMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    courseLevel: string | null
    assistant: string | null
    imagePath: string | null
    duration: number | null
    certify: boolean | null
    published: boolean | null
    favorited: boolean | null
    instructorId: number | null
    feedbackId: number | null
    schedulteId: number | null
    courseExpectId: number | null
    courseReqId: number | null
    coursecSectionId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseDetailCountAggregateOutputType = {
    id: number
    title: number
    description: number
    tag: number
    courseLevel: number
    assistant: number
    imagePath: number
    duration: number
    certify: number
    published: number
    favorited: number
    instructorId: number
    feedbackId: number
    schedulteId: number
    courseExpectId: number
    courseReqId: number
    coursecSectionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseDetailAvgAggregateInputType = {
    id?: true
    duration?: true
    instructorId?: true
    feedbackId?: true
    schedulteId?: true
    courseExpectId?: true
    courseReqId?: true
    coursecSectionId?: true
  }

  export type CourseDetailSumAggregateInputType = {
    id?: true
    duration?: true
    instructorId?: true
    feedbackId?: true
    schedulteId?: true
    courseExpectId?: true
    courseReqId?: true
    coursecSectionId?: true
  }

  export type CourseDetailMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    courseLevel?: true
    assistant?: true
    imagePath?: true
    duration?: true
    certify?: true
    published?: true
    favorited?: true
    instructorId?: true
    feedbackId?: true
    schedulteId?: true
    courseExpectId?: true
    courseReqId?: true
    coursecSectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseDetailMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    courseLevel?: true
    assistant?: true
    imagePath?: true
    duration?: true
    certify?: true
    published?: true
    favorited?: true
    instructorId?: true
    feedbackId?: true
    schedulteId?: true
    courseExpectId?: true
    courseReqId?: true
    coursecSectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseDetailCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    tag?: true
    courseLevel?: true
    assistant?: true
    imagePath?: true
    duration?: true
    certify?: true
    published?: true
    favorited?: true
    instructorId?: true
    feedbackId?: true
    schedulteId?: true
    courseExpectId?: true
    courseReqId?: true
    coursecSectionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseDetail to aggregate.
     */
    where?: CourseDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseDetails to fetch.
     */
    orderBy?: CourseDetailOrderByWithRelationInput | CourseDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseDetails
    **/
    _count?: true | CourseDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseDetailMaxAggregateInputType
  }

  export type GetCourseDetailAggregateType<T extends CourseDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseDetail[P]>
      : GetScalarType<T[P], AggregateCourseDetail[P]>
  }




  export type CourseDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseDetailWhereInput
    orderBy?: CourseDetailOrderByWithAggregationInput | CourseDetailOrderByWithAggregationInput[]
    by: CourseDetailScalarFieldEnum[] | CourseDetailScalarFieldEnum
    having?: CourseDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseDetailCountAggregateInputType | true
    _avg?: CourseDetailAvgAggregateInputType
    _sum?: CourseDetailSumAggregateInputType
    _min?: CourseDetailMinAggregateInputType
    _max?: CourseDetailMaxAggregateInputType
  }

  export type CourseDetailGroupByOutputType = {
    id: number
    title: string
    description: string
    tag: $Enums.Tags[]
    courseLevel: string
    assistant: string | null
    imagePath: string | null
    duration: number
    certify: boolean
    published: boolean
    favorited: boolean
    instructorId: number
    feedbackId: number
    schedulteId: number
    courseExpectId: number
    courseReqId: number
    coursecSectionId: number
    createdAt: Date
    updatedAt: Date
    _count: CourseDetailCountAggregateOutputType | null
    _avg: CourseDetailAvgAggregateOutputType | null
    _sum: CourseDetailSumAggregateOutputType | null
    _min: CourseDetailMinAggregateOutputType | null
    _max: CourseDetailMaxAggregateOutputType | null
  }

  type GetCourseDetailGroupByPayload<T extends CourseDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseDetailGroupByOutputType[P]>
            : GetScalarType<T[P], CourseDetailGroupByOutputType[P]>
        }
      >
    >


  export type CourseDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tag?: boolean
    courseLevel?: boolean
    assistant?: boolean
    imagePath?: boolean
    duration?: boolean
    certify?: boolean
    published?: boolean
    favorited?: boolean
    instructorId?: boolean
    feedbackId?: boolean
    schedulteId?: boolean
    courseExpectId?: boolean
    courseReqId?: boolean
    coursecSectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["courseDetail"]>

  export type CourseDetailSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    tag?: boolean
    courseLevel?: boolean
    assistant?: boolean
    imagePath?: boolean
    duration?: boolean
    certify?: boolean
    published?: boolean
    favorited?: boolean
    instructorId?: boolean
    feedbackId?: boolean
    schedulteId?: boolean
    courseExpectId?: boolean
    courseReqId?: boolean
    coursecSectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CourseDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseDetail"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      tag: $Enums.Tags[]
      courseLevel: string
      assistant: string | null
      imagePath: string | null
      duration: number
      certify: boolean
      published: boolean
      favorited: boolean
      instructorId: number
      feedbackId: number
      schedulteId: number
      courseExpectId: number
      courseReqId: number
      coursecSectionId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseDetail"]>
    composites: {}
  }


  type CourseDetailGetPayload<S extends boolean | null | undefined | CourseDetailDefaultArgs> = $Result.GetResult<Prisma.$CourseDetailPayload, S>

  type CourseDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseDetailCountAggregateInputType | true
    }

  export interface CourseDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseDetail'], meta: { name: 'CourseDetail' } }
    /**
     * Find zero or one CourseDetail that matches the filter.
     * @param {CourseDetailFindUniqueArgs} args - Arguments to find a CourseDetail
     * @example
     * // Get one CourseDetail
     * const courseDetail = await prisma.courseDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseDetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourseDetailFindUniqueArgs<ExtArgs>>
    ): Prisma__CourseDetailClient<$Result.GetResult<Prisma.$CourseDetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CourseDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseDetailFindUniqueOrThrowArgs} args - Arguments to find a CourseDetail
     * @example
     * // Get one CourseDetail
     * const courseDetail = await prisma.courseDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseDetailClient<$Result.GetResult<Prisma.$CourseDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CourseDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDetailFindFirstArgs} args - Arguments to find a CourseDetail
     * @example
     * // Get one CourseDetail
     * const courseDetail = await prisma.courseDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseDetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseDetailFindFirstArgs<ExtArgs>>
    ): Prisma__CourseDetailClient<$Result.GetResult<Prisma.$CourseDetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CourseDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDetailFindFirstOrThrowArgs} args - Arguments to find a CourseDetail
     * @example
     * // Get one CourseDetail
     * const courseDetail = await prisma.courseDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseDetailClient<$Result.GetResult<Prisma.$CourseDetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CourseDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseDetails
     * const courseDetails = await prisma.courseDetail.findMany()
     * 
     * // Get first 10 CourseDetails
     * const courseDetails = await prisma.courseDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseDetailWithIdOnly = await prisma.courseDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseDetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CourseDetail.
     * @param {CourseDetailCreateArgs} args - Arguments to create a CourseDetail.
     * @example
     * // Create one CourseDetail
     * const CourseDetail = await prisma.courseDetail.create({
     *   data: {
     *     // ... data to create a CourseDetail
     *   }
     * })
     * 
    **/
    create<T extends CourseDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseDetailCreateArgs<ExtArgs>>
    ): Prisma__CourseDetailClient<$Result.GetResult<Prisma.$CourseDetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CourseDetails.
     *     @param {CourseDetailCreateManyArgs} args - Arguments to create many CourseDetails.
     *     @example
     *     // Create many CourseDetails
     *     const courseDetail = await prisma.courseDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CourseDetail.
     * @param {CourseDetailDeleteArgs} args - Arguments to delete one CourseDetail.
     * @example
     * // Delete one CourseDetail
     * const CourseDetail = await prisma.courseDetail.delete({
     *   where: {
     *     // ... filter to delete one CourseDetail
     *   }
     * })
     * 
    **/
    delete<T extends CourseDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseDetailDeleteArgs<ExtArgs>>
    ): Prisma__CourseDetailClient<$Result.GetResult<Prisma.$CourseDetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CourseDetail.
     * @param {CourseDetailUpdateArgs} args - Arguments to update one CourseDetail.
     * @example
     * // Update one CourseDetail
     * const courseDetail = await prisma.courseDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseDetailUpdateArgs<ExtArgs>>
    ): Prisma__CourseDetailClient<$Result.GetResult<Prisma.$CourseDetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CourseDetails.
     * @param {CourseDetailDeleteManyArgs} args - Arguments to filter CourseDetails to delete.
     * @example
     * // Delete a few CourseDetails
     * const { count } = await prisma.courseDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseDetails
     * const courseDetail = await prisma.courseDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseDetail.
     * @param {CourseDetailUpsertArgs} args - Arguments to update or create a CourseDetail.
     * @example
     * // Update or create a CourseDetail
     * const courseDetail = await prisma.courseDetail.upsert({
     *   create: {
     *     // ... data to create a CourseDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseDetail we want to update
     *   }
     * })
    **/
    upsert<T extends CourseDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseDetailUpsertArgs<ExtArgs>>
    ): Prisma__CourseDetailClient<$Result.GetResult<Prisma.$CourseDetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CourseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDetailCountArgs} args - Arguments to filter CourseDetails to count.
     * @example
     * // Count the number of CourseDetails
     * const count = await prisma.courseDetail.count({
     *   where: {
     *     // ... the filter for the CourseDetails we want to count
     *   }
     * })
    **/
    count<T extends CourseDetailCountArgs>(
      args?: Subset<T, CourseDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseDetailAggregateArgs>(args: Subset<T, CourseDetailAggregateArgs>): Prisma.PrismaPromise<GetCourseDetailAggregateType<T>>

    /**
     * Group by CourseDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDetailGroupByArgs} args - Group by arguments.
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
      T extends CourseDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseDetailGroupByArgs['orderBy'] }
        : { orderBy?: CourseDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseDetail model
   */
  readonly fields: CourseDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CourseDetail model
   */ 
  interface CourseDetailFieldRefs {
    readonly id: FieldRef<"CourseDetail", 'Int'>
    readonly title: FieldRef<"CourseDetail", 'String'>
    readonly description: FieldRef<"CourseDetail", 'String'>
    readonly tag: FieldRef<"CourseDetail", 'Tags[]'>
    readonly courseLevel: FieldRef<"CourseDetail", 'String'>
    readonly assistant: FieldRef<"CourseDetail", 'String'>
    readonly imagePath: FieldRef<"CourseDetail", 'String'>
    readonly duration: FieldRef<"CourseDetail", 'Int'>
    readonly certify: FieldRef<"CourseDetail", 'Boolean'>
    readonly published: FieldRef<"CourseDetail", 'Boolean'>
    readonly favorited: FieldRef<"CourseDetail", 'Boolean'>
    readonly instructorId: FieldRef<"CourseDetail", 'Int'>
    readonly feedbackId: FieldRef<"CourseDetail", 'Int'>
    readonly schedulteId: FieldRef<"CourseDetail", 'Int'>
    readonly courseExpectId: FieldRef<"CourseDetail", 'Int'>
    readonly courseReqId: FieldRef<"CourseDetail", 'Int'>
    readonly coursecSectionId: FieldRef<"CourseDetail", 'Int'>
    readonly createdAt: FieldRef<"CourseDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseDetail", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CourseDetail findUnique
   */
  export type CourseDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDetail
     */
    select?: CourseDetailSelect<ExtArgs> | null
    /**
     * Filter, which CourseDetail to fetch.
     */
    where: CourseDetailWhereUniqueInput
  }


  /**
   * CourseDetail findUniqueOrThrow
   */
  export type CourseDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDetail
     */
    select?: CourseDetailSelect<ExtArgs> | null
    /**
     * Filter, which CourseDetail to fetch.
     */
    where: CourseDetailWhereUniqueInput
  }


  /**
   * CourseDetail findFirst
   */
  export type CourseDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDetail
     */
    select?: CourseDetailSelect<ExtArgs> | null
    /**
     * Filter, which CourseDetail to fetch.
     */
    where?: CourseDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseDetails to fetch.
     */
    orderBy?: CourseDetailOrderByWithRelationInput | CourseDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseDetails.
     */
    cursor?: CourseDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseDetails.
     */
    distinct?: CourseDetailScalarFieldEnum | CourseDetailScalarFieldEnum[]
  }


  /**
   * CourseDetail findFirstOrThrow
   */
  export type CourseDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDetail
     */
    select?: CourseDetailSelect<ExtArgs> | null
    /**
     * Filter, which CourseDetail to fetch.
     */
    where?: CourseDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseDetails to fetch.
     */
    orderBy?: CourseDetailOrderByWithRelationInput | CourseDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseDetails.
     */
    cursor?: CourseDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseDetails.
     */
    distinct?: CourseDetailScalarFieldEnum | CourseDetailScalarFieldEnum[]
  }


  /**
   * CourseDetail findMany
   */
  export type CourseDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDetail
     */
    select?: CourseDetailSelect<ExtArgs> | null
    /**
     * Filter, which CourseDetails to fetch.
     */
    where?: CourseDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseDetails to fetch.
     */
    orderBy?: CourseDetailOrderByWithRelationInput | CourseDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseDetails.
     */
    cursor?: CourseDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseDetails.
     */
    skip?: number
    distinct?: CourseDetailScalarFieldEnum | CourseDetailScalarFieldEnum[]
  }


  /**
   * CourseDetail create
   */
  export type CourseDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDetail
     */
    select?: CourseDetailSelect<ExtArgs> | null
    /**
     * The data needed to create a CourseDetail.
     */
    data: XOR<CourseDetailCreateInput, CourseDetailUncheckedCreateInput>
  }


  /**
   * CourseDetail createMany
   */
  export type CourseDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseDetails.
     */
    data: CourseDetailCreateManyInput | CourseDetailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CourseDetail update
   */
  export type CourseDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDetail
     */
    select?: CourseDetailSelect<ExtArgs> | null
    /**
     * The data needed to update a CourseDetail.
     */
    data: XOR<CourseDetailUpdateInput, CourseDetailUncheckedUpdateInput>
    /**
     * Choose, which CourseDetail to update.
     */
    where: CourseDetailWhereUniqueInput
  }


  /**
   * CourseDetail updateMany
   */
  export type CourseDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseDetails.
     */
    data: XOR<CourseDetailUpdateManyMutationInput, CourseDetailUncheckedUpdateManyInput>
    /**
     * Filter which CourseDetails to update
     */
    where?: CourseDetailWhereInput
  }


  /**
   * CourseDetail upsert
   */
  export type CourseDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDetail
     */
    select?: CourseDetailSelect<ExtArgs> | null
    /**
     * The filter to search for the CourseDetail to update in case it exists.
     */
    where: CourseDetailWhereUniqueInput
    /**
     * In case the CourseDetail found by the `where` argument doesn't exist, create a new CourseDetail with this data.
     */
    create: XOR<CourseDetailCreateInput, CourseDetailUncheckedCreateInput>
    /**
     * In case the CourseDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseDetailUpdateInput, CourseDetailUncheckedUpdateInput>
  }


  /**
   * CourseDetail delete
   */
  export type CourseDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDetail
     */
    select?: CourseDetailSelect<ExtArgs> | null
    /**
     * Filter which CourseDetail to delete.
     */
    where: CourseDetailWhereUniqueInput
  }


  /**
   * CourseDetail deleteMany
   */
  export type CourseDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseDetails to delete
     */
    where?: CourseDetailWhereInput
  }


  /**
   * CourseDetail without action
   */
  export type CourseDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDetail
     */
    select?: CourseDetailSelect<ExtArgs> | null
  }



  /**
   * Model Instructor
   */

  export type AggregateInstructor = {
    _count: InstructorCountAggregateOutputType | null
    _avg: InstructorAvgAggregateOutputType | null
    _sum: InstructorSumAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  export type InstructorAvgAggregateOutputType = {
    id: number | null
  }

  export type InstructorSumAggregateOutputType = {
    id: number | null
  }

  export type InstructorMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    title: string | null
    birthDate: Date | null
    contactPhone: string | null
    contactEmail: string | null
    contactAddress: string | null
    nationalID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstructorMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    title: string | null
    birthDate: Date | null
    contactPhone: string | null
    contactEmail: string | null
    contactAddress: string | null
    nationalID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstructorCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    title: number
    birthDate: number
    contactPhone: number
    contactEmail: number
    contactAddress: number
    nationalID: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstructorAvgAggregateInputType = {
    id?: true
  }

  export type InstructorSumAggregateInputType = {
    id?: true
  }

  export type InstructorMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    title?: true
    birthDate?: true
    contactPhone?: true
    contactEmail?: true
    contactAddress?: true
    nationalID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstructorMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    title?: true
    birthDate?: true
    contactPhone?: true
    contactEmail?: true
    contactAddress?: true
    nationalID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstructorCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    title?: true
    birthDate?: true
    contactPhone?: true
    contactEmail?: true
    contactAddress?: true
    nationalID?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructor to aggregate.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructors
    **/
    _count?: true | InstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorMaxAggregateInputType
  }

  export type GetInstructorAggregateType<T extends InstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructor[P]>
      : GetScalarType<T[P], AggregateInstructor[P]>
  }




  export type InstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithAggregationInput | InstructorOrderByWithAggregationInput[]
    by: InstructorScalarFieldEnum[] | InstructorScalarFieldEnum
    having?: InstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorCountAggregateInputType | true
    _avg?: InstructorAvgAggregateInputType
    _sum?: InstructorSumAggregateInputType
    _min?: InstructorMinAggregateInputType
    _max?: InstructorMaxAggregateInputType
  }

  export type InstructorGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    title: string
    birthDate: Date
    contactPhone: string
    contactEmail: string
    contactAddress: string
    nationalID: string
    createdAt: Date
    updatedAt: Date
    _count: InstructorCountAggregateOutputType | null
    _avg: InstructorAvgAggregateOutputType | null
    _sum: InstructorSumAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  type GetInstructorGroupByPayload<T extends InstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorGroupByOutputType[P]>
        }
      >
    >


  export type InstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    title?: boolean
    birthDate?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    contactAddress?: boolean
    nationalID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    title?: boolean
    birthDate?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    contactAddress?: boolean
    nationalID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $InstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instructor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      title: string
      birthDate: Date
      contactPhone: string
      contactEmail: string
      contactAddress: string
      nationalID: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["instructor"]>
    composites: {}
  }


  type InstructorGetPayload<S extends boolean | null | undefined | InstructorDefaultArgs> = $Result.GetResult<Prisma.$InstructorPayload, S>

  type InstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InstructorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InstructorCountAggregateInputType | true
    }

  export interface InstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instructor'], meta: { name: 'Instructor' } }
    /**
     * Find zero or one Instructor that matches the filter.
     * @param {InstructorFindUniqueArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InstructorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InstructorFindUniqueArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Instructor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InstructorFindUniqueOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InstructorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InstructorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Instructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InstructorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InstructorFindFirstArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Instructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InstructorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InstructorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructors
     * const instructors = await prisma.instructor.findMany()
     * 
     * // Get first 10 Instructors
     * const instructors = await prisma.instructor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorWithIdOnly = await prisma.instructor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InstructorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InstructorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Instructor.
     * @param {InstructorCreateArgs} args - Arguments to create a Instructor.
     * @example
     * // Create one Instructor
     * const Instructor = await prisma.instructor.create({
     *   data: {
     *     // ... data to create a Instructor
     *   }
     * })
     * 
    **/
    create<T extends InstructorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InstructorCreateArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Instructors.
     *     @param {InstructorCreateManyArgs} args - Arguments to create many Instructors.
     *     @example
     *     // Create many Instructors
     *     const instructor = await prisma.instructor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InstructorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InstructorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Instructor.
     * @param {InstructorDeleteArgs} args - Arguments to delete one Instructor.
     * @example
     * // Delete one Instructor
     * const Instructor = await prisma.instructor.delete({
     *   where: {
     *     // ... filter to delete one Instructor
     *   }
     * })
     * 
    **/
    delete<T extends InstructorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InstructorDeleteArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Instructor.
     * @param {InstructorUpdateArgs} args - Arguments to update one Instructor.
     * @example
     * // Update one Instructor
     * const instructor = await prisma.instructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InstructorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InstructorUpdateArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Instructors.
     * @param {InstructorDeleteManyArgs} args - Arguments to filter Instructors to delete.
     * @example
     * // Delete a few Instructors
     * const { count } = await prisma.instructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InstructorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InstructorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InstructorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InstructorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Instructor.
     * @param {InstructorUpsertArgs} args - Arguments to update or create a Instructor.
     * @example
     * // Update or create a Instructor
     * const instructor = await prisma.instructor.upsert({
     *   create: {
     *     // ... data to create a Instructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructor we want to update
     *   }
     * })
    **/
    upsert<T extends InstructorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InstructorUpsertArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorCountArgs} args - Arguments to filter Instructors to count.
     * @example
     * // Count the number of Instructors
     * const count = await prisma.instructor.count({
     *   where: {
     *     // ... the filter for the Instructors we want to count
     *   }
     * })
    **/
    count<T extends InstructorCountArgs>(
      args?: Subset<T, InstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstructorAggregateArgs>(args: Subset<T, InstructorAggregateArgs>): Prisma.PrismaPromise<GetInstructorAggregateType<T>>

    /**
     * Group by Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorGroupByArgs} args - Group by arguments.
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
      T extends InstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorGroupByArgs['orderBy'] }
        : { orderBy?: InstructorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instructor model
   */
  readonly fields: InstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Instructor model
   */ 
  interface InstructorFieldRefs {
    readonly id: FieldRef<"Instructor", 'Int'>
    readonly firstName: FieldRef<"Instructor", 'String'>
    readonly lastName: FieldRef<"Instructor", 'String'>
    readonly title: FieldRef<"Instructor", 'String'>
    readonly birthDate: FieldRef<"Instructor", 'DateTime'>
    readonly contactPhone: FieldRef<"Instructor", 'String'>
    readonly contactEmail: FieldRef<"Instructor", 'String'>
    readonly contactAddress: FieldRef<"Instructor", 'String'>
    readonly nationalID: FieldRef<"Instructor", 'String'>
    readonly createdAt: FieldRef<"Instructor", 'DateTime'>
    readonly updatedAt: FieldRef<"Instructor", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Instructor findUnique
   */
  export type InstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }


  /**
   * Instructor findUniqueOrThrow
   */
  export type InstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }


  /**
   * Instructor findFirst
   */
  export type InstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }


  /**
   * Instructor findFirstOrThrow
   */
  export type InstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }


  /**
   * Instructor findMany
   */
  export type InstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Filter, which Instructors to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }


  /**
   * Instructor create
   */
  export type InstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * The data needed to create a Instructor.
     */
    data: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
  }


  /**
   * Instructor createMany
   */
  export type InstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Instructor update
   */
  export type InstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * The data needed to update a Instructor.
     */
    data: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
    /**
     * Choose, which Instructor to update.
     */
    where: InstructorWhereUniqueInput
  }


  /**
   * Instructor updateMany
   */
  export type InstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
  }


  /**
   * Instructor upsert
   */
  export type InstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * The filter to search for the Instructor to update in case it exists.
     */
    where: InstructorWhereUniqueInput
    /**
     * In case the Instructor found by the `where` argument doesn't exist, create a new Instructor with this data.
     */
    create: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
    /**
     * In case the Instructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
  }


  /**
   * Instructor delete
   */
  export type InstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Filter which Instructor to delete.
     */
    where: InstructorWhereUniqueInput
  }


  /**
   * Instructor deleteMany
   */
  export type InstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructors to delete
     */
    where?: InstructorWhereInput
  }


  /**
   * Instructor without action
   */
  export type InstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
  }



  /**
   * Model CourseFeedback
   */

  export type AggregateCourseFeedback = {
    _count: CourseFeedbackCountAggregateOutputType | null
    _avg: CourseFeedbackAvgAggregateOutputType | null
    _sum: CourseFeedbackSumAggregateOutputType | null
    _min: CourseFeedbackMinAggregateOutputType | null
    _max: CourseFeedbackMaxAggregateOutputType | null
  }

  export type CourseFeedbackAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    createdBy: number | null
  }

  export type CourseFeedbackSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    createdBy: number | null
  }

  export type CourseFeedbackMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    feedbackDetail: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseFeedbackMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    feedbackDetail: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseFeedbackCountAggregateOutputType = {
    id: number
    courseId: number
    feedbackDetail: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseFeedbackAvgAggregateInputType = {
    id?: true
    courseId?: true
    createdBy?: true
  }

  export type CourseFeedbackSumAggregateInputType = {
    id?: true
    courseId?: true
    createdBy?: true
  }

  export type CourseFeedbackMinAggregateInputType = {
    id?: true
    courseId?: true
    feedbackDetail?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseFeedbackMaxAggregateInputType = {
    id?: true
    courseId?: true
    feedbackDetail?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseFeedbackCountAggregateInputType = {
    id?: true
    courseId?: true
    feedbackDetail?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseFeedback to aggregate.
     */
    where?: CourseFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseFeedbacks to fetch.
     */
    orderBy?: CourseFeedbackOrderByWithRelationInput | CourseFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseFeedbacks
    **/
    _count?: true | CourseFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseFeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseFeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseFeedbackMaxAggregateInputType
  }

  export type GetCourseFeedbackAggregateType<T extends CourseFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseFeedback[P]>
      : GetScalarType<T[P], AggregateCourseFeedback[P]>
  }




  export type CourseFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseFeedbackWhereInput
    orderBy?: CourseFeedbackOrderByWithAggregationInput | CourseFeedbackOrderByWithAggregationInput[]
    by: CourseFeedbackScalarFieldEnum[] | CourseFeedbackScalarFieldEnum
    having?: CourseFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseFeedbackCountAggregateInputType | true
    _avg?: CourseFeedbackAvgAggregateInputType
    _sum?: CourseFeedbackSumAggregateInputType
    _min?: CourseFeedbackMinAggregateInputType
    _max?: CourseFeedbackMaxAggregateInputType
  }

  export type CourseFeedbackGroupByOutputType = {
    id: number
    courseId: number
    feedbackDetail: string
    createdBy: number
    createdAt: Date
    updatedAt: Date
    _count: CourseFeedbackCountAggregateOutputType | null
    _avg: CourseFeedbackAvgAggregateOutputType | null
    _sum: CourseFeedbackSumAggregateOutputType | null
    _min: CourseFeedbackMinAggregateOutputType | null
    _max: CourseFeedbackMaxAggregateOutputType | null
  }

  type GetCourseFeedbackGroupByPayload<T extends CourseFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], CourseFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type CourseFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    feedbackDetail?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["courseFeedback"]>

  export type CourseFeedbackSelectScalar = {
    id?: boolean
    courseId?: boolean
    feedbackDetail?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CourseFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseFeedback"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      feedbackDetail: string
      createdBy: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseFeedback"]>
    composites: {}
  }


  type CourseFeedbackGetPayload<S extends boolean | null | undefined | CourseFeedbackDefaultArgs> = $Result.GetResult<Prisma.$CourseFeedbackPayload, S>

  type CourseFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseFeedbackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseFeedbackCountAggregateInputType | true
    }

  export interface CourseFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseFeedback'], meta: { name: 'CourseFeedback' } }
    /**
     * Find zero or one CourseFeedback that matches the filter.
     * @param {CourseFeedbackFindUniqueArgs} args - Arguments to find a CourseFeedback
     * @example
     * // Get one CourseFeedback
     * const courseFeedback = await prisma.courseFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseFeedbackFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourseFeedbackFindUniqueArgs<ExtArgs>>
    ): Prisma__CourseFeedbackClient<$Result.GetResult<Prisma.$CourseFeedbackPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CourseFeedback that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseFeedbackFindUniqueOrThrowArgs} args - Arguments to find a CourseFeedback
     * @example
     * // Get one CourseFeedback
     * const courseFeedback = await prisma.courseFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseFeedbackFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFeedbackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseFeedbackClient<$Result.GetResult<Prisma.$CourseFeedbackPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CourseFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFeedbackFindFirstArgs} args - Arguments to find a CourseFeedback
     * @example
     * // Get one CourseFeedback
     * const courseFeedback = await prisma.courseFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseFeedbackFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFeedbackFindFirstArgs<ExtArgs>>
    ): Prisma__CourseFeedbackClient<$Result.GetResult<Prisma.$CourseFeedbackPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CourseFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFeedbackFindFirstOrThrowArgs} args - Arguments to find a CourseFeedback
     * @example
     * // Get one CourseFeedback
     * const courseFeedback = await prisma.courseFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseFeedbackFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFeedbackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseFeedbackClient<$Result.GetResult<Prisma.$CourseFeedbackPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CourseFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFeedbackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseFeedbacks
     * const courseFeedbacks = await prisma.courseFeedback.findMany()
     * 
     * // Get first 10 CourseFeedbacks
     * const courseFeedbacks = await prisma.courseFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseFeedbackWithIdOnly = await prisma.courseFeedback.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseFeedbackFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFeedbackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseFeedbackPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CourseFeedback.
     * @param {CourseFeedbackCreateArgs} args - Arguments to create a CourseFeedback.
     * @example
     * // Create one CourseFeedback
     * const CourseFeedback = await prisma.courseFeedback.create({
     *   data: {
     *     // ... data to create a CourseFeedback
     *   }
     * })
     * 
    **/
    create<T extends CourseFeedbackCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseFeedbackCreateArgs<ExtArgs>>
    ): Prisma__CourseFeedbackClient<$Result.GetResult<Prisma.$CourseFeedbackPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CourseFeedbacks.
     *     @param {CourseFeedbackCreateManyArgs} args - Arguments to create many CourseFeedbacks.
     *     @example
     *     // Create many CourseFeedbacks
     *     const courseFeedback = await prisma.courseFeedback.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseFeedbackCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFeedbackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CourseFeedback.
     * @param {CourseFeedbackDeleteArgs} args - Arguments to delete one CourseFeedback.
     * @example
     * // Delete one CourseFeedback
     * const CourseFeedback = await prisma.courseFeedback.delete({
     *   where: {
     *     // ... filter to delete one CourseFeedback
     *   }
     * })
     * 
    **/
    delete<T extends CourseFeedbackDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseFeedbackDeleteArgs<ExtArgs>>
    ): Prisma__CourseFeedbackClient<$Result.GetResult<Prisma.$CourseFeedbackPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CourseFeedback.
     * @param {CourseFeedbackUpdateArgs} args - Arguments to update one CourseFeedback.
     * @example
     * // Update one CourseFeedback
     * const courseFeedback = await prisma.courseFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseFeedbackUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseFeedbackUpdateArgs<ExtArgs>>
    ): Prisma__CourseFeedbackClient<$Result.GetResult<Prisma.$CourseFeedbackPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CourseFeedbacks.
     * @param {CourseFeedbackDeleteManyArgs} args - Arguments to filter CourseFeedbacks to delete.
     * @example
     * // Delete a few CourseFeedbacks
     * const { count } = await prisma.courseFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseFeedbackDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFeedbackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseFeedbacks
     * const courseFeedback = await prisma.courseFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseFeedbackUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseFeedbackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseFeedback.
     * @param {CourseFeedbackUpsertArgs} args - Arguments to update or create a CourseFeedback.
     * @example
     * // Update or create a CourseFeedback
     * const courseFeedback = await prisma.courseFeedback.upsert({
     *   create: {
     *     // ... data to create a CourseFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseFeedback we want to update
     *   }
     * })
    **/
    upsert<T extends CourseFeedbackUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseFeedbackUpsertArgs<ExtArgs>>
    ): Prisma__CourseFeedbackClient<$Result.GetResult<Prisma.$CourseFeedbackPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CourseFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFeedbackCountArgs} args - Arguments to filter CourseFeedbacks to count.
     * @example
     * // Count the number of CourseFeedbacks
     * const count = await prisma.courseFeedback.count({
     *   where: {
     *     // ... the filter for the CourseFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends CourseFeedbackCountArgs>(
      args?: Subset<T, CourseFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseFeedbackAggregateArgs>(args: Subset<T, CourseFeedbackAggregateArgs>): Prisma.PrismaPromise<GetCourseFeedbackAggregateType<T>>

    /**
     * Group by CourseFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFeedbackGroupByArgs} args - Group by arguments.
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
      T extends CourseFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: CourseFeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseFeedback model
   */
  readonly fields: CourseFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CourseFeedback model
   */ 
  interface CourseFeedbackFieldRefs {
    readonly id: FieldRef<"CourseFeedback", 'Int'>
    readonly courseId: FieldRef<"CourseFeedback", 'Int'>
    readonly feedbackDetail: FieldRef<"CourseFeedback", 'String'>
    readonly createdBy: FieldRef<"CourseFeedback", 'Int'>
    readonly createdAt: FieldRef<"CourseFeedback", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseFeedback", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CourseFeedback findUnique
   */
  export type CourseFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFeedback
     */
    select?: CourseFeedbackSelect<ExtArgs> | null
    /**
     * Filter, which CourseFeedback to fetch.
     */
    where: CourseFeedbackWhereUniqueInput
  }


  /**
   * CourseFeedback findUniqueOrThrow
   */
  export type CourseFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFeedback
     */
    select?: CourseFeedbackSelect<ExtArgs> | null
    /**
     * Filter, which CourseFeedback to fetch.
     */
    where: CourseFeedbackWhereUniqueInput
  }


  /**
   * CourseFeedback findFirst
   */
  export type CourseFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFeedback
     */
    select?: CourseFeedbackSelect<ExtArgs> | null
    /**
     * Filter, which CourseFeedback to fetch.
     */
    where?: CourseFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseFeedbacks to fetch.
     */
    orderBy?: CourseFeedbackOrderByWithRelationInput | CourseFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseFeedbacks.
     */
    cursor?: CourseFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseFeedbacks.
     */
    distinct?: CourseFeedbackScalarFieldEnum | CourseFeedbackScalarFieldEnum[]
  }


  /**
   * CourseFeedback findFirstOrThrow
   */
  export type CourseFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFeedback
     */
    select?: CourseFeedbackSelect<ExtArgs> | null
    /**
     * Filter, which CourseFeedback to fetch.
     */
    where?: CourseFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseFeedbacks to fetch.
     */
    orderBy?: CourseFeedbackOrderByWithRelationInput | CourseFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseFeedbacks.
     */
    cursor?: CourseFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseFeedbacks.
     */
    distinct?: CourseFeedbackScalarFieldEnum | CourseFeedbackScalarFieldEnum[]
  }


  /**
   * CourseFeedback findMany
   */
  export type CourseFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFeedback
     */
    select?: CourseFeedbackSelect<ExtArgs> | null
    /**
     * Filter, which CourseFeedbacks to fetch.
     */
    where?: CourseFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseFeedbacks to fetch.
     */
    orderBy?: CourseFeedbackOrderByWithRelationInput | CourseFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseFeedbacks.
     */
    cursor?: CourseFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseFeedbacks.
     */
    skip?: number
    distinct?: CourseFeedbackScalarFieldEnum | CourseFeedbackScalarFieldEnum[]
  }


  /**
   * CourseFeedback create
   */
  export type CourseFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFeedback
     */
    select?: CourseFeedbackSelect<ExtArgs> | null
    /**
     * The data needed to create a CourseFeedback.
     */
    data: XOR<CourseFeedbackCreateInput, CourseFeedbackUncheckedCreateInput>
  }


  /**
   * CourseFeedback createMany
   */
  export type CourseFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseFeedbacks.
     */
    data: CourseFeedbackCreateManyInput | CourseFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CourseFeedback update
   */
  export type CourseFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFeedback
     */
    select?: CourseFeedbackSelect<ExtArgs> | null
    /**
     * The data needed to update a CourseFeedback.
     */
    data: XOR<CourseFeedbackUpdateInput, CourseFeedbackUncheckedUpdateInput>
    /**
     * Choose, which CourseFeedback to update.
     */
    where: CourseFeedbackWhereUniqueInput
  }


  /**
   * CourseFeedback updateMany
   */
  export type CourseFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseFeedbacks.
     */
    data: XOR<CourseFeedbackUpdateManyMutationInput, CourseFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which CourseFeedbacks to update
     */
    where?: CourseFeedbackWhereInput
  }


  /**
   * CourseFeedback upsert
   */
  export type CourseFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFeedback
     */
    select?: CourseFeedbackSelect<ExtArgs> | null
    /**
     * The filter to search for the CourseFeedback to update in case it exists.
     */
    where: CourseFeedbackWhereUniqueInput
    /**
     * In case the CourseFeedback found by the `where` argument doesn't exist, create a new CourseFeedback with this data.
     */
    create: XOR<CourseFeedbackCreateInput, CourseFeedbackUncheckedCreateInput>
    /**
     * In case the CourseFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseFeedbackUpdateInput, CourseFeedbackUncheckedUpdateInput>
  }


  /**
   * CourseFeedback delete
   */
  export type CourseFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFeedback
     */
    select?: CourseFeedbackSelect<ExtArgs> | null
    /**
     * Filter which CourseFeedback to delete.
     */
    where: CourseFeedbackWhereUniqueInput
  }


  /**
   * CourseFeedback deleteMany
   */
  export type CourseFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseFeedbacks to delete
     */
    where?: CourseFeedbackWhereInput
  }


  /**
   * CourseFeedback without action
   */
  export type CourseFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFeedback
     */
    select?: CourseFeedbackSelect<ExtArgs> | null
  }



  /**
   * Model CourseSchedule
   */

  export type AggregateCourseSchedule = {
    _count: CourseScheduleCountAggregateOutputType | null
    _avg: CourseScheduleAvgAggregateOutputType | null
    _sum: CourseScheduleSumAggregateOutputType | null
    _min: CourseScheduleMinAggregateOutputType | null
    _max: CourseScheduleMaxAggregateOutputType | null
  }

  export type CourseScheduleAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    scheduleBy: number | null
  }

  export type CourseScheduleSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    scheduleBy: number | null
  }

  export type CourseScheduleMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    scheduleBy: number | null
    courseStartDate: Date | null
    courseEndDate: Date | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseScheduleMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    scheduleBy: number | null
    courseStartDate: Date | null
    courseEndDate: Date | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseScheduleCountAggregateOutputType = {
    id: number
    courseId: number
    scheduleBy: number
    courseStartDate: number
    courseEndDate: number
    remark: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseScheduleAvgAggregateInputType = {
    id?: true
    courseId?: true
    scheduleBy?: true
  }

  export type CourseScheduleSumAggregateInputType = {
    id?: true
    courseId?: true
    scheduleBy?: true
  }

  export type CourseScheduleMinAggregateInputType = {
    id?: true
    courseId?: true
    scheduleBy?: true
    courseStartDate?: true
    courseEndDate?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseScheduleMaxAggregateInputType = {
    id?: true
    courseId?: true
    scheduleBy?: true
    courseStartDate?: true
    courseEndDate?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseScheduleCountAggregateInputType = {
    id?: true
    courseId?: true
    scheduleBy?: true
    courseStartDate?: true
    courseEndDate?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseSchedule to aggregate.
     */
    where?: CourseScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseSchedules to fetch.
     */
    orderBy?: CourseScheduleOrderByWithRelationInput | CourseScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseSchedules
    **/
    _count?: true | CourseScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseScheduleMaxAggregateInputType
  }

  export type GetCourseScheduleAggregateType<T extends CourseScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseSchedule[P]>
      : GetScalarType<T[P], AggregateCourseSchedule[P]>
  }




  export type CourseScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseScheduleWhereInput
    orderBy?: CourseScheduleOrderByWithAggregationInput | CourseScheduleOrderByWithAggregationInput[]
    by: CourseScheduleScalarFieldEnum[] | CourseScheduleScalarFieldEnum
    having?: CourseScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseScheduleCountAggregateInputType | true
    _avg?: CourseScheduleAvgAggregateInputType
    _sum?: CourseScheduleSumAggregateInputType
    _min?: CourseScheduleMinAggregateInputType
    _max?: CourseScheduleMaxAggregateInputType
  }

  export type CourseScheduleGroupByOutputType = {
    id: number
    courseId: number
    scheduleBy: number
    courseStartDate: Date
    courseEndDate: Date
    remark: string
    createdAt: Date
    updatedAt: Date
    _count: CourseScheduleCountAggregateOutputType | null
    _avg: CourseScheduleAvgAggregateOutputType | null
    _sum: CourseScheduleSumAggregateOutputType | null
    _min: CourseScheduleMinAggregateOutputType | null
    _max: CourseScheduleMaxAggregateOutputType | null
  }

  type GetCourseScheduleGroupByPayload<T extends CourseScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], CourseScheduleGroupByOutputType[P]>
        }
      >
    >


  export type CourseScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    scheduleBy?: boolean
    courseStartDate?: boolean
    courseEndDate?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["courseSchedule"]>

  export type CourseScheduleSelectScalar = {
    id?: boolean
    courseId?: boolean
    scheduleBy?: boolean
    courseStartDate?: boolean
    courseEndDate?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CourseSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseSchedule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      scheduleBy: number
      courseStartDate: Date
      courseEndDate: Date
      remark: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseSchedule"]>
    composites: {}
  }


  type CourseScheduleGetPayload<S extends boolean | null | undefined | CourseScheduleDefaultArgs> = $Result.GetResult<Prisma.$CourseSchedulePayload, S>

  type CourseScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseScheduleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseScheduleCountAggregateInputType | true
    }

  export interface CourseScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseSchedule'], meta: { name: 'CourseSchedule' } }
    /**
     * Find zero or one CourseSchedule that matches the filter.
     * @param {CourseScheduleFindUniqueArgs} args - Arguments to find a CourseSchedule
     * @example
     * // Get one CourseSchedule
     * const courseSchedule = await prisma.courseSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseScheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourseScheduleFindUniqueArgs<ExtArgs>>
    ): Prisma__CourseScheduleClient<$Result.GetResult<Prisma.$CourseSchedulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CourseSchedule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseScheduleFindUniqueOrThrowArgs} args - Arguments to find a CourseSchedule
     * @example
     * // Get one CourseSchedule
     * const courseSchedule = await prisma.courseSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseScheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseScheduleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseScheduleClient<$Result.GetResult<Prisma.$CourseSchedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CourseSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseScheduleFindFirstArgs} args - Arguments to find a CourseSchedule
     * @example
     * // Get one CourseSchedule
     * const courseSchedule = await prisma.courseSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseScheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseScheduleFindFirstArgs<ExtArgs>>
    ): Prisma__CourseScheduleClient<$Result.GetResult<Prisma.$CourseSchedulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CourseSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseScheduleFindFirstOrThrowArgs} args - Arguments to find a CourseSchedule
     * @example
     * // Get one CourseSchedule
     * const courseSchedule = await prisma.courseSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseScheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseScheduleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseScheduleClient<$Result.GetResult<Prisma.$CourseSchedulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CourseSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseScheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseSchedules
     * const courseSchedules = await prisma.courseSchedule.findMany()
     * 
     * // Get first 10 CourseSchedules
     * const courseSchedules = await prisma.courseSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseScheduleWithIdOnly = await prisma.courseSchedule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseScheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseScheduleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseSchedulePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CourseSchedule.
     * @param {CourseScheduleCreateArgs} args - Arguments to create a CourseSchedule.
     * @example
     * // Create one CourseSchedule
     * const CourseSchedule = await prisma.courseSchedule.create({
     *   data: {
     *     // ... data to create a CourseSchedule
     *   }
     * })
     * 
    **/
    create<T extends CourseScheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseScheduleCreateArgs<ExtArgs>>
    ): Prisma__CourseScheduleClient<$Result.GetResult<Prisma.$CourseSchedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CourseSchedules.
     *     @param {CourseScheduleCreateManyArgs} args - Arguments to create many CourseSchedules.
     *     @example
     *     // Create many CourseSchedules
     *     const courseSchedule = await prisma.courseSchedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseScheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseScheduleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CourseSchedule.
     * @param {CourseScheduleDeleteArgs} args - Arguments to delete one CourseSchedule.
     * @example
     * // Delete one CourseSchedule
     * const CourseSchedule = await prisma.courseSchedule.delete({
     *   where: {
     *     // ... filter to delete one CourseSchedule
     *   }
     * })
     * 
    **/
    delete<T extends CourseScheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseScheduleDeleteArgs<ExtArgs>>
    ): Prisma__CourseScheduleClient<$Result.GetResult<Prisma.$CourseSchedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CourseSchedule.
     * @param {CourseScheduleUpdateArgs} args - Arguments to update one CourseSchedule.
     * @example
     * // Update one CourseSchedule
     * const courseSchedule = await prisma.courseSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseScheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseScheduleUpdateArgs<ExtArgs>>
    ): Prisma__CourseScheduleClient<$Result.GetResult<Prisma.$CourseSchedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CourseSchedules.
     * @param {CourseScheduleDeleteManyArgs} args - Arguments to filter CourseSchedules to delete.
     * @example
     * // Delete a few CourseSchedules
     * const { count } = await prisma.courseSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseScheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseScheduleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseSchedules
     * const courseSchedule = await prisma.courseSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseScheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseScheduleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseSchedule.
     * @param {CourseScheduleUpsertArgs} args - Arguments to update or create a CourseSchedule.
     * @example
     * // Update or create a CourseSchedule
     * const courseSchedule = await prisma.courseSchedule.upsert({
     *   create: {
     *     // ... data to create a CourseSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseSchedule we want to update
     *   }
     * })
    **/
    upsert<T extends CourseScheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseScheduleUpsertArgs<ExtArgs>>
    ): Prisma__CourseScheduleClient<$Result.GetResult<Prisma.$CourseSchedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CourseSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseScheduleCountArgs} args - Arguments to filter CourseSchedules to count.
     * @example
     * // Count the number of CourseSchedules
     * const count = await prisma.courseSchedule.count({
     *   where: {
     *     // ... the filter for the CourseSchedules we want to count
     *   }
     * })
    **/
    count<T extends CourseScheduleCountArgs>(
      args?: Subset<T, CourseScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseScheduleAggregateArgs>(args: Subset<T, CourseScheduleAggregateArgs>): Prisma.PrismaPromise<GetCourseScheduleAggregateType<T>>

    /**
     * Group by CourseSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseScheduleGroupByArgs} args - Group by arguments.
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
      T extends CourseScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseScheduleGroupByArgs['orderBy'] }
        : { orderBy?: CourseScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseSchedule model
   */
  readonly fields: CourseScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CourseSchedule model
   */ 
  interface CourseScheduleFieldRefs {
    readonly id: FieldRef<"CourseSchedule", 'Int'>
    readonly courseId: FieldRef<"CourseSchedule", 'Int'>
    readonly scheduleBy: FieldRef<"CourseSchedule", 'Int'>
    readonly courseStartDate: FieldRef<"CourseSchedule", 'DateTime'>
    readonly courseEndDate: FieldRef<"CourseSchedule", 'DateTime'>
    readonly remark: FieldRef<"CourseSchedule", 'String'>
    readonly createdAt: FieldRef<"CourseSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseSchedule", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CourseSchedule findUnique
   */
  export type CourseScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSchedule
     */
    select?: CourseScheduleSelect<ExtArgs> | null
    /**
     * Filter, which CourseSchedule to fetch.
     */
    where: CourseScheduleWhereUniqueInput
  }


  /**
   * CourseSchedule findUniqueOrThrow
   */
  export type CourseScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSchedule
     */
    select?: CourseScheduleSelect<ExtArgs> | null
    /**
     * Filter, which CourseSchedule to fetch.
     */
    where: CourseScheduleWhereUniqueInput
  }


  /**
   * CourseSchedule findFirst
   */
  export type CourseScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSchedule
     */
    select?: CourseScheduleSelect<ExtArgs> | null
    /**
     * Filter, which CourseSchedule to fetch.
     */
    where?: CourseScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseSchedules to fetch.
     */
    orderBy?: CourseScheduleOrderByWithRelationInput | CourseScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseSchedules.
     */
    cursor?: CourseScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseSchedules.
     */
    distinct?: CourseScheduleScalarFieldEnum | CourseScheduleScalarFieldEnum[]
  }


  /**
   * CourseSchedule findFirstOrThrow
   */
  export type CourseScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSchedule
     */
    select?: CourseScheduleSelect<ExtArgs> | null
    /**
     * Filter, which CourseSchedule to fetch.
     */
    where?: CourseScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseSchedules to fetch.
     */
    orderBy?: CourseScheduleOrderByWithRelationInput | CourseScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseSchedules.
     */
    cursor?: CourseScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseSchedules.
     */
    distinct?: CourseScheduleScalarFieldEnum | CourseScheduleScalarFieldEnum[]
  }


  /**
   * CourseSchedule findMany
   */
  export type CourseScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSchedule
     */
    select?: CourseScheduleSelect<ExtArgs> | null
    /**
     * Filter, which CourseSchedules to fetch.
     */
    where?: CourseScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseSchedules to fetch.
     */
    orderBy?: CourseScheduleOrderByWithRelationInput | CourseScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseSchedules.
     */
    cursor?: CourseScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseSchedules.
     */
    skip?: number
    distinct?: CourseScheduleScalarFieldEnum | CourseScheduleScalarFieldEnum[]
  }


  /**
   * CourseSchedule create
   */
  export type CourseScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSchedule
     */
    select?: CourseScheduleSelect<ExtArgs> | null
    /**
     * The data needed to create a CourseSchedule.
     */
    data: XOR<CourseScheduleCreateInput, CourseScheduleUncheckedCreateInput>
  }


  /**
   * CourseSchedule createMany
   */
  export type CourseScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseSchedules.
     */
    data: CourseScheduleCreateManyInput | CourseScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CourseSchedule update
   */
  export type CourseScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSchedule
     */
    select?: CourseScheduleSelect<ExtArgs> | null
    /**
     * The data needed to update a CourseSchedule.
     */
    data: XOR<CourseScheduleUpdateInput, CourseScheduleUncheckedUpdateInput>
    /**
     * Choose, which CourseSchedule to update.
     */
    where: CourseScheduleWhereUniqueInput
  }


  /**
   * CourseSchedule updateMany
   */
  export type CourseScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseSchedules.
     */
    data: XOR<CourseScheduleUpdateManyMutationInput, CourseScheduleUncheckedUpdateManyInput>
    /**
     * Filter which CourseSchedules to update
     */
    where?: CourseScheduleWhereInput
  }


  /**
   * CourseSchedule upsert
   */
  export type CourseScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSchedule
     */
    select?: CourseScheduleSelect<ExtArgs> | null
    /**
     * The filter to search for the CourseSchedule to update in case it exists.
     */
    where: CourseScheduleWhereUniqueInput
    /**
     * In case the CourseSchedule found by the `where` argument doesn't exist, create a new CourseSchedule with this data.
     */
    create: XOR<CourseScheduleCreateInput, CourseScheduleUncheckedCreateInput>
    /**
     * In case the CourseSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseScheduleUpdateInput, CourseScheduleUncheckedUpdateInput>
  }


  /**
   * CourseSchedule delete
   */
  export type CourseScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSchedule
     */
    select?: CourseScheduleSelect<ExtArgs> | null
    /**
     * Filter which CourseSchedule to delete.
     */
    where: CourseScheduleWhereUniqueInput
  }


  /**
   * CourseSchedule deleteMany
   */
  export type CourseScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseSchedules to delete
     */
    where?: CourseScheduleWhereInput
  }


  /**
   * CourseSchedule without action
   */
  export type CourseScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSchedule
     */
    select?: CourseScheduleSelect<ExtArgs> | null
  }



  /**
   * Model CourseExpectation
   */

  export type AggregateCourseExpectation = {
    _count: CourseExpectationCountAggregateOutputType | null
    _avg: CourseExpectationAvgAggregateOutputType | null
    _sum: CourseExpectationSumAggregateOutputType | null
    _min: CourseExpectationMinAggregateOutputType | null
    _max: CourseExpectationMaxAggregateOutputType | null
  }

  export type CourseExpectationAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    createdBy: number | null
  }

  export type CourseExpectationSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    createdBy: number | null
  }

  export type CourseExpectationMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    expectationDetail: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseExpectationMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    expectationDetail: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseExpectationCountAggregateOutputType = {
    id: number
    courseId: number
    expectationDetail: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseExpectationAvgAggregateInputType = {
    id?: true
    courseId?: true
    createdBy?: true
  }

  export type CourseExpectationSumAggregateInputType = {
    id?: true
    courseId?: true
    createdBy?: true
  }

  export type CourseExpectationMinAggregateInputType = {
    id?: true
    courseId?: true
    expectationDetail?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseExpectationMaxAggregateInputType = {
    id?: true
    courseId?: true
    expectationDetail?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseExpectationCountAggregateInputType = {
    id?: true
    courseId?: true
    expectationDetail?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseExpectationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseExpectation to aggregate.
     */
    where?: CourseExpectationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseExpectations to fetch.
     */
    orderBy?: CourseExpectationOrderByWithRelationInput | CourseExpectationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseExpectationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseExpectations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseExpectations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseExpectations
    **/
    _count?: true | CourseExpectationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseExpectationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseExpectationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseExpectationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseExpectationMaxAggregateInputType
  }

  export type GetCourseExpectationAggregateType<T extends CourseExpectationAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseExpectation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseExpectation[P]>
      : GetScalarType<T[P], AggregateCourseExpectation[P]>
  }




  export type CourseExpectationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseExpectationWhereInput
    orderBy?: CourseExpectationOrderByWithAggregationInput | CourseExpectationOrderByWithAggregationInput[]
    by: CourseExpectationScalarFieldEnum[] | CourseExpectationScalarFieldEnum
    having?: CourseExpectationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseExpectationCountAggregateInputType | true
    _avg?: CourseExpectationAvgAggregateInputType
    _sum?: CourseExpectationSumAggregateInputType
    _min?: CourseExpectationMinAggregateInputType
    _max?: CourseExpectationMaxAggregateInputType
  }

  export type CourseExpectationGroupByOutputType = {
    id: number
    courseId: number
    expectationDetail: string
    createdBy: number
    createdAt: Date
    updatedAt: Date
    _count: CourseExpectationCountAggregateOutputType | null
    _avg: CourseExpectationAvgAggregateOutputType | null
    _sum: CourseExpectationSumAggregateOutputType | null
    _min: CourseExpectationMinAggregateOutputType | null
    _max: CourseExpectationMaxAggregateOutputType | null
  }

  type GetCourseExpectationGroupByPayload<T extends CourseExpectationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseExpectationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseExpectationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseExpectationGroupByOutputType[P]>
            : GetScalarType<T[P], CourseExpectationGroupByOutputType[P]>
        }
      >
    >


  export type CourseExpectationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    expectationDetail?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["courseExpectation"]>

  export type CourseExpectationSelectScalar = {
    id?: boolean
    courseId?: boolean
    expectationDetail?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CourseExpectationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseExpectation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      expectationDetail: string
      createdBy: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseExpectation"]>
    composites: {}
  }


  type CourseExpectationGetPayload<S extends boolean | null | undefined | CourseExpectationDefaultArgs> = $Result.GetResult<Prisma.$CourseExpectationPayload, S>

  type CourseExpectationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseExpectationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseExpectationCountAggregateInputType | true
    }

  export interface CourseExpectationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseExpectation'], meta: { name: 'CourseExpectation' } }
    /**
     * Find zero or one CourseExpectation that matches the filter.
     * @param {CourseExpectationFindUniqueArgs} args - Arguments to find a CourseExpectation
     * @example
     * // Get one CourseExpectation
     * const courseExpectation = await prisma.courseExpectation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseExpectationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourseExpectationFindUniqueArgs<ExtArgs>>
    ): Prisma__CourseExpectationClient<$Result.GetResult<Prisma.$CourseExpectationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CourseExpectation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseExpectationFindUniqueOrThrowArgs} args - Arguments to find a CourseExpectation
     * @example
     * // Get one CourseExpectation
     * const courseExpectation = await prisma.courseExpectation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseExpectationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseExpectationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseExpectationClient<$Result.GetResult<Prisma.$CourseExpectationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CourseExpectation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseExpectationFindFirstArgs} args - Arguments to find a CourseExpectation
     * @example
     * // Get one CourseExpectation
     * const courseExpectation = await prisma.courseExpectation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseExpectationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseExpectationFindFirstArgs<ExtArgs>>
    ): Prisma__CourseExpectationClient<$Result.GetResult<Prisma.$CourseExpectationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CourseExpectation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseExpectationFindFirstOrThrowArgs} args - Arguments to find a CourseExpectation
     * @example
     * // Get one CourseExpectation
     * const courseExpectation = await prisma.courseExpectation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseExpectationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseExpectationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseExpectationClient<$Result.GetResult<Prisma.$CourseExpectationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CourseExpectations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseExpectationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseExpectations
     * const courseExpectations = await prisma.courseExpectation.findMany()
     * 
     * // Get first 10 CourseExpectations
     * const courseExpectations = await prisma.courseExpectation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseExpectationWithIdOnly = await prisma.courseExpectation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseExpectationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseExpectationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseExpectationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CourseExpectation.
     * @param {CourseExpectationCreateArgs} args - Arguments to create a CourseExpectation.
     * @example
     * // Create one CourseExpectation
     * const CourseExpectation = await prisma.courseExpectation.create({
     *   data: {
     *     // ... data to create a CourseExpectation
     *   }
     * })
     * 
    **/
    create<T extends CourseExpectationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseExpectationCreateArgs<ExtArgs>>
    ): Prisma__CourseExpectationClient<$Result.GetResult<Prisma.$CourseExpectationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CourseExpectations.
     *     @param {CourseExpectationCreateManyArgs} args - Arguments to create many CourseExpectations.
     *     @example
     *     // Create many CourseExpectations
     *     const courseExpectation = await prisma.courseExpectation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseExpectationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseExpectationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CourseExpectation.
     * @param {CourseExpectationDeleteArgs} args - Arguments to delete one CourseExpectation.
     * @example
     * // Delete one CourseExpectation
     * const CourseExpectation = await prisma.courseExpectation.delete({
     *   where: {
     *     // ... filter to delete one CourseExpectation
     *   }
     * })
     * 
    **/
    delete<T extends CourseExpectationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseExpectationDeleteArgs<ExtArgs>>
    ): Prisma__CourseExpectationClient<$Result.GetResult<Prisma.$CourseExpectationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CourseExpectation.
     * @param {CourseExpectationUpdateArgs} args - Arguments to update one CourseExpectation.
     * @example
     * // Update one CourseExpectation
     * const courseExpectation = await prisma.courseExpectation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseExpectationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseExpectationUpdateArgs<ExtArgs>>
    ): Prisma__CourseExpectationClient<$Result.GetResult<Prisma.$CourseExpectationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CourseExpectations.
     * @param {CourseExpectationDeleteManyArgs} args - Arguments to filter CourseExpectations to delete.
     * @example
     * // Delete a few CourseExpectations
     * const { count } = await prisma.courseExpectation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseExpectationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseExpectationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseExpectations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseExpectationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseExpectations
     * const courseExpectation = await prisma.courseExpectation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseExpectationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseExpectationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseExpectation.
     * @param {CourseExpectationUpsertArgs} args - Arguments to update or create a CourseExpectation.
     * @example
     * // Update or create a CourseExpectation
     * const courseExpectation = await prisma.courseExpectation.upsert({
     *   create: {
     *     // ... data to create a CourseExpectation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseExpectation we want to update
     *   }
     * })
    **/
    upsert<T extends CourseExpectationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseExpectationUpsertArgs<ExtArgs>>
    ): Prisma__CourseExpectationClient<$Result.GetResult<Prisma.$CourseExpectationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CourseExpectations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseExpectationCountArgs} args - Arguments to filter CourseExpectations to count.
     * @example
     * // Count the number of CourseExpectations
     * const count = await prisma.courseExpectation.count({
     *   where: {
     *     // ... the filter for the CourseExpectations we want to count
     *   }
     * })
    **/
    count<T extends CourseExpectationCountArgs>(
      args?: Subset<T, CourseExpectationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseExpectationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseExpectation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseExpectationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseExpectationAggregateArgs>(args: Subset<T, CourseExpectationAggregateArgs>): Prisma.PrismaPromise<GetCourseExpectationAggregateType<T>>

    /**
     * Group by CourseExpectation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseExpectationGroupByArgs} args - Group by arguments.
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
      T extends CourseExpectationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseExpectationGroupByArgs['orderBy'] }
        : { orderBy?: CourseExpectationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseExpectationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseExpectationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseExpectation model
   */
  readonly fields: CourseExpectationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseExpectation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseExpectationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CourseExpectation model
   */ 
  interface CourseExpectationFieldRefs {
    readonly id: FieldRef<"CourseExpectation", 'Int'>
    readonly courseId: FieldRef<"CourseExpectation", 'Int'>
    readonly expectationDetail: FieldRef<"CourseExpectation", 'String'>
    readonly createdBy: FieldRef<"CourseExpectation", 'Int'>
    readonly createdAt: FieldRef<"CourseExpectation", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseExpectation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CourseExpectation findUnique
   */
  export type CourseExpectationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseExpectation
     */
    select?: CourseExpectationSelect<ExtArgs> | null
    /**
     * Filter, which CourseExpectation to fetch.
     */
    where: CourseExpectationWhereUniqueInput
  }


  /**
   * CourseExpectation findUniqueOrThrow
   */
  export type CourseExpectationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseExpectation
     */
    select?: CourseExpectationSelect<ExtArgs> | null
    /**
     * Filter, which CourseExpectation to fetch.
     */
    where: CourseExpectationWhereUniqueInput
  }


  /**
   * CourseExpectation findFirst
   */
  export type CourseExpectationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseExpectation
     */
    select?: CourseExpectationSelect<ExtArgs> | null
    /**
     * Filter, which CourseExpectation to fetch.
     */
    where?: CourseExpectationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseExpectations to fetch.
     */
    orderBy?: CourseExpectationOrderByWithRelationInput | CourseExpectationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseExpectations.
     */
    cursor?: CourseExpectationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseExpectations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseExpectations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseExpectations.
     */
    distinct?: CourseExpectationScalarFieldEnum | CourseExpectationScalarFieldEnum[]
  }


  /**
   * CourseExpectation findFirstOrThrow
   */
  export type CourseExpectationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseExpectation
     */
    select?: CourseExpectationSelect<ExtArgs> | null
    /**
     * Filter, which CourseExpectation to fetch.
     */
    where?: CourseExpectationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseExpectations to fetch.
     */
    orderBy?: CourseExpectationOrderByWithRelationInput | CourseExpectationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseExpectations.
     */
    cursor?: CourseExpectationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseExpectations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseExpectations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseExpectations.
     */
    distinct?: CourseExpectationScalarFieldEnum | CourseExpectationScalarFieldEnum[]
  }


  /**
   * CourseExpectation findMany
   */
  export type CourseExpectationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseExpectation
     */
    select?: CourseExpectationSelect<ExtArgs> | null
    /**
     * Filter, which CourseExpectations to fetch.
     */
    where?: CourseExpectationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseExpectations to fetch.
     */
    orderBy?: CourseExpectationOrderByWithRelationInput | CourseExpectationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseExpectations.
     */
    cursor?: CourseExpectationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseExpectations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseExpectations.
     */
    skip?: number
    distinct?: CourseExpectationScalarFieldEnum | CourseExpectationScalarFieldEnum[]
  }


  /**
   * CourseExpectation create
   */
  export type CourseExpectationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseExpectation
     */
    select?: CourseExpectationSelect<ExtArgs> | null
    /**
     * The data needed to create a CourseExpectation.
     */
    data: XOR<CourseExpectationCreateInput, CourseExpectationUncheckedCreateInput>
  }


  /**
   * CourseExpectation createMany
   */
  export type CourseExpectationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseExpectations.
     */
    data: CourseExpectationCreateManyInput | CourseExpectationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CourseExpectation update
   */
  export type CourseExpectationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseExpectation
     */
    select?: CourseExpectationSelect<ExtArgs> | null
    /**
     * The data needed to update a CourseExpectation.
     */
    data: XOR<CourseExpectationUpdateInput, CourseExpectationUncheckedUpdateInput>
    /**
     * Choose, which CourseExpectation to update.
     */
    where: CourseExpectationWhereUniqueInput
  }


  /**
   * CourseExpectation updateMany
   */
  export type CourseExpectationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseExpectations.
     */
    data: XOR<CourseExpectationUpdateManyMutationInput, CourseExpectationUncheckedUpdateManyInput>
    /**
     * Filter which CourseExpectations to update
     */
    where?: CourseExpectationWhereInput
  }


  /**
   * CourseExpectation upsert
   */
  export type CourseExpectationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseExpectation
     */
    select?: CourseExpectationSelect<ExtArgs> | null
    /**
     * The filter to search for the CourseExpectation to update in case it exists.
     */
    where: CourseExpectationWhereUniqueInput
    /**
     * In case the CourseExpectation found by the `where` argument doesn't exist, create a new CourseExpectation with this data.
     */
    create: XOR<CourseExpectationCreateInput, CourseExpectationUncheckedCreateInput>
    /**
     * In case the CourseExpectation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseExpectationUpdateInput, CourseExpectationUncheckedUpdateInput>
  }


  /**
   * CourseExpectation delete
   */
  export type CourseExpectationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseExpectation
     */
    select?: CourseExpectationSelect<ExtArgs> | null
    /**
     * Filter which CourseExpectation to delete.
     */
    where: CourseExpectationWhereUniqueInput
  }


  /**
   * CourseExpectation deleteMany
   */
  export type CourseExpectationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseExpectations to delete
     */
    where?: CourseExpectationWhereInput
  }


  /**
   * CourseExpectation without action
   */
  export type CourseExpectationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseExpectation
     */
    select?: CourseExpectationSelect<ExtArgs> | null
  }



  /**
   * Model CourseRequirement
   */

  export type AggregateCourseRequirement = {
    _count: CourseRequirementCountAggregateOutputType | null
    _avg: CourseRequirementAvgAggregateOutputType | null
    _sum: CourseRequirementSumAggregateOutputType | null
    _min: CourseRequirementMinAggregateOutputType | null
    _max: CourseRequirementMaxAggregateOutputType | null
  }

  export type CourseRequirementAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    createdBy: number | null
  }

  export type CourseRequirementSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    createdBy: number | null
  }

  export type CourseRequirementMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    requirementDetail: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseRequirementMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    requirementDetail: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseRequirementCountAggregateOutputType = {
    id: number
    courseId: number
    requirementDetail: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseRequirementAvgAggregateInputType = {
    id?: true
    courseId?: true
    createdBy?: true
  }

  export type CourseRequirementSumAggregateInputType = {
    id?: true
    courseId?: true
    createdBy?: true
  }

  export type CourseRequirementMinAggregateInputType = {
    id?: true
    courseId?: true
    requirementDetail?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseRequirementMaxAggregateInputType = {
    id?: true
    courseId?: true
    requirementDetail?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseRequirementCountAggregateInputType = {
    id?: true
    courseId?: true
    requirementDetail?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseRequirement to aggregate.
     */
    where?: CourseRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseRequirements to fetch.
     */
    orderBy?: CourseRequirementOrderByWithRelationInput | CourseRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseRequirements
    **/
    _count?: true | CourseRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseRequirementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseRequirementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseRequirementMaxAggregateInputType
  }

  export type GetCourseRequirementAggregateType<T extends CourseRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseRequirement[P]>
      : GetScalarType<T[P], AggregateCourseRequirement[P]>
  }




  export type CourseRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseRequirementWhereInput
    orderBy?: CourseRequirementOrderByWithAggregationInput | CourseRequirementOrderByWithAggregationInput[]
    by: CourseRequirementScalarFieldEnum[] | CourseRequirementScalarFieldEnum
    having?: CourseRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseRequirementCountAggregateInputType | true
    _avg?: CourseRequirementAvgAggregateInputType
    _sum?: CourseRequirementSumAggregateInputType
    _min?: CourseRequirementMinAggregateInputType
    _max?: CourseRequirementMaxAggregateInputType
  }

  export type CourseRequirementGroupByOutputType = {
    id: number
    courseId: number
    requirementDetail: string
    createdBy: number
    createdAt: Date
    updatedAt: Date
    _count: CourseRequirementCountAggregateOutputType | null
    _avg: CourseRequirementAvgAggregateOutputType | null
    _sum: CourseRequirementSumAggregateOutputType | null
    _min: CourseRequirementMinAggregateOutputType | null
    _max: CourseRequirementMaxAggregateOutputType | null
  }

  type GetCourseRequirementGroupByPayload<T extends CourseRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], CourseRequirementGroupByOutputType[P]>
        }
      >
    >


  export type CourseRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    requirementDetail?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["courseRequirement"]>

  export type CourseRequirementSelectScalar = {
    id?: boolean
    courseId?: boolean
    requirementDetail?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CourseRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseRequirement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      requirementDetail: string
      createdBy: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseRequirement"]>
    composites: {}
  }


  type CourseRequirementGetPayload<S extends boolean | null | undefined | CourseRequirementDefaultArgs> = $Result.GetResult<Prisma.$CourseRequirementPayload, S>

  type CourseRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseRequirementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseRequirementCountAggregateInputType | true
    }

  export interface CourseRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseRequirement'], meta: { name: 'CourseRequirement' } }
    /**
     * Find zero or one CourseRequirement that matches the filter.
     * @param {CourseRequirementFindUniqueArgs} args - Arguments to find a CourseRequirement
     * @example
     * // Get one CourseRequirement
     * const courseRequirement = await prisma.courseRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseRequirementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourseRequirementFindUniqueArgs<ExtArgs>>
    ): Prisma__CourseRequirementClient<$Result.GetResult<Prisma.$CourseRequirementPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CourseRequirement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseRequirementFindUniqueOrThrowArgs} args - Arguments to find a CourseRequirement
     * @example
     * // Get one CourseRequirement
     * const courseRequirement = await prisma.courseRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseRequirementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseRequirementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseRequirementClient<$Result.GetResult<Prisma.$CourseRequirementPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CourseRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRequirementFindFirstArgs} args - Arguments to find a CourseRequirement
     * @example
     * // Get one CourseRequirement
     * const courseRequirement = await prisma.courseRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseRequirementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseRequirementFindFirstArgs<ExtArgs>>
    ): Prisma__CourseRequirementClient<$Result.GetResult<Prisma.$CourseRequirementPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CourseRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRequirementFindFirstOrThrowArgs} args - Arguments to find a CourseRequirement
     * @example
     * // Get one CourseRequirement
     * const courseRequirement = await prisma.courseRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseRequirementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseRequirementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseRequirementClient<$Result.GetResult<Prisma.$CourseRequirementPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CourseRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRequirementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseRequirements
     * const courseRequirements = await prisma.courseRequirement.findMany()
     * 
     * // Get first 10 CourseRequirements
     * const courseRequirements = await prisma.courseRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseRequirementWithIdOnly = await prisma.courseRequirement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseRequirementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseRequirementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseRequirementPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CourseRequirement.
     * @param {CourseRequirementCreateArgs} args - Arguments to create a CourseRequirement.
     * @example
     * // Create one CourseRequirement
     * const CourseRequirement = await prisma.courseRequirement.create({
     *   data: {
     *     // ... data to create a CourseRequirement
     *   }
     * })
     * 
    **/
    create<T extends CourseRequirementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseRequirementCreateArgs<ExtArgs>>
    ): Prisma__CourseRequirementClient<$Result.GetResult<Prisma.$CourseRequirementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CourseRequirements.
     *     @param {CourseRequirementCreateManyArgs} args - Arguments to create many CourseRequirements.
     *     @example
     *     // Create many CourseRequirements
     *     const courseRequirement = await prisma.courseRequirement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseRequirementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseRequirementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CourseRequirement.
     * @param {CourseRequirementDeleteArgs} args - Arguments to delete one CourseRequirement.
     * @example
     * // Delete one CourseRequirement
     * const CourseRequirement = await prisma.courseRequirement.delete({
     *   where: {
     *     // ... filter to delete one CourseRequirement
     *   }
     * })
     * 
    **/
    delete<T extends CourseRequirementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseRequirementDeleteArgs<ExtArgs>>
    ): Prisma__CourseRequirementClient<$Result.GetResult<Prisma.$CourseRequirementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CourseRequirement.
     * @param {CourseRequirementUpdateArgs} args - Arguments to update one CourseRequirement.
     * @example
     * // Update one CourseRequirement
     * const courseRequirement = await prisma.courseRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseRequirementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseRequirementUpdateArgs<ExtArgs>>
    ): Prisma__CourseRequirementClient<$Result.GetResult<Prisma.$CourseRequirementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CourseRequirements.
     * @param {CourseRequirementDeleteManyArgs} args - Arguments to filter CourseRequirements to delete.
     * @example
     * // Delete a few CourseRequirements
     * const { count } = await prisma.courseRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseRequirementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseRequirementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseRequirements
     * const courseRequirement = await prisma.courseRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseRequirementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseRequirementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseRequirement.
     * @param {CourseRequirementUpsertArgs} args - Arguments to update or create a CourseRequirement.
     * @example
     * // Update or create a CourseRequirement
     * const courseRequirement = await prisma.courseRequirement.upsert({
     *   create: {
     *     // ... data to create a CourseRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseRequirement we want to update
     *   }
     * })
    **/
    upsert<T extends CourseRequirementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseRequirementUpsertArgs<ExtArgs>>
    ): Prisma__CourseRequirementClient<$Result.GetResult<Prisma.$CourseRequirementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CourseRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRequirementCountArgs} args - Arguments to filter CourseRequirements to count.
     * @example
     * // Count the number of CourseRequirements
     * const count = await prisma.courseRequirement.count({
     *   where: {
     *     // ... the filter for the CourseRequirements we want to count
     *   }
     * })
    **/
    count<T extends CourseRequirementCountArgs>(
      args?: Subset<T, CourseRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseRequirementAggregateArgs>(args: Subset<T, CourseRequirementAggregateArgs>): Prisma.PrismaPromise<GetCourseRequirementAggregateType<T>>

    /**
     * Group by CourseRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRequirementGroupByArgs} args - Group by arguments.
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
      T extends CourseRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseRequirementGroupByArgs['orderBy'] }
        : { orderBy?: CourseRequirementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseRequirement model
   */
  readonly fields: CourseRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CourseRequirement model
   */ 
  interface CourseRequirementFieldRefs {
    readonly id: FieldRef<"CourseRequirement", 'Int'>
    readonly courseId: FieldRef<"CourseRequirement", 'Int'>
    readonly requirementDetail: FieldRef<"CourseRequirement", 'String'>
    readonly createdBy: FieldRef<"CourseRequirement", 'Int'>
    readonly createdAt: FieldRef<"CourseRequirement", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseRequirement", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CourseRequirement findUnique
   */
  export type CourseRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRequirement
     */
    select?: CourseRequirementSelect<ExtArgs> | null
    /**
     * Filter, which CourseRequirement to fetch.
     */
    where: CourseRequirementWhereUniqueInput
  }


  /**
   * CourseRequirement findUniqueOrThrow
   */
  export type CourseRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRequirement
     */
    select?: CourseRequirementSelect<ExtArgs> | null
    /**
     * Filter, which CourseRequirement to fetch.
     */
    where: CourseRequirementWhereUniqueInput
  }


  /**
   * CourseRequirement findFirst
   */
  export type CourseRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRequirement
     */
    select?: CourseRequirementSelect<ExtArgs> | null
    /**
     * Filter, which CourseRequirement to fetch.
     */
    where?: CourseRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseRequirements to fetch.
     */
    orderBy?: CourseRequirementOrderByWithRelationInput | CourseRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseRequirements.
     */
    cursor?: CourseRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseRequirements.
     */
    distinct?: CourseRequirementScalarFieldEnum | CourseRequirementScalarFieldEnum[]
  }


  /**
   * CourseRequirement findFirstOrThrow
   */
  export type CourseRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRequirement
     */
    select?: CourseRequirementSelect<ExtArgs> | null
    /**
     * Filter, which CourseRequirement to fetch.
     */
    where?: CourseRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseRequirements to fetch.
     */
    orderBy?: CourseRequirementOrderByWithRelationInput | CourseRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseRequirements.
     */
    cursor?: CourseRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseRequirements.
     */
    distinct?: CourseRequirementScalarFieldEnum | CourseRequirementScalarFieldEnum[]
  }


  /**
   * CourseRequirement findMany
   */
  export type CourseRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRequirement
     */
    select?: CourseRequirementSelect<ExtArgs> | null
    /**
     * Filter, which CourseRequirements to fetch.
     */
    where?: CourseRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseRequirements to fetch.
     */
    orderBy?: CourseRequirementOrderByWithRelationInput | CourseRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseRequirements.
     */
    cursor?: CourseRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseRequirements.
     */
    skip?: number
    distinct?: CourseRequirementScalarFieldEnum | CourseRequirementScalarFieldEnum[]
  }


  /**
   * CourseRequirement create
   */
  export type CourseRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRequirement
     */
    select?: CourseRequirementSelect<ExtArgs> | null
    /**
     * The data needed to create a CourseRequirement.
     */
    data: XOR<CourseRequirementCreateInput, CourseRequirementUncheckedCreateInput>
  }


  /**
   * CourseRequirement createMany
   */
  export type CourseRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseRequirements.
     */
    data: CourseRequirementCreateManyInput | CourseRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CourseRequirement update
   */
  export type CourseRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRequirement
     */
    select?: CourseRequirementSelect<ExtArgs> | null
    /**
     * The data needed to update a CourseRequirement.
     */
    data: XOR<CourseRequirementUpdateInput, CourseRequirementUncheckedUpdateInput>
    /**
     * Choose, which CourseRequirement to update.
     */
    where: CourseRequirementWhereUniqueInput
  }


  /**
   * CourseRequirement updateMany
   */
  export type CourseRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseRequirements.
     */
    data: XOR<CourseRequirementUpdateManyMutationInput, CourseRequirementUncheckedUpdateManyInput>
    /**
     * Filter which CourseRequirements to update
     */
    where?: CourseRequirementWhereInput
  }


  /**
   * CourseRequirement upsert
   */
  export type CourseRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRequirement
     */
    select?: CourseRequirementSelect<ExtArgs> | null
    /**
     * The filter to search for the CourseRequirement to update in case it exists.
     */
    where: CourseRequirementWhereUniqueInput
    /**
     * In case the CourseRequirement found by the `where` argument doesn't exist, create a new CourseRequirement with this data.
     */
    create: XOR<CourseRequirementCreateInput, CourseRequirementUncheckedCreateInput>
    /**
     * In case the CourseRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseRequirementUpdateInput, CourseRequirementUncheckedUpdateInput>
  }


  /**
   * CourseRequirement delete
   */
  export type CourseRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRequirement
     */
    select?: CourseRequirementSelect<ExtArgs> | null
    /**
     * Filter which CourseRequirement to delete.
     */
    where: CourseRequirementWhereUniqueInput
  }


  /**
   * CourseRequirement deleteMany
   */
  export type CourseRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseRequirements to delete
     */
    where?: CourseRequirementWhereInput
  }


  /**
   * CourseRequirement without action
   */
  export type CourseRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRequirement
     */
    select?: CourseRequirementSelect<ExtArgs> | null
  }



  /**
   * Model CoursecSection
   */

  export type AggregateCoursecSection = {
    _count: CoursecSectionCountAggregateOutputType | null
    _avg: CoursecSectionAvgAggregateOutputType | null
    _sum: CoursecSectionSumAggregateOutputType | null
    _min: CoursecSectionMinAggregateOutputType | null
    _max: CoursecSectionMaxAggregateOutputType | null
  }

  export type CoursecSectionAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    createdBy: number | null
  }

  export type CoursecSectionSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    createdBy: number | null
  }

  export type CoursecSectionMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    sectionDetail: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoursecSectionMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    sectionDetail: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoursecSectionCountAggregateOutputType = {
    id: number
    courseId: number
    sectionDetail: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoursecSectionAvgAggregateInputType = {
    id?: true
    courseId?: true
    createdBy?: true
  }

  export type CoursecSectionSumAggregateInputType = {
    id?: true
    courseId?: true
    createdBy?: true
  }

  export type CoursecSectionMinAggregateInputType = {
    id?: true
    courseId?: true
    sectionDetail?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoursecSectionMaxAggregateInputType = {
    id?: true
    courseId?: true
    sectionDetail?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoursecSectionCountAggregateInputType = {
    id?: true
    courseId?: true
    sectionDetail?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoursecSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursecSection to aggregate.
     */
    where?: CoursecSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursecSections to fetch.
     */
    orderBy?: CoursecSectionOrderByWithRelationInput | CoursecSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursecSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursecSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursecSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoursecSections
    **/
    _count?: true | CoursecSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursecSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursecSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursecSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursecSectionMaxAggregateInputType
  }

  export type GetCoursecSectionAggregateType<T extends CoursecSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCoursecSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoursecSection[P]>
      : GetScalarType<T[P], AggregateCoursecSection[P]>
  }




  export type CoursecSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursecSectionWhereInput
    orderBy?: CoursecSectionOrderByWithAggregationInput | CoursecSectionOrderByWithAggregationInput[]
    by: CoursecSectionScalarFieldEnum[] | CoursecSectionScalarFieldEnum
    having?: CoursecSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursecSectionCountAggregateInputType | true
    _avg?: CoursecSectionAvgAggregateInputType
    _sum?: CoursecSectionSumAggregateInputType
    _min?: CoursecSectionMinAggregateInputType
    _max?: CoursecSectionMaxAggregateInputType
  }

  export type CoursecSectionGroupByOutputType = {
    id: number
    courseId: number
    sectionDetail: string
    createdBy: number
    createdAt: Date
    updatedAt: Date
    _count: CoursecSectionCountAggregateOutputType | null
    _avg: CoursecSectionAvgAggregateOutputType | null
    _sum: CoursecSectionSumAggregateOutputType | null
    _min: CoursecSectionMinAggregateOutputType | null
    _max: CoursecSectionMaxAggregateOutputType | null
  }

  type GetCoursecSectionGroupByPayload<T extends CoursecSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursecSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursecSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursecSectionGroupByOutputType[P]>
            : GetScalarType<T[P], CoursecSectionGroupByOutputType[P]>
        }
      >
    >


  export type CoursecSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    sectionDetail?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coursecSection"]>

  export type CoursecSectionSelectScalar = {
    id?: boolean
    courseId?: boolean
    sectionDetail?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CoursecSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoursecSection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      sectionDetail: string
      createdBy: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coursecSection"]>
    composites: {}
  }


  type CoursecSectionGetPayload<S extends boolean | null | undefined | CoursecSectionDefaultArgs> = $Result.GetResult<Prisma.$CoursecSectionPayload, S>

  type CoursecSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CoursecSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CoursecSectionCountAggregateInputType | true
    }

  export interface CoursecSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoursecSection'], meta: { name: 'CoursecSection' } }
    /**
     * Find zero or one CoursecSection that matches the filter.
     * @param {CoursecSectionFindUniqueArgs} args - Arguments to find a CoursecSection
     * @example
     * // Get one CoursecSection
     * const coursecSection = await prisma.coursecSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CoursecSectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CoursecSectionFindUniqueArgs<ExtArgs>>
    ): Prisma__CoursecSectionClient<$Result.GetResult<Prisma.$CoursecSectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CoursecSection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CoursecSectionFindUniqueOrThrowArgs} args - Arguments to find a CoursecSection
     * @example
     * // Get one CoursecSection
     * const coursecSection = await prisma.coursecSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CoursecSectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CoursecSectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CoursecSectionClient<$Result.GetResult<Prisma.$CoursecSectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CoursecSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursecSectionFindFirstArgs} args - Arguments to find a CoursecSection
     * @example
     * // Get one CoursecSection
     * const coursecSection = await prisma.coursecSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CoursecSectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CoursecSectionFindFirstArgs<ExtArgs>>
    ): Prisma__CoursecSectionClient<$Result.GetResult<Prisma.$CoursecSectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CoursecSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursecSectionFindFirstOrThrowArgs} args - Arguments to find a CoursecSection
     * @example
     * // Get one CoursecSection
     * const coursecSection = await prisma.coursecSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CoursecSectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CoursecSectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CoursecSectionClient<$Result.GetResult<Prisma.$CoursecSectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CoursecSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursecSectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoursecSections
     * const coursecSections = await prisma.coursecSection.findMany()
     * 
     * // Get first 10 CoursecSections
     * const coursecSections = await prisma.coursecSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursecSectionWithIdOnly = await prisma.coursecSection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CoursecSectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CoursecSectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursecSectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CoursecSection.
     * @param {CoursecSectionCreateArgs} args - Arguments to create a CoursecSection.
     * @example
     * // Create one CoursecSection
     * const CoursecSection = await prisma.coursecSection.create({
     *   data: {
     *     // ... data to create a CoursecSection
     *   }
     * })
     * 
    **/
    create<T extends CoursecSectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CoursecSectionCreateArgs<ExtArgs>>
    ): Prisma__CoursecSectionClient<$Result.GetResult<Prisma.$CoursecSectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CoursecSections.
     *     @param {CoursecSectionCreateManyArgs} args - Arguments to create many CoursecSections.
     *     @example
     *     // Create many CoursecSections
     *     const coursecSection = await prisma.coursecSection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CoursecSectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CoursecSectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CoursecSection.
     * @param {CoursecSectionDeleteArgs} args - Arguments to delete one CoursecSection.
     * @example
     * // Delete one CoursecSection
     * const CoursecSection = await prisma.coursecSection.delete({
     *   where: {
     *     // ... filter to delete one CoursecSection
     *   }
     * })
     * 
    **/
    delete<T extends CoursecSectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CoursecSectionDeleteArgs<ExtArgs>>
    ): Prisma__CoursecSectionClient<$Result.GetResult<Prisma.$CoursecSectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CoursecSection.
     * @param {CoursecSectionUpdateArgs} args - Arguments to update one CoursecSection.
     * @example
     * // Update one CoursecSection
     * const coursecSection = await prisma.coursecSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CoursecSectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CoursecSectionUpdateArgs<ExtArgs>>
    ): Prisma__CoursecSectionClient<$Result.GetResult<Prisma.$CoursecSectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CoursecSections.
     * @param {CoursecSectionDeleteManyArgs} args - Arguments to filter CoursecSections to delete.
     * @example
     * // Delete a few CoursecSections
     * const { count } = await prisma.coursecSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CoursecSectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CoursecSectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoursecSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursecSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoursecSections
     * const coursecSection = await prisma.coursecSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CoursecSectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CoursecSectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoursecSection.
     * @param {CoursecSectionUpsertArgs} args - Arguments to update or create a CoursecSection.
     * @example
     * // Update or create a CoursecSection
     * const coursecSection = await prisma.coursecSection.upsert({
     *   create: {
     *     // ... data to create a CoursecSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoursecSection we want to update
     *   }
     * })
    **/
    upsert<T extends CoursecSectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CoursecSectionUpsertArgs<ExtArgs>>
    ): Prisma__CoursecSectionClient<$Result.GetResult<Prisma.$CoursecSectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CoursecSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursecSectionCountArgs} args - Arguments to filter CoursecSections to count.
     * @example
     * // Count the number of CoursecSections
     * const count = await prisma.coursecSection.count({
     *   where: {
     *     // ... the filter for the CoursecSections we want to count
     *   }
     * })
    **/
    count<T extends CoursecSectionCountArgs>(
      args?: Subset<T, CoursecSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursecSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoursecSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursecSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoursecSectionAggregateArgs>(args: Subset<T, CoursecSectionAggregateArgs>): Prisma.PrismaPromise<GetCoursecSectionAggregateType<T>>

    /**
     * Group by CoursecSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursecSectionGroupByArgs} args - Group by arguments.
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
      T extends CoursecSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursecSectionGroupByArgs['orderBy'] }
        : { orderBy?: CoursecSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoursecSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursecSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoursecSection model
   */
  readonly fields: CoursecSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoursecSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursecSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CoursecSection model
   */ 
  interface CoursecSectionFieldRefs {
    readonly id: FieldRef<"CoursecSection", 'Int'>
    readonly courseId: FieldRef<"CoursecSection", 'Int'>
    readonly sectionDetail: FieldRef<"CoursecSection", 'String'>
    readonly createdBy: FieldRef<"CoursecSection", 'Int'>
    readonly createdAt: FieldRef<"CoursecSection", 'DateTime'>
    readonly updatedAt: FieldRef<"CoursecSection", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CoursecSection findUnique
   */
  export type CoursecSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursecSection
     */
    select?: CoursecSectionSelect<ExtArgs> | null
    /**
     * Filter, which CoursecSection to fetch.
     */
    where: CoursecSectionWhereUniqueInput
  }


  /**
   * CoursecSection findUniqueOrThrow
   */
  export type CoursecSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursecSection
     */
    select?: CoursecSectionSelect<ExtArgs> | null
    /**
     * Filter, which CoursecSection to fetch.
     */
    where: CoursecSectionWhereUniqueInput
  }


  /**
   * CoursecSection findFirst
   */
  export type CoursecSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursecSection
     */
    select?: CoursecSectionSelect<ExtArgs> | null
    /**
     * Filter, which CoursecSection to fetch.
     */
    where?: CoursecSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursecSections to fetch.
     */
    orderBy?: CoursecSectionOrderByWithRelationInput | CoursecSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursecSections.
     */
    cursor?: CoursecSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursecSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursecSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursecSections.
     */
    distinct?: CoursecSectionScalarFieldEnum | CoursecSectionScalarFieldEnum[]
  }


  /**
   * CoursecSection findFirstOrThrow
   */
  export type CoursecSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursecSection
     */
    select?: CoursecSectionSelect<ExtArgs> | null
    /**
     * Filter, which CoursecSection to fetch.
     */
    where?: CoursecSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursecSections to fetch.
     */
    orderBy?: CoursecSectionOrderByWithRelationInput | CoursecSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursecSections.
     */
    cursor?: CoursecSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursecSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursecSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursecSections.
     */
    distinct?: CoursecSectionScalarFieldEnum | CoursecSectionScalarFieldEnum[]
  }


  /**
   * CoursecSection findMany
   */
  export type CoursecSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursecSection
     */
    select?: CoursecSectionSelect<ExtArgs> | null
    /**
     * Filter, which CoursecSections to fetch.
     */
    where?: CoursecSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursecSections to fetch.
     */
    orderBy?: CoursecSectionOrderByWithRelationInput | CoursecSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoursecSections.
     */
    cursor?: CoursecSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursecSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursecSections.
     */
    skip?: number
    distinct?: CoursecSectionScalarFieldEnum | CoursecSectionScalarFieldEnum[]
  }


  /**
   * CoursecSection create
   */
  export type CoursecSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursecSection
     */
    select?: CoursecSectionSelect<ExtArgs> | null
    /**
     * The data needed to create a CoursecSection.
     */
    data: XOR<CoursecSectionCreateInput, CoursecSectionUncheckedCreateInput>
  }


  /**
   * CoursecSection createMany
   */
  export type CoursecSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoursecSections.
     */
    data: CoursecSectionCreateManyInput | CoursecSectionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CoursecSection update
   */
  export type CoursecSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursecSection
     */
    select?: CoursecSectionSelect<ExtArgs> | null
    /**
     * The data needed to update a CoursecSection.
     */
    data: XOR<CoursecSectionUpdateInput, CoursecSectionUncheckedUpdateInput>
    /**
     * Choose, which CoursecSection to update.
     */
    where: CoursecSectionWhereUniqueInput
  }


  /**
   * CoursecSection updateMany
   */
  export type CoursecSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoursecSections.
     */
    data: XOR<CoursecSectionUpdateManyMutationInput, CoursecSectionUncheckedUpdateManyInput>
    /**
     * Filter which CoursecSections to update
     */
    where?: CoursecSectionWhereInput
  }


  /**
   * CoursecSection upsert
   */
  export type CoursecSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursecSection
     */
    select?: CoursecSectionSelect<ExtArgs> | null
    /**
     * The filter to search for the CoursecSection to update in case it exists.
     */
    where: CoursecSectionWhereUniqueInput
    /**
     * In case the CoursecSection found by the `where` argument doesn't exist, create a new CoursecSection with this data.
     */
    create: XOR<CoursecSectionCreateInput, CoursecSectionUncheckedCreateInput>
    /**
     * In case the CoursecSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursecSectionUpdateInput, CoursecSectionUncheckedUpdateInput>
  }


  /**
   * CoursecSection delete
   */
  export type CoursecSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursecSection
     */
    select?: CoursecSectionSelect<ExtArgs> | null
    /**
     * Filter which CoursecSection to delete.
     */
    where: CoursecSectionWhereUniqueInput
  }


  /**
   * CoursecSection deleteMany
   */
  export type CoursecSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursecSections to delete
     */
    where?: CoursecSectionWhereInput
  }


  /**
   * CoursecSection without action
   */
  export type CoursecSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursecSection
     */
    select?: CoursecSectionSelect<ExtArgs> | null
  }



  /**
   * Model CourseEnroll
   */

  export type AggregateCourseEnroll = {
    _count: CourseEnrollCountAggregateOutputType | null
    _avg: CourseEnrollAvgAggregateOutputType | null
    _sum: CourseEnrollSumAggregateOutputType | null
    _min: CourseEnrollMinAggregateOutputType | null
    _max: CourseEnrollMaxAggregateOutputType | null
  }

  export type CourseEnrollAvgAggregateOutputType = {
    id: number | null
    enrolledCourseId: number | null
    scheduleId: number | null
    enrooledUserId: number | null
  }

  export type CourseEnrollSumAggregateOutputType = {
    id: number | null
    enrolledCourseId: number | null
    scheduleId: number | null
    enrooledUserId: number | null
  }

  export type CourseEnrollMinAggregateOutputType = {
    id: number | null
    enrolledCourseId: number | null
    scheduleId: number | null
    enrooledUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseEnrollMaxAggregateOutputType = {
    id: number | null
    enrolledCourseId: number | null
    scheduleId: number | null
    enrooledUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseEnrollCountAggregateOutputType = {
    id: number
    enrolledCourseId: number
    scheduleId: number
    enrooledUserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseEnrollAvgAggregateInputType = {
    id?: true
    enrolledCourseId?: true
    scheduleId?: true
    enrooledUserId?: true
  }

  export type CourseEnrollSumAggregateInputType = {
    id?: true
    enrolledCourseId?: true
    scheduleId?: true
    enrooledUserId?: true
  }

  export type CourseEnrollMinAggregateInputType = {
    id?: true
    enrolledCourseId?: true
    scheduleId?: true
    enrooledUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseEnrollMaxAggregateInputType = {
    id?: true
    enrolledCourseId?: true
    scheduleId?: true
    enrooledUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseEnrollCountAggregateInputType = {
    id?: true
    enrolledCourseId?: true
    scheduleId?: true
    enrooledUserId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseEnrollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseEnroll to aggregate.
     */
    where?: CourseEnrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEnrolls to fetch.
     */
    orderBy?: CourseEnrollOrderByWithRelationInput | CourseEnrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseEnrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEnrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEnrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseEnrolls
    **/
    _count?: true | CourseEnrollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseEnrollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseEnrollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseEnrollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseEnrollMaxAggregateInputType
  }

  export type GetCourseEnrollAggregateType<T extends CourseEnrollAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseEnroll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseEnroll[P]>
      : GetScalarType<T[P], AggregateCourseEnroll[P]>
  }




  export type CourseEnrollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseEnrollWhereInput
    orderBy?: CourseEnrollOrderByWithAggregationInput | CourseEnrollOrderByWithAggregationInput[]
    by: CourseEnrollScalarFieldEnum[] | CourseEnrollScalarFieldEnum
    having?: CourseEnrollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseEnrollCountAggregateInputType | true
    _avg?: CourseEnrollAvgAggregateInputType
    _sum?: CourseEnrollSumAggregateInputType
    _min?: CourseEnrollMinAggregateInputType
    _max?: CourseEnrollMaxAggregateInputType
  }

  export type CourseEnrollGroupByOutputType = {
    id: number
    enrolledCourseId: number
    scheduleId: number
    enrooledUserId: number
    createdAt: Date
    updatedAt: Date
    _count: CourseEnrollCountAggregateOutputType | null
    _avg: CourseEnrollAvgAggregateOutputType | null
    _sum: CourseEnrollSumAggregateOutputType | null
    _min: CourseEnrollMinAggregateOutputType | null
    _max: CourseEnrollMaxAggregateOutputType | null
  }

  type GetCourseEnrollGroupByPayload<T extends CourseEnrollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseEnrollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseEnrollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseEnrollGroupByOutputType[P]>
            : GetScalarType<T[P], CourseEnrollGroupByOutputType[P]>
        }
      >
    >


  export type CourseEnrollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrolledCourseId?: boolean
    scheduleId?: boolean
    enrooledUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["courseEnroll"]>

  export type CourseEnrollSelectScalar = {
    id?: boolean
    enrolledCourseId?: boolean
    scheduleId?: boolean
    enrooledUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CourseEnrollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseEnroll"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enrolledCourseId: number
      scheduleId: number
      enrooledUserId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseEnroll"]>
    composites: {}
  }


  type CourseEnrollGetPayload<S extends boolean | null | undefined | CourseEnrollDefaultArgs> = $Result.GetResult<Prisma.$CourseEnrollPayload, S>

  type CourseEnrollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseEnrollFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseEnrollCountAggregateInputType | true
    }

  export interface CourseEnrollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseEnroll'], meta: { name: 'CourseEnroll' } }
    /**
     * Find zero or one CourseEnroll that matches the filter.
     * @param {CourseEnrollFindUniqueArgs} args - Arguments to find a CourseEnroll
     * @example
     * // Get one CourseEnroll
     * const courseEnroll = await prisma.courseEnroll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseEnrollFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourseEnrollFindUniqueArgs<ExtArgs>>
    ): Prisma__CourseEnrollClient<$Result.GetResult<Prisma.$CourseEnrollPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CourseEnroll that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseEnrollFindUniqueOrThrowArgs} args - Arguments to find a CourseEnroll
     * @example
     * // Get one CourseEnroll
     * const courseEnroll = await prisma.courseEnroll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseEnrollFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseEnrollFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseEnrollClient<$Result.GetResult<Prisma.$CourseEnrollPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CourseEnroll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollFindFirstArgs} args - Arguments to find a CourseEnroll
     * @example
     * // Get one CourseEnroll
     * const courseEnroll = await prisma.courseEnroll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseEnrollFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseEnrollFindFirstArgs<ExtArgs>>
    ): Prisma__CourseEnrollClient<$Result.GetResult<Prisma.$CourseEnrollPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CourseEnroll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollFindFirstOrThrowArgs} args - Arguments to find a CourseEnroll
     * @example
     * // Get one CourseEnroll
     * const courseEnroll = await prisma.courseEnroll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseEnrollFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseEnrollFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseEnrollClient<$Result.GetResult<Prisma.$CourseEnrollPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CourseEnrolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseEnrolls
     * const courseEnrolls = await prisma.courseEnroll.findMany()
     * 
     * // Get first 10 CourseEnrolls
     * const courseEnrolls = await prisma.courseEnroll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseEnrollWithIdOnly = await prisma.courseEnroll.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseEnrollFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseEnrollFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseEnrollPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CourseEnroll.
     * @param {CourseEnrollCreateArgs} args - Arguments to create a CourseEnroll.
     * @example
     * // Create one CourseEnroll
     * const CourseEnroll = await prisma.courseEnroll.create({
     *   data: {
     *     // ... data to create a CourseEnroll
     *   }
     * })
     * 
    **/
    create<T extends CourseEnrollCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseEnrollCreateArgs<ExtArgs>>
    ): Prisma__CourseEnrollClient<$Result.GetResult<Prisma.$CourseEnrollPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CourseEnrolls.
     *     @param {CourseEnrollCreateManyArgs} args - Arguments to create many CourseEnrolls.
     *     @example
     *     // Create many CourseEnrolls
     *     const courseEnroll = await prisma.courseEnroll.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseEnrollCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseEnrollCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CourseEnroll.
     * @param {CourseEnrollDeleteArgs} args - Arguments to delete one CourseEnroll.
     * @example
     * // Delete one CourseEnroll
     * const CourseEnroll = await prisma.courseEnroll.delete({
     *   where: {
     *     // ... filter to delete one CourseEnroll
     *   }
     * })
     * 
    **/
    delete<T extends CourseEnrollDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseEnrollDeleteArgs<ExtArgs>>
    ): Prisma__CourseEnrollClient<$Result.GetResult<Prisma.$CourseEnrollPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CourseEnroll.
     * @param {CourseEnrollUpdateArgs} args - Arguments to update one CourseEnroll.
     * @example
     * // Update one CourseEnroll
     * const courseEnroll = await prisma.courseEnroll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseEnrollUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseEnrollUpdateArgs<ExtArgs>>
    ): Prisma__CourseEnrollClient<$Result.GetResult<Prisma.$CourseEnrollPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CourseEnrolls.
     * @param {CourseEnrollDeleteManyArgs} args - Arguments to filter CourseEnrolls to delete.
     * @example
     * // Delete a few CourseEnrolls
     * const { count } = await prisma.courseEnroll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseEnrollDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseEnrollDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseEnrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseEnrolls
     * const courseEnroll = await prisma.courseEnroll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseEnrollUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseEnrollUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseEnroll.
     * @param {CourseEnrollUpsertArgs} args - Arguments to update or create a CourseEnroll.
     * @example
     * // Update or create a CourseEnroll
     * const courseEnroll = await prisma.courseEnroll.upsert({
     *   create: {
     *     // ... data to create a CourseEnroll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseEnroll we want to update
     *   }
     * })
    **/
    upsert<T extends CourseEnrollUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseEnrollUpsertArgs<ExtArgs>>
    ): Prisma__CourseEnrollClient<$Result.GetResult<Prisma.$CourseEnrollPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CourseEnrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollCountArgs} args - Arguments to filter CourseEnrolls to count.
     * @example
     * // Count the number of CourseEnrolls
     * const count = await prisma.courseEnroll.count({
     *   where: {
     *     // ... the filter for the CourseEnrolls we want to count
     *   }
     * })
    **/
    count<T extends CourseEnrollCountArgs>(
      args?: Subset<T, CourseEnrollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseEnrollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseEnroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseEnrollAggregateArgs>(args: Subset<T, CourseEnrollAggregateArgs>): Prisma.PrismaPromise<GetCourseEnrollAggregateType<T>>

    /**
     * Group by CourseEnroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollGroupByArgs} args - Group by arguments.
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
      T extends CourseEnrollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseEnrollGroupByArgs['orderBy'] }
        : { orderBy?: CourseEnrollGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseEnrollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseEnrollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseEnroll model
   */
  readonly fields: CourseEnrollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseEnroll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseEnrollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CourseEnroll model
   */ 
  interface CourseEnrollFieldRefs {
    readonly id: FieldRef<"CourseEnroll", 'Int'>
    readonly enrolledCourseId: FieldRef<"CourseEnroll", 'Int'>
    readonly scheduleId: FieldRef<"CourseEnroll", 'Int'>
    readonly enrooledUserId: FieldRef<"CourseEnroll", 'Int'>
    readonly createdAt: FieldRef<"CourseEnroll", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseEnroll", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CourseEnroll findUnique
   */
  export type CourseEnrollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEnroll
     */
    select?: CourseEnrollSelect<ExtArgs> | null
    /**
     * Filter, which CourseEnroll to fetch.
     */
    where: CourseEnrollWhereUniqueInput
  }


  /**
   * CourseEnroll findUniqueOrThrow
   */
  export type CourseEnrollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEnroll
     */
    select?: CourseEnrollSelect<ExtArgs> | null
    /**
     * Filter, which CourseEnroll to fetch.
     */
    where: CourseEnrollWhereUniqueInput
  }


  /**
   * CourseEnroll findFirst
   */
  export type CourseEnrollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEnroll
     */
    select?: CourseEnrollSelect<ExtArgs> | null
    /**
     * Filter, which CourseEnroll to fetch.
     */
    where?: CourseEnrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEnrolls to fetch.
     */
    orderBy?: CourseEnrollOrderByWithRelationInput | CourseEnrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseEnrolls.
     */
    cursor?: CourseEnrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEnrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEnrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseEnrolls.
     */
    distinct?: CourseEnrollScalarFieldEnum | CourseEnrollScalarFieldEnum[]
  }


  /**
   * CourseEnroll findFirstOrThrow
   */
  export type CourseEnrollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEnroll
     */
    select?: CourseEnrollSelect<ExtArgs> | null
    /**
     * Filter, which CourseEnroll to fetch.
     */
    where?: CourseEnrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEnrolls to fetch.
     */
    orderBy?: CourseEnrollOrderByWithRelationInput | CourseEnrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseEnrolls.
     */
    cursor?: CourseEnrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEnrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEnrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseEnrolls.
     */
    distinct?: CourseEnrollScalarFieldEnum | CourseEnrollScalarFieldEnum[]
  }


  /**
   * CourseEnroll findMany
   */
  export type CourseEnrollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEnroll
     */
    select?: CourseEnrollSelect<ExtArgs> | null
    /**
     * Filter, which CourseEnrolls to fetch.
     */
    where?: CourseEnrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEnrolls to fetch.
     */
    orderBy?: CourseEnrollOrderByWithRelationInput | CourseEnrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseEnrolls.
     */
    cursor?: CourseEnrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEnrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEnrolls.
     */
    skip?: number
    distinct?: CourseEnrollScalarFieldEnum | CourseEnrollScalarFieldEnum[]
  }


  /**
   * CourseEnroll create
   */
  export type CourseEnrollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEnroll
     */
    select?: CourseEnrollSelect<ExtArgs> | null
    /**
     * The data needed to create a CourseEnroll.
     */
    data: XOR<CourseEnrollCreateInput, CourseEnrollUncheckedCreateInput>
  }


  /**
   * CourseEnroll createMany
   */
  export type CourseEnrollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseEnrolls.
     */
    data: CourseEnrollCreateManyInput | CourseEnrollCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CourseEnroll update
   */
  export type CourseEnrollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEnroll
     */
    select?: CourseEnrollSelect<ExtArgs> | null
    /**
     * The data needed to update a CourseEnroll.
     */
    data: XOR<CourseEnrollUpdateInput, CourseEnrollUncheckedUpdateInput>
    /**
     * Choose, which CourseEnroll to update.
     */
    where: CourseEnrollWhereUniqueInput
  }


  /**
   * CourseEnroll updateMany
   */
  export type CourseEnrollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseEnrolls.
     */
    data: XOR<CourseEnrollUpdateManyMutationInput, CourseEnrollUncheckedUpdateManyInput>
    /**
     * Filter which CourseEnrolls to update
     */
    where?: CourseEnrollWhereInput
  }


  /**
   * CourseEnroll upsert
   */
  export type CourseEnrollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEnroll
     */
    select?: CourseEnrollSelect<ExtArgs> | null
    /**
     * The filter to search for the CourseEnroll to update in case it exists.
     */
    where: CourseEnrollWhereUniqueInput
    /**
     * In case the CourseEnroll found by the `where` argument doesn't exist, create a new CourseEnroll with this data.
     */
    create: XOR<CourseEnrollCreateInput, CourseEnrollUncheckedCreateInput>
    /**
     * In case the CourseEnroll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseEnrollUpdateInput, CourseEnrollUncheckedUpdateInput>
  }


  /**
   * CourseEnroll delete
   */
  export type CourseEnrollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEnroll
     */
    select?: CourseEnrollSelect<ExtArgs> | null
    /**
     * Filter which CourseEnroll to delete.
     */
    where: CourseEnrollWhereUniqueInput
  }


  /**
   * CourseEnroll deleteMany
   */
  export type CourseEnrollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseEnrolls to delete
     */
    where?: CourseEnrollWhereInput
  }


  /**
   * CourseEnroll without action
   */
  export type CourseEnrollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEnroll
     */
    select?: CourseEnrollSelect<ExtArgs> | null
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
    firstName: 'firstName',
    lastName: 'lastName',
    password: 'password',
    email: 'email',
    dateOfBirth: 'dateOfBirth',
    jobTitle: 'jobTitle',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RequestFriendScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    requesterId: 'requesterId',
    requestedId: 'requestedId'
  };

  export type RequestFriendScalarFieldEnum = (typeof RequestFriendScalarFieldEnum)[keyof typeof RequestFriendScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    biograpy: 'biograpy',
    profileImage: 'profileImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const FollowingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    followingId: 'followingId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FollowingScalarFieldEnum = (typeof FollowingScalarFieldEnum)[keyof typeof FollowingScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    published: 'published',
    content: 'content',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    courseLevel: 'courseLevel',
    assistant: 'assistant',
    imagePath: 'imagePath',
    duration: 'duration',
    certify: 'certify',
    published: 'published',
    favorited: 'favorited',
    instructorId: 'instructorId',
    feedbackId: 'feedbackId',
    schedulteId: 'schedulteId',
    courseExpectId: 'courseExpectId',
    courseRequireId: 'courseRequireId',
    coursecSectionId: 'coursecSectionId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseDetailScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    tag: 'tag',
    courseLevel: 'courseLevel',
    assistant: 'assistant',
    imagePath: 'imagePath',
    duration: 'duration',
    certify: 'certify',
    published: 'published',
    favorited: 'favorited',
    instructorId: 'instructorId',
    feedbackId: 'feedbackId',
    schedulteId: 'schedulteId',
    courseExpectId: 'courseExpectId',
    courseReqId: 'courseReqId',
    coursecSectionId: 'coursecSectionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseDetailScalarFieldEnum = (typeof CourseDetailScalarFieldEnum)[keyof typeof CourseDetailScalarFieldEnum]


  export const InstructorScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    title: 'title',
    birthDate: 'birthDate',
    contactPhone: 'contactPhone',
    contactEmail: 'contactEmail',
    contactAddress: 'contactAddress',
    nationalID: 'nationalID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstructorScalarFieldEnum = (typeof InstructorScalarFieldEnum)[keyof typeof InstructorScalarFieldEnum]


  export const CourseFeedbackScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    feedbackDetail: 'feedbackDetail',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseFeedbackScalarFieldEnum = (typeof CourseFeedbackScalarFieldEnum)[keyof typeof CourseFeedbackScalarFieldEnum]


  export const CourseScheduleScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    scheduleBy: 'scheduleBy',
    courseStartDate: 'courseStartDate',
    courseEndDate: 'courseEndDate',
    remark: 'remark',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScheduleScalarFieldEnum = (typeof CourseScheduleScalarFieldEnum)[keyof typeof CourseScheduleScalarFieldEnum]


  export const CourseExpectationScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    expectationDetail: 'expectationDetail',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseExpectationScalarFieldEnum = (typeof CourseExpectationScalarFieldEnum)[keyof typeof CourseExpectationScalarFieldEnum]


  export const CourseRequirementScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    requirementDetail: 'requirementDetail',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseRequirementScalarFieldEnum = (typeof CourseRequirementScalarFieldEnum)[keyof typeof CourseRequirementScalarFieldEnum]


  export const CoursecSectionScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    sectionDetail: 'sectionDetail',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoursecSectionScalarFieldEnum = (typeof CoursecSectionScalarFieldEnum)[keyof typeof CoursecSectionScalarFieldEnum]


  export const CourseEnrollScalarFieldEnum: {
    id: 'id',
    enrolledCourseId: 'enrolledCourseId',
    scheduleId: 'scheduleId',
    enrooledUserId: 'enrooledUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseEnrollScalarFieldEnum = (typeof CourseEnrollScalarFieldEnum)[keyof typeof CourseEnrollScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Tags[]'
   */
  export type ListEnumTagsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tags[]'>
    


  /**
   * Reference to a field of type 'Tags'
   */
  export type EnumTagsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tags'>
    


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
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    dateOfBirth?: DateTimeFilter<"User"> | Date | string
    jobTitle?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: ProfileListRelationFilter
    posts?: PostListRelationFilter
    sentRequests?: RequestFriendListRelationFilter
    receivedRequests?: RequestFriendListRelationFilter
    following?: FollowingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    jobTitle?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    sentRequests?: RequestFriendOrderByRelationAggregateInput
    receivedRequests?: RequestFriendOrderByRelationAggregateInput
    following?: FollowingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    dateOfBirth?: DateTimeFilter<"User"> | Date | string
    jobTitle?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: ProfileListRelationFilter
    posts?: PostListRelationFilter
    sentRequests?: RequestFriendListRelationFilter
    receivedRequests?: RequestFriendListRelationFilter
    following?: FollowingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    jobTitle?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"User"> | Date | string
    jobTitle?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RequestFriendWhereInput = {
    AND?: RequestFriendWhereInput | RequestFriendWhereInput[]
    OR?: RequestFriendWhereInput[]
    NOT?: RequestFriendWhereInput | RequestFriendWhereInput[]
    id?: IntFilter<"RequestFriend"> | number
    status?: StringFilter<"RequestFriend"> | string
    createdAt?: DateTimeFilter<"RequestFriend"> | Date | string
    updatedAt?: DateTimeFilter<"RequestFriend"> | Date | string
    requesterId?: IntFilter<"RequestFriend"> | number
    requestedId?: IntFilter<"RequestFriend"> | number
    requester?: XOR<UserRelationFilter, UserWhereInput>
    requested?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RequestFriendOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    requestedId?: SortOrder
    requester?: UserOrderByWithRelationInput
    requested?: UserOrderByWithRelationInput
  }

  export type RequestFriendWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RequestFriendWhereInput | RequestFriendWhereInput[]
    OR?: RequestFriendWhereInput[]
    NOT?: RequestFriendWhereInput | RequestFriendWhereInput[]
    status?: StringFilter<"RequestFriend"> | string
    createdAt?: DateTimeFilter<"RequestFriend"> | Date | string
    updatedAt?: DateTimeFilter<"RequestFriend"> | Date | string
    requesterId?: IntFilter<"RequestFriend"> | number
    requestedId?: IntFilter<"RequestFriend"> | number
    requester?: XOR<UserRelationFilter, UserWhereInput>
    requested?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type RequestFriendOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    requestedId?: SortOrder
    _count?: RequestFriendCountOrderByAggregateInput
    _avg?: RequestFriendAvgOrderByAggregateInput
    _max?: RequestFriendMaxOrderByAggregateInput
    _min?: RequestFriendMinOrderByAggregateInput
    _sum?: RequestFriendSumOrderByAggregateInput
  }

  export type RequestFriendScalarWhereWithAggregatesInput = {
    AND?: RequestFriendScalarWhereWithAggregatesInput | RequestFriendScalarWhereWithAggregatesInput[]
    OR?: RequestFriendScalarWhereWithAggregatesInput[]
    NOT?: RequestFriendScalarWhereWithAggregatesInput | RequestFriendScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RequestFriend"> | number
    status?: StringWithAggregatesFilter<"RequestFriend"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RequestFriend"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RequestFriend"> | Date | string
    requesterId?: IntWithAggregatesFilter<"RequestFriend"> | number
    requestedId?: IntWithAggregatesFilter<"RequestFriend"> | number
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    biograpy?: StringFilter<"Profile"> | string
    profileImage?: StringFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    userId?: IntFilter<"Profile"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    biograpy?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    biograpy?: StringFilter<"Profile"> | string
    profileImage?: StringFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    biograpy?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    biograpy?: StringWithAggregatesFilter<"Profile"> | string
    profileImage?: StringWithAggregatesFilter<"Profile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    userId?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type FollowingWhereInput = {
    AND?: FollowingWhereInput | FollowingWhereInput[]
    OR?: FollowingWhereInput[]
    NOT?: FollowingWhereInput | FollowingWhereInput[]
    id?: IntFilter<"Following"> | number
    userId?: IntFilter<"Following"> | number
    followingId?: IntFilter<"Following"> | number
    createdAt?: DateTimeFilter<"Following"> | Date | string
    updatedAt?: DateTimeFilter<"Following"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FollowingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FollowingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FollowingWhereInput | FollowingWhereInput[]
    OR?: FollowingWhereInput[]
    NOT?: FollowingWhereInput | FollowingWhereInput[]
    userId?: IntFilter<"Following"> | number
    followingId?: IntFilter<"Following"> | number
    createdAt?: DateTimeFilter<"Following"> | Date | string
    updatedAt?: DateTimeFilter<"Following"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type FollowingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FollowingCountOrderByAggregateInput
    _avg?: FollowingAvgOrderByAggregateInput
    _max?: FollowingMaxOrderByAggregateInput
    _min?: FollowingMinOrderByAggregateInput
    _sum?: FollowingSumOrderByAggregateInput
  }

  export type FollowingScalarWhereWithAggregatesInput = {
    AND?: FollowingScalarWhereWithAggregatesInput | FollowingScalarWhereWithAggregatesInput[]
    OR?: FollowingScalarWhereWithAggregatesInput[]
    NOT?: FollowingScalarWhereWithAggregatesInput | FollowingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Following"> | number
    userId?: IntWithAggregatesFilter<"Following"> | number
    followingId?: IntWithAggregatesFilter<"Following"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Following"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Following"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    content?: StringFilter<"Post"> | string
    authorId?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    categories?: CategoryListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    published?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    content?: StringFilter<"Post"> | string
    authorId?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    categories?: CategoryListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    published?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    content?: StringWithAggregatesFilter<"Post"> | string
    authorId?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    posts?: PostListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    posts?: PostListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    courseLevel?: StringFilter<"Course"> | string
    assistant?: StringNullableFilter<"Course"> | string | null
    imagePath?: StringNullableFilter<"Course"> | string | null
    duration?: IntFilter<"Course"> | number
    certify?: BoolFilter<"Course"> | boolean
    published?: BoolFilter<"Course"> | boolean
    favorited?: BoolFilter<"Course"> | boolean
    instructorId?: IntFilter<"Course"> | number
    feedbackId?: IntFilter<"Course"> | number
    schedulteId?: IntFilter<"Course"> | number
    courseExpectId?: IntFilter<"Course"> | number
    courseRequireId?: IntFilter<"Course"> | number
    coursecSectionId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    createdBy?: IntFilter<"Course"> | number
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    updatedBy?: IntFilter<"Course"> | number
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseLevel?: SortOrder
    assistant?: SortOrderInput | SortOrder
    imagePath?: SortOrderInput | SortOrder
    duration?: SortOrder
    certify?: SortOrder
    published?: SortOrder
    favorited?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseRequireId?: SortOrder
    coursecSectionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    courseLevel?: StringFilter<"Course"> | string
    assistant?: StringNullableFilter<"Course"> | string | null
    imagePath?: StringNullableFilter<"Course"> | string | null
    duration?: IntFilter<"Course"> | number
    certify?: BoolFilter<"Course"> | boolean
    published?: BoolFilter<"Course"> | boolean
    favorited?: BoolFilter<"Course"> | boolean
    instructorId?: IntFilter<"Course"> | number
    feedbackId?: IntFilter<"Course"> | number
    schedulteId?: IntFilter<"Course"> | number
    courseExpectId?: IntFilter<"Course"> | number
    courseRequireId?: IntFilter<"Course"> | number
    coursecSectionId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    createdBy?: IntFilter<"Course"> | number
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    updatedBy?: IntFilter<"Course"> | number
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseLevel?: SortOrder
    assistant?: SortOrderInput | SortOrder
    imagePath?: SortOrderInput | SortOrder
    duration?: SortOrder
    certify?: SortOrder
    published?: SortOrder
    favorited?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseRequireId?: SortOrder
    coursecSectionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    courseLevel?: StringWithAggregatesFilter<"Course"> | string
    assistant?: StringNullableWithAggregatesFilter<"Course"> | string | null
    imagePath?: StringNullableWithAggregatesFilter<"Course"> | string | null
    duration?: IntWithAggregatesFilter<"Course"> | number
    certify?: BoolWithAggregatesFilter<"Course"> | boolean
    published?: BoolWithAggregatesFilter<"Course"> | boolean
    favorited?: BoolWithAggregatesFilter<"Course"> | boolean
    instructorId?: IntWithAggregatesFilter<"Course"> | number
    feedbackId?: IntWithAggregatesFilter<"Course"> | number
    schedulteId?: IntWithAggregatesFilter<"Course"> | number
    courseExpectId?: IntWithAggregatesFilter<"Course"> | number
    courseRequireId?: IntWithAggregatesFilter<"Course"> | number
    coursecSectionId?: IntWithAggregatesFilter<"Course"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    createdBy?: IntWithAggregatesFilter<"Course"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedBy?: IntWithAggregatesFilter<"Course"> | number
  }

  export type CourseDetailWhereInput = {
    AND?: CourseDetailWhereInput | CourseDetailWhereInput[]
    OR?: CourseDetailWhereInput[]
    NOT?: CourseDetailWhereInput | CourseDetailWhereInput[]
    id?: IntFilter<"CourseDetail"> | number
    title?: StringFilter<"CourseDetail"> | string
    description?: StringFilter<"CourseDetail"> | string
    tag?: EnumTagsNullableListFilter<"CourseDetail">
    courseLevel?: StringFilter<"CourseDetail"> | string
    assistant?: StringNullableFilter<"CourseDetail"> | string | null
    imagePath?: StringNullableFilter<"CourseDetail"> | string | null
    duration?: IntFilter<"CourseDetail"> | number
    certify?: BoolFilter<"CourseDetail"> | boolean
    published?: BoolFilter<"CourseDetail"> | boolean
    favorited?: BoolFilter<"CourseDetail"> | boolean
    instructorId?: IntFilter<"CourseDetail"> | number
    feedbackId?: IntFilter<"CourseDetail"> | number
    schedulteId?: IntFilter<"CourseDetail"> | number
    courseExpectId?: IntFilter<"CourseDetail"> | number
    courseReqId?: IntFilter<"CourseDetail"> | number
    coursecSectionId?: IntFilter<"CourseDetail"> | number
    createdAt?: DateTimeFilter<"CourseDetail"> | Date | string
    updatedAt?: DateTimeFilter<"CourseDetail"> | Date | string
  }

  export type CourseDetailOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    courseLevel?: SortOrder
    assistant?: SortOrderInput | SortOrder
    imagePath?: SortOrderInput | SortOrder
    duration?: SortOrder
    certify?: SortOrder
    published?: SortOrder
    favorited?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseReqId?: SortOrder
    coursecSectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseDetailWhereInput | CourseDetailWhereInput[]
    OR?: CourseDetailWhereInput[]
    NOT?: CourseDetailWhereInput | CourseDetailWhereInput[]
    title?: StringFilter<"CourseDetail"> | string
    description?: StringFilter<"CourseDetail"> | string
    tag?: EnumTagsNullableListFilter<"CourseDetail">
    courseLevel?: StringFilter<"CourseDetail"> | string
    assistant?: StringNullableFilter<"CourseDetail"> | string | null
    imagePath?: StringNullableFilter<"CourseDetail"> | string | null
    duration?: IntFilter<"CourseDetail"> | number
    certify?: BoolFilter<"CourseDetail"> | boolean
    published?: BoolFilter<"CourseDetail"> | boolean
    favorited?: BoolFilter<"CourseDetail"> | boolean
    instructorId?: IntFilter<"CourseDetail"> | number
    feedbackId?: IntFilter<"CourseDetail"> | number
    schedulteId?: IntFilter<"CourseDetail"> | number
    courseExpectId?: IntFilter<"CourseDetail"> | number
    courseReqId?: IntFilter<"CourseDetail"> | number
    coursecSectionId?: IntFilter<"CourseDetail"> | number
    createdAt?: DateTimeFilter<"CourseDetail"> | Date | string
    updatedAt?: DateTimeFilter<"CourseDetail"> | Date | string
  }, "id">

  export type CourseDetailOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    courseLevel?: SortOrder
    assistant?: SortOrderInput | SortOrder
    imagePath?: SortOrderInput | SortOrder
    duration?: SortOrder
    certify?: SortOrder
    published?: SortOrder
    favorited?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseReqId?: SortOrder
    coursecSectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseDetailCountOrderByAggregateInput
    _avg?: CourseDetailAvgOrderByAggregateInput
    _max?: CourseDetailMaxOrderByAggregateInput
    _min?: CourseDetailMinOrderByAggregateInput
    _sum?: CourseDetailSumOrderByAggregateInput
  }

  export type CourseDetailScalarWhereWithAggregatesInput = {
    AND?: CourseDetailScalarWhereWithAggregatesInput | CourseDetailScalarWhereWithAggregatesInput[]
    OR?: CourseDetailScalarWhereWithAggregatesInput[]
    NOT?: CourseDetailScalarWhereWithAggregatesInput | CourseDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CourseDetail"> | number
    title?: StringWithAggregatesFilter<"CourseDetail"> | string
    description?: StringWithAggregatesFilter<"CourseDetail"> | string
    tag?: EnumTagsNullableListFilter<"CourseDetail">
    courseLevel?: StringWithAggregatesFilter<"CourseDetail"> | string
    assistant?: StringNullableWithAggregatesFilter<"CourseDetail"> | string | null
    imagePath?: StringNullableWithAggregatesFilter<"CourseDetail"> | string | null
    duration?: IntWithAggregatesFilter<"CourseDetail"> | number
    certify?: BoolWithAggregatesFilter<"CourseDetail"> | boolean
    published?: BoolWithAggregatesFilter<"CourseDetail"> | boolean
    favorited?: BoolWithAggregatesFilter<"CourseDetail"> | boolean
    instructorId?: IntWithAggregatesFilter<"CourseDetail"> | number
    feedbackId?: IntWithAggregatesFilter<"CourseDetail"> | number
    schedulteId?: IntWithAggregatesFilter<"CourseDetail"> | number
    courseExpectId?: IntWithAggregatesFilter<"CourseDetail"> | number
    courseReqId?: IntWithAggregatesFilter<"CourseDetail"> | number
    coursecSectionId?: IntWithAggregatesFilter<"CourseDetail"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CourseDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseDetail"> | Date | string
  }

  export type InstructorWhereInput = {
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    id?: IntFilter<"Instructor"> | number
    firstName?: StringFilter<"Instructor"> | string
    lastName?: StringFilter<"Instructor"> | string
    title?: StringFilter<"Instructor"> | string
    birthDate?: DateTimeFilter<"Instructor"> | Date | string
    contactPhone?: StringFilter<"Instructor"> | string
    contactEmail?: StringFilter<"Instructor"> | string
    contactAddress?: StringFilter<"Instructor"> | string
    nationalID?: StringFilter<"Instructor"> | string
    createdAt?: DateTimeFilter<"Instructor"> | Date | string
    updatedAt?: DateTimeFilter<"Instructor"> | Date | string
  }

  export type InstructorOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    birthDate?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    contactAddress?: SortOrder
    nationalID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    firstName?: StringFilter<"Instructor"> | string
    lastName?: StringFilter<"Instructor"> | string
    title?: StringFilter<"Instructor"> | string
    birthDate?: DateTimeFilter<"Instructor"> | Date | string
    contactPhone?: StringFilter<"Instructor"> | string
    contactEmail?: StringFilter<"Instructor"> | string
    contactAddress?: StringFilter<"Instructor"> | string
    nationalID?: StringFilter<"Instructor"> | string
    createdAt?: DateTimeFilter<"Instructor"> | Date | string
    updatedAt?: DateTimeFilter<"Instructor"> | Date | string
  }, "id">

  export type InstructorOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    birthDate?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    contactAddress?: SortOrder
    nationalID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstructorCountOrderByAggregateInput
    _avg?: InstructorAvgOrderByAggregateInput
    _max?: InstructorMaxOrderByAggregateInput
    _min?: InstructorMinOrderByAggregateInput
    _sum?: InstructorSumOrderByAggregateInput
  }

  export type InstructorScalarWhereWithAggregatesInput = {
    AND?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    OR?: InstructorScalarWhereWithAggregatesInput[]
    NOT?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Instructor"> | number
    firstName?: StringWithAggregatesFilter<"Instructor"> | string
    lastName?: StringWithAggregatesFilter<"Instructor"> | string
    title?: StringWithAggregatesFilter<"Instructor"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Instructor"> | Date | string
    contactPhone?: StringWithAggregatesFilter<"Instructor"> | string
    contactEmail?: StringWithAggregatesFilter<"Instructor"> | string
    contactAddress?: StringWithAggregatesFilter<"Instructor"> | string
    nationalID?: StringWithAggregatesFilter<"Instructor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Instructor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Instructor"> | Date | string
  }

  export type CourseFeedbackWhereInput = {
    AND?: CourseFeedbackWhereInput | CourseFeedbackWhereInput[]
    OR?: CourseFeedbackWhereInput[]
    NOT?: CourseFeedbackWhereInput | CourseFeedbackWhereInput[]
    id?: IntFilter<"CourseFeedback"> | number
    courseId?: IntFilter<"CourseFeedback"> | number
    feedbackDetail?: StringFilter<"CourseFeedback"> | string
    createdBy?: IntFilter<"CourseFeedback"> | number
    createdAt?: DateTimeFilter<"CourseFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"CourseFeedback"> | Date | string
  }

  export type CourseFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    feedbackDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseFeedbackWhereInput | CourseFeedbackWhereInput[]
    OR?: CourseFeedbackWhereInput[]
    NOT?: CourseFeedbackWhereInput | CourseFeedbackWhereInput[]
    courseId?: IntFilter<"CourseFeedback"> | number
    feedbackDetail?: StringFilter<"CourseFeedback"> | string
    createdBy?: IntFilter<"CourseFeedback"> | number
    createdAt?: DateTimeFilter<"CourseFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"CourseFeedback"> | Date | string
  }, "id">

  export type CourseFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    feedbackDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseFeedbackCountOrderByAggregateInput
    _avg?: CourseFeedbackAvgOrderByAggregateInput
    _max?: CourseFeedbackMaxOrderByAggregateInput
    _min?: CourseFeedbackMinOrderByAggregateInput
    _sum?: CourseFeedbackSumOrderByAggregateInput
  }

  export type CourseFeedbackScalarWhereWithAggregatesInput = {
    AND?: CourseFeedbackScalarWhereWithAggregatesInput | CourseFeedbackScalarWhereWithAggregatesInput[]
    OR?: CourseFeedbackScalarWhereWithAggregatesInput[]
    NOT?: CourseFeedbackScalarWhereWithAggregatesInput | CourseFeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CourseFeedback"> | number
    courseId?: IntWithAggregatesFilter<"CourseFeedback"> | number
    feedbackDetail?: StringWithAggregatesFilter<"CourseFeedback"> | string
    createdBy?: IntWithAggregatesFilter<"CourseFeedback"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CourseFeedback"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseFeedback"> | Date | string
  }

  export type CourseScheduleWhereInput = {
    AND?: CourseScheduleWhereInput | CourseScheduleWhereInput[]
    OR?: CourseScheduleWhereInput[]
    NOT?: CourseScheduleWhereInput | CourseScheduleWhereInput[]
    id?: IntFilter<"CourseSchedule"> | number
    courseId?: IntFilter<"CourseSchedule"> | number
    scheduleBy?: IntFilter<"CourseSchedule"> | number
    courseStartDate?: DateTimeFilter<"CourseSchedule"> | Date | string
    courseEndDate?: DateTimeFilter<"CourseSchedule"> | Date | string
    remark?: StringFilter<"CourseSchedule"> | string
    createdAt?: DateTimeFilter<"CourseSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"CourseSchedule"> | Date | string
  }

  export type CourseScheduleOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    scheduleBy?: SortOrder
    courseStartDate?: SortOrder
    courseEndDate?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseScheduleWhereInput | CourseScheduleWhereInput[]
    OR?: CourseScheduleWhereInput[]
    NOT?: CourseScheduleWhereInput | CourseScheduleWhereInput[]
    courseId?: IntFilter<"CourseSchedule"> | number
    scheduleBy?: IntFilter<"CourseSchedule"> | number
    courseStartDate?: DateTimeFilter<"CourseSchedule"> | Date | string
    courseEndDate?: DateTimeFilter<"CourseSchedule"> | Date | string
    remark?: StringFilter<"CourseSchedule"> | string
    createdAt?: DateTimeFilter<"CourseSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"CourseSchedule"> | Date | string
  }, "id">

  export type CourseScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    scheduleBy?: SortOrder
    courseStartDate?: SortOrder
    courseEndDate?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseScheduleCountOrderByAggregateInput
    _avg?: CourseScheduleAvgOrderByAggregateInput
    _max?: CourseScheduleMaxOrderByAggregateInput
    _min?: CourseScheduleMinOrderByAggregateInput
    _sum?: CourseScheduleSumOrderByAggregateInput
  }

  export type CourseScheduleScalarWhereWithAggregatesInput = {
    AND?: CourseScheduleScalarWhereWithAggregatesInput | CourseScheduleScalarWhereWithAggregatesInput[]
    OR?: CourseScheduleScalarWhereWithAggregatesInput[]
    NOT?: CourseScheduleScalarWhereWithAggregatesInput | CourseScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CourseSchedule"> | number
    courseId?: IntWithAggregatesFilter<"CourseSchedule"> | number
    scheduleBy?: IntWithAggregatesFilter<"CourseSchedule"> | number
    courseStartDate?: DateTimeWithAggregatesFilter<"CourseSchedule"> | Date | string
    courseEndDate?: DateTimeWithAggregatesFilter<"CourseSchedule"> | Date | string
    remark?: StringWithAggregatesFilter<"CourseSchedule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CourseSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseSchedule"> | Date | string
  }

  export type CourseExpectationWhereInput = {
    AND?: CourseExpectationWhereInput | CourseExpectationWhereInput[]
    OR?: CourseExpectationWhereInput[]
    NOT?: CourseExpectationWhereInput | CourseExpectationWhereInput[]
    id?: IntFilter<"CourseExpectation"> | number
    courseId?: IntFilter<"CourseExpectation"> | number
    expectationDetail?: StringFilter<"CourseExpectation"> | string
    createdBy?: IntFilter<"CourseExpectation"> | number
    createdAt?: DateTimeFilter<"CourseExpectation"> | Date | string
    updatedAt?: DateTimeFilter<"CourseExpectation"> | Date | string
  }

  export type CourseExpectationOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    expectationDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseExpectationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseExpectationWhereInput | CourseExpectationWhereInput[]
    OR?: CourseExpectationWhereInput[]
    NOT?: CourseExpectationWhereInput | CourseExpectationWhereInput[]
    courseId?: IntFilter<"CourseExpectation"> | number
    expectationDetail?: StringFilter<"CourseExpectation"> | string
    createdBy?: IntFilter<"CourseExpectation"> | number
    createdAt?: DateTimeFilter<"CourseExpectation"> | Date | string
    updatedAt?: DateTimeFilter<"CourseExpectation"> | Date | string
  }, "id">

  export type CourseExpectationOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    expectationDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseExpectationCountOrderByAggregateInput
    _avg?: CourseExpectationAvgOrderByAggregateInput
    _max?: CourseExpectationMaxOrderByAggregateInput
    _min?: CourseExpectationMinOrderByAggregateInput
    _sum?: CourseExpectationSumOrderByAggregateInput
  }

  export type CourseExpectationScalarWhereWithAggregatesInput = {
    AND?: CourseExpectationScalarWhereWithAggregatesInput | CourseExpectationScalarWhereWithAggregatesInput[]
    OR?: CourseExpectationScalarWhereWithAggregatesInput[]
    NOT?: CourseExpectationScalarWhereWithAggregatesInput | CourseExpectationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CourseExpectation"> | number
    courseId?: IntWithAggregatesFilter<"CourseExpectation"> | number
    expectationDetail?: StringWithAggregatesFilter<"CourseExpectation"> | string
    createdBy?: IntWithAggregatesFilter<"CourseExpectation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CourseExpectation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseExpectation"> | Date | string
  }

  export type CourseRequirementWhereInput = {
    AND?: CourseRequirementWhereInput | CourseRequirementWhereInput[]
    OR?: CourseRequirementWhereInput[]
    NOT?: CourseRequirementWhereInput | CourseRequirementWhereInput[]
    id?: IntFilter<"CourseRequirement"> | number
    courseId?: IntFilter<"CourseRequirement"> | number
    requirementDetail?: StringFilter<"CourseRequirement"> | string
    createdBy?: IntFilter<"CourseRequirement"> | number
    createdAt?: DateTimeFilter<"CourseRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"CourseRequirement"> | Date | string
  }

  export type CourseRequirementOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    requirementDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseRequirementWhereInput | CourseRequirementWhereInput[]
    OR?: CourseRequirementWhereInput[]
    NOT?: CourseRequirementWhereInput | CourseRequirementWhereInput[]
    courseId?: IntFilter<"CourseRequirement"> | number
    requirementDetail?: StringFilter<"CourseRequirement"> | string
    createdBy?: IntFilter<"CourseRequirement"> | number
    createdAt?: DateTimeFilter<"CourseRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"CourseRequirement"> | Date | string
  }, "id">

  export type CourseRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    requirementDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseRequirementCountOrderByAggregateInput
    _avg?: CourseRequirementAvgOrderByAggregateInput
    _max?: CourseRequirementMaxOrderByAggregateInput
    _min?: CourseRequirementMinOrderByAggregateInput
    _sum?: CourseRequirementSumOrderByAggregateInput
  }

  export type CourseRequirementScalarWhereWithAggregatesInput = {
    AND?: CourseRequirementScalarWhereWithAggregatesInput | CourseRequirementScalarWhereWithAggregatesInput[]
    OR?: CourseRequirementScalarWhereWithAggregatesInput[]
    NOT?: CourseRequirementScalarWhereWithAggregatesInput | CourseRequirementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CourseRequirement"> | number
    courseId?: IntWithAggregatesFilter<"CourseRequirement"> | number
    requirementDetail?: StringWithAggregatesFilter<"CourseRequirement"> | string
    createdBy?: IntWithAggregatesFilter<"CourseRequirement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CourseRequirement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseRequirement"> | Date | string
  }

  export type CoursecSectionWhereInput = {
    AND?: CoursecSectionWhereInput | CoursecSectionWhereInput[]
    OR?: CoursecSectionWhereInput[]
    NOT?: CoursecSectionWhereInput | CoursecSectionWhereInput[]
    id?: IntFilter<"CoursecSection"> | number
    courseId?: IntFilter<"CoursecSection"> | number
    sectionDetail?: StringFilter<"CoursecSection"> | string
    createdBy?: IntFilter<"CoursecSection"> | number
    createdAt?: DateTimeFilter<"CoursecSection"> | Date | string
    updatedAt?: DateTimeFilter<"CoursecSection"> | Date | string
  }

  export type CoursecSectionOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    sectionDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursecSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoursecSectionWhereInput | CoursecSectionWhereInput[]
    OR?: CoursecSectionWhereInput[]
    NOT?: CoursecSectionWhereInput | CoursecSectionWhereInput[]
    courseId?: IntFilter<"CoursecSection"> | number
    sectionDetail?: StringFilter<"CoursecSection"> | string
    createdBy?: IntFilter<"CoursecSection"> | number
    createdAt?: DateTimeFilter<"CoursecSection"> | Date | string
    updatedAt?: DateTimeFilter<"CoursecSection"> | Date | string
  }, "id">

  export type CoursecSectionOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    sectionDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoursecSectionCountOrderByAggregateInput
    _avg?: CoursecSectionAvgOrderByAggregateInput
    _max?: CoursecSectionMaxOrderByAggregateInput
    _min?: CoursecSectionMinOrderByAggregateInput
    _sum?: CoursecSectionSumOrderByAggregateInput
  }

  export type CoursecSectionScalarWhereWithAggregatesInput = {
    AND?: CoursecSectionScalarWhereWithAggregatesInput | CoursecSectionScalarWhereWithAggregatesInput[]
    OR?: CoursecSectionScalarWhereWithAggregatesInput[]
    NOT?: CoursecSectionScalarWhereWithAggregatesInput | CoursecSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CoursecSection"> | number
    courseId?: IntWithAggregatesFilter<"CoursecSection"> | number
    sectionDetail?: StringWithAggregatesFilter<"CoursecSection"> | string
    createdBy?: IntWithAggregatesFilter<"CoursecSection"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CoursecSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoursecSection"> | Date | string
  }

  export type CourseEnrollWhereInput = {
    AND?: CourseEnrollWhereInput | CourseEnrollWhereInput[]
    OR?: CourseEnrollWhereInput[]
    NOT?: CourseEnrollWhereInput | CourseEnrollWhereInput[]
    id?: IntFilter<"CourseEnroll"> | number
    enrolledCourseId?: IntFilter<"CourseEnroll"> | number
    scheduleId?: IntFilter<"CourseEnroll"> | number
    enrooledUserId?: IntFilter<"CourseEnroll"> | number
    createdAt?: DateTimeFilter<"CourseEnroll"> | Date | string
    updatedAt?: DateTimeFilter<"CourseEnroll"> | Date | string
  }

  export type CourseEnrollOrderByWithRelationInput = {
    id?: SortOrder
    enrolledCourseId?: SortOrder
    scheduleId?: SortOrder
    enrooledUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseEnrollWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseEnrollWhereInput | CourseEnrollWhereInput[]
    OR?: CourseEnrollWhereInput[]
    NOT?: CourseEnrollWhereInput | CourseEnrollWhereInput[]
    enrolledCourseId?: IntFilter<"CourseEnroll"> | number
    scheduleId?: IntFilter<"CourseEnroll"> | number
    enrooledUserId?: IntFilter<"CourseEnroll"> | number
    createdAt?: DateTimeFilter<"CourseEnroll"> | Date | string
    updatedAt?: DateTimeFilter<"CourseEnroll"> | Date | string
  }, "id">

  export type CourseEnrollOrderByWithAggregationInput = {
    id?: SortOrder
    enrolledCourseId?: SortOrder
    scheduleId?: SortOrder
    enrooledUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseEnrollCountOrderByAggregateInput
    _avg?: CourseEnrollAvgOrderByAggregateInput
    _max?: CourseEnrollMaxOrderByAggregateInput
    _min?: CourseEnrollMinOrderByAggregateInput
    _sum?: CourseEnrollSumOrderByAggregateInput
  }

  export type CourseEnrollScalarWhereWithAggregatesInput = {
    AND?: CourseEnrollScalarWhereWithAggregatesInput | CourseEnrollScalarWhereWithAggregatesInput[]
    OR?: CourseEnrollScalarWhereWithAggregatesInput[]
    NOT?: CourseEnrollScalarWhereWithAggregatesInput | CourseEnrollScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CourseEnroll"> | number
    enrolledCourseId?: IntWithAggregatesFilter<"CourseEnroll"> | number
    scheduleId?: IntWithAggregatesFilter<"CourseEnroll"> | number
    enrooledUserId?: IntWithAggregatesFilter<"CourseEnroll"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CourseEnroll"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseEnroll"> | Date | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    sentRequests?: RequestFriendCreateNestedManyWithoutRequesterInput
    receivedRequests?: RequestFriendCreateNestedManyWithoutRequestedInput
    following?: FollowingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    sentRequests?: RequestFriendUncheckedCreateNestedManyWithoutRequesterInput
    receivedRequests?: RequestFriendUncheckedCreateNestedManyWithoutRequestedInput
    following?: FollowingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    sentRequests?: RequestFriendUpdateManyWithoutRequesterNestedInput
    receivedRequests?: RequestFriendUpdateManyWithoutRequestedNestedInput
    following?: FollowingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    sentRequests?: RequestFriendUncheckedUpdateManyWithoutRequesterNestedInput
    receivedRequests?: RequestFriendUncheckedUpdateManyWithoutRequestedNestedInput
    following?: FollowingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestFriendCreateInput = {
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutSentRequestsInput
    requested: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type RequestFriendUncheckedCreateInput = {
    id?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId: number
    requestedId: number
  }

  export type RequestFriendUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
    requested?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type RequestFriendUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: IntFieldUpdateOperationsInput | number
    requestedId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestFriendCreateManyInput = {
    id?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId: number
    requestedId: number
  }

  export type RequestFriendUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestFriendUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: IntFieldUpdateOperationsInput | number
    requestedId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateInput = {
    biograpy: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    biograpy: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ProfileUpdateInput = {
    biograpy?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    biograpy?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManyInput = {
    id?: number
    biograpy: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ProfileUpdateManyMutationInput = {
    biograpy?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    biograpy?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowingCreateInput = {
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowingUncheckedCreateInput = {
    id?: number
    userId: number
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingUpdateInput = {
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingCreateManyInput = {
    id?: number
    userId: number
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingUpdateManyMutationInput = {
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    title: string
    published?: boolean
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    categories?: CategoryCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    published?: boolean
    content: string
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    categories?: CategoryUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    published?: boolean
    content: string
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    title: string
    description: string
    courseLevel: string
    assistant?: string | null
    imagePath?: string | null
    duration: number
    certify?: boolean
    published?: boolean
    favorited?: boolean
    instructorId: number
    feedbackId?: number
    schedulteId?: number
    courseExpectId?: number
    courseRequireId?: number
    coursecSectionId?: number
    createdAt?: Date | string
    createdBy?: number
    updatedAt?: Date | string
    updatedBy?: number
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    courseLevel: string
    assistant?: string | null
    imagePath?: string | null
    duration: number
    certify?: boolean
    published?: boolean
    favorited?: boolean
    instructorId: number
    feedbackId?: number
    schedulteId?: number
    courseExpectId?: number
    courseRequireId?: number
    coursecSectionId?: number
    createdAt?: Date | string
    createdBy?: number
    updatedAt?: Date | string
    updatedBy?: number
  }

  export type CourseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseLevel?: StringFieldUpdateOperationsInput | string
    assistant?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    certify?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    favorited?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    feedbackId?: IntFieldUpdateOperationsInput | number
    schedulteId?: IntFieldUpdateOperationsInput | number
    courseExpectId?: IntFieldUpdateOperationsInput | number
    courseRequireId?: IntFieldUpdateOperationsInput | number
    coursecSectionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseLevel?: StringFieldUpdateOperationsInput | string
    assistant?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    certify?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    favorited?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    feedbackId?: IntFieldUpdateOperationsInput | number
    schedulteId?: IntFieldUpdateOperationsInput | number
    courseExpectId?: IntFieldUpdateOperationsInput | number
    courseRequireId?: IntFieldUpdateOperationsInput | number
    coursecSectionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
  }

  export type CourseCreateManyInput = {
    id?: number
    title: string
    description: string
    courseLevel: string
    assistant?: string | null
    imagePath?: string | null
    duration: number
    certify?: boolean
    published?: boolean
    favorited?: boolean
    instructorId: number
    feedbackId?: number
    schedulteId?: number
    courseExpectId?: number
    courseRequireId?: number
    coursecSectionId?: number
    createdAt?: Date | string
    createdBy?: number
    updatedAt?: Date | string
    updatedBy?: number
  }

  export type CourseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseLevel?: StringFieldUpdateOperationsInput | string
    assistant?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    certify?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    favorited?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    feedbackId?: IntFieldUpdateOperationsInput | number
    schedulteId?: IntFieldUpdateOperationsInput | number
    courseExpectId?: IntFieldUpdateOperationsInput | number
    courseRequireId?: IntFieldUpdateOperationsInput | number
    coursecSectionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseLevel?: StringFieldUpdateOperationsInput | string
    assistant?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    certify?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    favorited?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    feedbackId?: IntFieldUpdateOperationsInput | number
    schedulteId?: IntFieldUpdateOperationsInput | number
    courseExpectId?: IntFieldUpdateOperationsInput | number
    courseRequireId?: IntFieldUpdateOperationsInput | number
    coursecSectionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
  }

  export type CourseDetailCreateInput = {
    title: string
    description: string
    tag?: CourseDetailCreatetagInput | $Enums.Tags[]
    courseLevel: string
    assistant?: string | null
    imagePath?: string | null
    duration: number
    certify?: boolean
    published?: boolean
    favorited?: boolean
    instructorId: number
    feedbackId: number
    schedulteId: number
    courseExpectId: number
    courseReqId: number
    coursecSectionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseDetailUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    tag?: CourseDetailCreatetagInput | $Enums.Tags[]
    courseLevel: string
    assistant?: string | null
    imagePath?: string | null
    duration: number
    certify?: boolean
    published?: boolean
    favorited?: boolean
    instructorId: number
    feedbackId: number
    schedulteId: number
    courseExpectId: number
    courseReqId: number
    coursecSectionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseDetailUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: CourseDetailUpdatetagInput | $Enums.Tags[]
    courseLevel?: StringFieldUpdateOperationsInput | string
    assistant?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    certify?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    favorited?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    feedbackId?: IntFieldUpdateOperationsInput | number
    schedulteId?: IntFieldUpdateOperationsInput | number
    courseExpectId?: IntFieldUpdateOperationsInput | number
    courseReqId?: IntFieldUpdateOperationsInput | number
    coursecSectionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: CourseDetailUpdatetagInput | $Enums.Tags[]
    courseLevel?: StringFieldUpdateOperationsInput | string
    assistant?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    certify?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    favorited?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    feedbackId?: IntFieldUpdateOperationsInput | number
    schedulteId?: IntFieldUpdateOperationsInput | number
    courseExpectId?: IntFieldUpdateOperationsInput | number
    courseReqId?: IntFieldUpdateOperationsInput | number
    coursecSectionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseDetailCreateManyInput = {
    id?: number
    title: string
    description: string
    tag?: CourseDetailCreatetagInput | $Enums.Tags[]
    courseLevel: string
    assistant?: string | null
    imagePath?: string | null
    duration: number
    certify?: boolean
    published?: boolean
    favorited?: boolean
    instructorId: number
    feedbackId: number
    schedulteId: number
    courseExpectId: number
    courseReqId: number
    coursecSectionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseDetailUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: CourseDetailUpdatetagInput | $Enums.Tags[]
    courseLevel?: StringFieldUpdateOperationsInput | string
    assistant?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    certify?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    favorited?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    feedbackId?: IntFieldUpdateOperationsInput | number
    schedulteId?: IntFieldUpdateOperationsInput | number
    courseExpectId?: IntFieldUpdateOperationsInput | number
    courseReqId?: IntFieldUpdateOperationsInput | number
    coursecSectionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: CourseDetailUpdatetagInput | $Enums.Tags[]
    courseLevel?: StringFieldUpdateOperationsInput | string
    assistant?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    certify?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    favorited?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    feedbackId?: IntFieldUpdateOperationsInput | number
    schedulteId?: IntFieldUpdateOperationsInput | number
    courseExpectId?: IntFieldUpdateOperationsInput | number
    courseReqId?: IntFieldUpdateOperationsInput | number
    coursecSectionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorCreateInput = {
    firstName: string
    lastName: string
    title: string
    birthDate: Date | string
    contactPhone: string
    contactEmail: string
    contactAddress: string
    nationalID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    title: string
    birthDate: Date | string
    contactPhone: string
    contactEmail: string
    contactAddress: string
    nationalID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactAddress?: StringFieldUpdateOperationsInput | string
    nationalID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactAddress?: StringFieldUpdateOperationsInput | string
    nationalID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    title: string
    birthDate: Date | string
    contactPhone: string
    contactEmail: string
    contactAddress: string
    nationalID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactAddress?: StringFieldUpdateOperationsInput | string
    nationalID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactAddress?: StringFieldUpdateOperationsInput | string
    nationalID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFeedbackCreateInput = {
    courseId: number
    feedbackDetail: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseFeedbackUncheckedCreateInput = {
    id?: number
    courseId: number
    feedbackDetail: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseFeedbackUpdateInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    feedbackDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    feedbackDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFeedbackCreateManyInput = {
    id?: number
    courseId: number
    feedbackDetail: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseFeedbackUpdateManyMutationInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    feedbackDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    feedbackDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseScheduleCreateInput = {
    courseId: number
    scheduleBy: number
    courseStartDate: Date | string
    courseEndDate: Date | string
    remark: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseScheduleUncheckedCreateInput = {
    id?: number
    courseId: number
    scheduleBy: number
    courseStartDate: Date | string
    courseEndDate: Date | string
    remark: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseScheduleUpdateInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    scheduleBy?: IntFieldUpdateOperationsInput | number
    courseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remark?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    scheduleBy?: IntFieldUpdateOperationsInput | number
    courseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remark?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseScheduleCreateManyInput = {
    id?: number
    courseId: number
    scheduleBy: number
    courseStartDate: Date | string
    courseEndDate: Date | string
    remark: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseScheduleUpdateManyMutationInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    scheduleBy?: IntFieldUpdateOperationsInput | number
    courseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remark?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    scheduleBy?: IntFieldUpdateOperationsInput | number
    courseStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remark?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseExpectationCreateInput = {
    courseId: number
    expectationDetail: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseExpectationUncheckedCreateInput = {
    id?: number
    courseId: number
    expectationDetail: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseExpectationUpdateInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    expectationDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseExpectationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    expectationDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseExpectationCreateManyInput = {
    id?: number
    courseId: number
    expectationDetail: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseExpectationUpdateManyMutationInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    expectationDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseExpectationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    expectationDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseRequirementCreateInput = {
    courseId: number
    requirementDetail: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseRequirementUncheckedCreateInput = {
    id?: number
    courseId: number
    requirementDetail: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseRequirementUpdateInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    requirementDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseRequirementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    requirementDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseRequirementCreateManyInput = {
    id?: number
    courseId: number
    requirementDetail: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseRequirementUpdateManyMutationInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    requirementDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseRequirementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    requirementDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursecSectionCreateInput = {
    courseId: number
    sectionDetail: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursecSectionUncheckedCreateInput = {
    id?: number
    courseId: number
    sectionDetail: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursecSectionUpdateInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    sectionDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursecSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    sectionDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursecSectionCreateManyInput = {
    id?: number
    courseId: number
    sectionDetail: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursecSectionUpdateManyMutationInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    sectionDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursecSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    sectionDetail?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseEnrollCreateInput = {
    enrolledCourseId: number
    scheduleId: number
    enrooledUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseEnrollUncheckedCreateInput = {
    id?: number
    enrolledCourseId: number
    scheduleId: number
    enrooledUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseEnrollUpdateInput = {
    enrolledCourseId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
    enrooledUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseEnrollUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrolledCourseId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
    enrooledUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseEnrollCreateManyInput = {
    id?: number
    enrolledCourseId: number
    scheduleId: number
    enrooledUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseEnrollUpdateManyMutationInput = {
    enrolledCourseId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
    enrooledUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseEnrollUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrolledCourseId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
    enrooledUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type RequestFriendListRelationFilter = {
    every?: RequestFriendWhereInput
    some?: RequestFriendWhereInput
    none?: RequestFriendWhereInput
  }

  export type FollowingListRelationFilter = {
    every?: FollowingWhereInput
    some?: FollowingWhereInput
    none?: FollowingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestFriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    jobTitle?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    jobTitle?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    jobTitle?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RequestFriendCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    requestedId?: SortOrder
  }

  export type RequestFriendAvgOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    requestedId?: SortOrder
  }

  export type RequestFriendMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    requestedId?: SortOrder
  }

  export type RequestFriendMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    requestedId?: SortOrder
  }

  export type RequestFriendSumOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    requestedId?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    biograpy?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    biograpy?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    biograpy?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FollowingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FollowingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    followingId?: SortOrder
  }

  export type FollowingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FollowingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FollowingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    followingId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    published?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    published?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    published?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseLevel?: SortOrder
    assistant?: SortOrder
    imagePath?: SortOrder
    duration?: SortOrder
    certify?: SortOrder
    published?: SortOrder
    favorited?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseRequireId?: SortOrder
    coursecSectionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseRequireId?: SortOrder
    coursecSectionId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseLevel?: SortOrder
    assistant?: SortOrder
    imagePath?: SortOrder
    duration?: SortOrder
    certify?: SortOrder
    published?: SortOrder
    favorited?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseRequireId?: SortOrder
    coursecSectionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseLevel?: SortOrder
    assistant?: SortOrder
    imagePath?: SortOrder
    duration?: SortOrder
    certify?: SortOrder
    published?: SortOrder
    favorited?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseRequireId?: SortOrder
    coursecSectionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseRequireId?: SortOrder
    coursecSectionId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type EnumTagsNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Tags[] | ListEnumTagsFieldRefInput<$PrismaModel> | null
    has?: $Enums.Tags | EnumTagsFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Tags[] | ListEnumTagsFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Tags[] | ListEnumTagsFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CourseDetailCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    courseLevel?: SortOrder
    assistant?: SortOrder
    imagePath?: SortOrder
    duration?: SortOrder
    certify?: SortOrder
    published?: SortOrder
    favorited?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseReqId?: SortOrder
    coursecSectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseReqId?: SortOrder
    coursecSectionId?: SortOrder
  }

  export type CourseDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseLevel?: SortOrder
    assistant?: SortOrder
    imagePath?: SortOrder
    duration?: SortOrder
    certify?: SortOrder
    published?: SortOrder
    favorited?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseReqId?: SortOrder
    coursecSectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseDetailMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseLevel?: SortOrder
    assistant?: SortOrder
    imagePath?: SortOrder
    duration?: SortOrder
    certify?: SortOrder
    published?: SortOrder
    favorited?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseReqId?: SortOrder
    coursecSectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseDetailSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    instructorId?: SortOrder
    feedbackId?: SortOrder
    schedulteId?: SortOrder
    courseExpectId?: SortOrder
    courseReqId?: SortOrder
    coursecSectionId?: SortOrder
  }

  export type InstructorCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    birthDate?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    contactAddress?: SortOrder
    nationalID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstructorMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    birthDate?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    contactAddress?: SortOrder
    nationalID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    birthDate?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    contactAddress?: SortOrder
    nationalID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    feedbackDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseFeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    createdBy?: SortOrder
  }

  export type CourseFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    feedbackDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    feedbackDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseFeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    createdBy?: SortOrder
  }

  export type CourseScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    scheduleBy?: SortOrder
    courseStartDate?: SortOrder
    courseEndDate?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    scheduleBy?: SortOrder
  }

  export type CourseScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    scheduleBy?: SortOrder
    courseStartDate?: SortOrder
    courseEndDate?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    scheduleBy?: SortOrder
    courseStartDate?: SortOrder
    courseEndDate?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    scheduleBy?: SortOrder
  }

  export type CourseExpectationCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    expectationDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseExpectationAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    createdBy?: SortOrder
  }

  export type CourseExpectationMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    expectationDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseExpectationMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    expectationDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseExpectationSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    createdBy?: SortOrder
  }

  export type CourseRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    requirementDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseRequirementAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    createdBy?: SortOrder
  }

  export type CourseRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    requirementDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    requirementDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseRequirementSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    createdBy?: SortOrder
  }

  export type CoursecSectionCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    sectionDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursecSectionAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    createdBy?: SortOrder
  }

  export type CoursecSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    sectionDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursecSectionMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    sectionDetail?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursecSectionSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    createdBy?: SortOrder
  }

  export type CourseEnrollCountOrderByAggregateInput = {
    id?: SortOrder
    enrolledCourseId?: SortOrder
    scheduleId?: SortOrder
    enrooledUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseEnrollAvgOrderByAggregateInput = {
    id?: SortOrder
    enrolledCourseId?: SortOrder
    scheduleId?: SortOrder
    enrooledUserId?: SortOrder
  }

  export type CourseEnrollMaxOrderByAggregateInput = {
    id?: SortOrder
    enrolledCourseId?: SortOrder
    scheduleId?: SortOrder
    enrooledUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseEnrollMinOrderByAggregateInput = {
    id?: SortOrder
    enrolledCourseId?: SortOrder
    scheduleId?: SortOrder
    enrooledUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseEnrollSumOrderByAggregateInput = {
    id?: SortOrder
    enrolledCourseId?: SortOrder
    scheduleId?: SortOrder
    enrooledUserId?: SortOrder
  }

  export type ProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | ProfileCreateWithoutUserInput[] | ProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | ProfileCreateOrConnectWithoutUserInput[]
    createMany?: ProfileCreateManyUserInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type RequestFriendCreateNestedManyWithoutRequesterInput = {
    create?: XOR<RequestFriendCreateWithoutRequesterInput, RequestFriendUncheckedCreateWithoutRequesterInput> | RequestFriendCreateWithoutRequesterInput[] | RequestFriendUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: RequestFriendCreateOrConnectWithoutRequesterInput | RequestFriendCreateOrConnectWithoutRequesterInput[]
    createMany?: RequestFriendCreateManyRequesterInputEnvelope
    connect?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
  }

  export type RequestFriendCreateNestedManyWithoutRequestedInput = {
    create?: XOR<RequestFriendCreateWithoutRequestedInput, RequestFriendUncheckedCreateWithoutRequestedInput> | RequestFriendCreateWithoutRequestedInput[] | RequestFriendUncheckedCreateWithoutRequestedInput[]
    connectOrCreate?: RequestFriendCreateOrConnectWithoutRequestedInput | RequestFriendCreateOrConnectWithoutRequestedInput[]
    createMany?: RequestFriendCreateManyRequestedInputEnvelope
    connect?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
  }

  export type FollowingCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowingCreateWithoutUserInput, FollowingUncheckedCreateWithoutUserInput> | FollowingCreateWithoutUserInput[] | FollowingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutUserInput | FollowingCreateOrConnectWithoutUserInput[]
    createMany?: FollowingCreateManyUserInputEnvelope
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | ProfileCreateWithoutUserInput[] | ProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | ProfileCreateOrConnectWithoutUserInput[]
    createMany?: ProfileCreateManyUserInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type RequestFriendUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<RequestFriendCreateWithoutRequesterInput, RequestFriendUncheckedCreateWithoutRequesterInput> | RequestFriendCreateWithoutRequesterInput[] | RequestFriendUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: RequestFriendCreateOrConnectWithoutRequesterInput | RequestFriendCreateOrConnectWithoutRequesterInput[]
    createMany?: RequestFriendCreateManyRequesterInputEnvelope
    connect?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
  }

  export type RequestFriendUncheckedCreateNestedManyWithoutRequestedInput = {
    create?: XOR<RequestFriendCreateWithoutRequestedInput, RequestFriendUncheckedCreateWithoutRequestedInput> | RequestFriendCreateWithoutRequestedInput[] | RequestFriendUncheckedCreateWithoutRequestedInput[]
    connectOrCreate?: RequestFriendCreateOrConnectWithoutRequestedInput | RequestFriendCreateOrConnectWithoutRequestedInput[]
    createMany?: RequestFriendCreateManyRequestedInputEnvelope
    connect?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
  }

  export type FollowingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowingCreateWithoutUserInput, FollowingUncheckedCreateWithoutUserInput> | FollowingCreateWithoutUserInput[] | FollowingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutUserInput | FollowingCreateOrConnectWithoutUserInput[]
    createMany?: FollowingCreateManyUserInputEnvelope
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | ProfileCreateWithoutUserInput[] | ProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | ProfileCreateOrConnectWithoutUserInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutUserInput | ProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileCreateManyUserInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutUserInput | ProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutUserInput | ProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type RequestFriendUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<RequestFriendCreateWithoutRequesterInput, RequestFriendUncheckedCreateWithoutRequesterInput> | RequestFriendCreateWithoutRequesterInput[] | RequestFriendUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: RequestFriendCreateOrConnectWithoutRequesterInput | RequestFriendCreateOrConnectWithoutRequesterInput[]
    upsert?: RequestFriendUpsertWithWhereUniqueWithoutRequesterInput | RequestFriendUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: RequestFriendCreateManyRequesterInputEnvelope
    set?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    disconnect?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    delete?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    connect?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    update?: RequestFriendUpdateWithWhereUniqueWithoutRequesterInput | RequestFriendUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: RequestFriendUpdateManyWithWhereWithoutRequesterInput | RequestFriendUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: RequestFriendScalarWhereInput | RequestFriendScalarWhereInput[]
  }

  export type RequestFriendUpdateManyWithoutRequestedNestedInput = {
    create?: XOR<RequestFriendCreateWithoutRequestedInput, RequestFriendUncheckedCreateWithoutRequestedInput> | RequestFriendCreateWithoutRequestedInput[] | RequestFriendUncheckedCreateWithoutRequestedInput[]
    connectOrCreate?: RequestFriendCreateOrConnectWithoutRequestedInput | RequestFriendCreateOrConnectWithoutRequestedInput[]
    upsert?: RequestFriendUpsertWithWhereUniqueWithoutRequestedInput | RequestFriendUpsertWithWhereUniqueWithoutRequestedInput[]
    createMany?: RequestFriendCreateManyRequestedInputEnvelope
    set?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    disconnect?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    delete?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    connect?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    update?: RequestFriendUpdateWithWhereUniqueWithoutRequestedInput | RequestFriendUpdateWithWhereUniqueWithoutRequestedInput[]
    updateMany?: RequestFriendUpdateManyWithWhereWithoutRequestedInput | RequestFriendUpdateManyWithWhereWithoutRequestedInput[]
    deleteMany?: RequestFriendScalarWhereInput | RequestFriendScalarWhereInput[]
  }

  export type FollowingUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowingCreateWithoutUserInput, FollowingUncheckedCreateWithoutUserInput> | FollowingCreateWithoutUserInput[] | FollowingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutUserInput | FollowingCreateOrConnectWithoutUserInput[]
    upsert?: FollowingUpsertWithWhereUniqueWithoutUserInput | FollowingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FollowingCreateManyUserInputEnvelope
    set?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    disconnect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    delete?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    update?: FollowingUpdateWithWhereUniqueWithoutUserInput | FollowingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowingUpdateManyWithWhereWithoutUserInput | FollowingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | ProfileCreateWithoutUserInput[] | ProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | ProfileCreateOrConnectWithoutUserInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutUserInput | ProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileCreateManyUserInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutUserInput | ProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutUserInput | ProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type RequestFriendUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<RequestFriendCreateWithoutRequesterInput, RequestFriendUncheckedCreateWithoutRequesterInput> | RequestFriendCreateWithoutRequesterInput[] | RequestFriendUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: RequestFriendCreateOrConnectWithoutRequesterInput | RequestFriendCreateOrConnectWithoutRequesterInput[]
    upsert?: RequestFriendUpsertWithWhereUniqueWithoutRequesterInput | RequestFriendUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: RequestFriendCreateManyRequesterInputEnvelope
    set?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    disconnect?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    delete?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    connect?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    update?: RequestFriendUpdateWithWhereUniqueWithoutRequesterInput | RequestFriendUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: RequestFriendUpdateManyWithWhereWithoutRequesterInput | RequestFriendUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: RequestFriendScalarWhereInput | RequestFriendScalarWhereInput[]
  }

  export type RequestFriendUncheckedUpdateManyWithoutRequestedNestedInput = {
    create?: XOR<RequestFriendCreateWithoutRequestedInput, RequestFriendUncheckedCreateWithoutRequestedInput> | RequestFriendCreateWithoutRequestedInput[] | RequestFriendUncheckedCreateWithoutRequestedInput[]
    connectOrCreate?: RequestFriendCreateOrConnectWithoutRequestedInput | RequestFriendCreateOrConnectWithoutRequestedInput[]
    upsert?: RequestFriendUpsertWithWhereUniqueWithoutRequestedInput | RequestFriendUpsertWithWhereUniqueWithoutRequestedInput[]
    createMany?: RequestFriendCreateManyRequestedInputEnvelope
    set?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    disconnect?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    delete?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    connect?: RequestFriendWhereUniqueInput | RequestFriendWhereUniqueInput[]
    update?: RequestFriendUpdateWithWhereUniqueWithoutRequestedInput | RequestFriendUpdateWithWhereUniqueWithoutRequestedInput[]
    updateMany?: RequestFriendUpdateManyWithWhereWithoutRequestedInput | RequestFriendUpdateManyWithWhereWithoutRequestedInput[]
    deleteMany?: RequestFriendScalarWhereInput | RequestFriendScalarWhereInput[]
  }

  export type FollowingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowingCreateWithoutUserInput, FollowingUncheckedCreateWithoutUserInput> | FollowingCreateWithoutUserInput[] | FollowingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutUserInput | FollowingCreateOrConnectWithoutUserInput[]
    upsert?: FollowingUpsertWithWhereUniqueWithoutUserInput | FollowingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FollowingCreateManyUserInputEnvelope
    set?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    disconnect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    delete?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    update?: FollowingUpdateWithWhereUniqueWithoutUserInput | FollowingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowingUpdateManyWithWhereWithoutUserInput | FollowingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentRequestsInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    upsert?: UserUpsertWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRequestsInput, UserUpdateWithoutSentRequestsInput>, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    upsert?: UserUpsertWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRequestsInput, UserUpdateWithoutReceivedRequestsInput>, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    upsert?: UserUpsertWithoutFollowingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowingInput, UserUpdateWithoutFollowingInput>, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput> | CategoryCreateWithoutPostsInput[] | CategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput | CategoryCreateOrConnectWithoutPostsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput> | CategoryCreateWithoutPostsInput[] | CategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput | CategoryCreateOrConnectWithoutPostsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateManyWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput> | CategoryCreateWithoutPostsInput[] | CategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput | CategoryCreateOrConnectWithoutPostsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutPostsInput | CategoryUpsertWithWhereUniqueWithoutPostsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutPostsInput | CategoryUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutPostsInput | CategoryUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput> | CategoryCreateWithoutPostsInput[] | CategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput | CategoryCreateOrConnectWithoutPostsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutPostsInput | CategoryUpsertWithWhereUniqueWithoutPostsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutPostsInput | CategoryUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutPostsInput | CategoryUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type PostCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput> | PostCreateWithoutCategoriesInput[] | PostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput | PostCreateOrConnectWithoutCategoriesInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput> | PostCreateWithoutCategoriesInput[] | PostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput | PostCreateOrConnectWithoutCategoriesInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput> | PostCreateWithoutCategoriesInput[] | PostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput | PostCreateOrConnectWithoutCategoriesInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoriesInput | PostUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoriesInput | PostUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoriesInput | PostUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput> | PostCreateWithoutCategoriesInput[] | PostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput | PostCreateOrConnectWithoutCategoriesInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoriesInput | PostUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoriesInput | PostUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoriesInput | PostUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CourseDetailCreatetagInput = {
    set: $Enums.Tags[]
  }

  export type CourseDetailUpdatetagInput = {
    set?: $Enums.Tags[]
    push?: $Enums.Tags | $Enums.Tags[]
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProfileCreateWithoutUserInput = {
    biograpy: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    biograpy: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileCreateManyUserInputEnvelope = {
    data: ProfileCreateManyUserInput | ProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutAuthorInput = {
    title: string
    published?: boolean
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    published?: boolean
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RequestFriendCreateWithoutRequesterInput = {
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requested: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type RequestFriendUncheckedCreateWithoutRequesterInput = {
    id?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestedId: number
  }

  export type RequestFriendCreateOrConnectWithoutRequesterInput = {
    where: RequestFriendWhereUniqueInput
    create: XOR<RequestFriendCreateWithoutRequesterInput, RequestFriendUncheckedCreateWithoutRequesterInput>
  }

  export type RequestFriendCreateManyRequesterInputEnvelope = {
    data: RequestFriendCreateManyRequesterInput | RequestFriendCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type RequestFriendCreateWithoutRequestedInput = {
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutSentRequestsInput
  }

  export type RequestFriendUncheckedCreateWithoutRequestedInput = {
    id?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId: number
  }

  export type RequestFriendCreateOrConnectWithoutRequestedInput = {
    where: RequestFriendWhereUniqueInput
    create: XOR<RequestFriendCreateWithoutRequestedInput, RequestFriendUncheckedCreateWithoutRequestedInput>
  }

  export type RequestFriendCreateManyRequestedInputEnvelope = {
    data: RequestFriendCreateManyRequestedInput | RequestFriendCreateManyRequestedInput[]
    skipDuplicates?: boolean
  }

  export type FollowingCreateWithoutUserInput = {
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingUncheckedCreateWithoutUserInput = {
    id?: number
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingCreateOrConnectWithoutUserInput = {
    where: FollowingWhereUniqueInput
    create: XOR<FollowingCreateWithoutUserInput, FollowingUncheckedCreateWithoutUserInput>
  }

  export type FollowingCreateManyUserInputEnvelope = {
    data: FollowingCreateManyUserInput | FollowingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateManyWithWhereWithoutUserInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    OR?: ProfileScalarWhereInput[]
    NOT?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    id?: IntFilter<"Profile"> | number
    biograpy?: StringFilter<"Profile"> | string
    profileImage?: StringFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    userId?: IntFilter<"Profile"> | number
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    content?: StringFilter<"Post"> | string
    authorId?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type RequestFriendUpsertWithWhereUniqueWithoutRequesterInput = {
    where: RequestFriendWhereUniqueInput
    update: XOR<RequestFriendUpdateWithoutRequesterInput, RequestFriendUncheckedUpdateWithoutRequesterInput>
    create: XOR<RequestFriendCreateWithoutRequesterInput, RequestFriendUncheckedCreateWithoutRequesterInput>
  }

  export type RequestFriendUpdateWithWhereUniqueWithoutRequesterInput = {
    where: RequestFriendWhereUniqueInput
    data: XOR<RequestFriendUpdateWithoutRequesterInput, RequestFriendUncheckedUpdateWithoutRequesterInput>
  }

  export type RequestFriendUpdateManyWithWhereWithoutRequesterInput = {
    where: RequestFriendScalarWhereInput
    data: XOR<RequestFriendUpdateManyMutationInput, RequestFriendUncheckedUpdateManyWithoutRequesterInput>
  }

  export type RequestFriendScalarWhereInput = {
    AND?: RequestFriendScalarWhereInput | RequestFriendScalarWhereInput[]
    OR?: RequestFriendScalarWhereInput[]
    NOT?: RequestFriendScalarWhereInput | RequestFriendScalarWhereInput[]
    id?: IntFilter<"RequestFriend"> | number
    status?: StringFilter<"RequestFriend"> | string
    createdAt?: DateTimeFilter<"RequestFriend"> | Date | string
    updatedAt?: DateTimeFilter<"RequestFriend"> | Date | string
    requesterId?: IntFilter<"RequestFriend"> | number
    requestedId?: IntFilter<"RequestFriend"> | number
  }

  export type RequestFriendUpsertWithWhereUniqueWithoutRequestedInput = {
    where: RequestFriendWhereUniqueInput
    update: XOR<RequestFriendUpdateWithoutRequestedInput, RequestFriendUncheckedUpdateWithoutRequestedInput>
    create: XOR<RequestFriendCreateWithoutRequestedInput, RequestFriendUncheckedCreateWithoutRequestedInput>
  }

  export type RequestFriendUpdateWithWhereUniqueWithoutRequestedInput = {
    where: RequestFriendWhereUniqueInput
    data: XOR<RequestFriendUpdateWithoutRequestedInput, RequestFriendUncheckedUpdateWithoutRequestedInput>
  }

  export type RequestFriendUpdateManyWithWhereWithoutRequestedInput = {
    where: RequestFriendScalarWhereInput
    data: XOR<RequestFriendUpdateManyMutationInput, RequestFriendUncheckedUpdateManyWithoutRequestedInput>
  }

  export type FollowingUpsertWithWhereUniqueWithoutUserInput = {
    where: FollowingWhereUniqueInput
    update: XOR<FollowingUpdateWithoutUserInput, FollowingUncheckedUpdateWithoutUserInput>
    create: XOR<FollowingCreateWithoutUserInput, FollowingUncheckedCreateWithoutUserInput>
  }

  export type FollowingUpdateWithWhereUniqueWithoutUserInput = {
    where: FollowingWhereUniqueInput
    data: XOR<FollowingUpdateWithoutUserInput, FollowingUncheckedUpdateWithoutUserInput>
  }

  export type FollowingUpdateManyWithWhereWithoutUserInput = {
    where: FollowingScalarWhereInput
    data: XOR<FollowingUpdateManyMutationInput, FollowingUncheckedUpdateManyWithoutUserInput>
  }

  export type FollowingScalarWhereInput = {
    AND?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
    OR?: FollowingScalarWhereInput[]
    NOT?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
    id?: IntFilter<"Following"> | number
    userId?: IntFilter<"Following"> | number
    followingId?: IntFilter<"Following"> | number
    createdAt?: DateTimeFilter<"Following"> | Date | string
    updatedAt?: DateTimeFilter<"Following"> | Date | string
  }

  export type UserCreateWithoutSentRequestsInput = {
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    receivedRequests?: RequestFriendCreateNestedManyWithoutRequestedInput
    following?: FollowingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentRequestsInput = {
    id?: number
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    receivedRequests?: RequestFriendUncheckedCreateNestedManyWithoutRequestedInput
    following?: FollowingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
  }

  export type UserCreateWithoutReceivedRequestsInput = {
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    sentRequests?: RequestFriendCreateNestedManyWithoutRequesterInput
    following?: FollowingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedRequestsInput = {
    id?: number
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    sentRequests?: RequestFriendUncheckedCreateNestedManyWithoutRequesterInput
    following?: FollowingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
  }

  export type UserUpsertWithoutSentRequestsInput = {
    update: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateWithoutSentRequestsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    receivedRequests?: RequestFriendUpdateManyWithoutRequestedNestedInput
    following?: FollowingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    receivedRequests?: RequestFriendUncheckedUpdateManyWithoutRequestedNestedInput
    following?: FollowingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserUpdateWithoutReceivedRequestsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    sentRequests?: RequestFriendUpdateManyWithoutRequesterNestedInput
    following?: FollowingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    sentRequests?: RequestFriendUncheckedUpdateManyWithoutRequesterNestedInput
    following?: FollowingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutAuthorInput
    sentRequests?: RequestFriendCreateNestedManyWithoutRequesterInput
    receivedRequests?: RequestFriendCreateNestedManyWithoutRequestedInput
    following?: FollowingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    sentRequests?: RequestFriendUncheckedCreateNestedManyWithoutRequesterInput
    receivedRequests?: RequestFriendUncheckedCreateNestedManyWithoutRequestedInput
    following?: FollowingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAuthorNestedInput
    sentRequests?: RequestFriendUpdateManyWithoutRequesterNestedInput
    receivedRequests?: RequestFriendUpdateManyWithoutRequestedNestedInput
    following?: FollowingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    sentRequests?: RequestFriendUncheckedUpdateManyWithoutRequesterNestedInput
    receivedRequests?: RequestFriendUncheckedUpdateManyWithoutRequestedNestedInput
    following?: FollowingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFollowingInput = {
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    sentRequests?: RequestFriendCreateNestedManyWithoutRequesterInput
    receivedRequests?: RequestFriendCreateNestedManyWithoutRequestedInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: number
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    sentRequests?: RequestFriendUncheckedCreateNestedManyWithoutRequesterInput
    receivedRequests?: RequestFriendUncheckedCreateNestedManyWithoutRequestedInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateWithoutFollowingInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    sentRequests?: RequestFriendUpdateManyWithoutRequesterNestedInput
    receivedRequests?: RequestFriendUpdateManyWithoutRequestedNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    sentRequests?: RequestFriendUncheckedUpdateManyWithoutRequesterNestedInput
    receivedRequests?: RequestFriendUncheckedUpdateManyWithoutRequestedNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedManyWithoutUserInput
    sentRequests?: RequestFriendCreateNestedManyWithoutRequesterInput
    receivedRequests?: RequestFriendCreateNestedManyWithoutRequestedInput
    following?: FollowingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    firstName: string
    lastName: string
    password: string
    email: string
    dateOfBirth: Date | string
    jobTitle?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: RequestFriendUncheckedCreateNestedManyWithoutRequesterInput
    receivedRequests?: RequestFriendUncheckedCreateNestedManyWithoutRequestedInput
    following?: FollowingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CategoryCreateWithoutPostsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateManyWithoutUserNestedInput
    sentRequests?: RequestFriendUpdateManyWithoutRequesterNestedInput
    receivedRequests?: RequestFriendUpdateManyWithoutRequestedNestedInput
    following?: FollowingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: RequestFriendUncheckedUpdateManyWithoutRequesterNestedInput
    receivedRequests?: RequestFriendUncheckedUpdateManyWithoutRequestedNestedInput
    following?: FollowingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateManyWithWhereWithoutPostsInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutPostsInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type PostCreateWithoutCategoriesInput = {
    title: string
    published?: boolean
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    published?: boolean
    content: string
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
  }

  export type PostUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
  }

  export type PostUpdateManyWithWhereWithoutCategoriesInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type ProfileCreateManyUserInput = {
    id?: number
    biograpy: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    title: string
    published?: boolean
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestFriendCreateManyRequesterInput = {
    id?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestedId: number
  }

  export type RequestFriendCreateManyRequestedInput = {
    id?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId: number
  }

  export type FollowingCreateManyUserInput = {
    id?: number
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateWithoutUserInput = {
    biograpy?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    biograpy?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    biograpy?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestFriendUpdateWithoutRequesterInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requested?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type RequestFriendUncheckedUpdateWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestFriendUncheckedUpdateManyWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestFriendUpdateWithoutRequestedInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
  }

  export type RequestFriendUncheckedUpdateWithoutRequestedInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestFriendUncheckedUpdateManyWithoutRequestedInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowingUpdateWithoutUserInput = {
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostCountOutputTypeDefaultArgs instead
     */
    export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RequestFriendDefaultArgs instead
     */
    export type RequestFriendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequestFriendDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileDefaultArgs instead
     */
    export type ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowingDefaultArgs instead
     */
    export type FollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FollowingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseDefaultArgs instead
     */
    export type CourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseDetailDefaultArgs instead
     */
    export type CourseDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InstructorDefaultArgs instead
     */
    export type InstructorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InstructorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseFeedbackDefaultArgs instead
     */
    export type CourseFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseFeedbackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseScheduleDefaultArgs instead
     */
    export type CourseScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseScheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseExpectationDefaultArgs instead
     */
    export type CourseExpectationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseExpectationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseRequirementDefaultArgs instead
     */
    export type CourseRequirementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseRequirementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CoursecSectionDefaultArgs instead
     */
    export type CoursecSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoursecSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseEnrollDefaultArgs instead
     */
    export type CourseEnrollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseEnrollDefaultArgs<ExtArgs>

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