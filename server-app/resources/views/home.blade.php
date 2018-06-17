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
                                <button>
                                    <a href='{{ url('/update') }}?name={{$anket->id}}'>
                                        Обработать
                                    </a>
                                </button>
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
