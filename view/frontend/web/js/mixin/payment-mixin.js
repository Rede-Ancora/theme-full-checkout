/**
 * Copyright © 2021 O2TI. All rights reserved.
 * @author  Bruno Elisei <brunoelisei@o2ti.com>
 * See LICENSE.txt for license details.
 */

define([
	"Magento_Checkout/js/model/step-navigator"
], function (stepNavigator) {
	"use strict";
	return function (targetModule) {
		return targetModule.extend({
			defaults: {
				template: "O2TI_ThemeFullCheckout/payment"
			},
			isVisibleTitleForAddress() {
				return window.checkoutConfig.move_address_billing;
			},
			previousStep() {
				stepNavigator.navigateTo("shipping");
			}
		});
	};
});
