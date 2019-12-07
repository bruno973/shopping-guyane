var data = {
	'general' : {
		'logoSrc' : '/logo.png',
		'pageBackgroundColor' : '#EDEDED',
		'linkBackgroundColor' : '#eec643',
		'linkTextColor' : '#0A0A0A',
		'searchState' : 'active',
		'searchInputPlaceholder' : 'Recherche...',
		'noResultNotice' : 'Pas de résultats...'
	},
	'links' : [
		{
			'name' : "Aliexpress",
			'url' : "https://rebrand.ly/aliexpress973",
			'openUrlType' : 'new',
			'searchTerms': ['Aliexpress','aliexpress','Alie','Ali','ali']
		},
		{
			'name' : "Brand Alley",
			'url' : "https://rebrand.ly/Brand-Alley",
			'openUrlType' : 'new',
			'searchTerms': ['Brand','Brandalley','BrandAlley','brandalley','Brand Alley','brand alley']
		},
		{
			'name' : "Gagner des € en répondant à des enquêtes",
			'url' : "https://rebrand.ly/tns-sofres",
			'openUrlType' : 'new',
			'searchTerms': ['TNS','tns','euros','€']
		}
	]
};


window.onload = function() {
	generateCSS();
	var initializeHTML = '';
	initializeHTML += 	'<div class="pielinks-container">'+
							'<img alt="logo" class="pielinks-logo" src="'+data.general.logoSrc+'">';
	if (data.general.searchState == 'active') {
		initializeHTML += 	'<input id="search_form" class="pielinks-search" type="text" placeholder="'+data.general.searchInputPlaceholder+'" oninput="search_form()"/>';
	}
	initializeHTML += 		'<div id="pielinksItems"></div>'+
							'<a target="_blank" class="pielinks-footer" href="https://github.com/thodorisit/pie-links">Crafted with Pie-Links</a>'+
						'</div>';
	document.body.innerHTML = initializeHTML;
	createLinks();
}

function createLinks() {
	var htmlLinkspielinkss = '';
	for (i in data.links) {
		htmlLinkspielinkss += '<a';
		if (data.links[i].openUrlType == 'new') {
			htmlLinkspielinkss += ' target = "_blank" ';
		}
		htmlLinkspielinkss += ' href="'+data.links[i].url+'" class="pielinks-item">'+data.links[i].name+'</a>';
		document.getElementById('pielinksItems').innerHTML = htmlLinkspielinkss;
	}
}

function search_form() {
	var searchKeyword = document.getElementById("search_form").value;
		searchKeyword = searchKeyword.toLowerCase();
		
	if (searchKeyword == "") {
		createLinks();
	} else {
		var htmlLinkspielinkss = '';
		var countLinks = 0;
		for (i in data.links) {
			for (j in data.links[i].searchTerms) {
				
				if (data.links[i].searchTerms[j].indexOf(searchKeyword) > -1) {
					htmlLinkspielinkss += '<a';
					if (data.links[i].openUrlType == 'new') {
						htmlLinkspielinkss += ' target = "_blank" ';
					}
					htmlLinkspielinkss += ' href="'+data.links[i].url+'" class="pielinks-item">'+data.links[i].name+'</a>';
					countLinks++;
					break;
				}
			}
		}
		if (countLinks == 0) {
			htmlLinkspielinkss = '<div class="pielinks-noResultsNotice">'+data.general.noResultNotice+'</div>';
		}
		document.getElementById('pielinksItems').innerHTML = htmlLinkspielinkss;
	}
}

function generateCSS() {
	var pielinkssCSS = document.createElement('style');
	pielinkssCSS.innerHTML = 'body { margin:0; padding:0; font-family:Arial; font-size:17px; } a { text-decoration:none; } .pielinks-container { position:relative; text-align:center; width:90%; margin-left:5%; } .pielinks-logo {max-width:50%;} .pielinks-item { display:block; width:100%; padding:22px 0px 22px 0px; margin-top:10px; word-break:break-all;} .pielinks-search { display:block; outline:0; width:100%; border:0; padding:12px 5% 12px 5%; font-size:15px; } .pielinks-footer { display:block; position:relative; width:100%; color:#0A0A0A; border-top:1px #0A0A0A solid; text-align:center; margin-top:20px; padding-top:10px; font-size:12px; } .pielinks-noResultsNotice {margin-top:15px;}';
	document.head.appendChild(pielinkssCSS);
	var pielinkssCSS = document.createElement('style');
	var pielinkssCSSInner = '';
	pielinkssCSSInner += 'body {background:'+data.general.pageBackgroundColor+';}.pielinks-item {background:'+data.general.linkBackgroundColor+';color:'+data.general.linkTextColor+';}';
	pielinkssCSS.innerHTML = pielinkssCSSInner;
	document.head.appendChild(pielinkssCSS);
}