import { Response } from "express";

export default {
  async index(_: any, res: Response) {
    res.send({ okdsddss: true });
  },
};
