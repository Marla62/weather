$(function () {
    let weather;
    $.ajax({
        url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=运城",
        dataType:"jsonp",
        success:function (res) {
            weather = res.data.weather;
            console.log(weather);
            render(weather);
        }
    })
    //渲染数据
    function render(obj){
        $(".city").html(obj.city_name);
        $(".screen .text1").html(obj.current_condition);
        // $(".screen .text2").html(obj.update_time);
        $(".screen .hot span").html(obj.current_temperature);
        $(".bottom .day .text1 .now").html(obj.dat_low_temperature+"°/"+obj.dat_high_temperature);
        $(".bottom .day .text1 .yun").html(obj.current_condition);
        $(".bottom .day .text1 .torr").html(obj.tomorrow_low_temperature+"°/"+obj. tomorrow_high_temperature);
        $(".bottom .day .text1 .yun1").html(obj.tomorrow_condition);
        $(".screen .orange .oo").html(obj.quality_level);

        //遍历

        obj.hourly_forecast.forEach(function (v,i) {
            let str =`<div class="hour">
                <p>${v.hour}:00</p>
                <div style="background: url(img/${v.weather_icon_id}.png/)  no-repeat"></div>
                <p>${v.temperature}°</p>
            </div>`;
            $(".goods1 .hourbox").append(str);
        });
        //还是遍历
        obj.forecast_list.forEach(function (v,i) {
            if(i>=5){
                return;
            }
            let str =`<li>
                <p class="text1">${v.date.slice(5)}</p>
                <p class="text2">${v.condition}</p>
                <div style="background: url(img/${v.weather_icon_id}.png)  no-repeat"></div>
                <p class="hight">${v.high_temperature}</p>
                <p class="low">${v.low_temperature}</p>
                <p class="text3">${v.wind_direction}</p>
                <p class="text4">${v.wind_level}</p>
            </li>`;
            $(".goods2 ul").append(str);
        });

    }

});