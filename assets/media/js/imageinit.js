$(document).ready(function () {
    var link;
    $(".post_content img").each(function () {
        link = $(this).attr("src");
        $(this).wrap("<a href=\"" + link + "\"rel =\"gallery\"></a>")
    })
})