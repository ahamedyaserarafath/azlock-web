#!/bin/bash

# Simple script to build and run the git-push Docker container
# Usage: ./git-push.sh "Your commit message" [github_token]
# Example: ./git-push.sh "Update features" ghp_yourtoken123

COMMIT_MESSAGE="${1:-Auto commit from Docker}"
GIT_TOKEN="${2:-}"

echo "Building Docker image..."
docker build -t git-push -f Dockerfile-gitpush .

echo ""
echo "Running git push with message: $COMMIT_MESSAGE"

if [ -n "$GIT_TOKEN" ]; then
    echo "Using provided GitHub token for authentication"
    docker run --rm -v "$(pwd):/repo" -e COMMIT_MSG="$COMMIT_MESSAGE" -e GIT_TOKEN="$GIT_TOKEN" git-push
else
    echo "No token provided, using default authentication"
    docker run --rm -v "$(pwd):/repo" -e COMMIT_MSG="$COMMIT_MESSAGE" git-push
fi

