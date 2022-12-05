import mongoose from 'mongoose';
import config from 'config';
import log from '../utils/logger';

async function connect() {
  const dbUri = config.get<string>('dbUri');
  try {
    await mongoose.connect(dbUri);
    log.info('DB connected!');
  } catch (error) {
    log.info('Could not connect DB');
    process.exit(1);
  }
}

export default connect;
