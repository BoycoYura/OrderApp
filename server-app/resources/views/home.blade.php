@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header" align="center">Admin panel for Order App</div>

                <div class="card-body">
                <table class="orders-info-table">
                    <thead>
                        <tr>
                            <td>
                                Номер заказа
                            </td>

                            <td>
                                Ф.И.О.
                            </td>

                            <td>
                                Дата заказа
                            </td>

                            <td>
                                Статус заказа
                            </td>

                            <td>
                                Стоимость заказа
                            </td>

                            <td>
                                Action
                            </td>
                        </tr>
                    <thead>

                    <tbody>
                    @foreach($ankets as $anket)
                        <tr>
                            <td>
                                {{$anket->id}}
                            </td>

                            <td>
                                {{$anket->name}}
                            </td>

                            <td>
                                {{$anket->created_at}}
                            </td>

                            <td>
                                {{$anket->status}}
                            </td>
                                
                            <td>
                                {{$anket->price}}
                            </td>

                            <td>

                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal_{{$anket->id}}">
                            Обработать
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="modal_{{$anket->id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header" style="display:flex;justify-content: center; ">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="margin: 0;"><span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="myModalLabel">Обработать заказ</h4>
                                </div>
                                <div class="modal-body">
                                    <form action="/update" method="POST" id="form_{{$anket->id}}">
                                        @csrf
                                        <input type="text" name="order_price"></input>
                                        <input type="hidden" name="order_id" value="{{$anket->id}}"></input>
                                        <input type="submit" value="Обработать" ></input>
                                    </form>
                                </div>
                                <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div> -->
                                </div>
                            </div>
                            </div>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>

                </table>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
