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
    Schema::create('bread_records', function (Blueprint $table) {
      $table->id();
      $table->bigInteger('branch_id')->nullable();
      $table->bigInteger('bread_id')->nullable();
      $table->bigInteger('baker_id')->nullable();
      $table->bigInteger('seller_id')->nullable();
      $table->float('price')->nullable();
      $table->bigInteger('beginning')->nullable();
      $table->bigInteger('new_production')->nullable();
      $table->bigInteger('total')->nullable();
      $table->bigInteger('remaining')->nullable();
      $table->bigInteger('bread_sold')->nullable();
      $table->bigInteger('bread_out')->nullable();
      $table->bigInteger('charge')->nullable();
      $table->bigInteger('over')->nullable();
      $table->float('sales')->nullable();
      $table->string('meridiem')->nullable();
      $table->string('status')->nullable();
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
    Schema::dropIfExists('bread_records');
  }
};
