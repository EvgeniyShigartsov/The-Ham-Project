'use strict'
const amazingImages = [
    '<img data-image-category="graphic-design" class="image-item" src="./Images/graphic-design/graphic-design4.jpg" alt="graphic-design"></img>',
    '<img data-image-category="landing-page" class="image-item" src="./Images/landing-page/landing-page7.jpg" alt="landing-page">',
    '<img data-image-category="graphic-design" class="image-item" src="./Images/graphic-design/graphic-design7.jpg" alt="graphic-design">',
    '<img data-image-category="web-design" class="image-item" src="./Images/web-design/web-design7.jpg" alt="web-design">',
    '<img data-image-category="wordpress" class="image-item" src="./Images/wordpress/wordpress4.jpg" alt="wordpress">',
    '<img data-image-category="wordpress" class="image-item" src="./Images/wordpress/wordpress6.jpg" alt="wordpress">',
    '<img data-image-category="landing-page" class="image-item" src="./Images/landing-page/landing-page5.jpg" alt="landing-page">',
    '<img data-image-category="wordpress" class="image-item" src="./Images/wordpress/wordpress8.jpg" alt="wordpress">',
    '<img data-image-category="graphic-design" class="image-item" src="./Images/graphic-design/graphic-design8.jpg" alt="graphic-design">',
    '<img data-image-category="wordpress" class="image-item" src="./Images/wordpress/wordpress5.jpg" alt="wordpress">',
    '<img data-image-category="graphic-design" class="image-item" src="./Images/graphic-design/graphic-design9.jpg" alt="graphic-design">',
    '<img data-image-category="wordpress" class="image-item" src="./Images/wordpress/wordpress7.jpg" alt="wordpress">',
    '<img data-image-category="graphic-design" class="image-item" src="./Images/graphic-design/graphic-design5.jpg" alt="graphic-design">',
    '<img data-image-category="wordpress" class="image-item" src="./Images/wordpress/wordpress9.jpg" alt="wordpress">',
    '<img data-image-category="graphic-design" class="image-item" src="./Images/graphic-design/graphic-design10.jpg" alt="graphic-design">',
    '<img data-image-category="graphic-design" class="image-item" src="./Images/graphic-design/graphic-design11.jpg" alt="graphic-design">',
    '<img data-image-category="graphic-design" class="image-item" src="./Images/graphic-design/graphic-design12.jpg" alt="graphic-design">',
    '<img data-image-category="landing-page" class="image-item" src="./Images/landing-page/landing-page4.jpg" alt="landing-page">',
    '<img data-image-category="landing-page" class="image-item" src="./Images/landing-page/landing-page6.jpg" alt="landing-page">',
    '<img data-image-category="graphic-design" class="image-item" src="./Images/graphic-design/graphic-design6.jpg" alt="graphic-design">',
    '<img data-image-category="web-design" class="image-item" src="./Images/web-design/web-design4.jpg" alt="web-design">',
    '<img data-image-category="web-design" class="image-item" src="./Images/web-design/web-design5.jpg" alt="web-design">',
    '<img data-image-category="web-design" class="image-item" src="./Images/web-design/web-design6.jpg" alt="web-design">',
    '<img data-image-category="wordpress" class="image-item" src="./Images/wordpress/wordpress10.jpg" alt="wordpress"></img>',
]
function setImageWrappers(imagesArray) {
    // функция вызывается один раз в 163 строке.
    const imageWrappers = []
    //  каждый айтем должен принадлежать одной из четырех категорий, и при этом содержать как картинку так и блок который появляется при ховере
    // как можно было это написать короче ? что бы элементы так же были разделены по категориям, а также что бы можно было применить анимацию
    // т.е пплавное появление. Вынес это все в начало кода что бы код ниже было удобнне читать.
    for (let item of imagesArray) {
        if (item.includes('data-image-category="graphic-design"')) {
            imageWrappers.push(
                `<div class="image-cell" data-image-category="graphic-design">
                ${item}
                <div class="background-wrapper">
                    <div class="icon-block">
                        <a href="#" class="icon-link icons">
                                <i class="fa fa-link"></i>
                        </a>
                        <a href="#" class="manual-icon">
                            <div class="background-icon icons">
                                <div class="square"></div>
                            </div>
                            </a>
                        </div>
                        <a href="#"><h4 class="background-heading">creative design</h3></a>
                        <p class="background-text">Graphic Design</p>
                    </div>
                </div>`
            )
        } else if (item.includes('data-image-category="landing-page"')) {
            imageWrappers.push(
                `<div class="image-cell" data-image-category="landing-page">
                    ${item}
                    <div class="background-wrapper">
                        <div class="icon-block">
                            <a href="#" class="icon-link icons">
                                <i class="fa fa-link"></i>
                            </a>
                            <a href="#" class="manual-icon">
                                <div class="background-icon icons">
                                    <div class="square"></div>
                                </div>
                            </a>
                        </div>
                        <a href="#"><h4 class="background-heading">creative design</h3></a>
                        <p class="background-text">Landing page</p>
                    </div>
                </div>`
            )
        } else if (item.includes('data-image-category="wordpress"')) {
            imageWrappers.push(
                `<div class="image-cell" data-image-category="wordpress">
                    ${item}
                    <div class="background-wrapper">
                        <div class="icon-block">
                            <a href="#" class="icon-link icons">
                                <i class="fa fa-link"></i>
                            </a>
                            <a href="#" class="manual-icon">
                                <div class="background-icon icons">
                                    <div class="square"></div>
                                </div>
                            </a>
                        </div>
                        <a href="#"><h4 class="background-heading">creative design</h3></a>
                        <p class="background-text">Wordpress</p>
                    </div>
                </div>`
            )
        } else if (item.includes('data-image-category="web-design"')) {
            imageWrappers.push(
                `<div class="image-cell" data-image-category="web-design">
                    ${item}
                    <div class="background-wrapper">
                        <div class="icon-block">
                            <a href="#" class="icon-link icons">
                                <i class="fa fa-link"></i>
                            </a>
                            <a href="#" class="manual-icon">
                                <div class="background-icon icons">
                                    <div class="square"></div>
                                </div>
                            </a>
                        </div>
                        <a href="#"><h4 class="background-heading">creative design</h3></a>
                        <p class="background-text">Web Design</p>
                    </div>
                </div>`
            )
        }
    }
    return imageWrappers
}

