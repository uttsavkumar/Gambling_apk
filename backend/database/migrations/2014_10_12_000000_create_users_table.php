<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('phone')->unique();
            $table->string('password');
            $table->string('inv_code')->default('DREAMPOWER');
            $table->string('ref_code');
            $table->float('balance')->default(0);
            $table->string('reg_date')->default(0);
            $table->string('pro')->default('temp/profile/1.png');
            $table->integer('first_login')->default(0);
            $table->integer('block')->default(0);
            $table->string('name')->default('d');
            $table->string('bname')->default('d');
            $table->string('card_no')->default('d');
            $table->string('ifsc')->default('d');
            $table->string('upi')->default('d');
            $table->string('email')->default('d');
            $table->integer('days')->default(0);
            $table->integer('total_recharge')->default(0);
            $table->integer('total_withdraw')->default(0);
            $table->integer('total_invest')->default(0);
            $table->integer('draw')->default(1);
            $table->integer('rec_status')->default(1);
            $table->integer('eq_earning')->default(1);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
