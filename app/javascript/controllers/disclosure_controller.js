import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ "enabled" ]

  static targets = [ "button", "details" ]

  static values = {
    open: Boolean
  }

  connect() {
    this.element.classList.add(this.enabledClass)
  }

  toggle () {
    this.openValue = !this.openValue
  }

  openValueChanged (newValue) {
    if (newValue) {
      this.buttonTarget.classList.replace("cads-icon_plus", "cads-icon_minus")
      this.detailsTarget.classList.add("cads-disclosure__details--open")
    } else {
      this.buttonTarget.classList.replace("cads-icon_minus", "cads-icon_plus")
      this.detailsTarget.classList.remove("cads-disclosure__details--open")
    }
  }
}
