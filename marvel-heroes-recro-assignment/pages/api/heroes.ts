// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getHeros } from "../../data";
import { Hero, HeroResponse } from "../../data/types/HeroReponse";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ heroes: HeroResponse }>
) {
  const search = req.query.search?.toString();
  const heroes = await getHeros(search);
  res.status(200).json({ heroes });
}
