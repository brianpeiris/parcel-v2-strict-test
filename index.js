"use strict";

// Commenting the next line enables strict mode
import { foo } from "./foo.js";

const isStrict = (function () { return !this; })();
console.log("isStrict", isStrict);
