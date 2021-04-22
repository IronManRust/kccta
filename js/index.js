jQuery(function () {
    navs = [
        "#nav-top",
        "#nav-intro",
        "#nav-directors",
        "#nav-documents",
        "#nav-maintenance"
    ]
    for (nav of navs) {
        $(nav).on("click", function (event) {
            event.preventDefault()
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            }, 500)
        })
    }
})