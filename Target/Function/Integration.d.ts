/**
 * @module Integration
 *
 */
declare const _default: Interface;
export default _default;
import type Interface from "../Interface/Integration.js";
export declare const Default: import("../Interface/Option.js").default;
export declare const Merge: <Ts extends readonly unknown[]>(...objects: Ts) => import("deepmerge-ts").DeepMergeHKT<Ts, import("deepmerge-ts").GetDeepMergeFunctionsURIs<{}>, import("deepmerge-ts").DeepMergeBuiltInMetaData>;
