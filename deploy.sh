#!/bin/bash

echo "remove old build"
sudo rm -rf /var/www/brutegoods.ru/build_old/
echo "rename current build"
sudo mv /var/www/brutegoods.ru/build/ /var/www/brutegoods.ru/build_old/
echo "copy new build"
sudo cp -r ./build/ /var/www/brutegoods.ru/
