<?php

namespace Shirish71\AdminPanel;

use Illuminate\Support\ServiceProvider;

class AdminPanelServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__ . '/routes/web.php');
        $this->loadViewsFrom(__DIR__ . '/views', 'admin-panel');
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        $this->publishes([
            __DIR__ . '/public/admin/plugins' => public_path('vendor/shirish71/admin-panel'),
            __DIR__ . '/config/admin-panel.php' => config_path('admin-panel.php')
        ], 'public');
    }

    public function register()
    {

    }
}
