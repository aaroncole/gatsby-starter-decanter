import React from "react"

const LockUp = ({ school, siteTitle, line2, line3 }) => (
  <div class="su-lockup">
  <a href="https://decanter.stanford.edu">
    <div class="su-lockup__cell1">
      <div class="su-lockup__wordmark-wrapper">
        <span class="su-lockup__wordmark">Stanford</span>
        <span class="su-lockup__line4">{ school }</span>
      </div>
    </div>
    <div class="su-lockup__cell2">
      <span class="su-lockup__line1">{ siteTitle }</span>
      <span class="su-lockup__line2">{ line2 }</span>
      <span class="su-lockup__line3">{ line3 }</span>
    </div>
    <div class="su-lockup__line5 "></div>
  </a>
</div>
)

export default LockUp
