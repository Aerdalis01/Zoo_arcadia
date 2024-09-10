"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryParam = void 0;
const getQueryParam = (param) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
};
exports.getQueryParam = getQueryParam;
//# sourceMappingURL=urlUtils.js.map