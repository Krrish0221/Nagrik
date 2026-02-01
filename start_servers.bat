@echo off
:: Switch to the project drive and directory explicitly
cd /d "%~dp0"

echo Starting servers in %CD%...

:: Start Python Backend
start "Nagrik Backend (Python)" cmd /k "cd /d python_backend && python Flask_APP.py"

:: Start Next.js Frontend
start "Nagrik Frontend (Next.js)" cmd /k "npm run dev"

echo Done. Check the new windows for status.
