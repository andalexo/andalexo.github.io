---
layout: page-fullwidth
subheadline:  "Linux"
title:  "Fedora Config"
teaser: "Note-taking while setting up my system. It happens that stuff change, deprecated or simply I happen to stop using them. Such a note would be helpful documenting what and why I added or removed."
breadcrumb: true
categories:
    - notes
tags:
    - linux
header: no
image:
    thumb: "blog/2017-10-20-fedora-logo-200px.png"
---

<div class="panel radius">
<b>UPDATE May 2019</b><br>
Despite the recent release of Fedora 30 and my enthousiasm about giving it a try, I am still stuck at Fedora 28.<br>
Main reasons include the support for <i>cernbox</i> (fc28) 
[<a href="https://cernbox.cern.ch/cernbox/doc/linux.html">1</a>,
<a href="https://cernbox.cern.ch/cernbox/doc/Linux/repo/">2</a>]
and <i>docker</i> (fc29) 
[<a href="https://docs.docker.com/install/linux/docker-ce/fedora/">3</a>].
</div>


As always the [linux-config][1] repository has the updated scripts.

Bullet points:

+ [GitKraken][2] is now supporting fc29+. Yet another reason for the update but still out of our scope

[1]: https://google.com
[2]: https://www.gitkraken.com/download


{% highlight bash %}
#!/bin/bash
echo "Hello, World !"
{% endhighlight %}
