let articles=document.querySelectorAll('article');
let abc=[];
for(let i=0;i<articles.length;i++){
    if(articles[i].querySelector('ul li')===null){
        abc.push('abc');
    }else{
    	abc.push(articles[i].querySelector('ul li').innerText);
	}
}
for(let i=0;i<articles.length;i++){
	if(abc[i]==='abc'){
		let tagName=document.querySelector('body > header > div > div > ul > li:nth-child('+(i+1)+') > a');
		tagName.remove();
    }
}
for(let i=0;i<articles.length;i++){
	if(abc[i]==='abc'){
		articles[i].remove();
    }
}