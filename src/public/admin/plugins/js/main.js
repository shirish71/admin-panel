$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
$('img').each(function() {
    $(this).attr('src', $(this).data('delayedsrc'));
});
/** ----- for bulk deleting ---- **/
$(document).on('change', '.bulkSelect', function() {
    //uncheck "select all", if one of the listed checkbox item is unchecked
    if (false == $(this).prop("checked")) { //if this item is unchecked
        $(".checkAll").prop('checked', false); //change "select all" checked status to false
    }
    //check "select all" if all checkbox items are checked
    if ($('.bulkSelect:checked').length == $('.bulkSelect').length) {
        $(".checkAll").prop('checked', true);
    }
});
(function($) {
        $(document).on('click', '.delete-confirm', function(e) {
            e.preventDefault();
            const url = $(this).parents('form').attr('action');
            swal({
                title: 'Are you sure?',
                text: 'This record and it`s details will be permanantly deleted!',
                icon: 'warning',
                buttons: ["Cancel", "Yes!"],
            }).then(function(value) {
                if (value) {
                    $.ajax({
                        type: "DELETE",
                        url: url,
                        data: { '_method': 'DELETE' },
                        success: function(success) {
                            console.log(success);
                            if (success == 204) {
                                setTimeout(function() {
                                    window.location.reload(true);
                                }, 1000);
                                swal({
                                    title: "Success!",
                                    text: "Data has been deleted \n Click OK to refresh the page",
                                    icon: "success",
                                }).then(function() {});
                            } else if (success == 23000) {
                                swal({
                                    title: "Error!",
                                    text: "Error: 23000, Data cannot be deleted check inner value exists ",
                                    type: 'error',
                                    icon: 'error',
                                });
                            }
                        },
                        error: function(data) {
                            console.log(data);
                            swal({
                                title: 'Opps...',
                                text: 'Error: 500, Server Error',
                                type: 'error',
                                timer: '1500'
                            })
                        }
                    });
                }
            });
        });

        function loadFile(event) {
            var output = document.getElementById('preview');
            output.src = URL.createObjectURL(event.target.files[0]);
            document.getElementById("oldFeatureImage").setAttribute("class", "display-none");
        }

        (function() {
            // advanced and basic form
            $(document).ready(function() {
                $('.select2').select2({
                    placeholder: 'Select Options'
                });

            });




            // #end above

            // datepicker
            $(".monthDatePicker").datepicker({
                format: "yyyy-mm",
                viewMode: "months",
                minViewMode: "months"
            });
            $('.datePicker').daterangepicker({
                timePicker: false,
                use24hours: false,
                singleDatePicker: true,
                minDate: moment().startOf('hour'),
                showDropdowns: true,
                locale: {
                    format: 'Y-MM-DD'
                }
            });
            $('.onlyDatePicker').datepicker({
                dateFormat: 'yy-mm-dd',
            });
            $('.startDateTime').daterangepicker({
                timePicker: true,
                use24hours: false,
                singleDatePicker: true,
                minDate: new Date(),
                startDate: moment().startOf().add(10, 'minute'),
                showDropdowns: true,
                locale: {
                    format: 'Y-MM-DD HH:mm'
                }
            });
            $('.endDateTime').daterangepicker({
                timePicker: true,
                use24hours: true,
                singleDatePicker: true,
                minDate: new Date(),
                startDate: moment().startOf().add(30, 'minute'),
                showDropdowns: true,
                locale: {
                    format: 'Y-MM-DD HH:mm'
                }
            });
            $('.timeDatePicker').daterangepicker({
                timePicker: true,
                use24hours: true,
                singleDatePicker: true,
                minDate: new Date(),
                showDropdowns: true,
                locale: {
                    format: 'Y-MM-DD HH:mm'
                }
            });
            $('.timeDatePicker').val("");
            $('.editTimeDatePicker').daterangepicker({
                timePicker: true,
                use24hours: true,
                singleDatePicker: true,
                minDate: new Date(),
                showDropdowns: true,
                locale: {
                    format: 'Y-MM-DD HH:mm'
                }
            });
            $('.ksButtonTimeDatePicker').daterangepicker({
                timePicker: true,
                use24hours: true,
                startDate: moment().startOf('hour'),
                endDate: moment().startOf('hour').add(32, 'hour'),
                singleDatePicker: true,
                showDropdowns: true,
                locale: {
                    format: 'Y-MM-DD HH:mm'
                }
            });
            $('.editDatePicker').daterangepicker({
                timePicker: false,
                singleDatePicker: true,
                // minDate: new Date(),
                showDropdowns: true,
                locale: {
                    format: 'Y-MM-DD'
                }
            });
            // #end datepicker

            //Initialize select2 elements
            // $('.select2bs4').select2({
            //     theme: 'bootstrap4'
            // })
            // #end select2 elements

            var editor_config = {
                path_absolute: "/",
                selector: "textarea.ksWISIEditor",
                plugins: [
                    "media",
                    "insertdatetime",
                    "preview",
                    'image imagetools',
                    'wordcount',
                    'toc',
                    'table',
                    'searchreplace',
                    'print',
                    'lists',
                    'link',
                    'autolink',
                    'code',
                    // 'pageembed',
                    'fullscreen',
                    'advlist',
                    // 'advcode',
                    'emoticons',
                ],
                height: 350,
                toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image pageembed fullscreen",
                relative_urls: false,
                file_picker_callback: function(callback, value, meta) {
                    let x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
                    let y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

                    let type = 'image' === meta.filetype ? 'Images' : 'Files',
                        url = editor_config.path_absolute + 'admin/filemanager?editor=tinymce5&type=' + type;

                    tinymce.activeEditor.windowManager.openUrl({
                        url: url,
                        title: 'Filemanager',
                        width: x * 0.8,
                        height: y * 0.8,
                        onMessage: (api, message) => {
                            callback(message.content);
                        }
                    });
                },

            };

            tinymce.init(editor_config);

            $('.ksTableTrigger').DataTable({
                paging: false,
                ordering: false,
                searching: false,
                info: false,
                autoWidth: false,
                responsive: true,
            });
        })(jQuery);

        //======================================settings image change=================================================================================
        function readLogoURL(input) {

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#previewLogo').attr('src', e.target.result).removeClass('hide');
                    $("#img-preview").hide();
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                $('#previewLogo').addClass('hide').attr('src', 'url(\'\')');
            }
        }

        function readLogoURL2(input) {

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    $('#previewLogo2').attr('src', e.target.result).removeClass('hide');
                    $("#img-preview2").hide();
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                $('#previewLogo2').addClass('hide').attr('src', 'url(\'\')');
            }
        }

        function readFaviconURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    $('#previewFavicon').attr('src', e.target.result).removeClass('hide');
                    $("#img-preview2").hide();
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                $('#previewFavicon').addClass('hide').attr('src', 'url(\'\')');
            }
        }

        //======================================================================settings image change============================================================================