<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"
        integrity="sha512-XKa9Hemdy1Ui3KSGgJdgMyYlUg1gM+QhL6cnlyTe2qzMCYm4nAZ1PsVerQzTTXzonUR+dmswHqgJPuwCq1MaAg=="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
        integrity="sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA=="
        crossorigin="anonymous"></script>
<script src="https://kit.fontawesome.com/72d6f5380b.js" crossorigin="anonymous"></script>
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/js/regular.min.js"--}}
{{--        integrity="sha512-VY2o6bMeYqxgjIpqcVKGcGSsv51m6gJ5urdLkG6qHfE9JOLttv/6XzBS0+Z1QnwNoHK8Ic4EaINKWGqg+5697w=="--}}
{{--        crossorigin="anonymous"></script>--}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/bs-custom-file-input/1.3.4/bs-custom-file-input.min.js"
        integrity="sha512-91BoXI7UENvgjyH31ug0ga7o1Ov41tOzbMM3+RPqFVohn1UbVcjL/f5sl6YSOFfaJp+rF+/IEbOOEwtBONMz+w=="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.0.5/daterangepicker.min.js"
        integrity="sha512-mh+AjlD3nxImTUGisMpHXW03gE6F4WdQyvuFRkjecwuWLwD2yCijw4tKA3NsEFpA1C3neiKhGXPSIGSfCYPMlQ=="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
        integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/datatables.net/1.10.23/jquery.dataTables.min.js"
        integrity="sha512-coE8Qg+5Eb8e0xSXkdSJYln78NclTBgX6rducQWvi3NZooVaR1GVcVA5fRPVetzSqh9CEBv7hzwuQsZLLC0e8g=="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-bs4/1.10.23/dataTables.bootstrap4.min.js"
        integrity="sha512-NQ2u+QUFbhI3KWtE0O4rk855o+vgPo58C8vvzxdHXJZu6gLu2aLCCBMdudH9580OmLisCC1lJg2zgjcJbnBMOQ=="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/datatables-buttons/1.6.5/js/dataTables.buttons.min.js"
        integrity="sha512-C6bH79vwmIG/SVdXp2MT1SziCMrJ35rywNWqbYFLJXuiQsLlS5PH356A+FjsboOUaVjvtd+ELK3pb9hq0SXNrQ=="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-responsive-dt/2.2.7/responsive.dataTables.min.js"
        integrity="sha512-RcDqzwgZNmMeYL4hHw4EFZ5AJSP80OPGxo8zDW4sAOOF+Tt8kSzLxOFFnOcTalbO4SjI+QIc/SnguI5tAw5f0Q=="
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script src="https://cdn.tiny.cloud/1/48pe2w2iqlp2ozslsps5bewfngmw81lvmv9ol8izkbr6qs1v/tinymce/5/tinymce.min.js"
        referrerpolicy="origin"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"
        integrity="sha512-uURl+ZXMBrF4AwGaWmEetzrd+J5/8NRkWAvJx5sbPSSuOb0bZLqf+tOzniObO00BjHa/dD7gub9oCGMLPQHtQA=="
        crossorigin="anonymous"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.0.5/js/adminlte.min.js"
        integrity="sha512-++c7zGcm18AhH83pOIETVReg0dr1Yn8XTRw+0bWSIWAVCAwz1s2PwnSj4z/OOyKlwSXc4RLg3nnjR22q0dhEyA=="
        crossorigin="anonymous"></script>
<script src="{{ asset('vendor/shirish71/admin-panel/js/main.js')}}"></script>
<script src="{{asset('vendor/laravel-filemanager/js/stand-alone-button.js')}}"></script>
<script>
    var domain = '/admin/file-manager';
    $('#lfm').filemanager('image', {prefix: domain});
    $('#lfm2').filemanager('image', {prefix: domain});
    $('#lfm3').filemanager('image', {prefix: domain});
    $('[data-fancybox]').fancybox({toolbar: false, smallBtn: true, iframe: {preload: false}});
</script>
