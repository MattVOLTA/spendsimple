function GetStartedForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const phoneNumber = event.target.phoneNumber.value;

        // Send data to serverless function
        await fetch('/api/submitToAirtable', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, phoneNumber }),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" type="text" placeholder="First Name" required />
            <input name="phoneNumber" type="tel" placeholder="Phone Number" required />
            <button type="submit">Submit</button>
        </form>
    );
}
