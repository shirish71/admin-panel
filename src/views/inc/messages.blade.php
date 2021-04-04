<div class="row">
    <div class="col-md-12 col-12 col-sm-12 col-xs-12">
        @if(count($errors)>0 )
            @foreach($errors->all() as $error)
                <div class="alert alert-danger">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Notification: &nbsp;</strong>
                    {{$error}}
                </div>
            @endforeach()
        @endif
        @if(session('success'))
            <div class="alert alert-success">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>Notification: &nbsp;</strong>{{session('success')}}
            </div>
        @endif
        @if(session('error'))
            <div class="alert alert-danger">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>Notification: &nbsp;</strong>
                {{session('error')}}
            </div>
        @endif
    </div>
</div>
