<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

use App\Order;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ankets = Order::all();

        return view('home', compact('ankets','name')) ;
    }

    public function updateOrder()
    {
        $ankets = Order::all();

        $order_id = $_GET['name'];

        DB::update('update orders set status = "Обработан" where id = ?', [$order_id]);

        DB::update('update orders set price = 200 where id = ?', [$order_id]);
    }
}
