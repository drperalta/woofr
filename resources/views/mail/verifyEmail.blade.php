@component('mail::message')


#Hi {{ $name }},

Thanks for signing up! Please before you begin, you must verify your email.


@component('mail::button', ['url' => $confirmationLink])
    Open Link
@endcomponent


*if you're having trouble with the button above, copy and paste the URL below into your web browser:*
{{ $confirmationLink }}

@endcomponent