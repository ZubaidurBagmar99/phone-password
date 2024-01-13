

const SiteMap = () => {
    return (
        <div className="container bg-body-tertiary mt-4 p-5">
            <h1 className="text-center fw-bold ">Site Map</h1>
            <div className="d-flex justify-content-around mt-5 bg-white rounded py-2">
                <div>
                    <h4>Main</h4>
                    <div className="mt-4 lh-1 text-primary">
                        <p>Home</p>
                        <p>About</p>
                        <p>Service</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div>
                    <h4>Shop</h4>
                    <div className="mt-4 lh-1 text-primary">
                        <p>Categories</p>
                        <p>New Arrivals</p>
                        <p>Special Offers</p>
                        <p>Reviews</p>
                    </div>
                </div>
                <div>
                    <h4>Support</h4>
                    <div className="mt-4 lh-1 text-primary">
                        <p>FAQ</p>
                        <p>Shipping Policy</p>
                        <p>Return Policy</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div>
                    <h4>Legal</h4>
                    <div className="mt-4 lh-1 text-primary">
                        <p>Terms of Service</p>
                        <p>Disclaimer</p>
                        <p>Site Map</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteMap;