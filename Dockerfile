FROM php:8.2

WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl zip unzip libpng-dev libonig-dev libxml2-dev sqlite3 nodejs npm

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy files
COPY . .

# Install PHP & JS dependencies
RUN composer install --no-dev --optimize-autoloader
RUN npm install && npm run build

# Set Laravel permissions
RUN chmod -R 775 storage bootstrap/cache

# Generate Laravel app key
RUN php artisan config:cache

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
