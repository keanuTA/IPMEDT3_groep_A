AFRAME.registerComponent('hidetoggle', {
    schema: {
        to: {default: "false"}
    },
    init: function() {
        var data = this.data;
        this.el.addEventListener('mouseleave', function(){
            this.setAttribute('visible', data.to);
        });
    }
});
