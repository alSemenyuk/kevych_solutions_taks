import 'dotenv/config';
import mongoose from 'mongoose';


export const dbInit = async (PORT, app) => {
  try {
    await mongoose.connect(process.env.BD_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  } catch(err) {
    console.log(err)
  }
};