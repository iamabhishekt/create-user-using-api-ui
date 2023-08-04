// pages/api/token.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function getToken(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { client_id, client_secret, subdomain } = req.body;
    const response = await axios.post(
      'https://mclxdpbrg2n9j1y8ftm46zszshqy.auth.marketingcloudapis.com/v2/token',
      {
        grant_type: 'client_credentials',
        client_id,
        client_secret,
        subdomain,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching token:', error);
    res.status(500).json({ error: 'Failed to fetch token' });
  }
}
