<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ResetPasswordRequest;
use App\Mail\ResetPasswordSuccess;
use App\User;
use App\ResetPassword;
use Carbon\Carbon;

class ResetPasswordController extends Controller
{
    /**
     * Create token password reset
     *
     * @param  [string] email
     * @return [string] message
     */
    public function create(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user){
            return response()->json([
                'errors' => [ 'message' => ['We can\'t find a user with that e-mail address.'] ]
            ], 404);
        }

        $resetPassword = ResetPassword::updateOrCreate(
            ['email' => $user->email],
            [
                'email' => $user->email,
                'token' => str_random(60)
            ]
        );

        if($user && $resetPassword){
            $data = [
                User::select('fullname')->where('email', $user->email)->first(),
                'token' => $resetPassword->token
            ];
            \Mail::to($user->email)->send(new ResetPasswordRequest($data));
        }

        return response()->json([
            'message' => 'We have e-mailed your password reset link'
        ]);
    }

    /**
     * Find token password reset
     *
     * @param  [string] $token
     * @return [string] message
     * @return [json] passwordReset object
     */
    public function find($token)
    {
       // $resetPassword = ResetPassword::where('token', $token)->first();

        // if (!$resetPassword){
        //     response()->json([
        //         'errors' => [ 'message' => ['This password reset token is invalid.'] ]
        //     ], 404);
        //     $user = ResetPassword::where('token', $token)->first();
        //     return redirect('change-password/INVALID_TOKEN');
        // }
        // if ($resetPassword->updated_at) {
        //     $resetPassword->delete();
        //     return response()->json([
        //         'errors' => [ 'message' => ['This password reset token is invalid.'] ]
        //     ], 404);
        //     return redirect('change-password/INVALID_TOKEN');
        // }
        return redirect('reset-password/'.$token);
    }

    public function validate_token($token)
    {
        $resetPassword = ResetPassword::where('token', $token)->first();    

        if (!$resetPassword){
            return response()->json([
                'errors' => [ 'message' => ['This password reset token is invalid.'] ]
            ], 404);
        }
        if (Carbon::parse($resetPassword->updated_at)->addMinutes(720)->setTimezone('GMT+8')->isPast()) {
            $resetPassword->delete();
            return response()->json([
                'errors' => [ 'message' => ['This password reset token is invalid.'] ]
            ], 404);
        }
    }
     /**
     * Reset password
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @param  [string] token
     * @return [string] message
     * @return [json] user object
     */
    public function reset(Request $request)
    {
        $request->validate([
            'password' => 'required|min:6|same:confirm_password', //|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
            'confirm_password' => 'sometimes'
        ]);

        $email = ResetPassword::select('email')->where('token', $request->token)->first();

        $user = User::where('email', $email->email)->first();

        $user->password = bcrypt($request->password);
        $user->save();

        $resetPassword = ResetPassword::where('token', $request->token)->first();    
        $resetPassword->delete();

        $data = [
            User::select('fullname')->where('email', $user->email)->first(),
        ];

        \Mail::to($resetPassword->email)->send(new ResetPasswordSuccess($data));

        return response()->json([
            'message' => 'Successfully Changed your Password'
        ], 200);
    }

    public function setEmail($token){
        return $resetPassword = ResetPassword::select('email')->where('token', $token)->first();
    }
}
