document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('chatbot-container');
  const toggle = document.getElementById('chatbot-toggle');
  const input = document.getElementById('chatbot-input');
  const messages = document.getElementById('chatbot-messages');

  if (toggle) {
    toggle.addEventListener('click', () => {
      if (container.style.display === 'flex') {
        container.style.display = 'none';
      } else {
        container.style.display = 'flex';
        input.focus();
      }
    });
  }

  window.sendChatMessage = async function () {
    const text = input.value.trim();
    if (!text) return;
    appendMessage('user', text);
    input.value = '';
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'system', content: 'You are an assistant for the Iraq Economic Dashboard website.' }, { role: 'user', content: text }]
        })
      });
      const data = await response.json();
      const reply = data.choices && data.choices[0] ? data.choices[0].message.content : 'No response';
      appendMessage('bot', reply);
    } catch (err) {
      appendMessage('bot', 'Error contacting AI service.');
    }
  };

  function appendMessage(sender, text) {
    const div = document.createElement('div');
    div.className = sender;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }
});
