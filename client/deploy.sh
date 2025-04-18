#!/bin/bash

# Mergem în directorul client
cd /home/ubuntu/tuning-website/client

# Ștergem folderul dist existent
echo "Ștergem folderul dist vechi..."
rm -rf dist

# Facem build-ul aplicației
echo "Construim aplicația pentru producție..."
npm run build

# Modificăm titlul paginii pentru a nu mai apărea "Vite + React", ci "MDD REMAP"
echo "Modificăm titlul paginii..."
sed -i 's/Vite + React/MDD REMAP/g' dist/index.html

# Mergem în directorul unde Nginx servește fișierele
echo "Mutăm fișierele construite în directorul Nginx..."
sudo cp -r dist/* /var/www/html/

# Restartăm Nginx pentru a reflecta modificările
echo "Reîncarcăm Nginx..."
sudo systemctl restart nginx

# Reîncepem aplicația Node.js cu PM2
echo "Restartăm aplicația Node.js cu PM2..."
pm2 restart server

echo "Deploy complet!"
