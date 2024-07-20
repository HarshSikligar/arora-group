

const pairs = [
    { pattern: /my name is (.*)/i, responses: ["Hello %1, how can I help you today?"] },
    { pattern: /hi|hey|hello/i, responses: ["Hello!", "Hey there!"] },
    { pattern: /what is your name\??/i, responses: ["I am a chatbot created by a JavaScript script."] },
    { pattern: /how are you\??/i, responses: ["I'm just a bunch of code, but I'm doing well. How about you?"] },
    { pattern: /sorry (.*)/i, responses: ["It's okay, no problem."] },
    { pattern: /I am (.*) (good|well|okay|ok)/i, responses: ["Nice to hear that!"] },
    { pattern: /What are the working hours\??/i, responses: ["Our standard working hours are from 9:00 AM to 5:00 PM, Monday through Friday."] },
    { pattern: /Where can I find information about employee benefits\??/i, responses: ["Information about employee benefits, including health insurance and retirement plans, can be found on the HR portal under the Benefits section."] },
    { pattern: /Who should I contact for IT support\??/i, responses: ["For IT support, please contact our Help Desk at [phone number] or email [email address]. They are available during business hours to assist you with any technical issues."] },
    { pattern: /What is the company policy on remote work\??/i, responses: ["Our remote work policy allows eligible employees to work remotely up to [number] days per month. Please refer to the Remote Work Policy document on the intranet for detailed guidelines."] },
    { pattern: /How do I access training resources\??/i, responses: ["Training resources are available on the Learning & Development portal. You can enroll in courses, access training materials, and track your progress through this platform."] },
    { pattern: /When is the next company holiday\??/i, responses: ["The next company holiday is [holiday name], which will be observed on [date]. Our holiday schedule for the year can be viewed on the company calendar."] },
    { pattern: /quit/i, responses: ["Bye for now. See you soon."] },
];

function getResponse(userInput) {
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        let match = userInput.match(pair.pattern);
        if (match) {
            let response = pair.responses[Math.floor(Math.random() * pair.responses.length)];
            for (let j = 1; j < match.length; j++) {
                response = response.replace(`%${j}`, match[j]);
            }
            return response;
        }
    }
    return "I'm sorry, I don't understand.";
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        addMessage('user', userInput);
        document.getElementById('user-input').value = '';
        const response = getResponse(userInput);
        setTimeout(() => addMessage('bot', response), 500); // Simulate typing delay
    }
}

function addMessage(sender, message) {
    const chatBody = document.getElementById('chat-body');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);

    // Trigger animation
    requestAnimationFrame(() => {
        messageElement.style.opacity = 1;
        messageElement.style.transform = 'translateY(0)';
    });

    chatBody.scrollTop = chatBody.scrollHeight;
}

