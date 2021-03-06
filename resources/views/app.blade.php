<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Woofr</title>
        <link rel="icon" href="{{ asset('images/woofr-logo.png') }}"/>

        <!-- Fonts -->
        <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">

        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    </head>
    <body style="margin: 0; background-color: rgba(240, 234, 234, 0.80);">
        <div id="app">
            <App></App>
        </div>

    <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
