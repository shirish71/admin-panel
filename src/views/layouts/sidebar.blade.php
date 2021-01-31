<div>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-light-primary sidebar-no-expand">
        <!-- Brand Logo -->
        <a href="{{url('/admin/dashboard')}}" class="brand-link">
            {{--            <img src="{{ $site_logo_1 ? $site_logo_1->file : asset('backend/images/logo.png')}}"--}}
            {{--                 alt="{{config('app.name')}}" class="brand-image img-circle" height="85px">--}}
            {{--            <span class="brand-text font-weight-light">{{$site_title->text ?? config('app.name')}}</span>--}}
        </a>
        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel pt-2 pb-3 mb-3 d-flex">
                <div class="image">
                    <a href="{{url('/admin/dashboard')}}">
                        {{--                        <img src="{{ $site_logo_1 ?$site_logo_1->file: asset('backend/images/logo.png')}}"--}}
                        {{--                             alt="User Image" height="85px">--}}
                        {{--                        <img--}}
                        {{--                            src="{{$site_logo_2 ? $site_logo_2->file : asset('backend/images/logo-small.png') }}"--}}
                        {{--                            alt="User Image" height="85px">--}}
                    </a>
                </div>
{{--                <div class="info">--}}
{{--                    <a href="#" class="d-block">{{config('app.name')}}</a>--}}
{{--                </div>--}}
            </div>
            <!-- Sidebar MenuPosts -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class with font-awesome or any other icon font library -->
                    <li class="nav-item">
                        <a href="{{url('admin/dashboard')}}"
                           class="nav-link {{Request::url(['admin/dashboard*'])?'active':''}} ">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>Dashboard</p>
                        </a>
                    </li>

                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-cube"></i>
                            <p>System <i class="right fas fa-angle-right"></i></p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a data-src="{{ URL('admin/error/log-viewer/logs') }}"
                                   href="javascript:;"
                                   data-fancybox data-type="iframe"
                                   class="nav-link {{Request::url(['admin/error/log-viewer/logs*'])?'active':''}}">
                                    <i class="fas fa-dot-circle nav-icon"></i>
                                    <p>Error log</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>

</div>
