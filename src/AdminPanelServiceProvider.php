<?php

namespace Shirish71\AdminPanel;

use Illuminate\Support\ServiceProvider;

class AdminPanelServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__ . '/routes/web.php');
        $this->loadViewsFrom(__DIR__ . '/views', 'adminPanel');
        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');
        $this->publishes([
            __DIR__ . '/public/admin/plugins' => public_path('vendor/shirish71/adminPanel'),
            __DIR__ . '/config/adminPanel.php' => config_path('adminPanel.php')
        ], 'public');
    }

    public function register()
    {

    }
}
