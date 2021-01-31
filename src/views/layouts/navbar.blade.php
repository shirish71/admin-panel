<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="{{url('/')}}" class="nav-link">{{config('app.name')}}</a>
        </li>
    </ul>
    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
        <!-- Notifications Dropdown MenuPosts -->
        <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="fas fa-bell"></i>
                <span class="badge badge-warning navbar-badge">3</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                    <i class="fas fa-envelope mr-2"></i> 3 new orders
                    <span
                        class="float-right text-muted text-sm">Small Text</span>
                </a>
                <div class="dropdown-divider"></div>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-avatar" data-toggle="dropdown" href="#">
                <img src="https://www.gravatar.com/avatar?d=mp" alt="person">
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="{{route('admin.profile.index')}}" class="dropdown-item">
                    <i class="fas fa-user mr-2"></i>
                    Profile
                </a>
                <a href="#" class="dropdown-item">
                    <form id="logout-form" action="{{ route('admin.logout') }}" method="POST">
                        @csrf
                        <button class="btn" type="submit"><i class="fas fa-sign-out mr-2"></i>Logout</button>
                    </form>
                </a>
            </div>
        </li>
    </ul>
</nav>
