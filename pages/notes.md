---
layout: default
# subheadline: Templates
title:  "Notes"
teaser: "just keeping some notes"
permalink: "/notes/"
---

<div id="blog-index" class="row">
    <h1>{{ page.title }}</h1>
	<div class="medium-8 columns t30">
		<dl class="accordion" data-accordion>
			{% assign counter = 1 %}
			{% for post in site.categories.notes limit:1000 %}
			<dd class="accordion-navigation">
			<a href="#panel{{ counter }}"><span class="iconfont"></span> {% if post.subheadline %}{{ post.subheadline }} › {% endif %}<strong>{{ post.title }}</strong></a>
				<div id="panel{{ counter }}" class="content">
					{% if post.meta_description %}{{ post.meta_description | strip_html | escape }}{% elsif post.teaser %}{{ post.teaser | strip_html | escape }}{% endif %}
					<a href="{{ site.url }}{{ post.url }}" title="Read {{ post.title | escape_once }}"><strong>{{ site.data.language.read_more }}</strong></a><br><br>
				</div>
			</dd>
			{% assign counter=counter | plus:1 %}
			{% endfor %}
		</dl>
	</div><!-- /.small-12.columns -->
    <div class="medium-4 columns t30">
		{% include _sidebar_tags.html %}
	</div><!-- /.medium-5.columns -->
</div><!-- /.row -->