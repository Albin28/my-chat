# GlitchGab (formerly NeonTerm)

A Dockerized real-time chat application with a retro hacker terminal aesthetic.

## Features
- **Real-time Messaging**: Socket.io powered.
- **GlitchGab UI**: Cyberpunk theme, WhatsApp-style bubbles, Timestamps.
- **Privacy**: Random 3-letter Secret Room IDs.
- **Tagging**: @username highlighting.

## How to Run (Manual Docker)

### 1. Build the Image
Open your terminal (PowerShell or CMD) in this folder and run:

```bash
docker build -t glitchgab:v1.4 .
```

### 2. Run the Container
Start the app and connect it to port 3000:

```bash
docker run -d -p 3000:3000 --name glitchgab_v1.4 glitchgab:v1.4
```

### 3. Open the App
Go to your browser and visit:
[http://localhost:3000](http://localhost:3000)

### 4. Stop the App
To stop the chat server:

```bash
docker stop glitchgab_v1.4
docker rm glitchgab_v1.4
```

## How to Run (Docker Desktop GUI)

If you prefer using the Docker Desktop app instead of the terminal:

1.  **Open Docker Desktop**.
2.  Go to the **Images** tab on the left.
3.  Find **`glitchgab`** in the list.
4.  Click the **Run** (Play) button next to it.
5.  **Important**: Click **"Optional settings"** in the popup.
6.  In the **Host port** box, type `3000`.
7.  Click **Run**.
8.  Open your browser to `http://localhost:3000`.
