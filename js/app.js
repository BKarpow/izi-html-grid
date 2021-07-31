window.addEventListener('DOMContentLoaded', () => {
    
    const $ul = document.querySelector('.menu')
    document.querySelector('#menu-toggle').addEventListener('click', function (ev) {
        if ($ul.classList.contains('dropdown-open')) {
            $ul.classList.remove('dropdown-open');
            $ul.classList.add('dropdown-close');
            document.querySelector('#open-nav-icon').style.display = 'inline';
            document.querySelector('#close-nav-icon').style.display = 'none';
        } else if ($ul.classList.contains('dropdown-close')) {
            $ul.classList.remove('dropdown-close');
            $ul.classList.add('dropdown-open');
            document.querySelector('#open-nav-icon').style.display = 'none';
            document.querySelector('#close-nav-icon').style.display = 'inline';
        } else {
            $ul.classList.add('dropdown-open');
            document.querySelector('#open-nav-icon').style.display = 'none';
            document.querySelector('#close-nav-icon').style.display = 'inline';
        }
        
;    })
})