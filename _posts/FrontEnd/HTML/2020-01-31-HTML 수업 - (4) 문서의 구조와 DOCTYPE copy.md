---
layout: post
title: "[생활코딩] HTML 수업 - (4) 문서의 구조와 DOCTYPE"
date:   2020-01-31 21:00:00 +09:00
excerpt: "HTML '문서의 구조와 DOCTYPE'에 대하여 알아보겠습니다."
category: HTML
frontend: true
posts: true
tag:
- HTML
comments: true
---
<div class="center">
    이 포스트는 <a href="https://opentutorials.org/course/2039/10930" target="_blank">생활코딩 HTML 수업</a>을 기반으로 작성한 글입니다.
</div>

**문서의 구조와 DOCTYPE**에 대하여 알아보겠습니다.  

* TOC
{:toc}
{: .toc }

# HTML 문서의 구조  
문서의 구조를 나타내는 html, head, body 태그에 대하여 알아보겠습니다.
## 문서의 구조를 나타내는 태그 적용 전
~~~ html
<h1>HTML</h1>
<ol>
    <li>기술소개</li>
    <li>기본문법</li>
    <li>하이퍼텍스트와 속성</li>
    <li>리스트와 태그의 중첩</li>
</ol>

<h2>선행학습</h2>

본 수업을 효과적으로 수행하기 위해서는 웹애플리케이션에 대한 전반적인 이해가 필요합니다. 이를 위해서 준비된 수업은 아래 링크를 통해서 접근하실 수 있습니다.

웹 애플리케이션 만들기
~~~


## 문서의 구조를 나타내는 태그 적용 후 (html, head, body)
~~~ html
<!DOCTYPE html>
<html>
<head>
    <title>HTML - 수업소개</title>
    <meta charset="utf-8">
</head>
<body>
    <h1>HTML</h1>
    <ol>
        <li>기술소개</li>
        <li>기본문법</li>
        <li>하이퍼텍스트와 속성</li>
        <li>리스트와 태그의 중첩</li>
    </ol>

    <h2>선행학습</h2>

    본 수업을 효과적으로 수행하기 위해서는 웹애플리케이션에 대한 전반적인 이해가 필요합니다. 이를 위해서 준비된 수업은 아래 링크를 통해서 접근하실 수 있습니다.

    웹 애플리케이션 만들기
</body>
</html>
~~~


## 결론
1. title 태그를 이용하여 HTML 문서의 제목을 지정할 수 있습니다.
2. meta 태그와 charset="utf-8" 속성을 이용하여 한글 깨지는 경우에도 한글이 잘 나오도록 할 수 있습니다.
3. 문서의 본문이 아닌 본질적인 태그들은 head 태그안에 작성합니다.
4. 본문에 해당하는 태그는 body 태그안에 작성합니다.

# DOCTYPE
## DOCTYPE이란?
document type declaration의 약자로 계속해서 변하는 [HTML의 버전에 따라 태그의 존재유무나 쓰임](http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html)이 달라질 수 있기때문에 어떠한 버전에 따라서 문서를 작성했는지를 알려주기 위해 사용합니다.

~~~ 
<!DOCTYPE html>
<html>
<head>
    ...
</head>
<body>
    ...
</body>
</html>
~~~
일반적으로는 위와 같이 문서의 상단에 <!DOCTYPE html> 코드를 추가하여 사용합니다. HTML 버전에 따른 DOCTYPE을 어떻게 작성하는지 궁금하시면 [위키피디아](https://en.wikipedia.org/wiki/Document_type_declaration)를 참조하시면 됩니다.