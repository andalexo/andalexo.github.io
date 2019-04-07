---
layout: page
# subheadline: Templates
title:  "Notes"
teaser: "just keeping some notes"
permalink: "/notes/"
---

<div class="row">
	<div class="medium-8 columns t30">
        {% for tag in site.tags %}
            {% if tag[0] == 'blog' %}
                {% continue %}
            {% endif %}
            <h3 id="{{ tag[0] }}">tag::{{ tag[0] }}</h3>
            {% for post in site.categories.notes %}
                {% if post.tags contains tag[0] %}
                    <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
                {% endif %}
            {% endfor %}
        {% endfor %}
	</div><!-- /.medium-7.columns -->

	<div class="medium-4 columns t30">
		{% include _sidebar_notes.html %}
	</div><!-- /.medium-5.columns -->
</div><!-- /.row -->
