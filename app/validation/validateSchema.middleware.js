export default function validate(schema) {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      console.error(error.details)
      res.status(400).json({ error: error.details[0].message });
    }
  };
}