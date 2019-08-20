---
layout: page-fullwidth
subheadline:  "Linux"
title:  "Image Magick"
teaser: "CLI magic on images should definitely be noted. Thankfully Linux is full of nice tools that make that a reality. From the creation of thumbnails and the pdf extraction to image formats to more advanced processing, ImageMagick is definitely an integral tool. Here I am simply going to list commands that I happened to come across."
breadcrumb: true
categories:
    - notes
tags:
    - linux
header: no
image:
    thumb: "blog/2018-10-20-imagemagick-logo.png"
---

Check info on `convert` in the official ImageMagick documentation [here][1].

{% highlight bash %}
# Create thumbnails
for i in $(ls -1 | sed -e 's/\.JPG$//'); do convert -thumbnail 300 $i.JPG $i-thumb.JPG; done;
{% endhighlight %}

{% highlight bash %}
# Resize images to a preset width
for i in $(ls -1 | sed -e 's/\.JPG$//'); do convert -resize 2000 $i.JPG $i-rsz.JPG; done;
{% endhighlight %}

[1]: https://imagemagick.org/script/convert.php