$(function() {
    var $step = $(".step");
    var $butt = $(".butt");
    var $osci = $(".osci");       
    var $x = $(".from");
    var $xn = $(".to");
    var $func = $(".func");
    var $plotter = $(".plot");
    var dx = 0;
    var disco = 0;
    
     var plot = function() {

        var x = parseFloat($x.val());
        var xn = parseFloat($xn.val());
        var step = parseFloat($step.val());
        var func = ($func.val());
        var points = [ ];
        var y = 0;
            
        x = x + dx;
        xn = x + dx;
        
        while (x < xn) {
            y = eval(func);
            points.push([x, y]);
            x = x + step;
        }
        $.plot($plotter, [{label: func, data: points}] ,[points], {});
        dx += 1;
    };
    
    $osci.click(function(e) {
        e.preventDefault();
        disco = 1;
    });
        
    $butt.click(function(e) {
        e.preventDefault();
        setInterval(plot, 1000);
    });
});

