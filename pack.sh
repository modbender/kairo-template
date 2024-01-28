#!/bin/bash

base_path="pack"
repo_dir="kairo-template"

cd ${base_path}

rm -rf ${repo_dir}

git clone https://github.com/modbender/${repo_dir}

rm -rf ${repo_dir}/.git
rm -rf ${repo_dir}/.output
rm -rf ${repo_dir}/.nuxt

rm -rf ${repo_dir}/pack.sh
rm -rf ${repo_dir}/node_modules
rm -rf ${repo_dir}/dist

rm -rf code.zip
zip -r code.zip ${repo_dir}

rm -rf ${repo_dir}