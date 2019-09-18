"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inspections_actions_1 = require("./inspections.actions");
var entity_1 = require("@ngrx/entity");
exports.adapter = entity_1.createEntityAdapter();
exports.initialState = exports.adapter.getInitialState({
    inspections: []
});
function inspectionsReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case inspections_actions_1.InspectionActionTypes.InspectionLoaded:
            return exports.adapter.addMany(action.payload, state);
        case inspections_actions_1.InspectionActionTypes.InspectionCreated:
            return exports.adapter.addOne(action.payload, state);
        case inspections_actions_1.InspectionActionTypes.InspectionUpdated:
            return exports.adapter.updateOne(action.payload, state);
        case inspections_actions_1.InspectionActionTypes.InspectionDeleted:
            return exports.adapter.removeOne(action.payload, state);
        default:
            return state;
    }
}
exports.inspectionsReducer = inspectionsReducer;
var _a = exports.adapter.getSelectors(), selectIds = _a.selectIds, selectEntities = _a.selectEntities, selectAll = _a.selectAll;
exports.selectInspectionIds = selectIds;
exports.selectInspectionsEntities = selectEntities;
exports.selectAllInspections = selectAll;
//# sourceMappingURL=inspections.reducers.js.map