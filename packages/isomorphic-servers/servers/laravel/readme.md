
## Getting Started

The procedure to getting started with isomorphic laraver starter kit. We have used Laravel default `Auth` with `auth-jwt`.

- `composer update`
- `Rename your .env.example to .env`
- `Fill your .env files database credentials [DB_DATABASE, DB_USERNAME, DB_PASSWORD]`
- `php artisan migrate`
- `sudo php artisan serve --port=9000`
Now you are good to go

If you want to create your own secret then run the below command
- `php artisan jwt:secret`


## Routes

- `Route::post('register', 'AuthController@register');`  //generate token
- `Route::post('login', 'AuthController@login');`  //generate token
- `Route::post('logout', 'AuthController@logout');` // logout will make the token to blacklisted you have to create - token again from login route
- `Route::post('refresh', 'AuthController@refresh');` //can refresh token with existing token
- `Route::post('secret/test', 'AuthController@test');`

# Happy Coding
