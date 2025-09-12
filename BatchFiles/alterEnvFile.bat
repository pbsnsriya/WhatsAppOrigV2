@echo off
setlocal enabledelayedexpansion

:updateEnvVersion
set "tempfile=.env.tmp"

if not exist .env (
    echo VERSION=V1 > .env
    goto :done
)

REM Create temp file with updated version
> "%tempfile%" (
    for /f "usebackq delims=" %%L in (".env") do (
        set "line=%%L"
        echo !line! | findstr /b "VERSION=" >nul
        if !errorlevel! equ 0 (
            echo VERSION=%newVersion%
        ) else (
            echo !line!
        )
    )
)

REM Replace original file
move /Y "%tempfile%" ".env" >nul

:done
endlocal
exit /b