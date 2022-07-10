import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  const file = path.resolve(__dirname, '..', 'data.json');
  const stringified = readFileSync(file, 'utf8');

  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(JSON.parse(stringified).data));
}
