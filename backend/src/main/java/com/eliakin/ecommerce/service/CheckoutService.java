package com.eliakin.ecommerce.service;

import com.eliakin.ecommerce.dto.Purchase;
import com.eliakin.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
	PurchaseResponse placeOrder(Purchase purchase);
}
