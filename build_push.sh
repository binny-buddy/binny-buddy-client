#!/bin/sh

image_name="cocopam/binny-buddy-client"
cache_tag="build-cache"

docker buildx build \
  --platform linux/arm64,linux/amd64 \
  -t "${image_name}:latest" \
  --cache-from=type=registry,ref="${image_name}:${cache_tag}" \
  --cache-to=type=registry,ref="${image_name}:${cache_tag}",mode=max \
  --push .