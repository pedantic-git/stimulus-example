import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ "enabled" ]

  connect() {
    console.log("Hi")
    this.element.classList.add(this.enabledClass)
  }
}
