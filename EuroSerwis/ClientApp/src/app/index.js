"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fromInspections = require("./state/inspections.reducers");
var store_1 = require("@ngrx/store");
exports.reducers = {
    inspections: fromInspections.inspectionsReducer
};
exports.selectInspectionState = store_1.createFeatureSelector('inspections');
exports.selectAllInspections = store_1.createSelector(exports.selectInspectionState, fromInspections.selectAllInspections);
exports.selectUpcomingInspections = store_1.createSelector(exports.selectInspectionState, function (state) {
    var upcomingInspections = [];
    for (var inspection in state.entities) {
        if (isUpcomingInspection(state.entities[inspection])) {
            upcomingInspections.push(state.entities[inspection]);
        }
    }
    return upcomingInspections;
});
var isUpcomingInspection = function (inspection) {
    var inspectionDate = new Date(inspection.date), now = new Date();
    var differenceInTime = inspectionDate.getTime() - now.getTime();
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays >= 0 && differenceInDays <= 7;
};
//# sourceMappingURL=index.js.map