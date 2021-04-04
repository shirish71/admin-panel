<?php
/*
* MenuPosts/Category Management
*/

// Routes for the category admin
// Routes for the category admin
Route::group(['prefix' => '/configuration/acl', 'as' => 'configuration.acl.'
    // 'middleware' => 'access.routeNeedsPermission:view-category-management'
], function () {
    Route::resource('admin-users', 'AdminController')->except(['create']);
});

