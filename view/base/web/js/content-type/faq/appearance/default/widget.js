define([
    'jquery',
    'accordion'
], function ($) {
    'use strict';

    return function (config, element) {
        var element = $(element);
        var active = [];

        element.children("li").each(function (i) {
            $(this).find("[data-collapsible]").attr("data-role", "collapsible");
            $(this).find("[data-content]").attr("data-role", "content");
            active.push(i)
        });

        element.accordion({
            collapsible: true,
            multipleCollapsible: true,
            openedState: "active",
            active: active
        });
    };
});
