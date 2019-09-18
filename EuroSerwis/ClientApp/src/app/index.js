"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fromInspections = require("./state/inspections.reducers");
var store_1 = require("@ngrx/store");
exports.reducers = {
    inspections: fromInspections.inspectionsReducer
};
exports.selectInspectionState = store_1.createFeatureSelector('inspections');
exports.selectAllInspections = store_1.createSelector(exports.selectInspectionState, fromInspections.selectAllInspections);
//# sourceMappingURL=index.js.map