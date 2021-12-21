echo off
for /d /r . %%d in (node_modules build coverage storybook-static) do @if exist "%%d" echo "%%d" && rd /s/q "%%d"
