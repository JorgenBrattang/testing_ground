const disableselect = () => {  
    return false
}  
document.onselectstart = disableselect  
document.onmousedown = disableselect

$(document).ready(function(){
    $('.box').on('click', function(){
        // <div class="box one"></div>
        // The split is to breakUp the class into two, ["box", "one"]
        // To be used in classNames[0] and [1]
        const classNames = $(this).attr('class').split(" ")
        const boxClass = classNames[0]
        const className = classNames[1]
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            $("." + className).css("background-color", "black")
        } else {
            $("." + boxClass).css("background-color", "black")
            $("." + className).css("background-color", "rgb(255, 0, 0)")
        }
    })
})
