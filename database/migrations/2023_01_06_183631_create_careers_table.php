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
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('position');
            $table->text('company_overview');
            $table->text('job_description');
            $table->longText('responsibilities');
            $table->longText('qualifications');
            $table->text('salary');
            $table->longtext('benefits');
            $table->string('category');
            $table->text('type');
            $table->text('link');
            $table->string('slug');

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
        Schema::dropIfExists('careers');
    }
};