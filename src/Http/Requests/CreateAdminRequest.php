<?php

namespace Shirish71\AdminPanel\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateAdminRequest extends FormRequest
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
            'email' => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            'phone_no' => ['required', 'string', 'digits:10', 'unique:admins'],
            'designation' => ['nullable', 'string', 'max:255'],
//            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ];
    }
}
