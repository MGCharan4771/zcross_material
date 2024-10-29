/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zcross_material/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
