[![Netlify Status](https://api.netlify.com/api/v1/badges/908eba1d-d12d-4c10-8dfb-ec97643c8583/deploy-status)](https://app.netlify.com/sites/alia-aliapourvous/deploys)

# Aliapourvous Theme
---

This site was created by [José dBruxelles](https://www.we-rl.xyz).

The content of this site is managed by NetlifyCMS. Visit https://{site-domain}/admin to manage site content (`site-domain` can be `localhost:PORT`).

# Running this site locally
---

## Installation

1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/)

2. Install [Jekyll](https://jekyllrb.com/docs/ruby-101/#bundler) and [Bundler](https://jekyllrb.com/docs/ruby-101/#gems)

```
gem install jekyll bundler
```

3. Install dependencies from Gemfile:

```
bundle install
```

4. Build the site and make it available on a local server

```
bundle exec jekyll serve
```

You should see something like:
```
Configuration file: /aliapourvous/_config.yml
            Source: .
       Destination: ./_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 2.633 seconds.
 Auto-regeneration: enabled for '.'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

5. Now browse to [http://localhost:4000](http://localhost:4000)

## Adding pages

To **add a page** to the website (e.g. detailed resume):

1. Create a new `.html` or `.md` file on the `/pages` folder which is at the root of the repository.
2. Give it a filename that you want to be used in the page's URL (e.g. `http://{site-domain}/filename`).
3. At the start of your file, include the following [front matter](https://jekyllrb.com/docs/front-matter/):

```yml
---
layout: page
noindex: true          # Search engines index
title: Your page title
description: Your page description
permalink: /filename   # Optional
thumbnail: /assets/images/your_image_name.jpg
image: /assets/images/your_image_name.jpg
---
```

## Adding blog posts

To **add a blog post** to the website:

It is recommended to use the [content manager](https://aliapourvous.com/admin/#/collections/blog), but you can also do it manually by following the following instructions:

1. Create a new `.md` file in the repository's `/_posts/` directory.
2. Give it a filename using the following format:

```
YEAR-MONTH-DAY-title.MARKUP
=> YYYY-MM-DD-title.md
```

3. At the start of your file, include the following [front matter](https://jekyllrb.com/docs/front-matter/):

```yml
---
layout: post
noindex: false         # Search engines index
published: true        # Make appear on the website
comments: true         # Allow comments
title: "The title of my blog post"
date: 2020-05-31 08:53 # Published date
author: Author name
category: category_name
tags:
  - First tags item
thumbnail: /assets/images/posts/your_image_name.jpg
image: /assets/images/posts/your_image_name.jpg
---
```

The website comes with a placeholder blog post that you can reference. Notably, its [front matter](https://jekyllrb.com/docs/front-matter/) declares `published` as `false`, so that it won't appear on the website.

While you can define a `layout` in the front matter, the website is pre-configured to assign the `post` layout to all of the posts in the `/_posts/` directory. So you don't have to declare that in your posts.

Jekyll's conventions for authoring and managing blog posts is very flexible. You can [learn more in Jekyll's documentation for "Posts"](https://jekyllrb.com/docs/posts/).