---
layout: page
# subheadline: Templates
title:  "Notes"
teaser: "just keeping some notes"
permalink: "/notes/"
---

<div class="row">
	<div class="medium-8 columns t30">
		<h4 id="General">General</h4>
        <ul>
            {% for post in site.tags.linux %}
            <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
            {% endfor %}
        </ul>

        <h4 id="Python">Python</h4>
        <ul>
            {% for post in site.tags.linux %}
            <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
            {% endfor %}
        </ul>

        <h4 id="Cpp">C++</h4>
        <ul>
            {% for post in site.tags.linux %}
            <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
            {% endfor %}
        </ul>

        <h4 id="Linux">Linux</h4>
        <ul>
            {% for post in site.tags.linux %}
            <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
            {% endfor %}
        </ul>
	</div><!-- /.medium-7.columns -->

	<div class="medium-4 columns t30">
		{% include _sidebar_notes.html %}
	</div><!-- /.medium-5.columns -->
</div><!-- /.row -->
