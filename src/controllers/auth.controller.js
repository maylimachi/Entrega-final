import * as authService from "../services/auth.service.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await authService.login(email, password);

    return res.json({ token });

  } catch (error) {
    return res.status(401).json({
      error: error.message || "Credenciales inválidas"
    });
  }
};



