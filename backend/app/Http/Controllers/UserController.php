<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{
  function checkOtp(Request $request)
  {
    if ($request->phone) {
      //check otp here
    }
  }

  public function register(Request $request)
  {

    $phone = User::where('phone', $request->phone)->first();
    if ($phone) {
      $d = array("res" => "error", "message" => "Mobile Number Already Exist");
      echo json_encode($d);
    } else {

      $p = (rand(1, 21));
      $pro = "temp_folder/profile/pro" . $p . ".jpg";
      $ran =  Str::random(8);

      $user = new User;
      $user->phone = $request->phone;
      $user->password = Hash::make($request->password);
      $user->ref_code = $ran;
      $user->inv_code = $request->ref;
      $user->pro = $pro;
      $user->save();
    }
  }
}
