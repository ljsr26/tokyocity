$(document).ready(function(){
    $("#mapa-homepage").click(function(){
    $("#homepage").hide();
    $("#barrios-page").show();
    });

    $("#btn-vol-homepage").click(function(){
    $("#barrios-page").hide();
    $("#homepage").show();
    });


/* botones de volver en las páginas de los distritos */
    $("[id*='-be']").click(function(){
    $("#adachi-page").hide();
    $("#arakawa-page").hide();
    $("#bunkyo-page").hide();
    $("#chiyoda-page").hide();
    $("#chuo-page").hide();
    $("#edogawa-page").hide();
    $("#itabashi-page").hide();
    $("#katsushika-page").hide();
    $("#kita-page").hide();
    $("#meguro-page").hide();
    $("#minato-page").hide();
    $("#nakano-page").hide();
    $("#nerima-page").hide();
    $("#ota-page").hide();
    $("#setagaya-page").hide();
    $("#shibuya-page").hide();
    $("#shinagawa-page").hide();
    $("#shinjuku-page").hide();
    $("#suginami-page").hide();
    $("#sumida-page").hide();
    $("#toshima-page").hide();
    $("#taito-page").hide();
    $("#koto-page").hide();
    $("#barrios-page").show();
    });


/* botones de volver en las páginas de los lugares de interés */
    $("#btn-vol-chiyoda").click(function(){
    $("#palacio-page").hide();
    $("#chiyoda-page").show();
    });

    $("#btn-vol-edogawa").click(function(){
    $("#sea-page").hide();
    $("#edogawa-page").show();
    });

    $("#btn-vol-meguro").click(function(){
    $("#rio-page").hide();
    $("#meguro-page").show();
    });

    $("#btn-vol-minato").click(function(){
    $("#torre-page").hide();
    $("#minato-page").show();
    });

    $("#btn-vol-setagaya").click(function(){
    $("#goto-page").hide();
    $("#setagaya-page").show();
    });

    $("#btn-vol-shibuya").click(function(){
    $("#meiji-page").hide();
    $("#shibuya-page").show();
    });

    $("#btn-vol-sumida").click(function(){
    $("#sky-page").hide();
    $("#sumida-page").show();
    });

    $("#btn-vol-taito").click(function(){
    $("#senso-page").hide();
    $("#taito-page").show();
    });


/* botones de los distritos*/
    $("[id*='-adachi']").click(function(){
    $("#barrios-page").hide();
    $("#arakawa-page").hide();
    $("#toshima-page").hide();
    $("#adachi-page").show();
    });

    $("[id*='-arakawa']").click(function(){
    $("#barrios-page").hide();
    $("#adachi-page").hide();
    $("#bunkyo-page").hide();
    $("#arakawa-page").show();
    });

    $("[id*='-bunkyo']").click(function(){
    $("#barrios-page").hide();
    $("#arakawa-page").hide();
    $("#chiyoda-page").hide();
    $("#palacio-page").hide();
    $("#bunkyo-page").show();
    });

    $("[id*='-chiyoda']").click(function(){
    $("#barrios-page").hide();
    $("#bunkyo-page").hide();
    $("#chuo-page").hide();
    $("#chiyoda-page").show();
    });

    $("[id*='-chuo']").click(function(){
    $("#barrios-page").hide();
    $("#chiyoda-page").hide();
    $("#edogawa-page").hide();
    $("#sea-page").hide();
    $("#chuo-page").show();
    });

    $("[id*='-edogawa']").click(function(){
    $("#barrios-page").hide();
    $("#chuo-page").hide();
    $("#itabashi-page").hide();
    $("#edogawa-page").show();
    });

    $("[id*='-itabashi']").click(function(){
    $("#barrios-page").hide();
    $("#edogawa-page").hide();
    $("#katsushika-page").hide();
    $("#sea-page").hide();
    $("#itabashi-page").show();
    });

    $("[id*='-katsushika']").click(function(){
    $("#barrios-page").hide();
    $("#itabashi-page").hide();
    $("#kita-page").hide();
    $("#katsushika-page").show();
    });

    $("[id*='-kita']").click(function(){
    $("#barrios-page").hide();
    $("#katsushika-page").hide();
    $("#koto-page").hide();
    $("#kita-page").show();
    });

    $("[id*='-koto']").click(function(){
    $("#barrios-page").hide();
    $("#kita-page").hide();
    $("#meguro-page").hide();
    $("#rio-page").hide();
    $("#koto-page").show();
    });

    $("[id*='-meguro']").click(function(){
    $("#barrios-page").hide();
    $("#koto-page").hide();
    $("#minato-page").hide();
    $("#torre-page").hide();
    $("#meguro-page").show();
    });

    $("[id*='-minato']").click(function(){
    $("#barrios-page").hide();
    $("#meguro-page").hide();
    $("#nakano-page").hide();
    $("#rio-page").hide();
    $("#minato-page").show();
    });

    $("[id*='-nakano']").click(function(){
    $("#barrios-page").hide();
    $("#minato-page").hide();
    $("#nerima-page").hide();
    $("#torre-page").hide();
    $("#nakano-page").show();
    });

    $("[id*='-nerima']").click(function(){
    $("#barrios-page").hide();
    $("#nakano-page").hide();
    $("#ota-page").hide();
    $("#nerima-page").show();
    });

    $("[id*='-ota']").click(function(){
    $("#barrios-page").hide();
    $("#nerima-page").hide();
    $("#setagaya-page").hide();
    $("#goto-page").hide();
    $("#ota-page").show();
    });

    $("[id*='-setagaya']").click(function(){
    $("#barrios-page").hide();
    $("#ota-page").hide();
    $("#shibuya-page").hide();
    $("#meiji-page").hide();
    $("#setagaya-page").show();
    });

    $("[id*='-shibuya']").click(function(){
    $("#barrios-page").hide();
    $("#setagaya-page").hide();
    $("#shinagawa-page").hide();
    $("#goto-page").hide();
    $("#shibuya-page").show();
    });

    $("[id*='-shinagawa']").click(function(){
    $("#barrios-page").hide();
    $("#shibuya-page").hide();
    $("#shinjuku-page").hide();
    $("#meiji-page").hide();
    $("#shinagawa-page").show();
    });

    $("[id*='-shinjuku']").click(function(){
    $("#barrios-page").hide();
    $("#shinagawa-page").hide();
    $("#suginami-page").hide();
    $("#shinjuku-page").show();
    });

    $("[id*='-suginami']").click(function(){
    $("#barrios-page").hide();
    $("#shinjuku-page").hide();
    $("#sumida-page").hide();
    $("#sky-page").hide();
    $("#suginami-page").show();
    });

    $("[id*='-sumida']").click(function(){
    $("#barrios-page").hide();
    $("#suginami-page").hide();
    $("#taito-page").hide();
    $("#senso-page").hide();
    $("#sumida-page").show();
    });

    $("[id*='-taito']").click(function(){
    $("#barrios-page").hide();
    $("#sumida-page").hide();
    $("#toshima-page").hide();
    $("#sky-page").hide();
    $("#taito-page").show();
    });

    $("[id*='-toshima']").click(function(){
    $("#barrios-page").hide();
    $("#taito-page").hide();
    $("#adachi-page").hide();
    $("#senso-page").hide();
    $("#toshima-page").show();
    });


/* botones de los lugares de interés */
    $("[id*='-palacio']").click(function(){
    $("#chiyoda-page").hide();
    $("#adachi-page").hide();
    $("#arakawa-page").hide();
    $("#bunkyo-page").hide();
    $("#chuo-page").hide();
    $("#edogawa-page").hide();
    $("#senso-page").hide();
    $("#sea-page").hide();
    $("#palacio-page").show();
    });

    $("[id*='-sea']").click(function(){
    $("#edogawa-page").hide();
    $("#chuo-page").hide();
    $("#itabashi-page").hide();
    $("#katsushika-page").hide();
    $("#kita-page").hide();
    $("#koto-page").hide();
    $("#meguro-page").hide();
    $("#palacio-page").hide();
    $("#rio-page").hide();
    $("#sea-page").show();
    });

    $("[id*='-rio']").click(function(){
    $("#meguro-page").hide();
    $("#edogawa-page").hide();
    $("#itabashi-page").hide();
    $("#katsushika-page").hide();
    $("#kita-page").hide();
    $("#koto-page").hide();
    $("#minato-page").hide();
    $("#sea-page").hide();
    $("#torre-page").hide();
    $("#rio-page").show();
    });

    $("[id*='-torre']").click(function(){
    $("#minato-page").hide();
    $("#meguro-page").hide();
    $("#nakano-page").hide();
    $("#nerima-page").hide();
    $("#ota-page").hide();
    $("#setagaya-page").hide();
    $("#rio-page").hide();
    $("#goto-page").hide();
    $("#torre-page").show();
    });

    $("[id*='-goto']").click(function(){
    $("#setagaya-page").hide();
    $("#minato-page").hide();
    $("#nakano-page").hide();
    $("#nerima-page").hide();
    $("#ota-page").hide();
    $("#shibuya-page").hide();
    $("#torre-page").hide();
    $("#meiji-page").hide();
    $("#goto-page").show();
    });
    
    $("[id*='-meiji']").click(function(){
    $("#shibuya-page").hide();
    $("#setagaya-page").hide();
    $("#shinagawa-page").hide();
    $("#shinjuku-page").hide();
    $("#suginami-page").hide();
    $("#sumida-page").hide();
    $("#goto-page").hide();
    $("#sky-page").hide();
    $("#meiji-page").show();
    });

    $("[id*='-sky']").click(function(){
    $("#sumida-page").hide();
    $("#shibuya-page").hide();
    $("#shinagawa-page").hide();
    $("#shinjuku-page").hide();
    $("#suginami-page").hide();
    $("#taito-page").hide();
    $("#meiji-page").hide();
    $("#senso-page").hide();
    $("#sky-page").show();
    });

    $("[id*='-senso']").click(function(){
    $("#taito-page").hide();
    $("#chiyoda-page").hide();
    $("#adachi-page").hide();
    $("#arakawa-page").hide();
    $("#bunkyo-page").hide();
    $("#sumida-page").hide();
    $("#toshima-page").hide();
    $("#palacio-page").hide();
    $("#sky-page").hide();
    $("#senso-page").show();
    });
    




});