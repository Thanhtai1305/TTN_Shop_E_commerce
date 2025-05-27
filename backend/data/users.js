import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin123', 10),
    isAdmin: true
  },
  {
    name: 'Thanh Tai',
    email: 'tai@email.com',
    password: bcrypt.hashSync('tai123', 10),
    isAdmin: false
  },
  {
    name: 'Tuan',
    email: 'tuandeptrai@email.com',
    password: bcrypt.hashSync('tuandeptrai123', 10),
    isAdmin: false
  },
  {
    name: 'Nhi',
    email: 'nhidepgai@email.com',
    password: bcrypt.hashSync('nhidepgai24', 10),
    isAdmin: false
  },
  {
    name: 'Bao Ngoc',
    email: 'ngockem@email.com',
    password: bcrypt.hashSync('kemcute', 10),
    isAdmin: false
  }
];

export default users;
