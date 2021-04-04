<?php

namespace Shirish71\AdminPanel\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Hash;

class SameOldPassword implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    private $guard;

    public function __construct($guard = '')
    {
        $this->guard = $guard;
    }

    public function passes($attribute, $value)
    {
        $pass = Hash::check($value, auth($this->guard ?? 'web')->user()->password);
        if ($pass == true) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return "The :attribute cannot be same as old password.";
    }
}
