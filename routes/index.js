import { Router } from "express";
import { check, validationResult } from "express-validator";
const router = Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

/* GET values. */
router.get(
  "/calculate",
  [
    check("Q").isArray().withMessage("Q must be an array"),
    check("R").isArray().withMessage("R must be an array"),
    check("Q.*").isArray().withMessage("Q must be a 2D array"),
    check("R.*").isArray().withMessage("R must be a 2D array"),
    check("Q.*.*").isFloat().withMessage("Q must contain numbers"),
    check("R.*.*").isFloat().withMessage("R must contain numbers"),
  ],
  (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { Q, R } = req.body;

    //* Q y R
    const todasMatrices = [...Q.flat(), ...R.flat()];

    //* calcular el valor máximo
    const maximo = Math.max(...todasMatrices);

    //* calcular el valor mínimo
    const minimo = Math.min(...todasMatrices);

    //* calcular el promedio
    const total = todasMatrices.reduce((acc, curr) => acc + curr, 0);
    const promedio = total / todasMatrices.length;

    const sumaTotal = total;

    // Función para verificar si una matriz es diagonal
    const esDiagonal = (matriz) => {
      for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
          if (i !== j && matriz[i][j] !== 0) {
            return false;
          }
        }
      }
      return true;
    };

    const QEsDiagonal = esDiagonal(Q);
    const REsDiagonal = esDiagonal(R);

    const resultados = {
      valorMaximo: maximo,
      valorMinimo: minimo,
      promedio: promedio,
      sumaTotal: sumaTotal,
      Q_EsDiagonal: QEsDiagonal,
      R_EsDiagonal: REsDiagonal,
    };

    res.json(resultados);
  }
);

export default router;
