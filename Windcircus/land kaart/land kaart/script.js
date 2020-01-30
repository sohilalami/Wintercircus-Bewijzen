$('[data-toggle="tooltip"]').tooltip({
            animated: 'fade',
            placement: 'right',
            html: true,
            trigger: 'manual',
        });

$('.mapmarker').click(function() {
            var buttonid = $(this).attr('id')
            console.log(buttonid);
            $(".mapmarker").tooltip('hide');
            $(".mapmarker").attr("src", "http://res.cloudinary.com/ekane341/image/upload/v1525704636/map-marker_2x.png");

            if (buttonid == '1') {
                if ($(this).is('.active')) {
                    $(".mapmarker:first-child").tooltip('hide');
                    $(".mapmarker:first-child").attr("src", "http://res.cloudinary.com/ekane341/image/upload/v1525708717/map-marker-active_2x.png");
                } else {
                    $(".mapmarker:first-child").tooltip('show');
                    $(".mapmarker:first-child").attr("src", "http://res.cloudinary.com/ekane341/image/upload/v1525708717/map-marker-active_2x.png");
                }
            }
            if (buttonid == '2') {
                if ($(this).is('.active')) {
                    $(".mapmarker:nth-child(2)").tooltip('hide');
                    $(".mapmarker:nth-child(2)").attr("src", "http://res.cloudinary.com/ekane341/image/upload/v1525708717/map-marker-active_2x.png");
                } else {
                    $(".mapmarker:nth-child(2)").tooltip('show');
                    $(".mapmarker:nth-child(2)").attr("src", "http://res.cloudinary.com/ekane341/image/upload/v1525708717/map-marker-active_2x.png");
                }
            }
            if (buttonid == '3') {
                if ($(this).is('.active')) {
                    $(".mapmarker:nth-child(3)").tooltip('hide');
                    $(".mapmarker:nth-child(3)").attr("src", "http://res.cloudinary.com/ekane341/image/upload/v1525708717/map-marker-active_2x.png");
                } else {
                    $(".mapmarker:nth-child(3)").tooltip('show');
                    $(".mapmarker:nth-child(3)").attr("src", "http://res.cloudinary.com/ekane341/image/upload/v1525708717/map-marker-active_2x.png");
                }
            }
            if (buttonid == '4') {
                if ($(this).is('.active')) {
                    $(".mapmarker:nth-child(4)").tooltip('hide');
                    $(".mapmarker:nth-child(4)").attr("src", "http://res.cloudinary.com/ekane341/image/upload/v1525708717/map-marker-active_2x.png");
                } else {
                    $(".mapmarker:nth-child(4)").tooltip('show');
                    $(".mapmarker:nth-child(4)").attr("src", "http://res.cloudinary.com/ekane341/image/upload/v1525708717/map-marker-active_2x.png");
                }
            }
            if (buttonid == '5') {
                if ($(this).is('.active')) {
                    $(".mapmarker:nth-child(5)").tooltip('hide');
                    $(".mapmarker:nth-child(5)").attr("src", "http://res.cloudinary.com/ekane341/image/upload/v1525708717/map-marker-active_2x.png");
                } else {
                    $(".mapmarker:nth-child(5)").tooltip('show');
                    $(".mapmarker:nth-child(5)").attr("src", "http://res.cloudinary.com/ekane341/image/upload/v1525708717/map-marker-active_2x.png");
                }
            }
        });