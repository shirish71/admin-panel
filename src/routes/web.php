<?php
Route::group(['namespace' => 'Shirish71\AdminPanel\Http\Controllers','as','admin.','prefix'=>'admin'], function () {
    Route::get('dashboard', 'DashboardController@index');
    Route::get('profile', 'DashboardController@index')->name('admin.profile.index');
    Route::get('profile', 'DashboardController@index')->name('admin.profile.index');
    Route::post('logout', 'DashboardController@index')->name('admin.logout');
});
