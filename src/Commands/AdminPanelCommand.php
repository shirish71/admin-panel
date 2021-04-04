<?php

namespace Shirish71\AdminPanel\Commands;

use Illuminate\Console\Command;
use Laravel\Jetstream\JetstreamServiceProvider;
use Shirish71\AdminPanel\AdminPanelServiceProvider;
use Spatie\Permission\PermissionServiceProvider;
use UniSharp\LaravelFilemanager\LaravelFilemanagerServiceProvider;

class AdminPanelCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'install all the necessary files from this package';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->call('jetstream:install', ['livewire' =>'--teams']);
//        $this->call('jetstream:install', ['livewire', '--teams']);
        $this->call('optimize:clear');
        $this->call('config:clear');
        $this->call('vendor:publish', ['--provider' => PermissionServiceProvider::class]);
        $this->call('vendor:publish', ['--provider' => AdminPanelServiceProvider::class]);
        $this->call('vendor:publish', ['--tag' => 'lfm_config']);
        $this->call('vendor:publish', ['--tag' => 'lfm_public']);
//        $this->call('migrate');
    }
}
