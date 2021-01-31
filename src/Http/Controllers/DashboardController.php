<?php

namespace Shirish71\AdminPanel\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return view('admin-panel::layouts.master');
    }
}
