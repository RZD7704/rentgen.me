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

    function addEditing() {
        const editingBtn = document.querySelector('.editing-btn-js');
        let flag = true;
        // let inputVal;

        editingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            creatingEditingFields();
        });
        function creatingEditingFields() {
            const fieldsBlock = document.querySelector('.profile-mask__list-editing'),
                //   parentFields = document.querySelector('.profile-mask__list'),
                  archivBlock = document.querySelector('.profile-mask__list-edited'),
                  parentPhoto = document.querySelector('.profile-mask__photo');

            let saveBtn,
                photoEditingInput,
                photoEditingLabel;

            if(!flag) return;
            archivBlock.innerHTML = "";
            fieldsBlock.innerHTML = `
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Стаж роботи:</div>
                    <input class="profile-mask__list-field" id="input-edit" type="text" placeholder="Введіть дані">
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Місто:</div>
                    <input class="profile-mask__list-field" type="text" placeholder="Введіть дані">
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Місце роботи:</div>
                    <input class="profile-mask__list-field" type="text" placeholder="Введіть дані">
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Спеціалізація:</div>
                    <input class="profile-mask__list-field" type="text" placeholder="Введіть дані">
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Оберіть тип:</div>
                    <div class="d-flex">
                        <div class="profile-mask__list-wgt-btn radio-btn-js mr-2">
                            <input class="profile-mask__list-wgt-btn--input" id="radioKT" type="checkbox" name="radio1" value="1">
                            <label for="radioKT">КТ</label>
                        </div>
                        <div class="profile-mask__list-wgt-btn radio-btn-js">
                            <input class="profile-mask__list-wgt-btn--input" id="radioMRT" type="checkbox" name="radio2" value="1">
                            <label for="radioMRT">МРТ</label>
                        </div>
                    </div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Про лікаря:</div>
                    <textarea class="profile-mask__list-field profile-mask__list-field_textarea" name="About" placeholder="Введіть дані"></textarea>
                </div>
                <button class="profile-mask__list-editing-btn mx-auto d-block mt-2">Зберегти</button>
            `;
            photoEditingInput = document.createElement('input');
            photoEditingInput.classList.add('profile-mask__photo-editing-input');
            photoEditingInput.setAttribute("type", "file");
            photoEditingInput.setAttribute("name", "file");
            photoEditingInput.setAttribute("id", "fileEditing");


            photoEditingLabel = document.createElement('label');
            photoEditingLabel.classList.add('profile-mask__photo-editing');
            photoEditingLabel.setAttribute("for", "fileEditing");
            photoEditingLabel.innerHTML = `<span>+</span>`;
            parentPhoto.appendChild(photoEditingInput);
            parentPhoto.appendChild(photoEditingLabel);
            flag = false;
            // inputVal = document.getElementById('elem1').value;

            saveBtn = document.querySelector('.profile-mask__list-editing-btn');
            saveBtn.addEventListener('click', function(e) {
                e.preventDefault();
                creatingEditedFields(photoEditingInput, photoEditingLabel);
                console.log('CLICK');
            });
        }

        function creatingEditedFields(photoEditingInput, photoEditingLabel) {
            const fieldsBlock = document.querySelector('.profile-mask__list-edited'),
                  parentFields = document.querySelector('.profile-mask__list'),
                  archivBlock = document.querySelector('.profile-mask__list-editing');

            photoEditingInput.remove();
            photoEditingLabel.remove();
            archivBlock.innerHTML = "";
            fieldsBlock.innerHTML = `
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Стаж роботи:</div>
                    <div class="profile-mask__list-desc">9 років</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Місто:</div>
                    <div class="profile-mask__list-desc">Полтава</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Місце роботи:</div>
                    <div class="profile-mask__list-desc">УМСА</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Спеціалізація:</div>
                    <div class="profile-mask__list-desc">лікар радіолог, рентгенолог ІІ категорії</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Діагностики:</div>
                    <div class="profile-mask__list-desc">КТ, МРТ</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Про лікаря:</div>
                    <div class="profile-mask__list-desc">Опис відсутній</div>
                </div>
            `;
            parentFields.append(fieldsBlock);
            flag = true;
        }
    }

    function checkingBlocks() {
        let doctorChart = document.querySelector('#chart'),
            doctorChartChief = document.querySelector('#chart-chief'),
            chiefDoughnatChart = document.querySelector('#chief-doughnat-chart'),
            editBtn = document.querySelector('.editing-btn-js');
        
        if (editBtn) {
            addEditing();
        } 
        if (doctorChart) {
            barChart('#chart', [[67.8], [20.7], [15.4], [11.4]], ['#12D3CE', '#A2EEEC', '#A481DE', '#C6B7DF'], ['КТ', 'МРТ', 'Рентген', 'КЛТ'], ['Risk Level']);  
        } 
        if (doctorChartChief) {
            barChart('#chart-chief', [[67.8], [20.7], [15.4], [11.4]], ['#12D3CE', '#A2EEEC', '#A481DE', '#C6B7DF'], ['КТ', 'МРТ', 'Рентген', 'КЛТ'], ['Risk Level']); 
        }
        if (chiefDoughnatChart) {
            addPieChart('#chief-doughnat-chart', [5, 3], ['Опрацьовані', 'Неопрацьовані'], ['rgba(162, 238, 236, 1)', 'rgba(218, 205, 242, 1)']); 
        } 
        
    }
    
    checkingBlocks();

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

