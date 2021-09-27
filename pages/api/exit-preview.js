export default function handler(req, res) {
  res.clearPreviewData({});
  const key = process.env.KEY;
  if (req.query.key !== key) {
    return res.status(401).json({ message: 'invalid key to enable preview' });
  }
  res.writeHead(307, { location: '/' });

  return res.end();
}
