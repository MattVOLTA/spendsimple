const Airtable = require('airtable');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env;

  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
    return { statusCode: 500, body: 'Server configuration error' };
  }

  try {
    const { firstName, phoneNumber } = JSON.parse(event.body);

    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

    await base(AIRTABLE_TABLE_NAME).create([
      {
        fields: {
          'First Name': firstName,
          'Phone Number': phoneNumber,
        },
      },
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data submitted successfully' }),
    };
  } catch (error) {
    console.error('Airtable submission error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit data' }),
    };
  }
};