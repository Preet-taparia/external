export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { ir_code, device } = req.body;
        res.status(200).json({ message: 'IR data received successfully' });
    } else {
      res.status(405).json({ message: 'Only POST requests are allowed' });
    }
  }
  