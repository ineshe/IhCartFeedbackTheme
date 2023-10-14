import Plugin from 'src/plugin-system/plugin.class'

export default class CartFeedback extends Plugin {

    init() {
        this.el.addEventListener('click', this.onClick.bind(this))
        this.button = this.el.querySelector('.btn-buy')
    }

    onClick() {
        this.addColor()
        setTimeout(this.removeColor.bind(this), 1000)
    }

    addColor() {
        this.button.textContent = this.options.feedbackText
        this.button.classList.add("feedback")
    }

    removeColor() {
        this.button.textContent = this.options.defaultText
        this.button.classList.remove("feedback")
    }
}