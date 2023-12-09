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
        Schema::create('raw_materials_branches', function (Blueprint $table) {
          $table->id();
          $table->bigInteger('raw_materials_id')->nullable();
          $table->bigInteger('branch_id');
          $table->float('quantity')->nullable();
          $table->string('bind')->nullable();
          $table->string('warning')->nullable();
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
        Schema::dropIfExists('raw_materials_branches');
    }
};
