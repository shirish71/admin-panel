<?php

namespace Shirish71\AdminPanel\Facades;

use Illuminate\Support\Facades\Facade;

class Helper extends Facade
{
    public static function getFacadeAccessor()
    {
        return (\Shirish71\AdminPanel\Helpers\Helper::class);
    }
}

