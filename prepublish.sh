set -e

if [[ $1 = 'i' ]]; then
    echo -n "是否需要跳过增加版本号直接 commit + publish? (y/n，默认增加)"
    read -r skip
    echo -n "commit 时是否使用--amend模式? (y/n，默认不使用amend)"
    read -r amend
fi

echo -n "请输入包："
read pkg

# build all
pnpm run build

# cd packgage root
cd 'packages'
cd $pkg

# version
if [[ $skip != "y" ]]; then
    npm version prerelease --preid=alpha
fi

cd ..
cd ..
# SCM
git add .
# support amend or commit
if [[ $amend == "y" ]]; then
    git commit --amend
else
    pnpm run commit
fi

cd 'packages'
cd $pkg

# login and publish
npm login
npm publish
