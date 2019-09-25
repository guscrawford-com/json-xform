@echo off
set global_packages=%HOMEDRIVE%%HOMEPATH%\AppData\Local\Yarn\Data\global
set package_manager=yarn
set workspace=%cd%
call %package_manager% run package && cd dist && (call %package_manager% unlink || "Already unlinked...")
call %package_manager% global add "@guscrawford.com/json-xform"