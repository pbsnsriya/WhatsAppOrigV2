@echo off
setlocal enabledelayedexpansion

REM --- STEP 1: Get next version folder ---
call :getNextVersion NEXT_VERSION
echo Next Version: %NEXT_VERSION%
mkdir Public\%NEXT_VERSION%

if not exist "..\GulpHbs\" (
    echo GulpHbs folder not found. Cloning...
    git clone https://github.com/keshavsoft/GulpHbs ..\GulpHbs
)

if not exist "..\GulpHbs\node_modules" (
    echo node_modules folder not found. Running npm install...
    pushd ..\GulpHbs
    call npm i
    popd
)

xcopy ".env" "..\GulpHbs\.env" /h /i /c /k /e /r /y >nul

REM --- STEP 2: Iterate over JSON files in Schemas folder ---
for %%f in (Schemas\*.json) do (
    echo Processing %%~nxf

    REM Copy schema to GulpHbs
    xcopy "Schemas\%%~nxf" "..\GulpHbs\schema.json" /h /i /c /k /e /r /y >nul

    REM Go to GulpHbs and build
    pushd ..\GulpHbs
    call npm run dist
    popd

    REM Create target folder and copy built files
    mkdir "Public\%NEXT_VERSION%\%%~nf"
    xcopy "..\GulpHbs\dist" "Public\%NEXT_VERSION%\%%~nf" /h /i /c /k /e /r /y >nul

    echo Done with %%~nxf
)

exit /b

:getNextVersion
setlocal enabledelayedexpansion
set "max=0"
for /d %%G in (Public\V*) do (
    set "folder=%%~nxG"
    set "ver=!folder:V=!"
    REM Check if numeric
    for /f "delims=0123456789" %%a in ("!ver!") do set "ver=0"
    if !ver! gtr !max! set "max=!ver!"
)
set /a NEXT_VERSION=max+1
endlocal & set "%1=V%NEXT_VERSION%"
exit /b
