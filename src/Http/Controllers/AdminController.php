<?php

namespace Shirish71\AdminPanel\Http\Controllers;

use Illuminate\View\View;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Shirish71\AdminPanel\Models\Admin;
use Illuminate\Contracts\View\Factory;
use Shirish71\AdminPanel\Facades\Helper;
use Illuminate\Contracts\Foundation\Application;
use Shirish71\AdminPanel\Http\Requests\UpdateAdminRequest;
use Shirish71\AdminPanel\Http\Requests\CreateAdminRequest;

class AdminController extends Controller
{
    public function __construct()
    {
//        $this->middleware('permission:ad-user-list');
//        $this->middleware('permission:ad-user-create', ['only' => ['create', 'store']]);
//        $this->middleware('permission:ad-user-edit', ['only' => ['edit', 'update']]);
//        $this->middleware('permission:ad-user-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|Response|View
     */
    public function index()
    {
        return view('backend.configuration.acl.admin-users.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateAdminRequest $request
     * @return RedirectResponse
     */
    public function store(CreateAdminRequest $request): RedirectResponse
    {
        $password = Str::random(10);
        $admin = Admin::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'phone_no' => $request['phone_no'],
            'designation' => $request['designation'],
            'status' => 1,
            'is_super' => 0,
            'password' => Hash::make($password),
        ]);
        $admin->newAdminRegisterNotification($password);
        toast(__('global.data_saved'), 'success');
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param Admin $admin_user
     * @return Application|Factory|Response|View
     */
    public function show(Admin $admin_user)
    {
        return view('backend.configuration.acl.admin-users.show')->with('admin', $admin_user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Admin $admin_user
     * @return Application|Factory|Response|View
     */
    public function edit(Admin $admin_user)
    {
        return view('backend.configuration.acl.admin-users.edit')->with('admin', $admin_user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateAdminRequest $request
     * @param Admin $admin_user
     * @return RedirectResponse
     */
    public function update(UpdateAdminRequest $request, Admin $admin_user): RedirectResponse
    {
        $admin_user->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone_no' => $request->phone_no,
            'password' => Hash::make($request->confirm_password),
        ]);
        toast(__('global.data_update'), 'success');
        return redirect()->route('admin.configuration.acl.admin-users.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Admin $admin_user
     * @return int
     */
    public function destroy(Admin $admin_user): int
    {
        return Helper::deleteCheckForeignKey($admin_user);
    }
}
