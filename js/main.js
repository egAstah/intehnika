$(document).ready(function () {
    var dataCarousel = {
        margin: 40,
        loop: true,
        items: 3,
        nav: true,
        loop: true,
        autoWidth: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1300: {
                items: 3
            }
        }
    }
    var dataCarouselViews = {
        margin: 0,
        loop: true,
        items: 3,
        nav: true,
        loop: true,
        autoWidth: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1300: {
                items: 6
            }
        }
    }
    $("#catalog-mp").owlCarousel(dataCarousel);
    $("#views").owlCarousel(dataCarouselViews);
    $("#views2").owlCarousel(dataCarouselViews);

    $(document).on('click', '.filter-drop-btn', function () {
        $(this).parents('.filter-drop').find('.drop-block').slideToggle()
    })
    $(document).on('click', '.left-menu-block', function () {
        let firstMenu = $(this).attr('data-amenu')
        $('.left-menu-block').removeClass('active')
        $(this).addClass('active')
        $('.first-content-amenu').hide()
        $('.center-menu-block').hide()
        $('.list-category-amenu').hide()
        $('.center-menu-block[data-first-menu="' + firstMenu + '"]').show()
    })
    $(document).on('click', '.center-amenu-link', function () {
        let secondMenu = $(this).attr('data-center-menu')
        $('.center-amenu-link').removeClass('active')
        $(this).addClass('active')
        $('.list-category-amenu').hide()
        $('.list-category-amenu[data-end-menu="' + secondMenu + '"]').css('display', 'grid')
    })
    $(document).on('click', '.open-menu', function () {
        if ($('.absolute-menu').attr('data-open') === 'close') {
            $('.absolute-menu').css('display', 'grid')
            $('.absolute-menu').attr('data-open', 'open')
        } else {
            $('.absolute-menu').css('display', 'none')
            $('.absolute-menu').attr('data-open', 'close')
        }
    })
    $(document).mouseup(function (e) {
        var div = $(".absolute-menu")
        if ($('.absolute-menu').attr('data-open') === 'open') {
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                div.hide();
                $('.absolute-menu').attr('data-open', 'close')
            }
        }
    });
    $(document).on('click', '#nextStageRegister', function () {
        $('.stage-1').hide()
        $('.stage-number').removeClass('active')
        $('.stage-number:last-child').addClass('active')
        $('.stage-2').fadeIn()
        $('.header-register h5').text('Почти готово')
    })
    $(document).on('click', '.question-register', function () {
        if ($('.info-register').attr('data-close') === 'close') {
            $('.info-register').fadeIn()
            $('.info-register').attr('data-close', 'open')
        } else {
            $('.info-register').fadeOut()
            $('.info-register').attr('data-close', 'close')
        }
    })
    $(document).on('click', '.stage-number', function () {
        let stage = $(this).attr('data-stage')
        if (stage === 2) ('.header-register h5').text('Почти готово')
        else ('.header-register h5').text('Регистрация')
        $('.stage-number').removeClass('active')
        $(this).addClass('active')
        $('.stage').hide()
        $('.stage-' + stage).fadeIn()
    })
    $(document).mouseup(function (e) {
        var div = $(".info-register")
        if ($('.info-register').attr('data-close') === 'open') {
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.hide();
                $('.info-register').attr('data-close', 'close')
            }
        }
    });
    $(document).on('click', '.number-minus, .number-plus', function () {
        var $row = $(this).closest('.number');
        var $input = $row.find('.number-text');
        var step = $row.data('step');
        var val = parseFloat($input.val());
        if ($(this).hasClass('number-minus')) {
            val -= step;
        } else {
            val += step;
        }
        $input.val(val);
        $input.change();
        return false;
    });

    $(document).on('change', '.number-text', function () {
        var $input = $(this);
        var $row = $input.closest('.number');
        var step = $row.data('step');
        var min = parseInt($row.data('min'));
        var max = parseInt($row.data('max'));
        var val = parseFloat($input.val());
        if (isNaN(val)) {
            val = step;
        } else if (min && val < min) {
            val = min;
        } else if (max && val > max) {
            val = max;
        }
        $input.val(val);
    });

    $(document).on('click', '.open-droplink', function () {
        if ($('.droplink-block').attr('data-close') === 'close') {
            $('.droplink-block').fadeIn()
            $('.droplink-block').attr('data-close', 'open')
        } else {
            $('.droplink-block').fadeOut()
            $('.droplink-block').attr('data-close', 'close')
        }
    })
    $(document).mouseup(function (e) {
        var div = $(".droplink-block")
        if ($('.droplink-block').attr('data-close') === 'open') {
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.hide();
                $('.droplink-block').attr('data-close', 'close')
            }
        }
    });
    const setLabel = (lbl, val) => {
        const label = $(`#slider-${lbl}-label`);
        label.text(val);
        const slider = $(`#slider-div .${lbl}-slider-handle`);
        const rect = slider[0].getBoundingClientRect();
        label.offset({
            top: rect.top - 30,
            left: rect.left
        });
    }

    const setLabels = (values) => {
        setLabel("min", values[0]);
        setLabel("max", values[1]);
    }


    // $('#ex2').slider().on('slide', function (ev) {
    //     setLabels(ev.value);
    //     $('#start-slider').val($('.min-slider-handle').attr('aria-valuenow'))
    //     $('#end-slider').val($('.max-slider-handle').attr('aria-valuenow'))
    // });
    // setLabels($('#ex2').attr("data-value").split(","));

    $(document).on('click', '#open-reg-modal', function () {
        $('#modal-auth').modal('hide')
        $('.step-1').show()
        $('.step-2').hide()
        $('.step-3').hide()
    })

    $(document).on('click', '#next-step', function () {
        $('.step-1').hide()
        $('.step-2').show()
    })
    $(document).on('click', '#next-step-2', function () {
        $('.step-2').hide()
        $('.step-3').show()
    })
    $(document).on('click', '#show-menu', function(){
        $('.mobile-modal-menu').fadeIn(200)
    })
    $(document).on('click', '#close-menu', function(){
        $('.mobile-modal-menu').hide()
    })
})