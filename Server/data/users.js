import bcrypt from "bcryptjs";

const user = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "user1",
    email: "user1@gmail.com",
    password: bcrypt.hashSync("user123", 10),
  },
];

export default user;
