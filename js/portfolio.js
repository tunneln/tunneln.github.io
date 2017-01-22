/* ##### SOCIAL MEDIA LOGOS ##### */

// Github
function g_hover(element, github, linkedin, twitter, me)
{
	element.setAttribute('src', 'img/logos/github-logo2.png');
	github.style.display = 'block';
	linkedin.style.display = 'none';
	twitter.style.display = 'none';
	me.style.display = 'none';
}

function g_unhover(element, github)
{
	element.setAttribute('src', 'img/logos/github-logo.png');
	github.style.display = 'none';
}

// Twitter
function t_hover(element, github, linkedin, twitter, me)
{
	element.setAttribute('src', 'img/logos/twitter-logo2.png');
	github.style.display = 'none';
	linkedin.style.display = 'none';
	twitter.style.display = 'block';
	me.style.display = 'none';

}

function t_unhover(element, twitter)
{
	element.setAttribute('src', 'img/logos/twitter-logo.png');
	twitter.style.display = 'none';
}

// Linkedin
function l_hover(element, github, linkedin, twitter, me)
{
	element.setAttribute('src', 'img/logos/linkedin-logo2.png');
	github.style.display = 'none';
	linkedin.style.display = 'block';
	twitter.style.display = 'none';
	me.style.display = 'none';
}

function l_unhover(element, linkedin)
{
	element.setAttribute('src', 'img/logos/linkedin-logo.png');
	linkedin.style.display = 'none';
}

// Noel Negusse
function me_hover(me)
{
	me.style.display = 'block';
}

function me_unhover(me)
{
	me.style.display = 'none';

}

/* ##### PROJECT ICONS ##### */

// ascii invaders
function si_hover(element)
{
	element.setAttribute('src', 'img/projects/space_invader2.jpg');
}

// kernel vm
function gear_hover(element)
{
	element.setAttribute('src', 'img/projects/gear2.jpg');
}

// foids
function fish_hover(element)
{
	element.setAttribute('src', 'img/projects/fish2.png');
}

// processor
function fpga_hover(element)
{
	element.setAttribute('src', 'img/projects/fpga2.png');
}

// carnotke
function hdd_hover(element)
{
	element.setAttribute('src', 'img/projects/db2.png');
}

// blockchain database
function ledger_hover(element)
{
	element.setAttribute('src', 'img/projects/ledger2.png');
}

// gameboy
function gb_hover(element)
{
	element.setAttribute('src', 'img/projects/gb2.png');
}

// ray tracer
function ray_hover(element)
{
	element.setAttribute('src', 'img/projects/ray2.png');
}

// smash the stack
function bucket_hover(element)
{
	element.setAttribute('src', 'img/projects/bucket2.jpg');
}

// device
function gyro_hover(element)
{
	element.setAttribute('src', 'img/projects/gyro2.png');
}

/* ##### DESCRIPTIONS ##### */
function ascii_hover(ascii, vm, sensor, device, fish, database, bucket, fpga, ray, gb,
ascii_img, vm_img, sensor_img, device_img, fish_img, fpga_img, ray_img, gb_img, database_img, bucket_img)
{
	ascii.style.display='inline';
	vm.style.display='none';
	sensor.style.display='none';
	device.style.display='none';
	fish.style.display='none';
	database.style.display='none';
	bucket.style.display='none';
	fpga.style.display='none';
	ray.style.display='none';
	gb.style.display='none';
	vm_img.setAttribute('src', 'img/projects/gear.jpg');
	sensor_img.setAttribute('src', 'img/projects/gyro.png');
	device_img.setAttribute('src', 'img/projects/ledger.png');
	fish_img.setAttribute('src', 'img/projects/fish.png');
	fpga_img.setAttribute('src', 'img/projects/fpga.png');
	ray_img.setAttribute('src', 'img/projects/ray.png');
	gb_img.setAttribute('src', 'img/projects/gb.png');
	database_img.setAttribute('src', 'img/projects/db.png');
	bucket_img.setAttribute('src', 'img/projects/bucket.jpg');
}

function vm_hover(ascii, vm, sensor, device, fish, database, bucket, fpga, ray, gb,
ascii_img, vm_img, sensor_img, device_img, fish_img, fpga_img, ray_img, gb_img, database_img, bucket_img)
{
	ascii.style.display='none';
	vm.style.display='inline';
	sensor.style.display='none';
	device.style.display='none';
	fish.style.display='none';
	database.style.display='none';
	bucket.style.display='none';
	fpga.style.display='none';
	ray.style.display='none';
	gb.style.display='none';
	ascii_img.setAttribute('src', 'img/projects/space_invader.jpg');
	sensor_img.setAttribute('src', 'img/projects/gyro.png');
	device_img.setAttribute('src', 'img/projects/ledger.png');
	fish_img.setAttribute('src', 'img/projects/fish.png');
	fpga_img.setAttribute('src', 'img/projects/fpga.png');
	ray_img.setAttribute('src', 'img/projects/ray.png');
	gb_img.setAttribute('src', 'img/projects/gb.png');
	database_img.setAttribute('src', 'img/projects/db.png');
	bucket_img.setAttribute('src', 'img/projects/bucket.jpg');
}

