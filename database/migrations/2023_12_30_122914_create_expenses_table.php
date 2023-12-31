<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('expenses', function (Blueprint $table) {
      $table->id();
      $table->bigInteger('branch_id')->nullable();
      $table->bigInteger('user_id')->nullable();
      $table->bigInteger('seller_id')->nullable();
      $table->bigInteger('raw_materials_id')->nullable();
      $table->float('amount')->nullable();
      $table->string('discription')->nullable();
      $table->string('status')->nullable();
      $table->string('meridiem')->nullable();
      $table->string('date')->nullable();
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
    Schema::dropIfExists('expenses');
  }
};
