import jwt from "jsonwebtoken";

export const login = async (email, password) => {
  if (!email || !password) throw new Error("Email y contraseña requeridos");

  const fakeUser = {
    email: "test@gmail.com",
    password: "123456" 
  };

  if (email !== fakeUser.email || password !== fakeUser.password) {
    throw new Error("Credenciales inválidas");
  }

  const token = jwt.sign(
    { id: fakeUser.id, email: fakeUser.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" } 
  );

  return token;
};
