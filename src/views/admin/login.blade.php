@extends('admin-panel::admin.layouts.master')
@section('title','Login')
@section('content')
    <div class="login100-pic js-tilt" data-tilt>
        <img src="https://i.pinimg.com/originals/49/b2/5e/49b25e7f47bfa9fc27c9cbb49c65375b.png" alt="IMG">
    </div>
    <form class="login100-form validate-form" method="POST" action="{{ route('admin.login') }}">
        @csrf
        <span class="login100-form-title">
						{{__('Member Login')}}
					</span>
        @include('admin-panel::inc.messages')
        <div class="wrap-input100 validate-input">
            <input class="input100" type="text" name="email" placeholder="Email" value="{{ old('email') }}"
                   required autocomplete="email" autofocus>
            <span class="focus-input100"></span>
            <span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
        </div>
        <div class="wrap-input100 validate-input" data-validate="Password is required">
            <input class="input100" type="password" name="password"
                   placeholder="Password" id="password" required autocomplete="current-password">
            <span class="focus-input100"></span>
            <span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
        </div>

        <div class="ml-4">
            <div class="ks-checkbox">
                <input class="mr-2" type="checkbox" name="remember"
                       id="remember" {{ old('remember') ? 'checked' : '' }}/>
                <label for="remember">{{ __('Remember Me') }}</label>
            </div>
        </div>
        <div class="container-login100-form-btn">
            <button class="login100-form-btn">
                {{__('Login')}}
            </button>
        </div>
        @if (Route::has('password.request'))
            <div class="text-center p-t-12">
							<span class="txt1">
								{{__('Forgot')}}
							</span>
                <a class="txt2" href="{{ route('admin.password.request') }}">
                    Username / Password?
                </a>
            </div>
        @endif
        <div class="text-center p-t-136">
            <a class="txt2" href="#">
                Create your Account
                <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </a>
        </div>
    </form>
@endsection
