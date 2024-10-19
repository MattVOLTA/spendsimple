const Airtable = require('airtable');

exports.handler = async (event) => {
    const { firstName, phoneNumber } = JSON.parse(event.body);

    // Use environment variables for API key and base ID
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;

    const base = new Airtable({ apiKey }).base(baseId);

    try {
        await base('Users').create([{
            fields: {
                "First Name": firstName,
                "Phone Number": phoneNumber
            }
        }]);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Success' }),
        };
    } catch (error) {
        console.error('Airtable submission error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error', error: error.message }),
        };
    }
};