// Табы

const tabsTitles = document.querySelector('.tabs-titles')
tabsTitles.addEventListener('click', showTabs)
function showTabs(event) {
    const tabsItem = event.target
    tabsItem.classList.toggle('tabs-active')

    function checkSameClass() {
        const tabs = document.querySelectorAll('.tabs-item')
        for (let tab of tabs) {
            if (tab !== tabsItem) {
                tab.classList.remove('tabs-active')
            }
        }
    }
    checkSameClass()

    function compareDataset() {
        const listsContent = document.querySelectorAll('.service-options')

        for (let list of listsContent) {
            if (list.dataset.name === tabsItem.dataset.name) {
                list.classList.add('list-content-show')
                list.classList.remove('list-content-hide')
            }
            if (list.dataset.name !== tabsItem.dataset.name) {
                list.classList.remove('list-content-show')
                list.classList.add('list-content-hide')
            }
        }
    }
    compareDataset()
}

// Табы-фильтры картинок, обертка картинок в строки html, имитация подгрузки с сервера

const amazingTabs = document.querySelector('.amazing-tabs')
const amazingLoadMoreBtn = document.querySelector('.amazing-btn')
const imagesBox = document.querySelector('.images-box')
const amazimgPreloader = document.querySelector('.amazing-preloader')
amazingTabs.addEventListener('click', filterImage)
amazingLoadMoreBtn.addEventListener('click', () =>
    addImages(amazimgPreloader, amazingLoadMoreBtn, imagesBox, setImageWrappers(amazingImages))
)

function filterImage(event) {
    if (event.target.classList.contains('masonry-btn')) {
        // функция ниже по коду вызывается внутри другой общей функции,
        return // и не всегда требует выполнения.
    }
    const imageCells = document.querySelectorAll('.image-cell')
    const elementDataAttr = event.target.dataset.imageCategory
    for (let cell of imageCells) {
        if (cell.dataset.imageCategory === elementDataAttr) {
            cell.hidden = false
        }
        if (cell.dataset.imageCategory !== elementDataAttr) {
            cell.hidden = true
        }
        if (elementDataAttr === 'all') {
            cell.hidden = false
        }
        if (event.target.dataset.addImageBtn === 'add-images-btn') {
            cell.hidden = false
        }
    }
}

// основная функция добавления картинок для секций

function addImages(preloader, button, parentElement, imageWrappers) {
    preloader.style.display = 'block'
    button.style.display = 'none'

    setTimeout(function () {
        button.style.display = 'flex'
        preloader.style.display = 'none'

        if (!button.classList.contains('second-click')) {
            for (let i = 0; i < Math.floor(imageWrappers.length / 2); i++) {
                parentElement.insertAdjacentHTML('beforeend', `${imageWrappers[i]}`)
            }
            button.classList.add('second-click')
            if (button.classList.contains('masonry-btn')) {
                callMasonryMhetods()
            }
        } else {
            for (let j = Math.floor(imageWrappers.length / 2); j < imageWrappers.length; j++) {
                parentElement.insertAdjacentHTML('beforeend', `${imageWrappers[j]}`)
            }
            if (button.classList.contains('amazing-btn')) {
                document.querySelector('.amazing-button-box').remove()
            } else if (button.classList.contains('masonry-btn')) {
                button.classList.remove('second-click')
                callMasonryMhetods()
            }
        }
    }, 2000)
    filterImage(event) // вызов функции необходим на случай если выбрана категория картинок, что бы новые картинки не добавились в текущую категорию,
    // а перемешались, как будто выбрана категория "ALL".
}

// слайдер

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: true,
        prevArrow: `<button type = "button" class = "slick-prev"><i class="fa fa-angle-left"></i></ button>`,
        nextArrow: `<button type = "button" class = "slick-next"><i class="fa fa-angle-right"></ button>`,
    })
})

// масонри

const $grid = $('.grid').imagesLoaded(function () {
    $grid.masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
    })
})
function callMasonryMhetods() {
    $grid.masonry('reloadItems')
    $grid.masonry('layout')
    $grid.imagesLoaded(function () {
        $grid.masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
        })
    })
}
function setHTMLString() {
    const arrayOfStrings = []
    for (let i = 1; i <= 25; i++) {
        arrayOfStrings.push(
            `<img class="grid-item " src="./Images/masonry/add${i}.jpg" alt="gallery-photo">`
        )
    } // путь к картинкам одинаковый, что бы было меньше кода решил сделать цикл по кол-ву картинок.
    return arrayOfStrings
}
const masonryBox = document.querySelector('.grid')
const masonryBtn = document.querySelector('.masonry-btn')
const masonryPreloader = document.querySelector('.masonry-preloader')
masonryBtn.addEventListener('click', () =>
    addImages(masonryPreloader, masonryBtn, masonryBox, setHTMLString())
)
