/* globals customElements document */
import CustomElement from '@enhance/custom-element'

export default class DetectMissingAdBlocker extends CustomElement {
  constructor() {
    super()
    this.cookieNameValue = "ftf-dma-notice=shown"
    this.note = document.getElementById("ftf-dma-note")
    this.noteCloseButton = document.getElementById("ftf-dma-close-btn")
    this.setShown = this.setShown.bind(this)
  }

  connectedCallback() {
    if (document.cookie.indexOf(this.cookieNameValue) !== -1 &&
        this.noteCloseButton !== null) {
      this.noteCloseButton.checked = true
    }

    if (this.note !== null && this.noteCloseButton !== null) {
      this.noteCloseButton.addEventListener('click', this.setShown)
    }
  }

  disconnectedCallback() {
    if (this.noteCloseButton !== null) {
      this.noteCloseButton.removeEventListener('click', this.setShown)
    }
  }

  setShown() {
    document.cookie = this.cookieNameValue
  }

  render({ html }) {
    return html`
    <style>
.ftf-dma-note{
  position: fixed;
  top: 5px;
  left: 5px;
  right: 5px;
  z-index: 9999999;
  padding: 0 20px 0;
  text-align: start;
  background: #fff;
  color: #3a3a3a;
  border: 5px solid #3a3a3a;
}

.ftf-dma-note-content-wrapper{
  position: relative;
}

.ftf-dma-note-header{
  margin-block: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
}

.ftf-dma-note-content {
  margin-block-end: 1rem;
}

.ftf-dma-close-btn{
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.ftf-dma-close-btn:hover{
  text-decoration: underline;
}

#ftf-dma-close-btn {
  display:none;
}

.ftf-dma-note:has(input[type=checkbox]:checked) {
  display: none !important;
}
  </style>
  <div
  id="ftf-dma-note"
  class="ftf-dma-note ad native-ad native-ad-1 ytd-j yxd-j yxd-jd aff-content-col aff-inner-col aff-item-list ark-ad-message inplayer-ad inplayer_banners in_stream_banner trafficjunky-float-right dbanner preroll-blocker happy-inside-player blocker-notice blocker-overlay exo-horizontal ave-pl bottom-hor-block brs-block advboxemb wgAdBlockMessage glx-watermark-container overlay-advertising-new header-menu-bottom-ads rkads mdp-deblocker-wrapper amp-ad-inner imggif bloc-pub bloc-pub2 hor_banner aan_fake aan_fake__video-units rps_player_ads fints-block__row full-ave-pl full-bns-block vertbars video-brs player-bns-block wps-player__happy-inside gallery-bns-bl stream-item-widget adsbyrunactive happy-under-player adde_modal_detector adde_modal-overlay ninja-recommend-block aoa_overlay message"
  >
      <div class="ftf-dma-note-content-wrapper">
          <label class="ftf-dma-close-btn">
              Close
              <input id="ftf-dma-close-btn" type="checkbox" role="button">
          </label>
          <div class="ftf-dma-note-header">
             <slot name="title"></slot>
          </div>
          <div class="ftf-dma-note-content">
            <slot name="message"></slot>
          </div>
      </div>
  </div>
    `
  }
}

customElements.define('detect-missing-adblocker', DetectMissingAdBlocker)
