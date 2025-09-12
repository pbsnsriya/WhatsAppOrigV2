@echo off
setlocal enabledelayedexpansion

REM --- STEP 1: Get next version folder ---
call :getNextVersion NEXT_VERSION
echo Next Version: %NEXT_VERSION%
set "newVersion= %NEXT_VERSION%"
BatchFiles/alterEnvFile.bat
exit /b

:getNextVersion
setlocal enabledelayedexpansion
set "max=0"
for /d %%G in (V*) do (
    set "folder=%%~nxG"
    set "ver=!folder:V=!"
    for /f "delims=0123456789" %%a in ("!ver!") do set "ver=0"
    if !ver! gtr !max! set "max=!ver!"
)
set /a NEXT_VERSION=max
endlocal & set "%1=V%NEXT_VERSION%"
exit /b