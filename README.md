# RaiX

RaiX is an interactive web application focused on Japanese culture, offering multiple features:

* **Omikuji:** Draw random Japanese fortunes with themed messages and levels.
* **Calligraphy:** Transform English text into Japanese calligraphy with particle animations.
* **Japanese Queries:** Ask questions about Japanese culture and receive AI-generated answers.
* Immersive backgrounds and smooth animations enhance the experience.

---

## Features

### 1. Omikuji Tab

* Draw a random Japanese fortune.
* Each fortune includes:

  * `title` (e.g., 大吉 / Daikichi)
  * `level` (fortune level)
  * `message` (advice or prediction)
* Animated display with Japanese aesthetics.

### 2. Calligraphy Tab

* Input English text and see it transform into Japanese calligraphy.
* Animated particles dissolve and reconstruct the text.
* Translated text is fetched from a backend API.

### 3. Japanese Query Tab

* Ask questions about Japanese culture.
* AI-generated responses powered by Ollama API.
* Chat interface with user/AI messages, avatars, and timestamps.

---

## Tech Stack

* **Frontend:** React, TypeScript, TailwindCSS, Motion for animations
* **Backend:** Node.js/Express API
* **APIs:** Translation API, Ollama AI API
* **Assets:** GIF backgrounds, custom fonts

---

## Getting Started

### Prerequisites

* Node.js >= 18
* npm or yarn
* Git

### Clone the Repository

```bash
git clone https://github.com/xenkrypt/RaiX.git
cd RaiX
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Setup Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_TRANSLATE_API_URL=http://localhost:5000/api/translate
REACT_APP_OLLAMA_API_URL=http://localhost:5000/api/ollama/ask
```

> Replace URLs if your backend is hosted elsewhere.

---

### Run the App

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view RaiX.

---

## Backend Endpoints

### Translation API

* **POST** `/api/translate`
* Request body:

```json
{ "text": "Your English text" }
```

* Response:

```json
{ "translation": "Translated Japanese text" }
```

### Ollama AI API

* **POST** `/api/ollama/ask`
* Request body:

```json
{ "prompt": "Your question about Japanese culture" }
```

* Response:

```json
{ "reply": "AI-generated answer" }
```

### Omikuji API (Optional)

* **GET** `/api/fortunes/random`
* Response:

```json
{
  "title": "大吉",
  "level": "daikichi",
  "message": "You will find great success in your endeavors..."
}
```

---

## Folder Structure

```
RaiX/
├─ public/
│  └─ assets/
│     └─ gifs/
├─ src/
│  ├─ components/
│  │  ├─ OmikujiTab.tsx
│  │  ├─ CalligraphyTab.tsx
│  │  └─ JapaneseQueryTab.tsx
│  ├─ ui/
│  ├─ App.tsx
│  └─ main.tsx
├─ .env
├─ package.json
└─ README.md
```

---

## Usage

### Omikuji Tab

1. Click **Draw Fortune**.
2. View the randomly selected fortune with title, level, and message.
3. Click again to draw a new fortune.

### Calligraphy Tab

1. Enter English text in the input box.
2. Click **Transform** to see Japanese calligraphy animation.
3. Click **Clear** to reset.

### Japanese Query Tab

1. Type a question about Japanese culture.
2. Click **Ask** to receive AI responses.
3. Messages scroll automatically.

---

## Contributing

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`
3. Make changes and commit: `git commit -m "Add feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request.

---

## License

This project is open-source. See [LICENSE](LICENSE) for details.

---

## Future Improvements

* Add more AI-powered Japanese culture interactions.
* Optimize particle animations for performance.
* Expand Omikuji dataset with historical and mythological references.
* Enhance mobile responsiveness.

```
```
