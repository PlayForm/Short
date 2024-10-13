import type Interface from "../Interface/Integration.js";

/**
 * @module Integration
 *
 */
declare const _default: Interface;
export default _default;

export declare const Default: import("../Interface/Option.js").default;
export declare const Merge: <Ts extends readonly unknown[]>(
	...objects: Ts
) => import("deepmerge-ts").DeepMergeHKT<
	Ts,
	Readonly<{
		DeepMergeRecordsURI: "DeepMergeRecordsDefaultURI";
		DeepMergeArraysURI: "DeepMergeArraysDefaultURI";
		DeepMergeSetsURI: "DeepMergeSetsDefaultURI";
		DeepMergeMapsURI: "DeepMergeMapsDefaultURI";
		DeepMergeOthersURI: "DeepMergeLeafURI";
		DeepMergeFilterValuesURI: "DeepMergeFilterValuesDefaultURI";
	}>,
	Readonly<{
		key: PropertyKey;
		parents: ReadonlyArray<Readonly<Record<PropertyKey, unknown>>>;
	}>
>;
