@echo off
setlocal enabledelayedexpansion

REM --- STEP 1: Get next version folder ---
call :getNextVersion NEXT_VERSION
echo Next Version: %NEXT_VERSION%
mkdir Public\%NEXT_VERSION%
SET CommonRepoName=GulpForObject

xcopy ".env" "..\%CommonRepoName%\.env" /h /i /c /k /e /r /y >nul

REM --- STEP 2: Iterate over JSON files in Schemas folder ---
for %%f in (Schemas\*.json) do (
    echo Processing %%~nxf

    REM Copy schema to GulpAsUi
    xcopy "Schemas\%%~nxf" "..\%CommonRepoName%\schema.json" /h /i /c /k /e /r /y >nul

    REM Go to GulpAsUi and build
    pushd ..\GulpForObject
    call npm run dist
    popd

    REM Create target folder and copy built files
    mkdir "Public\%NEXT_VERSION%\%%~nf"
    @REM xcopy "..\%CommonRepoName%\dist" "Public\%NEXT_VERSION%\%%~nf" /h /i /c /k /e /r /y >nul

    xcopy "..\%CommonRepoName%\dist" "Public\%NEXT_VERSION%\%%~nf\UnProtected" /h /i /c /k /e /r /y >nul
    xcopy "..\%CommonRepoName%\distForProtected" "Public\%NEXT_VERSION%\%%~nf\Protected" /h /i /c /k /e /r /y >nul
    copy "..\%CommonRepoName%\Menu\index.html" "Public\%NEXT_VERSION%\%%~nf"

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
