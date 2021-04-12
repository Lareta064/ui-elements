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
				mobMenu.classList.remove('active');
			});
		}
	}
	
	/*====== Зафиксировать часть шапки по скроллу ======*/
	const headerTop = document.querySelector('header.header');

	window.addEventListener('scroll', function(){
        if(this.innerWidth > 1199){
            if(this.pageYOffset > 200){
                headerTop.classList.add('header-slim');
            }
            else{
                headerTop.classList.remove('header-slim');
            }
        }
    });
})
