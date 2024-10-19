const Airtable = require('airtable');
const fetch = require('node-fetch');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const { firstName, lastName, phoneNumber } = JSON.parse(event.body);

    // Use environment variables for API key and base ID
    const apiKey = process.env.AIRTABLE_API_KEY; // Correct usage of environment variable
    const baseId = process.env.AIRTABLE_BASE_ID;

    const base = new Airtable({ apiKey }).base(baseId);

    try {
        // Check if the phone number exists in Airtable
        const airtableResponse = await fetch(`https://api.airtable.com/v0/${baseId}/Users?filterByFormula={phoneNumber}='${phoneNumber}'`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });

        const airtableData = await airtableResponse.json();

        if (airtableData.records.length > 0) {
            // Phone number exists
            return {
                statusCode: 200,
                body: JSON.stringify({
                    status: 'error',
                    message: 'The phone number is already in use.',
                }),
            };
        } else {
            // Phone number does not exist, create a new record
            await base('Users').create([{
                fields: {
                    "First Name": firstName,
                    "Last Name": lastName,
                    "Phone Number": phoneNumber
                }
            }]);
            return {
                statusCode: 200,
                body: JSON.stringify({
                    status: 'success',
                    message: 'Account created successfully.',
                }),
            };
        }
    } catch (error) {
        console.error('Error checking Airtable:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                status: 'error',
                message: 'Internal Server Error',
            }),
        };
    }
};
