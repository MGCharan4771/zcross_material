sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("zcrossmaterial.controller.View1", {
            onInit: function () {

            },
            onPressRow: function (oEvent) {
                var selectedObj = oEvent.getSource().getBindingContext().getObject();
                var materialnumber = selectedObj.Mat_No;
                var xnavservice = sap.ushell && sap.ushell.Container &&
                    sap.ushell.Container.getService && sap.ushell.Container.getService("CrossApplicationNavigation");

                var href = (xnavservice && xnavservice.hrefForExternal({
                    target: {
                        semanticObject: "zsemobj_filtermat",
                        action: "display"
                    },
                    params: {
                        matno: materialnumber
                    }
                })) || '';
                xnavservice.toExternal({
                    target: {
                        shellHash: href
                    }
                })
            }
        });
    });
