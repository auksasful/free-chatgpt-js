async function submitApiKey() {
    var apiKey = document.getElementById('api-key').value;
    var userInput = document.getElementById('user-input').value;
    var outputLabel = document.getElementById('output');
    outputLabel.textContent = "Loading...";

    const response = await fetch(`https://api.naga.ac/v1/chat/completions`, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "user",
                    "content": userInput,
                    "name": "User message"
                }
            ]
        })
    });
    const data = await response.json(); // Parse the response as JSON
    const message = data.choices[0].message.content; // Access the message content
    outputLabel.textContent = message; // Set the text content to the extracted message
}
