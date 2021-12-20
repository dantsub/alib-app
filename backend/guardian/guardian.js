const { verify } = require('jsonwebtoken');

const guardian = (req, res, next) => {
  const authorizations = req.headers.authorizations;

  if (!authorizations) {
    next(JSON.stringfy({ estado: 'Error', msg: 'No autorizado' }));
  }

  try {
    const t = authorizations.split(' ')[1];
    const payload = verify(t, process.env.JWT_SECRET_KEY);
    if (!payload) {
      next(JSON.stringify({ estado: 'Error', msg: 'No autorizado' }));
    }
  } catch (error) {
    console.log(error);
  }

  return next();
};
exports.guardian = guardian;
