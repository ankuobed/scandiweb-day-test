import { 
    CheckoutContainer as SourceCheckoutContainer, 
    mapDispatchToProps, 
    mapStateToProps,
} from 'SourceRoute/Checkout/Checkout.container';
import { Checkout } from 'SourceRoute/Checkout/Checkout.component'
import { connect } from 'react-redux'
import StepProgressBar from 'Component/StepProgressBar';
import {
    BILLING_STEP, DETAILS_STEP, PAYMENT_TOTALS, SHIPPING_STEP, UPDATE_EMAIL_CHECK_FREQUENCY
} from 'SourceRoute/Checkout/Checkout.config';

/** @namespace Route/Checkout/Container */
export class CheckoutContainer extends SourceCheckoutContainer {
    __construct(props) {
        super.__construct(props);
    }

    steps = [SHIPPING_STEP, BILLING_STEP, DETAILS_STEP]

    render() {
        return (
            <div>
                <StepProgressBar 
                    steps={this.steps} 
                    currentStep={this.state.checkoutStep} 
                />
                <Checkout
                    { ...this.props }
                    { ...this.state }
                    { ...this.containerFunctions }
                    { ...this.containerProps() }
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
