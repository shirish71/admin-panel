<?php

namespace Shirish71\AdminPanel\Http\Requests;

use Shirish71\AdminPanel\Rules\SameOldPassword;
use Illuminate\Foundation\Http\FormRequest;

class UpdateAdminRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', \Illuminate\Validation\Rule::unique('admins')->ignore($this->admin_user->id)],
            'phone_no' => ['required', 'string', 'digits:10', \Illuminate\Validation\Rule::unique('admins')->ignore($this->admin_user->id)],
            'designation' => ['nullable', 'string', 'max:255'],
            'new_password' => ['nullable', 'string', 'min:8', new SameOldPassword()],
            'confirm_password' => ['same:new_password'],
        ];
    }
}
