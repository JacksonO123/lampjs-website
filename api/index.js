// import vercelHelper from '@jacksonotto/lampjs-vercel';

// export default vercelHelper;

import { readdirSync } from 'fs';

export default async function handler(_request, response) {
  const dir = readdirSync('.');
  response.status(200).json({ dir });
}
