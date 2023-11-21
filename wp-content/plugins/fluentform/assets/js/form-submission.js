(() => {
    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e(t)
    }

    function t(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function r(e) {
        for (var r = 1; r < arguments.length; r++) {
            var i = null != arguments[r] ? arguments[r] : {};
            r % 2 ? t(Object(i), !0).forEach((function(t) {
                n(e, t, i[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }))
        }
        return e
    }

    function n(t, r, n) {
        return (r = function(t) {
            var r = function(t, r) {
                if ("object" !== e(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(t, r || "default");
                    if ("object" !== e(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String : Number)(t)
            }(t, "string");
            return "symbol" === e(r) ? r : String(r)
        }(r)) in t ? Object.defineProperty(t, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[r] = n, t
    }
    jQuery(document).ready((function() {
        window.fluentFormrecaptchaSuccessCallback = function(e) {
                if (window.innerWidth < 768 && /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                    var t = jQuery(".g-recaptcha").filter((function(t, r) {
                        return grecaptcha.getResponse(t) == e
                    }));
                    t.length && jQuery("html, body").animate({
                        scrollTop: t.first().offset().top - jQuery(window).height() / 2
                    }, 0)
                }
            }, window.ffValidationError = function() {
                var e = function() {};
                return (e.prototype = Object.create(Error.prototype)).constructor = e, e
            }(), window.ff_helper = {
                numericVal: function(e) {
                    if (e.hasClass("ff_numeric")) {
                        var t = JSON.parse(e.attr("data-formatter"));
                        return currency(e.val(), t).value
                    }
                    return e.val() || 0
                },
                formatCurrency: function(e, t) {
                    if (e.hasClass("ff_numeric")) {
                        var r = JSON.parse(e.attr("data-formatter"));
                        return currency(t, r).format()
                    }
                    return t
                }
            },
            function(e, t) {
                e || (e = {}), e.stepAnimationDuration = parseInt(e.stepAnimationDuration);
                var n = {};
                window.fluentFormApp = function(r) {
                    var i = r.attr("data-form_instance"),
                        o = window["fluent_form_" + i];
                    if (!o) return console.log("No Fluent form JS vars found!"), !1;
                    if (n[i]) return n[i];
                    var s, f, c, l, u, d, m, p, h, v, g, _, y, b, w, k, C, x, S, j, O, T, F, A, N = o.form_id_selector,
                        P = "." + i;
                    return s = a, f = {}, c = function() {
                        return t("body").find("form" + P)
                    }, u = function(e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "next";
                        r.trigger("update_slider", {
                            goBackToStep: e,
                            animDuration: t,
                            isScrollTop: n,
                            actionType: i
                        })
                    }, d = function(e) {
                        try {
                            var r = e.find(":input").filter((function(e, r) {
                                return !t(r).closest(".has-conditions").hasClass("ff_excluded")
                            }));
                            C(r);
                            var n = {
                                data: r.serialize(),
                                action: "fluentform_submit",
                                form_id: e.data("form_id")
                            };
                            if (t.each(e.find("[type=file]"), (function(e, r) {
                                    var i = {},
                                        a = r.name + "[]";
                                    i[a] = [], t(r).closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").each((function(e, r) {
                                        i[a][e] = t(this).data("src")
                                    })), t.each(i, (function(e, r) {
                                        if (r.length) {
                                            var i = {};
                                            i[e] = r, n.data += "&" + t.param(i)
                                        }
                                    }))
                                })), e.find(".ff_uploading").length) {
                                var i = t("<div/>", {
                                        class: "error text-danger"
                                    }),
                                    a = t("<span/>", {
                                        class: "error-clear",
                                        html: "&times;",
                                        click: function(e) {
                                            return t(P + "_errors").html("")
                                        }
                                    }),
                                    o = t("<span/>", {
                                        class: "error-text",
                                        text: "File upload in progress. Please wait..."
                                    });
                                return t(P + "_errors").html(i.append(o, a)).show()
                            }
                            if (e.find(".ff-el-recaptcha.g-recaptcha").length) {
                                var s = g(n.form_id);
                                s && (n.data += "&" + t.param({
                                    "g-recaptcha-response": grecaptcha.getResponse(s)
                                }))
                            }
                            if (e.find(".ff-el-hcaptcha.h-captcha").length) {
                                var c = _(n.form_id);
                                c && (n.data += "&" + t.param({
                                    "h-captcha-response": hcaptcha.getResponse(c)
                                }))
                            }
                            if (e.find(".ff-el-turnstile.cf-turnstile").length) {
                                var l = y(n.form_id);
                                l && (n.data += "&" + t.param({
                                    "cf-turnstile-response": l.getResponse(l)
                                }))
                            }
                            t(P + "_success").remove(), t(P + "_errors").html(""), e.find(".error").html(""), e.parent().find(".ff-errors-in-stack").hide(),
                                function(e, t) {
                                    var r = [],
                                        n = f;
                                    return e.hasClass("ff_has_v3_recptcha") && (n.ff_v3_recptcha = function(e, t) {
                                        var r = jQuery.Deferred(),
                                            n = e.data("recptcha_key");
                                        return grecaptcha.execute(n, {
                                            action: "submit"
                                        }).then((function(e) {
                                            t.data += "&" + jQuery.param({
                                                "g-recaptcha-response": e
                                            }), r.resolve()
                                        })), r.promise()
                                    }), jQuery.each(n, (function(n, i) {
                                        r.push(i(e, t))
                                    })), jQuery.when.apply(jQuery, r)
                                }(e, n).then((function() {
                                    p(e), m(e, n)
                                }))
                        } catch (e) {
                            if (!(e instanceof ffValidationError)) throw e;
                            x(e.messages), w(350)
                        }
                    }, m = function(r, n) {
                        var i, a, s = (i = "t=" + Date.now(), a = e.ajaxUrl, a += (a.split("?")[1] ? "&" : "?") + i);
                        if (!this.isSending) {
                            var f = this;
                            this.isSending = !0, t.post(s, n).then((function(n) {
                                if (!n || !n.data || !n.data.result) return r.trigger("fluentform_submission_failed", {
                                    form: r,
                                    response: n
                                }), void x(n);
                                if (n.data.append_data && F(n.data.append_data), n.data.nextAction) r.trigger("fluentform_next_action_" + n.data.nextAction, {
                                    form: r,
                                    response: n
                                });
                                else {
                                    if (r.triggerHandler("fluentform_submission_success", {
                                            form: r,
                                            config: o,
                                            response: n
                                        }), jQuery(document.body).trigger("fluentform_submission_success", {
                                            form: r,
                                            config: o,
                                            response: n
                                        }), "redirectUrl" in n.data.result) return n.data.result.message && (t("<div/>", {
                                        id: N + "_success",
                                        class: "ff-message-success"
                                    }).html(n.data.result.message).insertAfter(r), r.find(".ff-el-is-error").removeClass("ff-el-is-error")), void(location.href = n.data.result.redirectUrl);
                                    var i = N + "_success",
                                        a = "#" + i;
                                    t(a).length && t(a).slideUp("fast"), t("<div/>", {
                                        id: i,
                                        class: "ff-message-success"
                                    }).html(n.data.result.message).insertAfter(r), r.find(".ff-el-is-error").removeClass("ff-el-is-error"), "hide_form" == n.data.result.action ? (r.hide().addClass("ff_force_hide"), r[0].reset()) : (jQuery(document.body).trigger("fluentform_reset", [r, o]), r[0].reset());
                                    var s = t(a);
                                    s.length && !k(s[0]) && t("html, body").animate({
                                        scrollTop: s.offset().top - (t("#wpadminbar") ? 32 : 0) - 20
                                    }, e.stepAnimationDuration)
                                }
                            })).fail((function(t) {
                                if (r.trigger("fluentform_submission_failed", {
                                        form: r,
                                        response: t
                                    }), t && t.responseJSON && t.responseJSON && t.responseJSON.errors) {
                                    if (t.responseJSON.append_data && F(t.responseJSON.append_data), x(t.responseJSON.errors), w(350), r.find(".fluentform-step").length) {
                                        var n = r.find(".error").not(":empty:first").closest(".fluentform-step");
                                        if (n.length) {
                                            var i = n.index();
                                            u(i, e.stepAnimationDuration, !1)
                                        }
                                    }
                                } else x(t.responseText)
                            })).always((function(e) {
                                if (f.isSending = !1, h(r), window.grecaptcha) {
                                    var t = g(n.form_id);
                                    t && grecaptcha.reset(t)
                                }
                                if (window.hcaptcha && hcaptcha.reset(), window.turnstile) {
                                    var i = y(n.form_id);
                                    i && i.reset(i)
                                }
                            }))
                        }
                    }, v = function() {
                        "yes" != r.attr("data-ff_reinit") && (t(document).on("submit", P, (function(e) {
                            e.preventDefault(), window.ff_sumitting_form || (window.ff_sumitting_form = !0, setTimeout((function() {
                                window.ff_sumitting_form = !1
                            }), 1500), d(t(this)))
                        })), t(document).on("reset", P, (function(n) {
                            ! function(n) {
                                t(".ff-step-body", r).length && u(0, e.stepAnimationDuration, !1), n.find(".ff-el-repeat .ff-t-cell").each((function() {
                                    t(this).find("input").not(":first").remove()
                                })), n.find(".ff-el-repeat .ff-el-repeat-buttons-list").find(".ff-el-repeat-buttons").not(":first").remove();
                                var i = n.find("input[type=checkbox],input[type=radio]");
                                i.length && i.each((function(e, r) {
                                    (r = t(r)).prop("defaultChecked") ? r.closest(".ff-el-form-check").addClass("ff_item_selected") : r.closest(".ff-el-form-check.ff_item_selected").removeClass("ff_item_selected")
                                })), n.find("input[type=file]").closest("div").find(".ff-uploaded-list").html("").end().closest("div").find(".ff-upload-progress").addClass("ff-hidden").find(".ff-el-progress-bar").css("width", "0%");
                                var a = n.find('input[type="range"]');
                                a.length && a.each((function(e, r) {
                                    (r = t(r)).val(r.data("calc_value")).change()
                                })), t.each(o.conditionals, (function(e, r) {
                                    t.each(r.conditions, (function(e, t) {
                                        b(T(t.field))
                                    }))
                                }))
                            }(t(this))
                        })))
                    }, g = function(e) {
                        var r;
                        return t("form").has(".g-recaptcha").each((function(n, i) {
                            t(this).attr("data-form_id") == e && (r = n)
                        })), r
                    }, _ = function(e) {
                        var r;
                        return t("form").has(".h-captcha").each((function(n, i) {
                            t(this).attr("data-form_id") == e && (r = n)
                        })), r
                    }, y = function(e) {
                        var r;
                        return t("form").has(".cf-turnstile").each((function(n, i) {
                            t(this).attr("data-form_id") == e && (r = n)
                        })), r
                    }, b = function(e) {
                        var r = e.prop("type");
                        null != r && ("checkbox" == r || "radio" == r ? e.each((function(e, r) {
                            var n = t(this);
                            n.prop("checked", n.prop("defaultChecked"))
                        })) : r.startsWith("select") ? e.find("option").each((function(e, r) {
                            var n = t(this);
                            n.prop("selected", n.prop("defaultSelected"))
                        })) : e.val(e.prop("defaultValue")), e.trigger("change"))
                    }, w = function(e) {
                        var n = o.settings.layout.errorMessagePlacement;
                        if (n && "stackToBottom" != n) {
                            var i = r.find(".ff-el-is-error").first();
                            i.length && !k(i[0]) && t("html, body").delay(e).animate({
                                scrollTop: i.offset().top - (t("#wpadminbar") ? 32 : 0) - 20
                            }, e)
                        }
                    }, k = function(e) {
                        if (!e) return !0;
                        var r = e.getBoundingClientRect();
                        return r.top >= 0 && r.left >= 0 && r.bottom <= t(window).height() && r.right <= t(window).width()
                    }, x = function(e) {
                        if (r.parent().find(".ff-errors-in-stack").empty(), e)
                            if ("string" != typeof e) {
                                var n = o.settings.layout.errorMessagePlacement;
                                if (!n || "stackToBottom" == n) return S(e), !1;
                                r.find(".error").empty(), r.find(".ff-el-group").removeClass("ff-el-is-error"), t.each(e, (function(e, r) {
                                    "string" == typeof r && (r = [r]), t.each(r, (function(t, r) {
                                        j(e, r)
                                    }))
                                }))
                            } else S({
                                error: [e]
                            })
                    }, S = function(e) {
                        var r = c().parent().find(".ff-errors-in-stack");
                        e && (t.isEmptyObject(e) || (t.each(e, (function(e, n) {
                            "string" == typeof n && (n = [n]), t.each(n, (function(n, i) {
                                var a = t("<div/>", {
                                        class: "error text-danger"
                                    }),
                                    o = t("<span/>", {
                                        class: "error-clear",
                                        html: "&times;"
                                    }),
                                    s = t("<span/>", {
                                        class: "error-text",
                                        "data-name": T(e).attr("name"),
                                        html: i
                                    });
                                a.attr("role", "alert"), a.append(s, o), r.append(a).show()
                            }));
                            var i = T(e);
                            if (i) {
                                var a = i.attr("name");
                                i.attr("aria-invalid", "true");
                                var o = t("[name='" + a + "']").first();
                                o && o.closest(".ff-el-group").addClass("ff-el-is-error")
                            }
                        })), k(r[0]) || t("html, body").animate({
                            scrollTop: r.offset().top - 100
                        }, 350), r.on("click", ".error-clear", (function() {
                            t(this).closest("div").remove(), r.hide()
                        })).on("click", ".error-text", (function() {
                            var e = t("[name='".concat(t(this).data("name"), "']")).first();
                            t("html, body").animate({
                                scrollTop: e.offset() && e.offset().top - 100
                            }, 350, (function(t) {
                                return e.focus()
                            }))
                        }))))
                    }, j = function(e, r) {
                        var n, i;
                        (n = T(e)).length ? (n.attr("aria-invalid", "true"), (i = t("<div/>", {
                            class: "error text-danger"
                        })).attr("role", "alert"), n.closest(".ff-el-group").addClass("ff-el-is-error"), n.closest(".ff-el-input--content").find("div.error").remove(), n.closest(".ff-el-input--content").append(i.text(r))) : S([r])
                    }, O = function() {
                        r.find(".ff-el-group,.ff_repeater_table").on("change", "input,select,textarea", (function() {
                            if (!window.ff_disable_error_clear) {
                                t(this).attr("aria-invalid", "false");
                                var e = o.settings.layout.errorMessagePlacement;
                                if (e || "stackToBottom" != e) {
                                    var r = t(this).closest(".ff-el-group");
                                    r.hasClass("ff-el-is-error") && r.removeClass("ff-el-is-error").find(".error.text-danger").remove()
                                }
                            }
                        }))
                    }, T = function(e) {
                        var r = c(),
                            n = t("[data-name='" + e + "']", r);
                        return (n = n.length ? n : t("[name='" + e + "']", r)).length ? n : t("[name='" + e + "[]']", r)
                    }, F = function(e) {
                        jQuery.each(e, (function(e, n) {
                            if (n) {
                                var i = r.find("input[name=" + e + "]");
                                i.length ? i.attr("value", n) : t("<input>").attr({
                                    type: "hidden",
                                    name: e,
                                    value: n
                                }).appendTo(r)
                            }
                        }))
                    }, A = {
                        initFormHandlers: function() {
                            v(), l(), O(), r.removeClass("ff-form-loading").addClass("ff-form-loaded"), r.on("show_element_error", (function(e, t) {
                                j(t.element, t.message)
                            }))
                        },
                        registerFormSubmissionHandler: v,
                        maybeInlineForm: l = function() {
                            r.hasClass("ff-form-inline") && r.find("button.ff-btn-submit").css("height", "50px")
                        },
                        reinitExtras: function() {
                            if (r.find(".ff-el-recaptcha.g-recaptcha").length) {
                                var e = (n = r.find(".ff-el-recaptcha.g-recaptcha")).data("sitekey"),
                                    t = n.attr("id");
                                grecaptcha.render(document.getElementById(t), {
                                    sitekey: e
                                })
                            }
                            var n;
                            r.find(".ff-el-turnstile.cf-turnstile").length && (e = (n = r.find(".ff-el-turnstile.cf-turnstile")).data("sitekey"), t = n.attr("id"), console.log(t), turnstile.render(document.getElementById(t), {
                                sitekey: e
                            }))
                        },
                        initTriggers: function() {
                            r = c(), jQuery(document.body).trigger("fluentform_init", [r, o]), jQuery(document.body).trigger("fluentform_init_" + o.id, [r, o]), r.trigger("fluentform_init_single", [this, o]), r.find("input.ff-el-form-control").on("keypress", (function(e) {
                                return 13 !== e.which
                            })), r.data("is_initialized", "yes"), r.find(".ff-el-tooltip").on("mouseenter", (function(e) {
                                var n = t(this).data("content"),
                                    i = t(".ff-el-pop-content");
                                i.length || (t("<div/>", {
                                    class: "ff-el-pop-content"
                                }).appendTo(document.body), i = t(".ff-el-pop-content")), i.html(n);
                                var a = r.innerWidth() - 20;
                                i.css("max-width", a);
                                var o = t(this).offset().left,
                                    s = i.outerWidth(),
                                    f = i.outerHeight(),
                                    c = o - s / 2 + 10;
                                c < 15 && (c = 15), i.css("top", t(this).offset().top - f - 5), i.css("left", c)
                            })), r.find(".ff-el-tooltip").on("mouseleave", (function() {
                                t(".ff-el-pop-content").remove()
                            }))
                        },
                        validate: C = function(e) {
                            e.length || (e = t(".frm-fluent-form").find(":input").not(":button").filter((function(e, r) {
                                return !t(r).closest(".has-conditions").hasClass("ff_excluded")
                            }))), e.each((function(e, r) {
                                t(r).closest(".ff-el-group").removeClass("ff-el-is-error").find(".error").remove()
                            })), s().validate(e, o.rules)
                        },
                        showErrorMessages: x,
                        scrollToFirstError: w,
                        settings: o,
                        formSelector: P,
                        sendData: m,
                        addGlobalValidator: function(e, t) {
                            f[e] = t
                        },
                        config: o,
                        showFormSubmissionProgress: p = function(e) {
                            e.addClass("ff_submitting"), e.find(".ff-btn-submit").addClass("disabled").addClass("ff-working").prop("disabled", !0)
                        },
                        hideFormSubmissionProgress: h = function(e) {
                            e.removeClass("ff_submitting"), e.find(".ff-btn-submit").removeClass("disabled").removeClass("ff-working").attr("disabled", !1), r.parent().find(".ff_msg_temp").remove()
                        }
                    }, n[i] = A, A
                };
                var i = {
                        init: function() {
                            var e = this;
                            setTimeout((function() {
                                e.initMultiSelect()
                            }), 100), this.initMask(), this.initNumericFormat(), this.initCheckableActive()
                        },
                        initMultiSelect: function() {
                            t.isFunction(window.Choices) && t(".ff_has_multi_select").length && t(".ff_has_multi_select").each((function(e, n) {
                                var i = r(r({}, {
                                        removeItemButton: !0,
                                        silent: !0,
                                        shouldSort: !1,
                                        searchEnabled: !0,
                                        searchResultLimit: 50
                                    }), window.fluentFormVars.choice_js_vars),
                                    a = t(n).attr("data-max_selected_options");
                                parseInt(a) && (i.maxItemCount = parseInt(a), i.maxItemText = function(e) {
                                    var t = window.fluentFormVars.choice_js_vars.maxItemText;
                                    return t = t.replace("%%maxItemCount%%", e)
                                }), i.callbackOnCreateTemplates = function() {
                                    t(this.passedElement.element);
                                    return {
                                        option: function(e) {
                                            var t = Choices.defaults.templates.option.call(this, e);
                                            return e.customProperties && (t.dataset.calc_value = e.customProperties), t
                                        }
                                    }
                                }, t(n).data("choicesjs", new Choices(n, i))
                            }))
                        },
                        initMask: function() {
                            if (null != jQuery.fn.mask) {
                                var e = {
                                    clearIfNotMatch: window.fluentFormVars.input_mask_vars.clearIfNotMatch,
                                    translation: {
                                        "*": {
                                            pattern: /[0-9a-zA-Z]/
                                        },
                                        0: {
                                            pattern: /\d/
                                        },
                                        9: {
                                            pattern: /\d/,
                                            optional: !0
                                        },
                                        "#": {
                                            pattern: /\d/,
                                            recursive: !0
                                        },
                                        A: {
                                            pattern: /[a-zA-Z0-9]/
                                        },
                                        S: {
                                            pattern: /[a-zA-Z]/
                                        }
                                    }
                                };
                                t("input[data-mask]").each((function(r, n) {
                                    var i = (n = t(n)).data("mask").mask,
                                        a = e;
                                    n.attr("data-mask-reverse") && (a.reverse = !0), n.attr("data-clear-if-not-match") && (a.clearIfNotMatch = !0), n.mask(i, a)
                                }))
                            }
                        },
                        initCheckableActive: function() {
                            t(document).on("change", ".ff-el-form-check input[type=radio]", (function() {
                                t(this).is(":checked") && (t(this).closest(".ff-el-input--content").find(".ff-el-form-check").removeClass("ff_item_selected"), t(this).closest(".ff-el-form-check").addClass("ff_item_selected"))
                            })), t(document).on("change", ".ff-el-form-check input[type=checkbox]", (function() {
                                t(this).is(":checked") ? t(this).closest(".ff-el-form-check").addClass("ff_item_selected") : t(this).closest(".ff-el-form-check").removeClass("ff_item_selected")
                            }))
                        },
                        initNumericFormat: function() {
                            var e = t(".frm-fluent-form .ff_numeric");
                            t.each(e, (function(e, r) {
                                var n = t(r),
                                    i = JSON.parse(n.attr("data-formatter"));
                                n.val() && n.val(window.ff_helper.formatCurrency(n, n.val())), n.on("blur change", (function() {
                                    var e = currency(t(this).val(), i).format();
                                    t(this).val(e)
                                }))
                            }))
                        }
                    },
                    a = function() {
                        return new function() {
                            this.errors = {}, this.validate = function(e, r) {
                                var n, i, a = this,
                                    o = !0;
                                e.each((function(e, s) {
                                    n = t(s), i = n.prop("name").replace("[]", ""), "repeater_item" === n.data("type") && (i = n.attr("data-name"), r[i] = r[n.data("error_index")]), r[i] && t.each(r[i], (function(e, t) {
                                        e in a && (a[e](n, t) || (o = !1, i in a.errors || (a.errors[i] = {}), a.errors[i][e] = t.message))
                                    }))
                                })), !o && this.throwValidationException()
                            }, this.throwValidationException = function() {
                                var e = new ffValidationError("Validation Error!");
                                throw e.messages = this.errors, e
                            }, this.required = function(e, r) {
                                if (!r.value) return !0;
                                var n = e.prop("type");
                                if ("checkbox" == n || "radio" == n) return e.parents(".ff-el-group").attr("data-name") && !r.per_row ? e.parents(".ff-el-group").find("input:checked").length : t('[name="' + e.prop("name") + '"]:checked').length;
                                if (n.startsWith("select")) {
                                    var i = e.find(":selected");
                                    return !(!i.length || !i.val().length)
                                }
                                return "file" == n ? e.closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").length : "false" == e.attr("is-changed") ? "" : String(t.trim(e.val())).length
                            }, this.url = function(e, t) {
                                var r = e.val();
                                if (!t.value || !r.length) return !0;
                                return /^(ftp|http|https):\/\/[^ "]+$/.test(r)
                            }, this.email = function(e, t) {
                                var r = e.val();
                                if (!t.value || !r.length) return !0;
                                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r.toLowerCase())
                            }, this.numeric = function(e, r) {
                                var n = window.ff_helper.numericVal(e);
                                return n = n.toString(), !r.value || !n || t.isNumeric(n)
                            }, this.min = function(e, t) {
                                var r = window.ff_helper.numericVal(e);
                                return r = r.toString(), !t.value || !r.length || (this.numeric(e, t) ? Number(r) >= Number(t.value) : void 0)
                            }, this.max = function(e, t) {
                                var r = window.ff_helper.numericVal(e);
                                return r = r.toString(), !t.value || !r.length || (this.numeric(e, t) ? Number(r) <= Number(t.value) : void 0)
                            }, this.digits = function(e, t) {
                                var r = window.ff_helper.numericVal(e);
                                return r = r.toString(), !t.value || !r.length || this.numeric(e, t) && r.length == t.value
                            }, this.max_file_size = function() {
                                return !0
                            }, this.max_file_count = function() {
                                return !0
                            }, this.allowed_file_types = function() {
                                return !0
                            }, this.allowed_image_types = function() {
                                return !0
                            }, this.valid_phone_number = function(e, t) {
                                if (!e.val()) return !0;
                                if (void 0 === window.intlTelInputGlobals) return !0;
                                if (e && e[0]) {
                                    var r = window.intlTelInputGlobals.getInstance(e[0]);
                                    if (!r) return !0;
                                    if (e.hasClass("ff_el_with_extended_validation")) return !!r.isValidNumber() && (e.val(r.getNumber()), !0);
                                    var n = r.getSelectedCountryData(),
                                        i = e.val();
                                    return !e.attr("data-original_val") && i && n && n.dialCode && (e.val("+" + n.dialCode + i), e.attr("data-original_val", i)), !0
                                }
                            }
                        }
                    },
                    o = t(".frm-fluent-form");

                function s(e) {
                    var t = fluentFormApp(e);
                    if (t) t.initFormHandlers(), t.initTriggers();
                    else var r = 0,
                        n = setInterval((function() {
                            (t = fluentFormApp(e)) && (clearInterval(n), t.initFormHandlers(), t.initTriggers()), ++r > 10 && (clearInterval(n), console.log("Form could not be loaded"))
                        }), 1e3)
                }
                t.each(o, (function(e, r) {
                    s(t(r))
                })), t(document).on("ff_reinit", (function(e, r) {
                    var n = t(r),
                        a = fluentFormApp(n);
                    if (!a) return !1;
                    a.reinitExtras(), window.hcaptcha && hcaptcha.reset(), s(n), i.init(), n.attr("data-ff_reinit", "yes")
                })), i.init()
            }(window.fluentFormVars, jQuery), jQuery(".fluentform").on("submit", ".ff-form-loading", (function(e) {
                e.preventDefault(), jQuery(this).parent().find(".ff_msg_temp").remove(), jQuery("<div/>", {
                    class: "error text-danger ff_msg_temp"
                }).html("Javascript handler could not be loaded. Form submission has been failed. Reload the page and try again").insertAfter(jQuery(this))
            }))
    }))
})();