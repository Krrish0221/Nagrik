@echo off
:: Switch to the project drive and directory explicitly
cd /d "d:\Krish\Hacakhthon\2025\nagrik"

echo Starting servers in %CD%...

:: Start Python Backend
start "Nagrik Backend (Python)" cmd /k "python api/py.py"

:: Start Next.js Frontend
start "Nagrik Frontend (Next.js)" cmd /k "npm run dev"

echo Done. Check the new windows for status.
