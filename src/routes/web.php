<?php
Route::group(['middleware' => ['web']], function () {

    \Shirish71\AdminPanel\Facades\Helper::includeRouteFiles(__DIR__ . '/Admin/');
    Route::group(
        ['namespace' => 'Shirish71\AdminPanel\Http\Controllers',
            'as', 'admin.',
            'prefix' => 'admin',
//            'middleware' => ['auth']
        ], function () {
        Route::get('dashboard', 'DashboardController@index');
        Route::get('profile', 'DashboardController@index')->name('admin.profile.index');
        Route::post('logout', 'DashboardController@index')->name('admin.logout');
    });

//    Route::get('/login', 'Shirish71\AdminPanel\Http\Controllers\Admin\Auth\LoginController@showLoginForm')->name('login');
//Route::group(
//    [
////        'middleware' => ['web', 'auth:admin'],
//        'prefix' => 'admin/filemanager'
//    ], function () {
//    \UniSharp\LaravelFilemanager\Lfm::routes();
//});
});
