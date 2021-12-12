/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"garage/btp/garagebtp3/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});