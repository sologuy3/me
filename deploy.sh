npm run build
rm -r /var/www/html/*
cp build/* /var/www/html/ -r
echo "Removed contents at /html/* and replaced with new build"
