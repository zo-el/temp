#!/bin/bash

# How to?
# https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
# git config --global github .token YOUR_TOKEN

version=$1
text=$2
branch=$(git rev-parse --abbrev-ref HEAD)
token=$(git config --global github.token)
USER="zo-el"
REPO="temp"
generate_post_data()
{
  cat <<EOF
{
  "tag_name": "$version",
  "target_commitish": "$branch",
  "name": "$version",
  "body": "$text",
  "draft": true,
  "prerelease": false
}
EOF
}

echo "Create release $version for repo: $USER/$REPO branch: $branch"
curl --data "$(generate_post_data)" "https://api.github.com/repos/$USER/$REPO/releases?access_token=$token"
