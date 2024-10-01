export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { ir_code } = req.body;
      console.log(ir_code);
  
      if (!ir_code) {
        return res.status(400).json({ message: 'IR code is missing' });
      }  
      return res.status(200).json({ message: 'IR data received successfully', ir_code });
    } else {
      return res.status(405).json({ message: 'Method Not Allowed. Use POST.' });
    }
  }
  