/* ##### SOCIAL MEDIA LOGOS ##### */

// Github
function g_hover(element) 
{
	element.setAttribute('src', 'img/logos/github-logo2.png');
}

function g_unhover(element) 
{
	element.setAttribute('src', 'img/logos/github-logo.png');
}
//Twitter
function t_hover(element) 
{
	element.setAttribute('src', 'img/logos/twitter-logo2.png');
}

function t_unhover(element) 
{
	element.setAttribute('src', 'img/logos/twitter-logo.png');
}
//Linkedin
function l_hover(element) 
{
	element.setAttribute('src', 'img/logos/linkedin-logo2.png');
}

function l_unhover(element) 
{
	element.setAttribute('src', 'img/logos/linkedin-logo.png');
}

/* ##### PROJECT ICONS ##### */

//Space Invaders icon
function si_hover(element) 
{
	element.setAttribute('src', 'img/projects/space_invader2.jpg');
}

function si_unhover(element) 
{
	element.setAttribute('src', 'img/projects/space_invader.jpg');
}
//gear
function gear_hover(element) 
{
	element.setAttribute('src', 'img/projects/gear2.jpg');
}

function gear_unhover(element) 
{
	element.setAttribute('src', 'img/projects/gear.jpg');
}
//finger poke
function poke_hover(element) 
{
	element.setAttribute('src', 'img/projects/poke2.png');
}

function poke_unhover(element) 
{
	element.setAttribute('src', 'img/projects/poke.png');
}
//microchip
function microchip_hover(element) 
{
	element.setAttribute('src', 'img/projects/microchip2.png');
}

function microchip_unhover(element) 
{
	element.setAttribute('src', 'img/projects/microchip.png');
}

/* ##### DESCRIPTIONS ##### */
function ascii_hover(ascii, vm, autopoke, device)
{
	ascii.style.display='inline';
	vm.style.display='none';
	autopoke.style.display='none';
	device.style.display='none';
}

function vm_hover(ascii, vm, autopoke, device)
{
	ascii.style.display='none';
	vm.style.display='inline';
	autopoke.style.display='none';
	device.style.display='none';
}

function autopoke_hover(ascii, vm, autopoke, device)
{
	ascii.style.display='none';
	vm.style.display='none';
	autopoke.style.display='inline';
	device.style.display='none';
}

function device_hover(ascii, vm, autopoke, device)
{
	ascii.style.display='none';
	vm.style.display='none';
	autopoke.style.display='none';
	device.style.display='inline';
}

function ellipsis_hover(element)
{
	element.setAttribute('src', 'img/mis/ellipsis2.png');
}

function ellipsis_unhover(element)
{
	element.setAttribute('src', 'img/mis/ellipsis.png');
}
