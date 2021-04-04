<?php

namespace Shirish71\AdminPanel\Models;

use Shirish71\AdminPanel\Notifications\AdminResetPasswordNotification;
use Shirish71\AdminPanel\Notifications\NewAdminRegisterNotification;
use Shirish71\AdminPanel\Traits\LockableTrait;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class Admin extends Authenticatable
{
    use Notifiable, HasRoles;

    protected $guard = 'admin';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'phone_no', 'is_super', 'status', 'lockout_time', 'designation'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function ScopeNormalUser($query)
    {
        $query->where('is_super', 0);
    }

    public function ScopeSuperUser($query)
    {
        $query->where('is_super', 1);
    }

    public function ScopeActive($query)
    {
        $query->where('status', 1);
    }

    public function ScopeNotActive($query)
    {
        $query->where('status', 0);
    }

    public function hasRoles($role)
    {
        return $this->role == $role;
    }

    public function getFullNameAttribute()
    {
        return $this->name;
    }

    public function newAdminRegisterNotification($password)
    {
        $this->notify(new NewAdminRegisterNotification($password));
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new AdminResetPasswordNotification($token));
    }


}
