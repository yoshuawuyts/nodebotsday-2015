#!/bin/sh

[ "$#" -ne 2 ] && echo 'usage: generate-at.sh <username> <password>' && exit 1

readonly username=$1
readonly password=$2

curl https://api.particle.io/oauth/token\
  -u particle:particle\
  -d grant_type=password\
  -d username="$username"\
  -d password="$password"