function foids_hover(ascii, vm, sensor, device, fish, database, bucket, fpga, ray, gb,
ascii_img, vm_img, sensor_img, device_img, fish_img, fpga_img, ray_img, gb_img, database_img, bucket_img)
{
	ascii.style.display='none';
	vm.style.display='none';
	sensor.style.display='none';
	device.style.display='none';
	fish.style.display='inline';
	database.style.display='none';
	bucket.style.display='none';
	fpga.style.display='none';
	ray.style.display='none';
	gb.style.display='none';
	ascii_img.setAttribute('src', 'img/projects/space_invader.jpg');
	vm_img.setAttribute('src', 'img/projects/gear.jpg');
	sensor_img.setAttribute('src', 'img/projects/gyro.png');
	device_img.setAttribute('src', 'img/projects/ledger.png');
	fpga_img.setAttribute('src', 'img/projects/fpga.png');
	ray_img.setAttribute('src', 'img/projects/ray.png');
	gb_img.setAttribute('src', 'img/projects/gb.png');
	database_img.setAttribute('src', 'img/projects/db.png');
	bucket_img.setAttribute('src', 'img/projects/bucket.jpg');
}

function proc_hover(ascii, vm, sensor, device, fish, database, bucket, fpga, ray, gb,
ascii_img, vm_img, sensor_img, device_img, fish_img, fpga_img, ray_img, gb_img, database_img, bucket_img)
{
	ascii.style.display='none';
	vm.style.display='none';
	sensor.style.display='none';
	device.style.display='none';
	fish.style.display='none';
	database.style.display='none';
	bucket.style.display='none';
	fpga.style.display='inline';
	ray.style.display='none';
	gb.style.display='none';
	ascii_img.setAttribute('src', 'img/projects/space_invader.jpg');
	vm_img.setAttribute('src', 'img/projects/gear.jpg');
	sensor_img.setAttribute('src', 'img/projects/gyro.png');
	device_img.setAttribute('src', 'img/projects/ledger.png');
	fish_img.setAttribute('src', 'img/projects/fish.png');
	ray_img.setAttribute('src', 'img/projects/ray.png');
	gb_img.setAttribute('src', 'img/projects/gb.png');
	database_img.setAttribute('src', 'img/projects/db.png');
	bucket_img.setAttribute('src', 'img/projects/bucket.jpg');
}

function db_hover(ascii, vm, sensor, device, fish, database, bucket, fpga, ray, gb,
ascii_img, vm_img, sensor_img, device_img, fish_img, fpga_img, ray_img, gb_img, database_img, bucket_img)
{
	ascii.style.display='none';
	vm.style.display='none';
	sensor.style.display='none';
	device.style.display='none';
	fish.style.display='none';
	database.style.display='inline';
	bucket.style.display='none';
	fpga.style.display='none';
	ray.style.display='none';
	gb.style.display='none';
	ascii_img.setAttribute('src', 'img/projects/space_invader.jpg');
	vm_img.setAttribute('src', 'img/projects/gear.jpg');
	sensor_img.setAttribute('src', 'img/projects/gyro.png');
	device_img.setAttribute('src', 'img/projects/ledger.png');
	fish_img.setAttribute('src', 'img/projects/fish.png');
	fpga_img.setAttribute('src', 'img/projects/fpga.png');
	ray_img.setAttribute('src', 'img/projects/ray.png');
	gb_img.setAttribute('src', 'img/projects/gb.png');
	bucket_img.setAttribute('src', 'img/projects/bucket.jpg');
}

function bc_hover(ascii, vm, sensor, device, fish, database, bucket, fpga, ray, gb,
ascii_img, vm_img, sensor_img, device_img, fish_img, fpga_img, ray_img, gb_img, database_img, bucket_img)
{
	ascii.style.display='none';
	vm.style.display='none';
	sensor.style.display='none';
	device.style.display='inline';
	fish.style.display='none';
	database.style.display='none';
	bucket.style.display='none';
	fpga.style.display='none';
	ray.style.display='none';
	gb.style.display='none';
	ascii_img.setAttribute('src', 'img/projects/space_invader.jpg');
	vm_img.setAttribute('src', 'img/projects/gear.jpg');
	sensor_img.setAttribute('src', 'img/projects/gyro.png');
	device_img.setAttribute('src', 'img/projects/ledger2.png');
	fish_img.setAttribute('src', 'img/projects/fish.png');
	fpga_img.setAttribute('src', 'img/projects/fpga.png');
	ray_img.setAttribute('src', 'img/projects/ray.png');
	gb_img.setAttribute('src', 'img/projects/gb.png');
	database_img.setAttribute('src', 'img/projects/db.png');
	bucket_img.setAttribute('src', 'img/projects/bucket.jpg');
}

