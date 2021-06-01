import mongoose from 'mongoose';

const whatsappSchema = mongoose.Schema({
    message :String,
    name:String,
    timestamp: String,
    received: Boolean
})
export default mongoose.model('messageContents',whatsappSchema)
//messageContent table in db