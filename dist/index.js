import { deepmerge as s } from "deepmerge-ts";
import n from "./options/index.js";
var p=(r={})=>{var e;for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&r[o]===!0&&(r[o]=n()[o]);const t=s(n(),r);return t.url=(e=t.url)!=null&&e.endsWith("/")?t.url:`${t.url}/`,{name:"astro-short-urls",hooks:{"astro:build:done":async()=>{}}}};export { p as default };

