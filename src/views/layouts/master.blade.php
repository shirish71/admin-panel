<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{asset('apple-touch-icon.png')}}" rel="apple-touch-icon">
    <link href="{{asset('favicon.png')}}" rel="icon">
    <title>@yield('title', config('app.name')) || {{config('app.name')}}</title>
    @include('admin-panel::layouts.styles')
    @yield('styles')
</head>

<body class="hold-transition sidebar-mini text-sm">
<div class="wrapper">
    @include('admin-panel::layouts.navbar')
    @include('admin-panel::layouts.sidebar')
    <div class="content-wrapper">
        @yield('content')
    </div>
    <aside class="control-sidebar control-sidebar-dark">
        <div class="p-3">
            <h5>Title</h5>
            <p>Sidebar content</p>
        </div>
    </aside>
    <footer class="main-footer hidden-print">
        <div class="float-right d-none d-sm-inline">Developed by <a href="http://www.shirishmaharjan.com"
                                                                    style="font-weight: 700;">Shirish Maharjan</a></div>
        <span>Copyright &copy; 2020 - {{now()->format('Y')}} <a href="{{config('app.app_url')}}"
                                                                target="_blank">{{config('app.name')}}</a>.</span> All
        rights
        reserved.
    </footer>
</div>
@yield('modal')
@include('admin-panel::layouts.scripts')
@stack('scripts')
</body>
</html>
