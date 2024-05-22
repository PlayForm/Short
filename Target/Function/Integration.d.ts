/**
 * @module Integration
 *
 */
<<<<<<< HEAD
declare const _default: Interface;
export default _default;
import type Interface from "../Interface/Integration.js";
export declare const Default: import("../Interface/Option.js").default;
=======
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
>>>>>>> 1ce6a38954cdb44af2c07ce4133a479ab5a3b527
export declare const Merge: import("@playform/build/Target/Interface/Merge.js").default<import("@playform/build/Target/Interface/Merge.js").Generic>;
