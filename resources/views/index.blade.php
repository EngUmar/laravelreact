<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        <title>Laravel React</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link href="{{ mix('css/app.css') }}" rel="stylesheet">

        <link href="{{ asset('css/my-style.css')}}" rel="stylesheet">

    </head>
    <body>
        <div id="app"></div>
        <script src="{{mix('/js/app.js')}}"></script>
    </body>
</html>

