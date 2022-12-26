import AdminJS from 'adminjs'
import { Adapter } from 'adminjs-sql';
AdminJS.registerAdapter(Adapter);

const db = await Adapter.init('mysql2', {
  host: 'mysql_backend',
  port: '3306',
  user: 'user',
  password: 'NThiZWIy',
  database: 'eshop'
});

export default db;