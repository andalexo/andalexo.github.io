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
        <img src="{{ site.urlimg }}projects-bgv-animation.gif" alt="">
        <h4>Beam Gas Vertex Demostrator (BGV)</h4>
        </a>
        <p>CERN, 2015-2019</p>
    </div><!-- /.medium-6.columns -->

    <div class="medium-6 columns b30">
        <a href="{{ site.categories.projects.url }}cryoblm/">
        <img src="{{ site.urlimg }}projects-cryoblm.png" alt="">
        <h4>Cryogenic Beam Loss Monitors (CryoBLM)</h4>
        </a>
        <p>CERN, 2014-2015</p>
    </div><!-- /.medium-6.columns -->
</div>

<!-- /.row -->

<div class="row t30">
    <div class="medium-4 columns">
        <a href="{{ site.categories.projects.url }}comm-ctrl/">
        <img src="{{ site.urlimg }}webdesign_screenshot_stilwandel.jpg" alt="">
        <h4>COMM-CTRL: Dynamic H/W control with servers and publishers</h4>
        </a>
        <p>CERN, 2017</p>
    </div><!-- /.medium-4.columns -->

    <div class="medium-4 columns">
        <a href="{{ site.categories.projects.url }}apidpy/">
        <img src="{{ site.urlimg }}webdesign_screenshot_tarnkappe.jpg" alt="">
        <h4>APIDPy - A Package for Interactive Data Processing</h4>
        </a>
        <p>CERN, 2016</p>
    </div><!-- /.medium-4.columns -->

    <div class="medium-4 columns">
        <a href="{{ site.categories.projects.url }}vuejs-flask/">
        <img src="{{ site.urlimg }}webdesign_screenshot_schriefer.jpg" alt="">
        <h4>VueJSFlask: A website designed primarily to display data</h4>
        </a>
        <p>CERN, 2018</p>
    </div><!-- /.medium-4.columns -->
</div><!-- /.row -->
