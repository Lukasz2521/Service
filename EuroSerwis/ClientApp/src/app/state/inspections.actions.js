"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InspectionActionTypes;
(function (InspectionActionTypes) {
    InspectionActionTypes["LoadInspections"] = "Load inspections";
    InspectionActionTypes["InspectionLoaded"] = "Inspection Loaded";
    InspectionActionTypes["CreateInspection"] = "Create inspection";
    InspectionActionTypes["InspectionCreated"] = "Inspection created";
    InspectionActionTypes["DeleteInspection"] = "Delete Inspection";
    InspectionActionTypes["InspectionDeleted"] = "Inspection deleted";
    InspectionActionTypes["UpdateInspection"] = "Udpate Inspection";
    InspectionActionTypes["InspectionUpdated"] = "InspectionUpdated";
})(InspectionActionTypes = exports.InspectionActionTypes || (exports.InspectionActionTypes = {}));
var LoadInspections = /** @class */ (function () {
    function LoadInspections() {
        this.type = InspectionActionTypes.LoadInspections;
    }
    return LoadInspections;
}());
exports.LoadInspections = LoadInspections;
var InspectionsLoaded = /** @class */ (function () {
    function InspectionsLoaded(payload) {
        this.payload = payload;
        this.type = InspectionActionTypes.InspectionLoaded;
    }
    return InspectionsLoaded;
}());
exports.InspectionsLoaded = InspectionsLoaded;
var CreateInspection = /** @class */ (function () {
    function CreateInspection(payload) {
        this.payload = payload;
        this.type = InspectionActionTypes.CreateInspection;
    }
    return CreateInspection;
}());
exports.CreateInspection = CreateInspection;
var InspectionCreated = /** @class */ (function () {
    function InspectionCreated(payload) {
        this.payload = payload;
        this.type = InspectionActionTypes.InspectionCreated;
    }
    return InspectionCreated;
}());
exports.InspectionCreated = InspectionCreated;
var DeleteInspection = /** @class */ (function () {
    function DeleteInspection(payload) {
        this.payload = payload;
        this.type = InspectionActionTypes.DeleteInspection;
    }
    return DeleteInspection;
}());
exports.DeleteInspection = DeleteInspection;
var InspectionDeleted = /** @class */ (function () {
    function InspectionDeleted(payload) {
        this.payload = payload;
        this.type = InspectionActionTypes.InspectionDeleted;
    }
    return InspectionDeleted;
}());
exports.InspectionDeleted = InspectionDeleted;
var UpdateInspection = /** @class */ (function () {
    function UpdateInspection(payload) {
        this.payload = payload;
        this.type = InspectionActionTypes.UpdateInspection;
    }
    return UpdateInspection;
}());
exports.UpdateInspection = UpdateInspection;
var InspectionUpdated = /** @class */ (function () {
    function InspectionUpdated(payload) {
        this.payload = payload;
        this.type = InspectionActionTypes.InspectionUpdated;
    }
    return InspectionUpdated;
}());
exports.InspectionUpdated = InspectionUpdated;
//# sourceMappingURL=inspections.actions.js.map