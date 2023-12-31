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
    Schema::create('selecta_records', function (Blueprint $table) {
      $table->id();
      $table->bigInteger('branch_id')->nullable();
      $table->bigInteger('selecta_id')->nullable();
      $table->bigInteger('seller_id')->nullable();
      $table->float('price')->nullable();
      $table->bigInteger('beginning')->nullable();
      $table->bigInteger('new_purchase')->nullable();
      $table->bigInteger('total')->nullable();
      $table->bigInteger('remaining')->nullable();
      $table->bigInteger('sold')->nullable();
      $table->float('sales')->nullable();
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
    Schema::dropIfExists('selecta_records');
  }
};