function raytracer_hover(ascii, vm, sensor, device, fish, database, bucket, fpga, ray, gb,
ascii_img, vm_img, sensor_img, device_img, fish_img, fpga_img, ray_img, gb_img, database_img, bucket_img)
{
	ascii.style.display='none';
	vm.style.display='none';
	sensor.style.display='none';
	device.style.display='none';
	fish.style.display='none';
	database.style.display='none';
	bucket.style.display='none';
	fpga.style.display='none';
	ray.style.display='inline';
	gb.style.display='none';
	ascii_img.setAttribute('src', 'img/projects/space_invader.jpg');
	vm_img.setAttribute('src', 'img/projects/gear.jpg');
	sensor_img.setAttribute('src', 'img/projects/gyro.png');
	device_img.setAttribute('src', 'img/projects/ledger.png');
	fish_img.setAttribute('src', 'img/projects/fish.png');
	fpga_img.setAttribute('src', 'img/projects/fpga.png');
	gb_img.setAttribute('src', 'img/projects/gb.png');
	database_img.setAttribute('src', 'img/projects/db.png');
	bucket_img.setAttribute('src', 'img/projects/bucket.jpg');
}

function gameboy_hover(ascii, vm, sensor, device, fish, database, bucket, fpga, ray, gb,
ascii_img, vm_img, sensor_img, device_img, fish_img, fpga_img, ray_img, gb_img, database_img, bucket_img)
{
	gb.style.display='inline';
	ascii.style.display='none';
	vm.style.display='none';
	sensor.style.display='none';
	device.style.display='none';
	fish.style.display='none';
	database.style.display='none';
	bucket.style.display='none';
	fpga.style.display='none';
	ray.style.display='none';
	ascii_img.setAttribute('src', 'img/projects/space_invader.jpg');
	vm_img.setAttribute('src', 'img/projects/gear.jpg');
	sensor_img.setAttribute('src', 'img/projects/gyro.png');
	device_img.setAttribute('src', 'img/projects/ledger.png');
	fish_img.setAttribute('src', 'img/projects/fish.png');
	fpga_img.setAttribute('src', 'img/projects/fpga.png');
	ray_img.setAttribute('src', 'img/projects/ray.png');
	database_img.setAttribute('src', 'img/projects/db.png');
	bucket_img.setAttribute('src', 'img/projects/bucket.jpg');
}

function stack_hover(ascii, vm, sensor, device, fish, database, bucket, fpga, ray, gb,
ascii_img, vm_img, sensor_img, device_img, fish_img, fpga_img, ray_img, gb_img, database_img, bucket_img)
{
	ascii.style.display='none';
	vm.style.display='none';
	sensor.style.display='none';
	device.style.display='none';
	fish.style.display='none';
	database.style.display='none';
	bucket.style.display='inline';
	fpga.style.display='none';
	ray.style.display='none';
	gb.style.display='none';
	ascii_img.setAttribute('src', 'img/projects/space_invader.jpg');
	vm_img.setAttribute('src', 'img/projects/gear.jpg');
	sensor_img.setAttribute('src', 'img/projects/gyro.png');
	device_img.setAttribute('src', 'img/projects/ledger.png');
	fish_img.setAttribute('src', 'img/projects/fish.png');
	fpga_img.setAttribute('src', 'img/projects/fpga.png');
	ray_img.setAttribute('src', 'img/projects/ray.png');
	gb_img.setAttribute('src', 'img/projects/gb.png');
	database_img.setAttribute('src', 'img/projects/db.png');
}

function sensor_hover(ascii, vm, sensor, device, fish, database, bucket, fpga, ray, gb,
ascii_img, vm_img, sensor_img, device_img, fish_img, fpga_img, ray_img, gb_img, database_img, bucket_img)
{
	ascii.style.display='none';
	vm.style.display='none';
	sensor.style.display='inline';
	device.style.display='none';
	fish.style.display='none';
	database.style.display='none';
	bucket.style.display='none';
	fpga.style.display='none';
	ray.style.display='none';
	gb.style.display='none';
	ascii_img.setAttribute('src', 'img/projects/space_invader.jpg');
	vm_img.setAttribute('src', 'img/projects/gear.jpg');
	device_img.setAttribute('src', 'img/projects/ledger.png');
	fish_img.setAttribute('src', 'img/projects/fish.png');
	fpga_img.setAttribute('src', 'img/projects/fpga.png');
	ray_img.setAttribute('src', 'img/projects/ray.png');
	gb_img.setAttribute('src', 'img/projects/gb.png');
	database_img.setAttribute('src', 'img/projects/db.png');
	bucket_img.setAttribute('src', 'img/projects/bucket.jpg');
}

function ellipsis_hover(element)
{
	element.setAttribute('src', 'img/mis/ellipsis2.png');
}

function ellipsis_unhover(element)
{
	element.setAttribute('src', 'img/mis/ellipsis.png');
}

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

/*
$(window).on('resize', function() {
	var win = $(this);
	if (win.width() >= 1280) {

	}
	if (win.width() < 1280) {

	}
});
*/

