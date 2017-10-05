$(function() {
			var wangzhi = window.location.href;
			if (wangzhi.match("index")) {
				$(".fa-bank").css({
					"color": "#8A2BE2"
				});
			} else if (wangzhi.match("tehui")) {
				$(".fa-flag-o").css({
					"color": "#8A2BE2"
				});
			} else if (wangzhi.match("adopt")) {
				$(".fa-paw").css({
					"color": "#8A2BE2"
				});
			} else if (wangzhi.match("my")) {
				$(".fa-user").css({
					"color": "#8A2BE2"
				});
			}
		})