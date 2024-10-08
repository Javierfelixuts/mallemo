const tabs = document.querySelectorAll('.tab');

tabs.forEach((element) => element.addEventListener('click', function(){
    tabs.forEach(l => l.classList.remove('active'));


    const href = element.getAttribute('href');
    const contents = document.querySelectorAll('.content');
    contents.forEach(ele => ele.classList.remove('show'));
    const content = document.querySelector(href);


    this.classList.add('active');
    content.classList.add('show');
}));

