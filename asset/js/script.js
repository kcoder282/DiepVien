//@ts-check
(function(){
    var actions = document.querySelectorAll('div.action')??[];
    actions.forEach(e=>{
        e.addEventListener('click',()=>{
            actions.forEach(sub_e=>sub_e.classList.remove('active'))
            e.classList.add('active')
        })
    })
})()