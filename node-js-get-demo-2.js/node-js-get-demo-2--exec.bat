@echo off

set strCmd=start http://localhost:3000/user?name=%%E8%%8F%%9C%%E9%%B8%%9F%%E6%%95%%99%%E7%%A8%%8B^^^&url=www.runoob.com

echo #%strCmd%
%strCmd%

pause
