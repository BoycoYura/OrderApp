<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['name', 'service_type','clothe_type','pay_type','status','price','customer_id'];
}
