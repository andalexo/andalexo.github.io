---
layout: page
show_meta: false
title: "Linux"
subheadline: "Linux Notes"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/notes/linux/"
---

<ul>
    {% for post in site.categories.linux %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
