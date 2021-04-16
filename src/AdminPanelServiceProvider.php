<?php

namespace Shirish71\AdminPanel;

use Illuminate\Support\ServiceProvider;

class AdminPanelServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__ . '/routes/web.php');
        $this->loadViewsFrom(__DIR__ . '/views', 'admin-panel');
        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');
        $this->publishes([
            __DIR__ . '/public/admin/plugins' => public_path('vendor/shirish71/admin-panel'),
            __DIR__ . '/public/admin/assets' => public_path('vendor/shirish71/admin-panel/assets'),
            __DIR__ . '/config/auth.php' => config_path('auth.php'),
            __DIR__ . '/config/admin-panel.php' => config_path('admin-panel.php')
        ], 'public');
        $this->publishes([
            __DIR__ . '/resources/views' => resource_path('admin-panel'),
        ],'views');

        if ($this->app->runningInConsole()) {
            $this->registerConsoleCommands();
        }
    }

    public function handle()
    {

    }

    private function registerConsoleCommands()
    {
        $this->commands(Commands\AdminPanelCommand::class);
    }
}
