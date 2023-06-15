export async function json(req, res) {

  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk)
  }
  
  try {
    const body = Buffer.concat(buffers).toString()
    req.body = JSON.parse(body);
  } catch {
    req.body = '';
  }

  res.setHeader('Content-type', 'application/json')
}