window.onload = function() {
    // 
    function fixedHeader() {
        var header = $('.js-header'),
        cloneHeader = header.clone();

        cloneHeader.addClass('header--fixed');
        header.before(cloneHeader);


        $(window).scroll(function () {
            if ($(window).scrollTop() > 150) {
                cloneHeader.addClass('header--is-show');
            } else {
                cloneHeader.removeClass('header--is-show');
            }
        });
    }
    fixedHeader();

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
        let inputVal;

        editingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            creatingEditingFields();
          
        });
        function creatingEditingFields() {
            const fieldsBlock = document.querySelector('.profile-mask__list-editing'),
                  doctorPage = document.querySelector('.section-doctor-profile'),
                  userPage = document.querySelector('.section-user-profile'),
                  medcenterPage = document.querySelector('.section-medcenter-profile'),
                  archivBlock = document.querySelector('.profile-mask__list-edited'),
                  parentPhoto = document.querySelector('.profile-mask__photo');

            let saveBtn,
                photoEditingInput;

            if(!flag) return;
            archivBlock.innerHTML = "";
            if(doctorPage) {
                fieldsBlock.innerHTML = `
                <form class="editing-form" action="#">
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">Стаж роботи:</div>
                        <input class="profile-mask__list-field editing-input-js" id="input1" type="text" placeholder="Введіть дані">
                    </div>
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">Місто:</div>
                        <input class="profile-mask__list-field editing-input-js" type="text" placeholder="Введіть дані">
                    </div>
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">Місце роботи:</div>
                        <input class="profile-mask__list-field editing-input-js" type="text" placeholder="Введіть дані">
                    </div>
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">Спеціалізація:</div>
                        <input class="profile-mask__list-field editing-input-js" type="text" placeholder="Введіть дані">
                    </div>
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">Оберіть тип:</div>
                        <div class="d-flex">
                            <div class="profile-mask__list-wgt-btn radio-btn-js mr-2">
                                <input class="profile-mask__list-wgt-btn--input" id="radioKT" type="checkbox" name="radio1" value="1">
                                <label class="checkbox-editing-js" for="radioKT">КТ</label>
                            </div>
                            <div class="profile-mask__list-wgt-btn radio-btn-js">
                                <input class="profile-mask__list-wgt-btn--input" id="radioMRT" type="checkbox" name="radio2" value="1">
                                <label class="checkbox-editing-js" for="radioMRT">МРТ</label>
                            </div>
                        </div>
                    </div>
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">Про лікаря:</div>
                        <textarea class="profile-mask__list-field profile-mask__list-field_textarea editing-input-js" name="About" placeholder="Введіть дані"></textarea>
                    </div>
                    <button class="profile-mask__list-editing-btn mx-auto d-block mt-2">Зберегти</button>
                </form>
            `;
            } else if (userPage) {
                fieldsBlock.innerHTML = `
                <form class="editing-form" action="#">
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">Стаж роботи:</div>
                        <input class="profile-mask__list-field editing-input-js" id="input1" type="text" placeholder="Введіть дані">
                    </div>
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">Місто:</div>
                        <input class="profile-mask__list-field editing-input-js" type="text" placeholder="Введіть дані">
                    </div>
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">Місце роботи:</div>
                        <input class="profile-mask__list-field editing-input-js" type="text" placeholder="Введіть дані">
                    </div>
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">Спеціалізація:</div>
                        <input class="profile-mask__list-field editing-input-js" type="text" placeholder="Введіть дані">
                    </div>
                    <button class="profile-mask__list-editing-btn mx-auto d-block mt-2">Зберегти</button>
                </form>
                `;
            } else if (medcenterPage) {
                fieldsBlock.innerHTML = `
                <form class="editing-form" action="#">
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">Місто:</div>
                        <input class="profile-mask__list-field editing-input-js" id="input1" type="text" placeholder="Введіть дані">
                    </div>
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">Адреса:</div>
                        <input class="profile-mask__list-field editing-input-js" type="text" placeholder="Введіть дані">
                    </div>
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">ПІБ директора:</div>
                        <input class="profile-mask__list-field editing-input-js" type="text" placeholder="Введіть дані">
                    </div>
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">ІПН або ЄДРПОУ</div>
                        <input class="profile-mask__list-field editing-input-js" type="text" placeholder="Введіть дані">
                    </div>
                    <div class="profile-mask__list-wgt">
                        <div class="profile-mask__list-headline">IBAN</div>
                        <input class="profile-mask__list-field editing-input-js" type="text" placeholder="Введіть дані">
                    </div>
                    <div class="profile-mask__list-wgt profile-mask__list-wgt_column">
                        <div class="profile-mask__list-headline max-width pb-2">Медична інформаційна система</div>
                        <input class="profile-mask__list-field editing-input-js" type="text" placeholder="Введіть дані">
                    </div>
                    <button class="profile-mask__list-editing-btn mx-auto d-block mt-2">Зберегти</button>
                </form>
            `;
            }
           
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

            let checkboxes = document.querySelectorAll('.checkbox-editing-js'),
                valueCheckboxArr = [],
                checkboxesValue;

            checkboxes.forEach(item => {
                item.addEventListener('click', function(e){
                    console.log('click');
                    if(!this.classList.contains('active')) {
                        this.classList.add('active');
                    } else {
                        this.classList.remove('active');
                    }
                });
            }),

            saveBtn = document.querySelector('.profile-mask__list-editing-btn');

            saveBtn.addEventListener('click', function(e) {
                e.preventDefault();
                inputVal = document.querySelectorAll('.editing-input-js');
                let valueArr = [];
                inputVal.forEach((item) => {
                    valueArr.push(item.value);
                    console.log(valueArr);
                });
                checkboxes.forEach(item => {
                    if(item.classList.contains('active')) {
                        checkboxesValue = item.innerHTML;
                        valueCheckboxArr.push(checkboxesValue);
                    }
                });
                creatingEditedFields(photoEditingInput, photoEditingLabel, valueArr, valueCheckboxArr, doctorPage, userPage, medcenterPage);
            });
        }

        function creatingEditedFields(photoEditingInput, photoEditingLabel, valueArr, valueCheckboxArr, doctorPage, userPage, medcenterPage) {
            const fieldsBlock = document.querySelector('.profile-mask__list-edited'),
                  parentFields = document.querySelector('.profile-mask__list'),
                  archivBlock = document.querySelector('.profile-mask__list-editing');

            photoEditingInput.remove();
            photoEditingLabel.remove();
            archivBlock.innerHTML = "";
            if(doctorPage) {
                fieldsBlock.innerHTML = `
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Стаж роботи:</div>
                    <div class="profile-mask__list-desc">${valueArr[0]}</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Місто:</div>
                    <div class="profile-mask__list-desc">${valueArr[1]}</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Місце роботи:</div>
                    <div class="profile-mask__list-desc">${valueArr[2]}</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Спеціалізація:</div>
                    <div class="profile-mask__list-desc">${valueArr[3]}</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Діагностики:</div>
                    <div class="profile-mask__list-desc">${valueCheckboxArr}</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Про лікаря:</div>
                    <div class="profile-mask__list-desc">${valueArr[4]}</div>
                </div>
            `;
            } else if (userPage) {
                fieldsBlock.innerHTML = `
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Стать:</div>
                    <div class="profile-mask__list-desc">${valueArr[0]}</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Дата народження:</div>
                    <div class="profile-mask__list-desc">${valueArr[1]}</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Номер телефону:</div>
                    <div class="profile-mask__list-desc">${valueArr[2]}</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Пошта:</div>
                    <div class="profile-mask__list-desc">${valueArr[3]}</div>
                </div>
                `;
            } else if(medcenterPage) {
                fieldsBlock.innerHTML = `
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Місто:</div>
                    <div class="profile-mask__list-desc">${valueArr[0]}</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">Адреса:</div>
                    <div class="profile-mask__list-desc">${valueArr[1]}</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">ПІБ директора:</div>
                    <div class="profile-mask__list-desc">${valueArr[2]}</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">ІПН або ЄДРПОУ</div>
                    <div class="profile-mask__list-desc">${valueArr[3]}</div>
                </div>
                <div class="profile-mask__list-wgt">
                    <div class="profile-mask__list-headline">IBAN</div>
                    <div class="profile-mask__list-desc">${valueArr[4]}</div>
                </div>
                <div class="profile-mask__list-wgt profile-mask__list-wgt_column">
                    <div class="profile-mask__list-headline max-width pb-2">Медична інформаційна система</div>
                    <div class="profile-mask__list-desc"> <a class="profile-mask__list-desc--link" href="#">${valueArr[5]}</a></div>
                </div>
                `;
            }
            parentFields.append(fieldsBlock);
            flag = true;
        }
    }

    function addRegisterField() {
        let parent = document.querySelector('.registration-add-input-js'),
            btnAdd = document.querySelector('.registration-add-btn-js'),
            newInput,
            i = 1;

        btnAdd.addEventListener('click', (e) => {
            e.preventDefault();
            i++;
            if(i > 2) {
                btnAdd.style.cssText = `
                    color: #8D9396;
                `;
            }

            if(i > 3) {
                return false;
            } else {
                newInput = document.createElement('input');
                newInput.classList.add('registration-input__form');
                newInput.setAttribute("type", "text");
                newInput.setAttribute("placeholder", "Вставте посилання");
                newInput.style.cssText = `
                    margin-top: 10px;
                `;
                parent.appendChild(newInput);
                console.log(i);
            }
        });
    }

    function checkingBlocks() {
        let doctorChart = document.querySelector('#chart'),
            doctorChartChief = document.querySelector('#chart-chief'),
            chiefDoughnatChart = document.querySelector('#chief-doughnat-chart'),
            editBtn = document.querySelector('.editing-btn-js'),
            regFieldAddBtn = document.querySelector('.registration-add-btn-js');
        
        if (editBtn) {
            addEditing();
        } 
        if (regFieldAddBtn) {
            addRegisterField();
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
    $('.selectpicker').selectpicker();
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

