---
layout: page
show_meta: false
title: "Projects"
subheadline: "Projects"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/projects/"
---
<ul>
    {% for post in site.categories.projects %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
