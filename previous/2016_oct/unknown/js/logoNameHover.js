$(document).ready(
	function(){
		$('.logos').hover(function(){
				aaq=$(this).siblings().attr('id');
				var logoName=document.getElementById('logo_name');
				logoName.innerHTML=':'+aaq;
				},
				function(){
				aaq=$(this).siblings().attr('id');
				var logoName=document.getElementById('logo_name');
				logoName.innerHTML='(�ΰ� ���콺�� �ø��� ���� �̸��� ���Դϴ�.)';
					}
);}




);