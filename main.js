(() => {
    const openCoursesBtn = document.getElementById('open-courses-btn');
    openCoursesBtn.addEventListener('click', (evt) => {
        evt.target.closest('.nav__list').classList.toggle('nav__list_active');
    });

    const navPopup = document.querySelector('.nav-popup');

    const closeNavPopupBtn = navPopup.querySelector('#close-btn');
    closeNavPopupBtn.addEventListener('click', (e) => {
        e.target.closest('.nav-popup').classList.remove('nav-popup_active');
    });

    const openNavPopupBtn = document.getElementById('nav-menu');
    openNavPopupBtn.addEventListener('click', () => {
        navPopup.classList.add('nav-popup_active');
    });

    const coursesNav = document.querySelectorAll('.courses-popup__nav-item');
    const coursesLinks = document.querySelectorAll('.courses-popup__item');

    const switchActive = (item) => {
        coursesNav.forEach(item => item.classList.remove('courses-popup__nav-item_active'));
        item.classList.add('courses-popup__nav-item_active');
    }

    const applyFilter = (item, links) => {
        const currentFilter = item.textContent;
        links.forEach(item => item.textContent = currentFilter);
    }

    coursesNav.forEach(item => {
        item.addEventListener('click', () => {
            switchActive(item);
            applyFilter(item, coursesLinks);
        })
    })

    const navPopupList = navPopup.querySelector('ul.nav-popup__list');
    
    
    const navPopupFilterElements = navPopup.querySelectorAll('.nav-popup__courses-item');
    const filteredCourses = navPopup.querySelectorAll('.courses-popup__item');

    navPopupFilterElements.forEach(item => {
        item.addEventListener('click', function() {
            applyFilter(item, filteredCourses);
            navPopupList.classList.add('nav-popup__list_active');
        })
    })
    
    const returnBtn = navPopup.querySelector('.back');
    returnBtn.addEventListener('click', () => {
        navPopupList.classList.remove('nav-popup__list_active');
    })

    const closeSelectPopup = evt => {
        evt.target.closest('.topcourses__filter').classList.toggle('topcourses__filter_active');
    }

    const selectCoursesBtn = document.querySelector('.topcourses__filter-text');
    selectCoursesBtn.addEventListener('click', closeSelectPopup)

    const filterElements = document.querySelectorAll('.topcourses__filter-item');
    filterElements.forEach(item => {
        item.addEventListener('click', evt => {
            selectCoursesBtn.textContent = item.textContent;
            closeSelectPopup(evt);
        });
    })
})()