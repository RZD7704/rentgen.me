window.onload = function() {
    // @@include('chart-script.js')
    function barChart(id, data, color, label, labels) {
        var ctx = document.querySelector(id);

        var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
            {
                label: label[0],
                data: data[0],
                backgroundColor: color[0],
            },
            {
                label: label[1],
                data: data[1],
                backgroundColor: color[1],
            },
            {
                label: label[2],
                data: data[2],
                backgroundColor: color[2],
            },
            {
                label: label[3],
                data: data[3],
                backgroundColor: color[3],
            }
            ]
        },
        options: {
            scales: {
            xAxes: [{ stacked: true }],
            yAxes: [{ stacked: true }]
            },
            legend: {
                display: true
            }
        }
        });
    }

    function addPieChart(selector, dataArr, labelsArr, color) {
        var ctx = document.querySelector(selector);
        var Сhart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labelsArr,
                datasets: [{
                    label: '# of Votes',
                    data: dataArr,
                    backgroundColor: color,
                    borderColor: color,
                    borderWidth: 1
                }]
            },
            options: {
                cutoutPercentage: 80,
                legend: {
                    display: false
                }
            }
        });
    }

    function loadCharts() {
        let doctorChart = document.querySelector('#chart'),
            doctorChartChief = document.querySelector('#chart-chief'),
            chiefDoughnatChart = document.querySelector('#chief-doughnat-chart');
        
        if (doctorChart) {
            barChart('#chart', [[67.8], [20.7], [15.4], [11.4]], ['#12D3CE', '#A2EEEC', '#A481DE', '#C6B7DF'], ['КТ', 'МРТ', 'Рентген', 'КЛТ'], ['Risk Level']);  
        } else if (doctorChartChief) {
            barChart('#chart-chief', [[67.8], [20.7], [15.4], [11.4]], ['#12D3CE', '#A2EEEC', '#A481DE', '#C6B7DF'], ['КТ', 'МРТ', 'Рентген', 'КЛТ'], ['Risk Level']); 
        } else if (chiefDoughnatChart) {
            addPieChart('#chief-doughnat-chart', [5, 3], ['Опрацьовані', 'Неопрацьовані'], ['rgba(162, 238, 236, 1)', 'rgba(218, 205, 242, 1)']); 
        }
        
    }
    
    loadCharts();

    var swiperChief = new Swiper('.chief-profiles__swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
            // when window width is <= 499px
            320: {
                slidesPerView: 1,
                spaceBetweenSlides: 15
            },
            768: {
                slidesPerView: 2,
                spaceBetweenSlides: 20
            },
            // when window width is <= 999px
            992: {
                slidesPerView: 1,
                spaceBetweenSlides: 20
            },
            1200: {
                slidesPerView: 2,
                spaceBetweenSlides: 20
            }
        },
        navigation: {
            nextEl: '.chief-profiles__btn-next',
            prevEl: '.chief-profiles__btn-prev',
        },
    });

    var swiperMain = new Swiper('.diagnostic-slider__container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.diagnostic-pagination',
          clickable: true,
        },
        breakpoints: {
            // when window width is <= 499px
            320: {
                slidesPerView: 1,
                spaceBetweenSlides: 15
            },
            768: {
                slidesPerView: 2,
                spaceBetweenSlides: 20
            },
            // when window width is <= 999px
            992: {
                slidesPerView: 3,
                spaceBetweenSlides: 20
            }
        }
      });
    
};

jQuery( document ).ready(function($) {
    let recoveryModalBtn = $('.modal-js');
    $(recoveryModalBtn).click(function(e) {
        e.preventDefault();
        $('#logModal').modal('hide');
        $('#logModal').on('hidden.bs.modal', function(e) {
            $('#recoveryModal').modal('show');
        });
    });

    let i = 1;

    $('.recovery-send-btn').click( (e)=> {
        i += 1;
        e.preventDefault();
        $('[data-stage="' + (i - 1) + '"]').fadeOut('slow', function() {
            $('[data-stage="' + i + '"]').fadeIn('slow');
        });
    });

});

