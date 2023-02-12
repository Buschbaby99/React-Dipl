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
        Schema::create('persons', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('insuranceNr');
            $table->timestamp('DayOfBirth');
            $table->foreignId('staffingId');
            $table->foreignId('departmentId');
            $table->foreignId('carId');
            $table->string('TelNr1');
            $table->string('TelNr2');
            $table->string('rank');
            $table->string('gender');
            $table->foreignId('addressId');
            $table->timestamp('entrydate')->nullable();
            $table->timestamp('exitdate')->nullable();
            $table->string('profession');
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
        Schema::dropIfExists('persons');
    }
};
