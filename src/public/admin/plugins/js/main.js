$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
$('img').each(function () {
    $(this).attr('src', $(this).data('delayedsrc'));
});
/** ----- for bulk deleting ---- **/
$(document).on('change', '.bulkSelect', function () {
    //uncheck "select all", if one of the listed checkbox item is unchecked
    if (false == $(this).prop("checked")) { //if this item is unchecked
        $(".checkAll").prop('checked', false); //change "select all" checked status to false
    }
    //check "select all" if all checkbox items are checked
    if ($('.bulkSelect:checked').length == $('.bulkSelect').length) {
        $(".checkAll").prop('checked', true);
    }
});
( function($) {
  //tooltip
  $('[data-toggle="tooltip"]').tooltip();

  $('.ksSearchFilterOneTrigger').on("click", function() {
    $(this).toggleClass('ksSearchFilterOneActive');
    $(this).next('.ksSearchFilterForm').slideToggle();
  });
})(jQuery);
$(document).on('click', '.delete-confirm', function (e) {
    e.preventDefault();
    const url = $(this).parents('form').attr('action');
    swal({
        title: 'Are you sure?',
        text: 'This record and it`s details will be permanantly deleted!',
        icon: 'warning',
        buttons: ["Cancel", "Yes!"],
    }).then(function (value) {
        if (value) {
            $.ajax({
                type: "DELETE",
                url: url,
                data: {'_method': 'DELETE'},
                success: function (success) {
                    console.log(success);
                    if (success == 204) {
                        setTimeout(function () {
                            window.location.reload(true);
                        }, 1000);
                        swal({
                            title: "Success!",
                            text: "Data has been deleted \n Click OK to refresh the page",
                            icon: "success",
                        }).then(function () {
                        });
                    } else if (success == 23000) {
                        swal({
                            title: "Error!",
                            text: "Error: 23000, Data cannot be deleted check inner value exists ",
                            type: 'error',
                            icon: 'error',
                        });
                    }
                }, error: function (data) {
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

(function () {
    // advanced and basic form
    $(document).ready(function () {
        $('.select2').select2({
            placeholder: 'Select Options'
        });
        bsCustomFileInput.init();

        if ($('#ksMyBasicAdvancedswitch').is(':checked')) {
            $('.ksAdvancedForm').addClass('ksAdvancedFormOpened');
            $('.ksAdvancedForm').removeClass('ksAdvancedFormClosed');
        } else {
            $('.ksAdvancedForm').addClass('ksAdvancedFormClosed');
            $('.ksAdvancedForm').removeClass('ksAdvancedFormOpened');
        }

        if ($('.ksShowHomePageTrigger').is(':checked')) {
            $('.ksDisplayOrder').show();
        } else {
            $('.ksDisplayOrder').hide();
        }

        if ($('.ksRequireOtherProductsTrigger').is(':checked')) {
            $('.ksRequiredOtherProductsID').show();
        } else {
            $('.ksRequiredOtherProductsID').hide();
        }

        if ($('.ksMarkAsNewTrigger').is(':checked')) {
            $('.ksMarkAsNewTriggered').show();
        } else {
            $('.ksMarkAsNewTriggered').hide();
        }

        if ($('.ksAvailableForPreOrderTrigger').is(':checked')) {
            $('.ksAvailableForPreOrderTriggered').show();
        } else {
            $('.ksAvailableForPreOrderTriggered').hide();
        }

        if ($('.ksCustomerEnterPriceTrigger').is(':checked')) {
            $('.ksCustomerEnterPriceTriggered').show();
        } else {
            $('.ksCustomerEnterPriceTriggered').hide();
        }

        if ($('.ksBasePriceEnabledTrigger').is(':checked')) {
            $('.ksBasePriceEnabledTriggered').show();
        } else {
            $('.ksBasePriceEnabledTriggered').hide();
        }

        if ($('ksTaxExemptTrigger').is(':checked')) {
            $('.ksTaxExemptTriggered').hide();
        } else {
            $('.ksTaxExemptTriggered').show();
        }
        if ($('.ksShippingEnabledTrigger').is(':checked')) {
            $('.ksShippingEnabledTriggered').show();
        } else {
            $('.ksShippingEnabledTriggered').hide();
        }

        if ($('.ksMultipleWarehouseTrigger').is(':checked')) {
            $('.ksMultipleWarehouseTriggeredDNone').hide();
            $('.ksMultipleWarehouseTriggered').show();
        } else {
            $('.ksMultipleWarehouseTriggeredDNone').show();
            $('.ksMultipleWarehouseTriggered').hide();
        }

        if ($('.ksDisplayAvailabilityTrigger').is(':checked')) {
            $('.ksDisplayAvailabilityTriggered').show();
        } else {
            $('.ksDisplayAvailabilityTriggered').hide();
        }

        if ($('.ksGiftCardTrigger').is(':checked')) {
            $('.ksGiftCardTriggered').show();
        } else {
            $('.ksGiftCardTriggered').hide();
        }

        if ($('.ksDownloadableProductTrigger').is(':checked')) {
            $('.ksDownloadableProductTriggered').show();
        } else {
            $('.ksDownloadableProductTriggered').hide();
        }

        if ($('.ksUnlimitedDownloadsTrigger').is(':checked')) {
            $('.ksUnlimitedDownloadsTriggered').hide();
        } else {
            $('.ksUnlimitedDownloadsTriggered').show();
        }

        if ($('.ksHasUserAgreementTrigger').is(':checked')) {
            $('.ksHasUserAgreementTriggered').show();
        } else {
            $('.ksHasUserAgreementTriggered').hide();
        }

        if ($('.ksHasSampleDownloadFileTrigger').is(':checked')) {
            $('.ksHasSampleDownloadFileTriggered').show();
        } else {
            $('.ksHasSampleDownloadFileTriggered').hide();
        }

        if ($('.ksIsRentalTrigger').is(':checked')) {
            $('.ksIsRentalTriggered').show();
        } else {
            $('.ksIsRentalTriggered').hide();
        }

        if ($('.ksIsRecurringProductTrigger').is(':checked')) {
            $('.ksIsRecurringProductTriggered').show();
        } else {
            $('.ksIsRecurringProductTriggered').hide();
        }

        if ($('.ksDownloadURLTrigger').is(':checked')) {
            $('.ksDownloadURLTrigger').parents('.col-sm-4').next('.col-sm-8').children('.ksDownloadURLInput').show();
            $('.ksDownloadURLTrigger').parents('.col-sm-4').next('.col-sm-8').children('.ksDownloadUploadFile').hide();
        } else {
            $('.ksDownloadURLTrigger').parents('.col-sm-4').next('.col-sm-8').children('.ksDownloadURLInput').hide();
            $('.ksDownloadURLTrigger').parents('.col-sm-4').next('.col-sm-8').children('.ksDownloadUploadFile').show();
        }

        if ($('.ksMultipleWarehouseDisabledTrigger').is(':checked')) {
            $('.ksMultipleWarehouseDisabledTrigger').parents('th').nextAll('th').children('.ksMultipleWarehouseDisabledTriggered').prop("disabled", false);
        } else {
            $('.ksMultipleWarehouseDisabledTrigger').parents('th').nextAll('th').children('.ksMultipleWarehouseDisabledTriggered').prop("disabled", true);
        }

        //functions
        toggleProductType();
        toggleManageStock();
    });
    $("#ksMyBasicAdvancedswitch").change(function () {
        if ($(this).is(':checked')) {
            $('.ksAdvancedForm').addClass('ksAdvancedFormOpened');
            $('.ksAdvancedForm').removeClass('ksAdvancedFormClosed');
        } else {
            $('.ksAdvancedForm').addClass('ksAdvancedFormClosed');
            $('.ksAdvancedForm').removeClass('ksAdvancedFormOpened');
        }
    });
    $(".ksShowHomePageTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksDisplayOrder').show();
        } else {
            $('.ksDisplayOrder').hide();
        }
    });
    $(".ksRequireOtherProductsTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksRequiredOtherProductsID').show();
        } else {
            $('.ksRequiredOtherProductsID').hide();
        }
    });
    $(".ksMarkAsNewTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksMarkAsNewTriggered').show();
        } else {
            $('.ksMarkAsNewTriggered').hide();
        }
    });
    $(".ksAvailableForPreOrderTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksAvailableForPreOrderTriggered').show();
        } else {
            $('.ksAvailableForPreOrderTriggered').hide();
        }
    });
    $(".ksCustomerEnterPriceTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksCustomerEnterPriceTriggered').show();
        } else {
            $('.ksCustomerEnterPriceTriggered').hide();
        }
    });
    $(".ksBasePriceEnabledTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksBasePriceEnabledTriggered').show();
        } else {
            $('.ksBasePriceEnabledTriggered').hide();
        }
    });
    $(".ksTaxExemptTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksTaxExemptTriggered').hide();
        } else {
            $('.ksTaxExemptTriggered').show();
        }
    });
    $(".ksShippingEnabledTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksShippingEnabledTriggered').show();
        } else {
            $('.ksShippingEnabledTriggered').hide();
        }
    });
    $(".ksMultipleWarehouseTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksMultipleWarehouseTriggeredDNone').hide();
            $('.ksMultipleWarehouseTriggered').show();
        } else {
            $('.ksMultipleWarehouseTriggeredDNone').show();
            $('.ksMultipleWarehouseTriggered').hide();
        }
    });
    $(".ksDisplayAvailabilityTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksDisplayAvailabilityTriggered').show();
        } else {
            $('.ksDisplayAvailabilityTriggered').hide();
        }
    });
    $(".ksGiftCardTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksGiftCardTriggered').show();
        } else {
            $('.ksGiftCardTriggered').hide();
        }
    });
    $(".ksDownloadableProductTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksDownloadableProductTriggered').show();
        } else {
            $('.ksDownloadableProductTriggered').hide();
        }
    });
    $(".ksUnlimitedDownloadsTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksUnlimitedDownloadsTriggered').hide();
        } else {
            $('.ksUnlimitedDownloadsTriggered').show();
        }
    });
    $(".ksHasUserAgreementTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksHasUserAgreementTriggered').show();
        } else {
            $('.ksHasUserAgreementTriggered').hide();
        }
    });
    $(".ksHasSampleDownloadFileTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksHasSampleDownloadFileTriggered').show();
        } else {
            $('.ksHasSampleDownloadFileTriggered').hide();
        }
    });
    $(".ksIsRentalTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksIsRentalTriggered').show();
        } else {
            $('.ksIsRentalTriggered').hide();
        }
    });
    $(".ksIsRecurringProductTrigger").change(function () {
        if ($(this).is(':checked')) {
            $('.ksIsRecurringProductTriggered').show();
        } else {
            $('.ksIsRecurringProductTriggered').hide();
        }
    });
    $('.ksDownloadURLTrigger').change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('.col-sm-4').next('.col-sm-8').children('.ksDownloadUploadFile').hide();
            $(this).parents('.col-sm-4').next('.col-sm-8').children('.ksDownloadURLInput').show();
        } else {
            $(this).parents('.col-sm-4').next('.col-sm-8').children('.ksDownloadUploadFile').show();
            $(this).parents('.col-sm-4').next('.col-sm-8').children('.ksDownloadURLInput').hide();
        }
    });
    $(".ksMultipleWarehouseDisabledTrigger").change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('th').nextAll('th').children('.ksMultipleWarehouseDisabledTriggered').prop("disabled", false);
        } else {
            $(this).parents('th').nextAll('th').children('.ksMultipleWarehouseDisabledTriggered').prop("disabled", true);
        }
    });
    //functions
    $(".ksProductTypeTrigger").change(toggleProductType);
    $(".ksInventoryMethodTrigger , .ksBackOrdersTrigger").change(toggleManageStock);

    // #end above

    function toggleProductType() {
        let simpleProductId = "5";
        let groupedProductId = "10";

        let selectedProductTypeId = $(".ksProductTypeTrigger").val();
        if (selectedProductTypeId == simpleProductId) {
            $('.ksProductTypeSimple').show();
            $('.ksProductTypeGrouped').hide();
        }
        if (selectedProductTypeId == groupedProductId) {
            $('.ksProductTypeSimple').hide();
            $('.ksProductTypeGrouped').show();
        }
    }

    function toggleManageStock() {
        let dontTrackInventory = "0";
        let trackInventory = "1";
        let trackInventoryByProductAttributes = "2";
        let noBackordersId = "0";
        let allowQtyBelow0Id = "1";
        let allowQtyBelow0AndNotifyCustomerId = "2";

        let selectedTrackInventoryMethod = $(".ksInventoryMethodTrigger").val();
        if (selectedTrackInventoryMethod == dontTrackInventory) {
            $('.ksMultipleWarehouseTriggeredDNone').show();
            $('.ksTrackInventoryTriggered').hide();
            $('.ksDisplayAvailabilityTriggered').hide();
            $('.ksTrackInventoryByProductAttrTriggered').hide();
            $('.ksMultipleWarehouseTriggered').hide();
            $('.ksTrackInventoryCommonTrigger').hide();
        }
        if (selectedTrackInventoryMethod == trackInventory) {
            $('.ksTrackInventoryTriggered').show();
            $('.ksMultipleWarehouseTriggered').show();
            $('.ksTrackInventoryByProductAttrTriggered').hide();
            $('.ksTrackInventoryCommonTrigger').show();
            if ($('.ksDisplayAvailabilityTrigger').is(':checked')) {
                $('.ksDisplayAvailabilityTriggered').show();
            } else {
                $('.ksDisplayAvailabilityTriggered').hide();
            }
            ;
            if ($('.ksMultipleWarehouseTrigger').is(':checked')) {
                $('.ksMultipleWarehouseTriggeredDNone').hide();
                $('.ksMultipleWarehouseTriggered').show();
            } else {
                $('.ksMultipleWarehouseTriggeredDNone').show();
                $('.ksMultipleWarehouseTriggered').hide();
            }
            ;
        }
        if (selectedTrackInventoryMethod == trackInventoryByProductAttributes) {
            $('.ksTrackInventoryByProductAttrTriggered').show();
            $('.ksTrackInventoryCommonTrigger').show();
            $('.ksMultipleWarehouseTriggered').hide();
            $('.ksMultipleWarehouseTriggeredDNone').show();
            $('.ksTrackInventoryTriggered').hide();
            if ($('.ksDisplayAvailabilityTrigger').is(':checked')) {
                $('.ksDisplayAvailabilityTriggered').show();
            } else {
                $('.ksDisplayAvailabilityTriggered').hide();
            }
            ;
        }

        let selectedManageInventoryMethodId = $(".ksBackOrdersTrigger").val();
        if (selectedManageInventoryMethodId == noBackordersId) {
            $(".ksMultipleWarehouseTrigger").change(function () {
                if ($(this).is(':checked')) {
                    $('.ksMultipleWarehouseTriggeredDNone').hide();
                    $('.ksMultipleWarehouseTriggered').show();
                } else {
                    $('.ksMultipleWarehouseTriggeredDNone').show();
                    $('.ksMultipleWarehouseTriggered').hide();
                }
            });
        }
        if (selectedManageInventoryMethodId == allowQtyBelow0Id) {
            $('.ksAllowQtyBelowZTrigger').hide();
            $(".ksMultipleWarehouseTrigger").change(function () {
                if ($(this).is(':checked')) {
                    $('.ksMultipleWarehouseTriggeredDNone').hide();
                    $('.ksMultipleWarehouseTriggered').show();
                } else {
                    $('.ksMultipleWarehouseTriggeredDNone').show();
                    $('.ksMultipleWarehouseTriggered').hide();
                }
            });
        }
        if (selectedManageInventoryMethodId == allowQtyBelow0AndNotifyCustomerId) {
            $('.ksAllowQtyBelowZCommonTrigger').hide();
            $(".ksMultipleWarehouseTrigger").change(function () {
                if ($(this).is(':checked')) {
                    $('.ksMultipleWarehouseTriggeredDNone').hide();
                    $('.ksMultipleWarehouseTriggered').show();
                } else {
                    $('.ksMultipleWarehouseTriggeredDNone').show();
                    $('.ksMultipleWarehouseTriggered').hide();
                }
            });
        }
    }


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
        file_picker_callback: function (callback, value, meta) {
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
        reader.onload = function (e) {
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

        reader.onload = function (e) {
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

        reader.onload = function (e) {
            $('#previewFavicon').attr('src', e.target.result).removeClass('hide');
            $("#img-preview2").hide();
        }
        reader.readAsDataURL(input.files[0]);
    } else {
        $('#previewFavicon').addClass('hide').attr('src', 'url(\'\')');
    }
}

//======================================================================settings image change============================================================================
