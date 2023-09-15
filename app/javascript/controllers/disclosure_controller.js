import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ "enabled" ]

  static targets = [ "details" ]

  connect() {
    this.element.classList.add(this.enabledClass)
  }

  toggle () {
    this.detailsTarget.classList.toggle("cads-disclosure__details--open")
  }
}
