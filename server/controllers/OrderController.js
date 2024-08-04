const OrderModel = require("../models/OrderModel")

const OrderController = {
    showAll: async (req, res) => {
        OrderModel.find()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json({ message: err.message }))
    },
    findOrders: async(req, res) => {
        console.log(req.body)
        const{userId} =  req.body
        OrderModel.find({userId})
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json({ message: `Error checkAccount! ${err}` }))
    },
    delete: async (req, res) => {
        console.log(req.params.id)
        OrderModel.findByIdAndUpdate(req.params.id,{ status: 'Cancelled' })
        .then((updatedOrder) => {
            if (!updatedOrder) {
              console.log('Không tìm thấy document với ID đã cho.');
              return;
            }
            console.log('Document đã được cập nhật:', updatedOrder);
          })
          .catch((error) => {
            console.error('Lỗi khi tìm và cập nhật document:', error);
          });
    },
    addOrder: async (req, res) => {
            const order= req.body
            console.log(order.cart)
        try {
            const Order = new OrderModel(order.cart);
            const savedOrder = await Order.save();
            res.status(200).json({ message: "Đơn hàng tạo thành công", data: savedOrder });
        } catch (err) {
            console.error('Lỗi khi tạo sản phẩm:', err);
            res.status(500).json({ message: "Lỗi khi tạo đơn hàng", error: err.message });
        }
    },
}
module.exports = OrderController
