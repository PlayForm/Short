/**
 * @module Integration
 *
 */
declare const _default: (Option?: import("../Interface/Option.js").default | undefined) => {
    name: string;
    hooks: {
        "astro:build:done": () => Promise<void>;
    };
};
export default _default;
export declare const Default: {
    Logger: number;
};
export declare const Merge: import("@playform/build/Target/Interface/Merge.js").default<import("@playform/build/Target/Interface/Merge.js").Generic>;
