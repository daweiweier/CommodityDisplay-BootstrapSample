jQuery(function()
{
    //commodities 图片左右滑动
    $(document).scroll(function(){
        document_top = $(document).scrollTop();
        event_wapper_top = $("#goods_upcomming_commodities").position().top;
        if(document_top<event_wapper_top){
            event_animate_num = event_wapper_top - document_top;
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#goods_upcomming_commodities .event_animate_left").css({'left': -event_animate_num,'opacity':event_animate_alpha});
            $("#goods_upcomming_commodities .event_animate_right").css({'left':event_animate_num,'opacity':event_animate_alpha});
        }else{
            $("#goods_upcomming_commodities .event_animate_left").css({'left': 0,'opacity':1});
            $("#goods_upcomming_commodities .event_animate_right").css({'left':0,'opacity':1});
        }
        
    });
    //Recommend 图片左右滑动
    $(document).scroll(function(){
        document_top = $(document).scrollTop()-2000;
        event_wapper_top = $("#goods_Recommend").position().top-2110;
        if(document_top<event_wapper_top){
            event_animate_num = event_wapper_top - document_top;
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#goods_Recommend .event_animate_left").css({'left': -event_animate_num,'opacity':event_animate_alpha});
            $("#goods_Recommend .event_animate_right").css({'left':event_animate_num,'opacity':event_animate_alpha});
        }else{
            $("#goods_Recommend .event_animate_left").css({'left': 0,'opacity':1});
            $("#goods_Recommend .event_animate_right").css({'left':0,'opacity':1});
        }
    });
});
