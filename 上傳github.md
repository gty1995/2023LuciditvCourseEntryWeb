npm run build

# 移動至到打包後的dist目錄 
cd dist

# 因為dist資料夾預設是被ignore的，因此在進入dist資料夾後初始化git
git init 
git add -A
git commit -m 'deploy'

git push -f https://github.com/gty1995/2023LuciditvCourseEntryWeb.git main:gh-pages