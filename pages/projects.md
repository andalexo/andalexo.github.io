---
layout: page-fullwidth
show_meta: false
title: "Projects"
# subheadline: "Projects"
teaser: A collection of projects I have carried out
header:
   image_fullwidth: "header-vscode.png"
permalink: "/projects/"
---
<!-- Projects
<ul>
    {% for post in site.categories.projects %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul> -->

<div class="row t60">
    <div class="medium-6 columns b30">
        <a href="{{ site.categories.projects.url }}bgv/">
        <img src="{{ site.urlimg }}projects/bgv/bgv-animation.gif" alt="">
        <h4>Beam Gas Vertex Demostrator (BGV)</h4>
        </a>
        <p>CERN, 2015-2019</p>
    </div><!-- /.medium-6.columns -->

    <div class="medium-6 columns b30">
        <a href="{{ site.categories.projects.url }}cryoblm/">
        <img src="{{ site.urlimg }}projects/cryoblm/cryoblm-thumb.png" alt="">
        <h4>Cryogenic Beam Loss Monitors (CryoBLM)</h4>
        </a>
        <p>CERN, 2014-2015</p>
    </div><!-- /.medium-6.columns -->
</div>

<!-- /.row -->

<div class="row t30">
    <div class="medium-4 columns">
        <a href="{{ site.categories.projects.url }}srv-pub-ctrl/">
        <img src="{{ site.urlimg }}projects/srv-pub-ctrl/srvpubctrl.png" alt="">
        <h4>SRV-PUB-CTRL: Dynamic H/W control with servers and publishers</h4>
        </a>
        <p>CERN, 2017</p>
    </div><!-- /.medium-4.columns -->

    <div class="medium-4 columns">
        <a href="{{ site.categories.projects.url }}apidpy/">
        <img src="{{ site.urlimg }}projects/apidpy/apidpy-thumb.png" alt="">
        <h4>APIDPy - A Package for Interactive Data Processing</h4>
        </a>
        <p>CERN, 2016</p>
    </div><!-- /.medium-4.columns -->

    <div class="medium-4 columns">
        <a href="{{ site.categories.projects.url }}flask-vue/">
        <img src="{{ site.urlimg }}projects/flask-vue/flask-vue-1.png" alt="">
        <h4>Flask-Vue: A data-focused dynamic website design</h4>
        </a>
        <p>CERN, 2018</p>
    </div><!-- /.medium-4.columns -->
</div><!-- /.row -->
