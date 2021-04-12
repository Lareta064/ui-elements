$(document).ready(function() {

	/*===== HEADER GAMBURGER===========*/
	const menuToggle = document.querySelectorAll('.menu-toggle');
	const mobMenu = document.querySelector('#mobile-menu');
	const bodyEl = document.body;

	if (menuToggle) {
		for(let item of menuToggle){
			item.addEventListener('click', function () {
				if (this.classList.contains('active')) {
					this.classList.remove('active');
					mobMenu.classList.remove('active');
					bodyEl.classList.remove('noscroll');

				} else {
					this.classList.add('active');
					mobMenu.classList.add('active');
					bodyEl.classList.add('noscroll');

				}
			});
			window.addEventListener('resize', function () {
				item.classList.remove('active');
				bodyEl.classList.remove('noscroll');
				// fixMenu.classList.remove('active');
			});
		}
	}
	/*====== Показать строку поиска в шапке======*/
	
	const searchBtn = document.getElementsByClassName('header-search-btn');

	if(searchBtn){
		for(let item of searchBtn){
			item.addEventListener('click', function(){
				const searhForm = item.closest('.search-form');
				const searchInput = searhForm.querySelector('.header-search-input');
				
				if(searchInput.classList.contains('active')){
					searchInput.classList.remove('active');
				}else{
					searchInput.classList.add('active');
				}
			});
		}

	}

	/*====== Зафиксировать часть шапки по скроллу ======*/
	const headerTop = document.querySelector('.header-slim');

	window.addEventListener('scroll', function(){
        if(this.innerWidth > 1199){
            if(this.pageYOffset > 140){
                headerTop.classList.add('.header-slim--visible');
            }
            else{
                headerTop.classList.remove('.header-slim--visible');
            }
        }
    });
})
