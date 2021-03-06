import React from "react"

const Card = () => (
<div class="paragraph-item">
<article class="su-card [ modifier_class ]">
  <figure class="su-media  su-media--image su-card__media">
    <a rel="nofollow noopener" tabindex="-1" href="https://stanford.edu">
      <div class="su-media__wrapper su-aspect-ratio">
        <img src="https://placeimg.com/2000/1333/any" autoplay="" loop="" muted="" alt="" />
      </div>
    </a>
  </figure>
  <section class="su-card__contents">
    <span>This is a super headline</span>
    <h2>
      <a href="https://stanford.edu" rel="nofollow noopener">Headline goes here</a>
    </h2>
    <p>Sample text goes here and this card should be able to handle a few lines. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
    <a rel="nofollow noopener" href="https://stanford.edu" class="su-link su-card__link su-link--action">CTA Link Label</a>
    <div class="su-card__button">
      <a rel="nofollow noopener" href="https://stanford.edu" class="su-link su-button">Button Label</a>
    </div>
  </section>
</article>
</div>
)

export default Card
