

const ShippingPolicy = () => {
    return (
        <div className="bg-body-tertiary">
            <h1 className="text-center fw-bold ">Shipping Policy</h1>
            <div className="container  mt-5 bg-white shadow-sm p-3 mb-5 bg-body rounded py-2">
                <h4>Domestic Shipping Policy</h4>
                <p>Shipment processing time: All orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays.</p>
                <p>If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in shipment of your order, we will contact you via email or telephone.</p>

                <h4>Shipping rates & delivery estimates</h4>
                <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Shipment method</th>
                            <th scope="col">Estimated delivery time</th>
                            <th scope="col">Shipment cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Standard</th>
                            <td>3-5 business days</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <th>Two Days</th>
                            <td>2 business days</td>
                            <td>$12.95</td>
                        </tr>
                        <tr>
                            <th>Overnight</th>
                            <td>1-2 business days</td>
                            <td>$24.95</td>
                        </tr>
                    </tbody>
                </table>
                <p>Delivery delays can occasionally occur.</p>

                <h4>Shipment confirmation & Order tracking</h4>
                <p>You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.</p>

                <h4>Customs, Duties and Taxes</h4>
                <p>Our company is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).</p>

                <h4>Damages</h4>
                <p>Our company is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim.</p>
                <p>Please save all packaging materials and damaged goods before filing a claim.</p>
            </div>
        </div>
    );
};

export default ShippingPolicy;