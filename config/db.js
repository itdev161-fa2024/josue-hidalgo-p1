import mongoose from 'mongoose';
import config from 'config';

const db = config.get('mongoURI');

const ConnectDatabase = async () => {
    try{
        await mongoose.connect(db, {
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB')
    } catch (error){
        console.error(error.message);

        //Exit with failure code
        process.exit(1);
    }
};

export default ConnectDatabase;