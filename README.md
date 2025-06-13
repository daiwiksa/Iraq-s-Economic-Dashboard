# Iraq's Economic Dashboard

This project is a static website providing interactive visualizations and a chat assistant.

## API Key Configuration

To use the AI chat assistant, create a `config.js` file in the project root with the following content:

```javascript
window.OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // or Google API key if using Google's service
```

For security reasons, `config.js` is ignored by git. Do **not** commit your real API key.

## Local Development

Open any of the HTML files in a web browser. The chat widget requires an internet connection to contact the AI service.
