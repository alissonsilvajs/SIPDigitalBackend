import * as Yup from 'yup';

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    price: Yup.string().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).send({ error: 'Validation fails' });
  }

  return next();
};
