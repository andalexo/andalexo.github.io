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

{% raw %}
$$a^2 + b^2 = c^2$$ --> note that all equations between these tags will not need escaping! 
{% endraw %}

{% raw %}
\\[ \frac{1}{n^{2}} \\]
{% endraw %}