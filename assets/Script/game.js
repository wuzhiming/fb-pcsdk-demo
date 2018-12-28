cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        login_btn: cc.Node,
        event_btn: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        if (!fb || !fb.pcGameSDK) return;
        fb.pcGameSDK.init("1699783996778060")
    },

    login_click() {
        let userInfo = fb.pcGameSDK.login();
        this.show_result(userInfo);
    },

    show_result(resu) {
        let str = '';
        if (typeof (resu) === 'object') {
            str = JSON.stringify(resu);
        } else {
            str = resu;
        }
        this.label.string = str;
    },

    event_click() {
        fb.pcGameSDK.logEvent(fb.CONST.kEventViewedContent, {success: "true", source: "PC_SDK"});
    },

    // called every frame
    update: function (dt) {

    },

    get_friends() {
        let friends = fb.pcGameSDK.getFriends();
        this.show_result(friends);
    },

    get_permissions() {
        let permission = fb.pcGameSDK.getPermissions();
        this.show_result(permission);
    },

    permission_request(){
        let result = fb.pcGameSDK.permissionRequest();
        this.show_result(result);
    },

    has_access_token(){
        let result = fb.pcGameSDK.hasAccessToken();
        this.show_result(result);
    },

    get_access_token(){
        let result = fb.pcGameSDK.getAccessToken();
        this.show_result(result);
    },

    get_graph_version(){
        let result = fb.pcGameSDK.getGraphVersion();
        this.show_result(result);
    },

    logout(){
        fb.pcGameSDK.logout();
    },

    graph(){
       let back = fb.pcGameSDK.graphGet('/me/friends');
        this.show_result(back);
    }
}); 
