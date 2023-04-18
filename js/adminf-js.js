const foradmin = document.getElementById('foradmin');
const formadmin =document.getElementById('formadmin');
const foruser =document.getElementById('foruser');
const formuser =document.getElementById('formuser');
const formContainer =document.getElementById('formContainer');
const nameadmin =document.getElementById('npadmin'); 
const pwadmin =document.getElementById('pwadmin');
const nameuser =document.getElementById('npuser'); 
const pwuser =document.getElementById('pwuser');
const errorm=document.getElementById('Error');
foradmin.addEventListener('click', (e) => {
    e.preventDefault;
    foruser.classList.remove('active');
    foradmin.classList.add('active');
    if (formadmin.classList.contains('toggleForm')) {
        formContainer.style.transform = 'translate(0%)';
        formContainer.style.transition = 'transform .5s';
        formadmin.classList.remove('toggleForm');
        formuser.classList.add('toggleForm');
    }
});

foruser.addEventListener('click', (e) => {
    e.preventDefault;
    foradmin.classList.remove('active');
    foruser.classList.add('active');
    if (formuser.classList.contains('toggleForm')) {
        formContainer.style.transform = 'translate(-100%)';
        formContainer.style.transition = 'transform .5s';
        formuser.classList.remove('toggleForm');
        formadmin.classList.add('toggleForm');
    }
});
formadmin.addEventListener('click', (e) => {
    const errors=[];
    if(nameadmin.value.trim() === ""){
        errors.push("error name");
    }
    if(errorm.length>0){
        e.preventDefault();
        errorm.toggleAttribute('hidden');
        errorm.innerHTML =errors.join(',');

    }
})
