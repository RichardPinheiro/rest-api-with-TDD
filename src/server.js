import 'dotenv/config';

import server from './app'

server.app.listen(process.env.APP_PORT || 3000)

console.log('Server running...')