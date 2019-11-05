/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Icon_tab_assignment/Icon_tab_assignment/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});