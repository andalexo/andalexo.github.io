---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  # image_fullwidth: header_bolero.png
  image_fullwidth: header_thatsdope.jpg

widget1:
    title: "Projects"
    url: '/projects/'
    text: 'My projects & a video from the theme as link.'
    video: '<a href="#" data-reveal-id="videoModal"><img src="http://phlow.github.io/feeling-responsive/images/start-video-feeling-responsive-302x182.jpg" width="302" height="182" alt=""/></a>'

widget2:
  title: "Blog"
  url: '/blog/'
  image: widget-1-302x182.jpg
  text: 'Yet another blog; just keeping track'

widget3:
  title: "Notes"
  url: '/notes/'
  image: widget-github-303x182.jpg
  text: '<em>Notes</em> about programming issues. Tell me via Twitter <a href="http://twitter.com/andalexo">@andalexo</a>.'

#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#

#callforaction:
#  url: https://tinyletter.com/feeling-responsive
#  text: Inform me about new updates and features ›
#  style: alert

permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/3b5zCFSmVvU" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
