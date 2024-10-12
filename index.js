var tab = document.getElementById('tab');
var tab2 = document.getElementById('tab2');
var tab4 = document.getElementById('tab4');
var chi_sono = document.getElementById('chi_sono');
var skills = document.getElementById('skills');
var contatti = document.getElementById('contatti');
var downloadcv = document.getElementById('downloadcv');
var i = 1;
var j = 0;
var k = 0;

tab2.addEventListener('click', function() {
    tab2.style.backgroundColor = '#0d1b2a';
    tab.style.backgroundColor = '#415a77';
    tab4.style.backgroundColor = '#415a77';
    j = 1;
    i = 0;
    k = 0;
    chi_sono.style.display = 'none';
    contatti.style.display = 'none';
    skills.style.display = 'block';
});

tab4.addEventListener('click', function() {
    tab4.style.backgroundColor = '#0d1b2a';
    tab.style.backgroundColor = '#415a77';
    tab2.style.backgroundColor = '#415a77';
    k = 1;
    i = 0;
    j = 0;
    chi_sono.style.display = 'none';
    skills.style.display = 'none';
    contatti.style.display = 'block';
});

tab.addEventListener('click', function() {
    tab.style.backgroundColor = '#0d1b2a';
    tab2.style.backgroundColor = '#415a77';
    tab4.style.backgroundColor = '#415a77';
    i = 1;
    j = 0;
    k = 0;
    skills.style.display = 'none';
    contatti.style.display = 'none';
    chi_sono.style.display = 'block';
});

tab2.addEventListener('mouseover', function() {
    tab2.style.backgroundColor = '#0d1b2a';
});

tab4.addEventListener('mouseover', function() {
    tab4.style.backgroundColor = '#0d1b2a';
});

tab.addEventListener('mouseover', function() {
    tab.style.backgroundColor = '#0d1b2a';
});

tab2.addEventListener('mouseout', function() {
    if(j == 0){
        tab2.style.backgroundColor = '#415a77';
    }
});

tab4.addEventListener('mouseout', function() {
    if(k == 0){
        tab4.style.backgroundColor = '#415a77';
    }
});

tab.addEventListener('mouseout', function() {
    if(i == 0){
        tab.style.backgroundColor = '#415a77';
    }
});

downloadcv.addEventListener('mouseover', function() {
    downloadcv.style.backgroundColor = '#0d1b2a';
});

downloadcv.addEventListener('mouseout', function() {
    downloadcv.style.backgroundColor = '#415a77';
});

downloadcv.addEventListener('mousedown', function() {
    downloadcv.style.backgroundColor = '#0d1b2a';
});

downloadcv.addEventListener('mouseup', function() {
    downloadcv.style.backgroundColor = '#415a77';
});

window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};
