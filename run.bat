@echo off
echo ==========================================
echo      Starting GlitchGab (Manual Mode)
echo ==========================================

echo [1/3] Stopping any old versions...
docker stop glitchgab_manual 2>nul
docker rm glitchgab_manual 2>nul
docker stop neonterm_v1.5 2>nul
docker rm neonterm_v1.5 2>nul

echo [2/3] Building fresh Docker image...
docker build -t glitchgab:latest .

echo [3/3] Launching container...
docker run -d -p 3000:3000 --name glitchgab_run glitchgab:latest

echo ==========================================
echo      SUCCESS! App is running.
echo      Go to: http://localhost:3000
echo ==========================================
pause
