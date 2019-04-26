---
layout: page
show_meta: false
title: "Testing !"
subheadline: "Testing is necessary !"
header:
   image_fullwidth: "header-vscode.png"
permalink: "/test/"
---
<ul>
    {% for post in site.categories.projects %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

{% include _google_search.html %}

{% include list-collection collection='notes' %}

{% include list-posts %}