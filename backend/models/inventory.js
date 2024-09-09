import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Inventory', inventorySchema);
