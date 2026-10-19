
const apiController = (req, res) => {

    const products = [
        {
            "name": "Car",
            "price": 100000,
            "stock": 10,
        },
        {
            "name": "MotorCycle",
            "price": 2000,
            "stock": 10,
        }
    ]
    res.status(200).json({
        success: true,
        products
    });

}

export default apiController;
