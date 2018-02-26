
export default function(src) {
    $("body").append([
        '<div class="view-img-div">',
        '<a href="javascript:;" style="z-index:9999999"><i class="am-icon-lg am-icon-times-circle"></i></a>',
        '</div>'
    ].join(''));

    var dwidth = $(document).width();
    var dheight = $(document).height();

    var img = new Image();
    img.src = src;
    img.onload = function() {
        var imgwidth = $(this).width();
        var imgheight = $(this).height();
        $(this).css({ "left": dwidth / 2 - imgwidth / 2, "top": dheight / 2 - imgheight / 2 });
        $(this).css('cursor', 'move');
    };
    $('.view-img-div').append(img);

    img.onmousedown = function(en) { /*鼠标点下去的时候*/
        var ev = ev || event;
        var disX = en.clientX - img.offsetLeft;
        var disY = en.clientY - img.offsetTop;
        document.onmousemove = function(en) { /*鼠标移动的距离*/
            var ev = ev || event;
            img.style.top = en.clientY - disY + 'px';
            img.style.left = en.clientX - disX + 'px';
        };
        document.onmouseup = function() { /*鼠标移除的时候*/
            document.onmousemove = null;
        };
        return false; //阻止默认行为（如果页面中有文字，则会默认拖动文字）
    };

    $('.view-img-div a').click(function() {
        $('.view-img-div').remove();
    });
};