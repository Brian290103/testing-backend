import connection from '@utils/database';

export async function GET(request) {
  try {
    const query = 'SELECT * FROM products';

    const results = await new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response('Error querying the db', { status: 500 });
  }
}
