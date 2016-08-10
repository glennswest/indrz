var map_type = true;

var full_screen_control = new ol.control.FullScreen({
    label: "Go Full Screen",
    className: "btn-fullscreen",
    target: document.getElementById("id-fullscreen")
});

map.addControl(full_screen_control);

$("#id-map-switcher").on("click", function(evt){
    map_type = !map_type;
    if(map_type) {
        $(this).text('Satellite');
        ortho30cm_bmapat.setVisible(false);
        grey_bmapat.setVisible(true);
    } else {
        $(this).text('Map');
        ortho30cm_bmapat.setVisible(true);
        grey_bmapat.setVisible(false);
    }
});