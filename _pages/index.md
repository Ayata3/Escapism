---
title: ""
layout: splash
permalink: /
header:
  overlay_color: "#20355e"
  overlay_filter: "0.5"
  overlay_image: #/assets/img/logo.png
excerpt: "Escapism: マルチメディア創作サークル"
intro: 
  - excerpt: 'マルチメディア創作サークル「現実逃避跡地」です．小説も絵もコードも書きます．オリジナルや二次創作問わず，サイエンスフィクション(SF)やミステリー，ラブコメディといった幅広いジャンルを手掛けています．'
feature_row:
  - image_path: assets/img/logo.png
    alt: "about image "
    title: "About"
    excerpt: "サークル紹介"
    url: "/about/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: assets/img/logo.png
    alt: "profile image"
    title: "Profile"
    excerpt: "サークルメンバー紹介"
    url: "/profile/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: assets/img/logo.png
    alt: "blog image"
    title: "Blog"
    excerpt: "活動記録"
    url: "/blog/"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

<!--- {% include feature_row id="intro" type="center" %} -->

<h3 class="archive__subtitle">最新記事</h3>
{% for post in site.posts limit:1 %}
  {% include archive-single.html %}
{% endfor %}

<hr>

{% include feature_row %}