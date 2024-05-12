import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { MakeTrackingFalse } from '../data/cart.js';
// import '../data/cart-class.js';

renderOrderSummary();
renderPaymentSummary();
MakeTrackingFalse()