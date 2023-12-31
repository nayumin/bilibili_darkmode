// ==UserScript==
// @name         dark theme 4 bilibili.tv
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       discord @nayumin
// @match        https://www.bilibili.tv/*
// @grant        GM_addStyle
// @description  dark theme 4 bilibili.tv
// ==/UserScript==
(function() {
    GM_addStyle(`
        .ip-watermark,
        .video-watermark {
            display: none !important;
        }

        :root {
            --main-sl-color: #3390ff;
            --main-text-color: #c4c0b9;
            --main-text2-color: #999;
            --main-bg-color: #111;
            --main-bg2-color: #111;
        }

        .quiz {
            /*         display :none; */
            visibility: hidden;
        }

        html {
            color-scheme: dark !important;
        }

        .vip-product-header {
            background: none !important;
        }

        /* highlight */
        .bstar-tab--solid .bstar-tab__item.active[data-v-496690a6],
        .ep-item__reference--active,
        .ep-item__reference--active:hover,
        .timeline-tab__item--active[data-v-95892f62],
        .bstar-video-card__tag,
        .scroll-container__item--active,
        .scroll-container__item:hover,
        .bstar-tab__item.active,
        .anime-tag {
            color: rgb(81, 167, 249) !important;
            background-image: initial;
            background-color: rgba(6, 66, 156, 0.1) !important;
        }

        .children-comment-list__operate-item:hover {
            color: rgb(81, 167, 249) !important;
        }

        /* text color 2nd */
        .bstar-sidebar__footer>a,
        .bstar-video-card__desc,
        .bstar-video-card__nickname,
        div.bstar-meta-up-follow__user-info>div,
        div.category__container ul>li>a,
        .horizontal-card__info_desc,
        .vertical-card__desc[data-v-4c1292a9],
        .live-card .live-info .info-content .info-desc .info-desc-nickname[data-v-ad5523fe],
        .content,
        .comment__translation[data-v-4a77d45e],
        .comment-send__textarea__inner textarea::placeholder,
        .up-card__sign,
        .up-card__list__item {
            color: var(--main-text2-color) !important;
        }

        /* text color main*/
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        ul,
        li,
        input,
        label,
        textarea,
        .room-title,
        .anchor-name,
        .follow-value,
        .gift-txt,
        .popularity-value,
        .message-text-part,
        .title,
        .content,
        .bstar-header__list-item,
        .live-list-title,
        .info-desc-nickname,
        .info-title,
        .comment-send__textarea__inner,
        .comment-wrap__total,
        .bstar-header-search-suggest__item,
        .highlight-word,
        .comp-uploader-card__body-desc_item em[data-v-ab4833e4],
        .gift-title,
        .gift-price,
        .my-balance,
        .star-num,
        .dialog__header-title,
        .balance.el-tooltip__trigger.el-tooltip__trigger,
        .cover-local__text-color-text,
        .MsoNormal,
        .act-rich-render-content p span,
        .iugc__describe.help-center__describe div,
        .feedback__dialog-title,
        .comment-send__btn.comment-send__btn--disable,
        .up-card__count,
        .vip-payment-entity__name,
        .vip-product-header__info-title,
        .text-align-type-justify.pap-line-1.pap-spacing-after-0pt.paragraph.pap-line-rule-auto.pap-spacing-before-0pt span {
            color: var(--main-text-color) !important;
        }

        /* bg-color */
        .filters,
        .bstar-header,
        .fav__header,
        .history__header,
        .bstar-header-search-bar__input,
        .el-popover.el-popper.popover-gift-item_wrapper,
        .el-popper.is-light.tooltip-operation-popper,
        .gift-panel,
        .el-dialog.payment-dialog,
        .rank-footer.rank-0,
        .dialog__container.dialog__container--medium.dialog__container--login.dialog__container--show,
        .el-loading-mask,
        .app__right,
        .el-dialog.feedback__dialog,
        .bstar-video-card__title-text,
        .card-section.card-section--single.timeline,
        .dialog__container.dialog__container--large.dialog__container--vip-product-dialog.dialog__container--show,
        .dialog__container.dialog__container--medium.dialog__container--undefined.dialog__container--show {
            background-color: var(--main-bg-color) !important;
        }

        /*   anime schedule   */
        .timeline,
        .bstar-video-card__title.bstar-video-card__title--small.bstar-video-card__title--bold a {
            background-color: #111 !important;
        }

        /*   today section   */
        .timeline-header.timeline-header--today {
            border-top-color: rgb(52, 56, 58);
            border-right-color: rgb(52, 56, 58);
            border-left-color: rgb(52, 56, 58);
            border-bottom-color: initial;
            background-image: linear-gradient(rgb(33, 35, 36) 0%, rgb(29, 31, 32) 100%);
        }

        /*    highlight line */
        .timeline-header.timeline-header--today p,
        .timeline-header.timeline-header--today h5,
        .bstar-video-card__desc--highlight {
            color: rgb(81, 167, 249) !important;
        }

        /*    dot  */
        .timeline-card--today.timeline-card--updated .timeline-card__dot {
            background: #4c93ff !important;
        }

        .timeline-card__dot {
            background-image: initial;
            background-color: rgb(50, 54, 56) !important;
            border-color: rgb(52, 56, 58) !important;
        }

        .current-time__icon {
            border: none !important;
        }

        /* text color/bg-color */
        html,
        nav,
        body,
        a,
        div[class^="bstar-header"],
        div[class^="bstar-comment"],
        div[class^="comment"],
        div[class^="bstar-meta"],
        header.bstar-header.bstar-header--mobile,
        .interactive,
        .interactive__text,
        .category__container,
        .login-tip span,
        .el-dialog.dialog-top_up {
            color: var(--main-text-color) !important;
            background-color: var(--main-bg-color) !important;
        }

        /* bg/bg-color */
        .home-page,
        .gift-control,
        .room,
        .room-info,
        .intl-live-rank,
        .rank-header,
        .rank-list-wrapper,
        .comment-sender-wrapper,
        .live-comment-container,
        .room-page .live-rank-container[data-v-b5575423],
        .room-introduction-box,
        .comment-area {
            background: var(--main-bg-color) !important;
            background-color: var(--main-bg-color) !important;
        }

        .rank-header,
        .live-rank-container,
        .comment-area,
        .live-comment-container,
        .room-page,
        .live-comment-container,
        .room-introduction-box,
        .el-popper.is-light.tooltip-operation-popper {
            /*         border-color: #565d60 !important */
            border-color: rgba(153, 153, 153, 0.2) !important;
        }

        .message-text-part.type-name {
            color: rgb(0, 255, 127) !important;
        }

        .anime-timeline:not(.anime-timeline--mobile) .anime-timeline__subtitle[data-v-f640ef7a]:after {
            background-image: none !important;
        }

        .back-top--position[data-v-f101b496],
        .bstar-back-top--pc[data-v-f101b496],
        .bstar-back-top--mobile[data-v-f101b496],
        .cover-local__text-shadow[data-v-20049f6a],
        .live-rank-container {
            background: none !important;
        }

        .bstar-header__left-menu,
        .bstar-sidebar__link:before,
        .bstar-header-search-bar__btn>button,
        .bstar-header__list-item:before,
        .bstar-tooltip__body-reference img,
        .card-section__more[data-v-d1603a8d],
        .expand-icon,
        .popularity-icon,
        .room-info .room-info-rt .popularity .operation-icon[data-v-628aa857],
        .series__more-icon[data-v-9e7367c2] {
            filter: brightness(450%);
        }

        .bstar-header,
        .bstar-header-search-recommend,
        .bstar-header-search__popup {
            border-color: #16181c !important;
        }

        .bstar-header-search-history__item,
        .textarea.textarea--limit {
            color: var(--main-text-color) !important;
            background-color: #27292a;
            border-color: #27292a;
        }

        .bstar-video-card__cover-mask-text {
            background-color: transparent;
        }

        .room-page[data-v-b5575423] {
            background: var(--main-bg-color);
        }

        /* astronaut animation */
        .back-top--position[data-v-f101b496],
        .bstar-back-top--pc[data-v-f101b496],
        .bstar-back-top--mobile[data-v-f101b496] {
            background-repeat: no-repeat;
            background-position: left top;
            width: 160px;
            height: 160px;
            text-indent: 110%;
            white-space: nowrap;
            overflow: hidden;
            border: hidden;
            box-shadow: none;
            -webkit-animation: linear infinite;
            -webkit-animation-name: UpAndDown;
            -webkit-animation-duration: 2s;
        }

        @-webkit-keyframes UpAndDown {

            0%,
            100% {
                bottom: 0;
            }

            50% {
                bottom: 100px;
            }
        }

        body>div.bstar-back-top.bstar-back-top--pc>div,
        body>div.bstar-back-top.bstar-back-top--pc>i {
            display: none;
            box-shadow: none;
            border: hidden;
        }

        .el-dialog__headerbtn .el-dialog__close {
            color: #909399 !important;
        }

        /*  comment    */
        .comment-send__btn,
        .login-footer__link[data-v-4d0c43f3] {
            color: #4c93ff !important;
        }

        .comment-wrap__send div div,
        .comment-send__textarea__inner>textarea[data-v-58f8ed7d] {
            border-radius: 4px;
            background-color: var(--main-bg2-color) !important;
        }

        .up-card {
            border-color: rgb(54, 59, 61) !important;
            background-color: rgb(24, 26, 27) !important;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px !important;
        }

        /*  line    */
        .bstar-header-user-content__footer:before {
            background: var(--main-bg2-color) !important;
        }

        .bstar-header__upload-content-header,
        .bstar-header-user-content__head,
        .gift-detail,
        .gift-panel-header {
            border-bottom: 1px solid var(--main-bg2-color) !important;
        }

        .bstar-sidebar__followings,
        .bstar-sidebar__footer {
            border-top: 1px solid var(--main-bg2-color) !important;
        }

        table {
            border-color: #565d60;
        }

        *::placeholder,
        *::-webkit-input-placeholder {
            color: #afa99f !important;
        }

        input:-webkit-autofill,
        textarea:-webkit-autofill,
        select:-webkit-autofill {
            background-color: #434706 !important;
            color: #e3e1de !important;
        }

        ::-webkit-scrollbar,
        [data-v-be0df7a9]::-webkit-scrollbar {
            background-color: #252829;
            color: #a9a298;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #484d50;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: var(--main-sl-color);
        }

        ::-webkit-scrollbar-thumb:active {
            background-color: #4b5053;
        }

        ::-webkit-scrollbar-corner {
            background-color: var(--main-bg-color);
        }

        ::selection {
            background-color: var(--main-sl-color) !important;
            color: var(--main-bg-color) !important;
        }

        ::-moz-selection {
            background-color: var(--main-sl-color) !important;
            color: var(--main-bg-color) !important;
        }

        /*     studio.bilibili.tv */
        .nav-menu__menu-title,
        .global-header__left-text,
        .home-login__bold,
        .home-login__data-number,
        .home-login__detail.home-login__title-flex,
        .top-list__header-title,
        .top-card__content-title,
        .top-card__tab .el-tabs__item.is-active,
        .card-item__name,
        .video-manage__title-text,
        .video-manage__tab-cell,
        .archive-card__li-title-text,
        .video-manage__title,
        .notify-data-wrap__tab,
        .text-joining__span.bold,
        .playlist__title,
        .reply__header,
        .ban-card__text-content,
        .ban__title,
        .el-tabs__item.is-top,
        .info__video-title[data-v-536de02c],
        .step-one__drop-text,
        .video-cell__title,
        .step-two__upload-tip,
        .step-two__time-item,
        .step-two__activity-btn,
        .tag-selctor__header,
        .ugc-dialog__header,
        .activity-dialog__title span,
        .playlist-title,
        .cover-local__header,
        .cover-local__title,
        .mobile__container-title,
        .analysis-trends__video-title,
        .intl__tab,
        .analysis-trends__overview-title-text,
        .analysis-trends__overview-yesterday-data[data-v-3c9014cd],
        .analysis-trends__overview-total-data[data-v-3c9014cd],
        .analysis-trends__overview-header[data-v-3c9014cd],
        .analysis-trends__trend-title,
        .analysis-trends__trend-category-item,
        .video-dialog__title,
        .custom-menu__back-btn,
        .custom-menu__meta-title,
        .tag-selctor__tag-text,
        .el-menu-item.custom-menu__menu-cell.custom-menu__menu-cell-edit,
        .custom-menu__menu-title,
        .el-message-box__title,
        .cover-selector__tabs.cover-selector__title,
        .cover-local__upload-title,
        .notify-page__title,
        .el-popover,
        .global-header__menu-name,
        .global-header__lang-cell,
        .choose-language-text,
        .global-header__space-container,
        .ban-card__anchor-item-text,
        .analysis-trends__chart-list-title,
        .analysis-trends__chart-list-card-title,
        .act-rich-style-init2 .public-DraftEditor-content,
        .act-rich-style-init2 .act-rich-render-content {
            color: var(--main-text-color) !important;
        }

        .activity-dialog__extra,
        .drag-desc,
        .video-cell__title-info p,
        .chop-warning-normal,
        .el-message-box__message p {
            color: var(--main-text2-color) !important;
        }

        .reply-textarea__single-input.el-textarea textarea::placeholder,
        .el-textarea textarea::placeholder {
            color: #afa99f !important;
        }

        .global-header,
        .nav-menu.app__left,
        .el-menu-item.nav-menu__menu-cell.nav-menu__menu-cell-feedback,
        .home-login__video-data.home-login__section,
        .top-list,
        .nav-menu__menu-cell:hover:not(.el-submenu):not(.is-active),
        .el-input__inner,
        body>div.el-select-dropdown.el-popper.top-list__select-popper,
        .app__right-body,
        .el-popover.el-popper.notify-popover,
        .ban__content,
        .step-one,
        .video-list,
        .step-two__content.step-two__main-content,
        .inner-form-label__dot-wrapper,
        .el-textarea__inner,
        .el-input__count-inner,
        .step-two__activity-btn,
        .tag-selctor__remain,
        .el-dialog.cover-selector,
        .intl-card,
        .analysis-trends__overview-header[data-v-3c9014cd],
        .custom-menu__top,
        .step-two__tag-link-wrap,
        .global-header__head-dropdown {
            background-color: var(--main-bg-color) !important;
        }

        .el-popover {
            background: var(--main-bg-color) !important;
        }

        .app__right.hasMenu,
        .home-login__left,
        .el-menu,
        .home-login__data-card,
        .card-item__item,
        .el-pagination.is-background .btn-next,
        .el-pagination.is-background .btn-prev,
        .el-pagination.is-background .el-pager li,
        .notify-data-wrap__tip,
        .step-two__reprint-wrapper,
        .el-dialog.ugc-dialog.activity-dialog,
        .activity-dialog__item-outer-selected,
        .step-two__operate-btn.i-basic-button.default-btn,
        .mobile__header-block,
        .mobile__img-block,
        .mobile__container-avator-block,
        .mobile__container-name-block,
        .mobile__container-title-block,
        .mobile__bottom-block,
        .analysis-trends__video[data-v-d3e06f26],
        .analysis-trends .el-date-editor--daterange,
        .analysis-trends .el-range-input,
        .el-dialog.ugc-dialog.video-dialog {
            background-color: #111;
        }

        .video-manage__search,
        .video-manage .video-manage__search input,
        .analysis-trends__chart-list {
            background-color: var(--main-bg2-color) !important;
        }

        .el-input__inner,
        .el-textarea__inner {
            color: rgb(167, 160, 150) !important;
        }

        .video-manage__tab-cell.active,
        .ban-card__anchor-item-active {
            position: relative;
            color: #4c93ff !important;
        }

        .el-select-dropdown,
        .el-textarea,
        .el-message-box,
        /*   drag and drop   */
        .archives-list-drag .archives-list-container .archives-list-draggable .archive-item.draging,
        .up-card {
            border-color: rgb(54, 59, 61) !important;
            background-color: rgb(24, 26, 27) !important;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px !important;
        }

        .el-textarea__inner,
        .el-cascader__dropdown,
        .i-basic-button.default-btn {
            color: rgb(169, 162, 151);
            background-color: rgb(24, 26, 27);
            border-color: rgb(56, 61, 64);
        }

        .cover-local__text-add[data-v-20049f6a] {
            background-color: rgb(24, 26, 27);
        }

        /*     mobile */
        .mobile {
            background-color: rgb(24, 26, 27);
        }

        .mobile__content {
            background-image: initial;
            background-color: rgb(24, 26, 27);
            border-color: rgb(51, 55, 57);
        }

        .mobile__bottom {
            border-color: rgb(51, 55, 57);
        }

        .el-input__count {
            background: none !important;
            padding-right: 20px !important;
        }

        #step-one__drop,
        .cover-local__upload-wrap[data-v-50b30f22],
        .animated.archives-list-draggable.smooth-dnd-draggable-wrapper {
            border-color: rgb(61, 66, 68) !important;
        }

        .custom-default__btn {
            outline-color: initial;
            border-color: rgb(59, 62, 65);
            background-color: rgb(29, 31, 32);
            color: rgb(196, 192, 185);
        }

        .info__video-item[data-v-536de02c] {
            background: var(--main-bg2-color) !important;
        }

        /*     hightlight */
        .global-header__lang-dropdown .el-select-dropdown__item.hover,
        .global-header__popover .el-select-dropdown__item.hover,
        .notify-popover .el-select-dropdown__item.hover,
        .top-list__select-popper .el-select-dropdown__item.hover,
        .video-manage__type-picker-cell.active,
        .notify-data-wrap__tab.active,
        .ban__tab-content .el-tabs__item.is-active,
        .step-two__form-item-playlist-select-dropdown .el-select-dropdown__item:hover,
        .el-select-dropdown__item.selected.hover,
        .el-select-dropdown__item.hover,
        .el-select-dropdown__item:hover,
        .el-cascader-node:not(.is-disabled):focus,
        .el-cascader-node:not(.is-disabled):hover,
        .video-cell__upload-new,
        .cover-local__re-upload,
        .edit-btn:hover,
        .intl__tab:hover,
        .analysis-trends__trend-category-item[data-v-3c9014cd]:hover,
        .el-menu-item:focus,
        .el-menu-item:hover,
        .global-header__menu-row:hover,
        .bstar-header__list-item:hover,
        .global-header__language-container__choose-language:hover,
        .global-header__lang-cell.active,
        .global-header__menu-row:hover,
        .global-header__menu-row.global-header__head-dropdown__logout span:hover,
        .global-header__menu-row.global-header__head-dropdown__homepage span:hover,
        .global-header__menu-row.global-header__head-dropdown__language span:hover,
        .global-header__space-container:hover,
        .ban-card__anchor-item-text:hover {
            color: rgb(81, 167, 249) !important;
            background-image: initial;
            background-color: rgba(6, 66, 156, 0.1) !important;
        }

        .nav-menu__menu-cell.is-active .nav-menu__menu-title {
            color: #4c93ff !important;
        }

        /*    drag and drop  */
        .el-menu-item.is-active.nav-menu__menu-cell p {
            color: rgb(73, 170, 249) !important;
        }

        .analysis-trends__trend-category--active[data-v-3c9014cd] {
            background-image: initial;
            background-color: rgba(0, 63, 158, 0.1);
            color: rgb(79, 169, 255) !important;
        }

        .top-card__content-item-yellow,
        .top-card__content-item-blue,
        .archive-card:hover,
        .activity-dialog__item-outer-selected,
        .analysis-trends__video[data-v-d3e06f26],
        .custom-menu__meta {
            background-image: none;
        }

        /*     line */
        .el-divider,
        .el-select-group__wrap:not(:last-of-type):after,
        .global-header__language-container__line {
            background: var(--main-bg2-color) !important;
        }

        .comment__operate__icon.reply[data-v-4a77d45e] {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yMzYgLTAuNTgzIC0wLjYzOCAwLjAwMCAxLjAwOSAtMC42MTMgMC4yNzQgLTAuNjMxIDAuMDAwIDAuOTk1IC0wLjYwNCAtMC41NzkgMC4yMzggMC4wMDAgMC45NjkgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0S1BITjJaeUIzYVdSMGFEMGlNakp3ZUNJZ2FHVnBaMmgwUFNJeU1uQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01qSWdNaklpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJK0NpQWdJQ0E4ZEdsMGJHVStZMjl0YldWdWREd3ZkR2wwYkdVK0NpQWdJQ0E4WkdWbWN6NEtJQ0FnSUNBZ0lDQThjbVZqZENCcFpEMGljR0YwYUMweElpQjRQU0l3SWlCNVBTSXdJaUIzYVdSMGFEMGlNaklpSUdobGFXZG9kRDBpTWpJaVBqd3ZjbVZqZEQ0S0lDQWdJQ0FnSUNBOGJXRnpheUJwWkQwaWJXRnpheTB5SWlCdFlYTnJRMjl1ZEdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lnYldGemExVnVhWFJ6UFNKdlltcGxZM1JDYjNWdVpHbHVaMEp2ZUNJZ2VEMGlNQ0lnZVQwaU1DSWdkMmxrZEdnOUlqSXlJaUJvWldsbmFIUTlJakl5SWlCbWFXeHNQU0ozYUdsMFpTSStDaUFnSUNBZ0lDQWdJQ0FnSUR4MWMyVWdlR3hwYm1zNmFISmxaajBpSTNCaGRHZ3RNU0krUEM5MWMyVStDaUFnSUNBZ0lDQWdQQzl0WVhOclBnb2dJQ0FnUEM5a1pXWnpQZ29nSUNBZ1BHY2dhV1E5SW1OdmJXMWxiblFpSUhOMGNtOXJaVDBpYm05dVpTSWdjM1J5YjJ0bExYZHBaSFJvUFNJeElpQm1hV3hzUFNKdWIyNWxJaUJtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpUGdvZ0lDQWdJQ0FnSUR4MWMyVWdhV1E5SW5JaUlITjBjbTlyWlQwaUl6TXpNek16TXlJZ2JXRnphejBpZFhKc0tDTnRZWE5yTFRJcElpQnZjR0ZqYVhSNVBTSXdJaUJ6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVQU0l5TGpRaUlIaHNhVzVyT21oeVpXWTlJaU53WVhSb0xURWlQand2ZFhObFBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHhOQ3d5TGpjMUlFdzRMREl1TnpVZ1F6UXVNamN5TURjM09UUXNNaTQzTlNBeExqSTFMRFV1TnpjeU1EYzNPVFFnTVM0eU5TdzVMalVnVERFdU1qVXNNVGd1TlNCRE1TNHlOU3d4T0M0NU1UUXlNVE0ySURFdU5UZzFOemcyTkRRc01Ua3VNalVnTWl3eE9TNHlOU0JNTVRRc01Ua3VNalVnUXpFM0xqY3lOemt5TWpFc01Ua3VNalVnTWpBdU56VXNNVFl1TWpJM09USXlNU0F5TUM0M05Td3hNaTQxSUV3eU1DNDNOU3c1TGpVZ1F6SXdMamMxTERVdU56Y3lNRGMzT1RRZ01UY3VOekkzT1RJeU1Td3lMamMxSURFMExESXVOelVnV2lCTk9DdzBMakkxSUV3eE5DdzBMakkxSUVNeE5pNDRPVGswT1RRNUxEUXVNalVnTVRrdU1qVXNOaTQyTURBMU1EVXdOaUF4T1M0eU5TdzVMalVnVERFNUxqSTFMREV5TGpVZ1RERTVMakkwTlRZeU1Td3hNaTQzTVRZME1EUTJJRU14T1M0eE16SXhNekUyTERFMUxqVXhOVFUxTVRFZ01UWXVPREkzTURBM05pd3hOeTQzTlNBeE5Dd3hOeTQzTlNCTU1pNDNOU3d4Tnk0M05TQk1NaTQzTlN3NUxqVWdRekl1TnpVc05pNDJNREExTURVd05pQTFMakV3TURVd05UQTJMRFF1TWpVZ09DdzBMakkxSUZvaUlHbGtQU0xubjZubHZhSWlJR1pwYkd3OUlpTXpNek16TXpNaUlHWnBiR3d0Y25Wc1pUMGlibTl1ZW1WeWJ5SStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lEeGphWEpqYkdVZ2FXUTlJdWFrcmVXY2h1VzlvaUlnWm1sc2JEMGlJelJET1ROR1JpSWdZM2c5SWpZdU1qUTVNRGt4SWlCamVUMGlNVEV1TWpVaUlISTlJakV1TWpVaVBqd3ZZMmx5WTJ4bFBnb2dJQ0FnSUNBZ0lEeGphWEpqYkdVZ2FXUTlJdWFrcmVXY2h1VzlvdVdraCtTN3ZTSWdabWxzYkQwaUl6UkRPVE5HUmlJZ1kzZzlJakV3TGpjME9UQTVNU0lnWTNrOUlqRXhMakkxSWlCeVBTSXhMakkxSWo0OEwyTnBjbU5zWlQ0S0lDQWdJQ0FnSUNBOFkybHlZMnhsSUdsa1BTTG1wSzNsbklibHZhTGxwSWZrdTcwdE1pSWdabWxzYkQwaUl6UkRPVE5HUmlJZ1kzZzlJakUxTGpJME9UQTVNU0lnWTNrOUlqRXhMakkxSWlCeVBTSXhMakkxSWo0OEwyTnBjbU5zWlQ0S0lDQWdJRHd2Wno0S1BDOXpkbWMrIiAvPjwvc3ZnPg==");
        }

        /*     like icon */
        .interactive__btn.interactive__like::before,
        .comment__operate__icon.like[data-v-4a77d45e] {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yMzYgLTAuNTgzIC0wLjYzOCAwLjAwMCAxLjAwOSAtMC42MTMgMC4yNzQgLTAuNjMxIDAuMDAwIDAuOTk1IC0wLjYwNCAtMC41NzkgMC4yMzggMC4wMDAgMC45NjkgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCemRHRnVaR0ZzYjI1bFBTSnVieUkvUGp3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krUEhOMlp5QmpiR0Z6Y3owaWFXTnZiaUlnZDJsa2RHZzlJakkwY0hnaUlHaGxhV2RvZEQwaU1qUXVNREJ3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREV3TWpRZ01UQXlOQ0lnZG1WeWMybHZiajBpTVM0eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBqeHdZWFJvSUdROUlrMDFNVGt1TnpFNU16ZzFJRFk0TGpreU16QTNOMk10TlRZdU16SWdNQzA0TWk0ME16SWdNamN1TmpRNExURXdNeTQwTWpRZ09UQXVPRGs1TmpreWJDMHhPUzQ1TWpnMk1UWWdOalV1TkRrMk5qRTJMVFF1TURFM01qTXhJREV5TGpZNE1UZzBOa016TmprdU5UZzFNak14SURNd05pNDBNVEl6TURnZ016RTNMalU1TnpVek9DQXpOVEV1TkRJNE9USXpJREl6TWk0NU9Ua3pPRFVnTXpjMExqRTFNemcwTm13dE1URXVNakkwTmpFMklESXVPRE0xTmpreVlURTBOeTQyT1RJek1EZ2dNVFEzTGpZNU1qTXdPQ0F3SURBZ01DMHhNVE11TkRZM01EYzNJREUwTXk0MU1UYzFNemxXTnpnM0xqWTVNak13T0dFeE5EY3VOamt5TXpBNElERTBOeTQyT1RJek1EZ2dNQ0F3SURBZ01UUTNMalk1TWpNd09DQXhORGN1TmpreU16QTNhRFF4TkM0NE16Z3hOVFJoTWpFMExqWTBOakUxTkNBeU1UUXVOalEyTVRVMElEQWdNQ0F3SURJd055NHdORFE1TWpNdE1UVTRMakExTURRMk1XdzFOUzR3TlRrMk9USXRNakF4TGpNM016VXpPV0V4TkRjdU5qa3lNekE0SURFME55NDJPVEl6TURnZ01DQXdJREFnTlM0eE9UZzNOamt0TXpndU9UVXhNemcwYkMwd0xqRTVOamt5TXkwM0xqZ3pOelV6T1dFeE5EY3VOamt5TXpBNElERTBOeTQyT1RJek1EZ2dNQ0F3SURBdE1UUTNMalE1TlRNNE5DMHhNemt1T0RFMU16ZzBiQzB4TmpJdU1EWTNOamt6TFRBdU1ETTVNemcxSURRdU1ERTNNak14TFRjdU5qQXhNak14WXpJMExqTTNPVEEzTnkwME9DNDVPVFEwTmpJZ016WXVNemt4TXpnMUxURXdPUzR4TnpReE5UUWdNell1TXpreE16ZzFMVEU0TUM0eE9EUTJNVFVnTUMwM055NDFPRGMyT1RJdE5qUXVPVGcwTmpFMUxURXpNaTQyTURndE1UUTVMakEzTURjMk9TMHhNekl1TmpBNGVpQnRNQ0ExT1M0d056WTVNak5qTlRNdU5EUTBPVEl6SURBZ09Ea3VPVGt6T0RRMklETXdMamt4TmpreU15QTRPUzQ1T1RNNE5EWWdOek11TlRNeE1EYzNJREFnT0RndU1ESTBOakUxTFRJd0xqSXdORE13T0NBeE5UTXVORGd4T0RRMkxUVTVMalU0T0RreU15QXhPVGN1TnpFd056WTVZVEk1TGpVek9EUTJNaUF5T1M0MU16ZzBOaklnTUNBd0lEQWdNakl1TURVMU16ZzBJRFE1TGpFMU1tZ3lNVGd1TWpZNU5UTTVZVGc0TGpZeE5UTTROU0E0T0M0Mk1UVXpPRFVnTUNBd0lERWdPRFV1TkRZME5qRTFJREV4TVM0NU56QTBOakpzTFRVMUxqQXlNRE13T0NBeU1ERXVNemN6TlRNNFlURTFOUzQxTmpreU16RWdNVFUxTGpVMk9USXpNU0F3SURBZ01TMHhOVEF1TURVMU16ZzBJREV4TkM0MU5qazRORFpJTWpVMlFUZzRMall4TlRNNE5TQTRPQzQyTVRVek9EVWdNQ0F3SURFZ01UWTNMak00TkRZeE5TQTNPRGN1TmpreU16QTRkaTB5TmpjdU1UZzFNak14WVRnNExqWXhOVE00TlNBNE9DNDJNVFV6T0RVZ01DQXdJREVnTmpndU1EVTJOakUyTFRnMkxqQTFOVE00TldNeE1UQXVNVEU1TXpnMUxUSTJMakU1TURjMk9TQXhPREl1TXpVd056WTVMVGcxTGpnMU9EUTJNaUF5TVRJdU9UVXlOakUxTFRFM055NDNPREl4TlRSc01USXVNamc0TFRNNUxqWTVPVFk1TWlBNUxqSTVORGMyT1Mwek1TNHhOVE15TXpFZ05DNDNNall4TlRRdE1UUXVORFUwTVRVell6RXlMakl3T1RJek1TMHpOUzR3T1RFMk9USWdNakV1T0RVNE5EWXlMVFF6TGpNMk1qUTJNaUEwTlM0d01UWTJNVFl0TkRNdU16WXlORFl5ZWlJZ1ptbHNiRDBpSXpNek16TXpNeUlnTHo0OGNHRjBhQ0JrUFNKTk1qYzFMalk1TWpNd09DQTFNRFl1TURreU16QTRZVEk1TGpVek9EUTJNaUF5T1M0MU16ZzBOaklnTUNBd0lERWdNamt1TWpZeU56WTVJREkxTGpVeU1USXpiREF1TWpjMU5qa3lJRFF1TURFM01qTXhkakl5T0M0ME16QTNOamxoTWprdU5UTTRORFl5SURJNUxqVXpPRFEyTWlBd0lEQWdNUzAxT0M0NE1ERXlNekVnTkM0d01UY3lNekZNTWpRMkxqRTFNemcwTmlBM05qUXVNRFl4TlRNNGRpMHlNamd1TkRNd056WTVZVEk1TGpVek9EUTJNaUF5T1M0MU16ZzBOaklnTUNBd0lERWdNamt1TlRNNE5EWXlMVEk1TGpVek9EUTJNWG9pSUdacGJHdzlJaU0wUXprelJrWWlJQzgrUEM5emRtYysiIC8+PC9zdmc+");
        }

        /*     history icon */
        .bstar-header__action.history {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yMzYgLTAuNTgzIC0wLjYzOCAwLjAwMCAxLjAwOSAtMC42MTMgMC4yNzQgLTAuNjMxIDAuMDAwIDAuOTk1IC0wLjYwNCAtMC41NzkgMC4yMzggMC4wMDAgMC45NjkgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0S1BITjJaeUIzYVdSMGFEMGlNalJ3ZUNJZ2FHVnBaMmgwUFNJeU5IQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJK0NpQWdJQ0E4ZEdsMGJHVStTVU5QVGk4eU5DL2xqb2JsajdMb3JyRGx2WlU4TDNScGRHeGxQZ29nSUNBZ1BHY2dhV1E5SWtGdWFXMWxJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUlITjBjbTlyWlMxM2FXUjBhRDBpTVNJZ1ptbHNiRDBpYm05dVpTSWdabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJajRLSUNBZ0lDQWdJQ0E4WnlCcFpEMGk2YUcyNWErODVyV3U1YkdDWCtXT2h1V1BzaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xUSTNNRGN1TURBd01EQXdMQ0F0TXpFNU55NHdNREF3TURBcElqNEtJQ0FnSUNBZ0lDQWdJQ0FnUEdjZ2FXUTlJdWU4bHVlN2hDMHpNeUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01UQXlOeTR3TURBd01EQXNJRE14TnpjdU1EQXdNREF3S1NJK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFp5QnBaRDBpU1VOUFRpOHlOQy9sam9ibGo3TG9yckRsdlpVaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREUyT0RBdU1EQXdNREF3TENBeU1DNHdNREF3TURBcElqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y21WamRDQnBaRDBpNTUrcDViMmlJaUJtYVd4c1BTSWpNVUV4UVRGQklpQnZjR0ZqYVhSNVBTSXdJaUI0UFNJd0lpQjVQU0l3SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlQand2Y21WamRENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WnlCcFpEMGk1WTJnNUwyTklpQnZjR0ZqYVhSNVBTSXdJaUJ6ZEhKdmEyVTlJaU01TnprM09UY2lQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NakFzTkNCTU1qQXNNakFnVERRc01qQWdURFFzTkNCTU1qQXNOQ0JhSWlCcFpEMGlVbVZqZEdGdVoyeGxMVE10UTI5d2VTMHlJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqZ2lJR1pwYkd3OUlpTkVPRVE0UkRnaUlHOXdZV05wZEhrOUlqQXVNeUkrUEM5d1lYUm9QZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjbVZqZENCcFpEMGlVbVZqZEdGdVoyeGxMVU52Y0hrdE1pSWdiM0JoWTJsMGVUMGlNQzR6SWlCNFBTSXlMalk1T1RFNE16WTNJaUI1UFNJeUxqWTJJaUIzYVdSMGFEMGlNVGd1TmpBeE5qTXlOeUlnYUdWcFoyaDBQU0l4T0M0Mk9DSStQQzl5WldOMFBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGNtVmpkQ0JwWkQwaVVtVmpkR0Z1WjJ4bExVTnZjSGt0TWlJZ2IzQmhZMmwwZVQwaU1DNHpJaUI0UFNJekxqa3pPRE0yTnpNMUlpQjVQU0l4TGpRMklpQjNhV1IwYUQwaU1UWXVNVEl6TWpZMU15SWdhR1ZwWjJoMFBTSXlNUzR3T0NJK1BDOXlaV04wUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y21WamRDQnBaRDBpVW1WamRHRnVaMnhsTFVOdmNIa3RNaUlnYjNCaFkybDBlVDBpTUM0eklpQjRQU0l4TGpRMklpQjVQU0l6TGprNElpQjNhV1IwYUQwaU1qRXVNRGdpSUdobGFXZG9kRDBpTVRZdU1EUWlQand2Y21WamRENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHTnBjbU5zWlNCcFpEMGlUM1poYkMweUlpQnZjR0ZqYVhSNVBTSXdMak1pSUdONFBTSXhNaUlnWTNrOUlqRXlJaUJ5UFNJeE1DNDFOQ0krUEM5amFYSmpiR1UrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOW5QZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4bklHbGtQU0xudkpibnU0UXROQ0lnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01TNHlNREF3TURBc0lERXVNakF3TURBd0tTSWdjM1J5YjJ0bExYZHBaSFJvUFNJeExqVWlQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThZMmx5WTJ4bElHbGtQU0xtcEszbG5JYmx2YUlpSUhOMGNtOXJaVDBpSXpNek16TXpNeUlnWTNnOUlqRXdMamdpSUdONVBTSXhNQzQ0SWlCeVBTSXhNQzR3TlNJK1BDOWphWEpqYkdVK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d2IyeDViR2x1WlNCcFpEMGk2TGV2NWI2RUxUSWlJSE4wY205clpUMGlJelJET1ROR1JpSWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWlCemRISnZhMlV0YkdsdVpXcHZhVzQ5SW5KdmRXNWtJaUJ3YjJsdWRITTlJamt1T0RFNE1UZ3hPRElnTmk0Mk5UUTFORFUwTlNBNUxqZ3hPREU0TVRneUlERXlMalUwTlRRMU5EVWdNVE11TnpRMU5EVTBOU0F4TWk0MU5EVTBOVFExSWo0OEwzQnZiSGxzYVc1bFBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUNBZ0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lEd3ZaejRLUEM5emRtYysiIC8+PC9zdmc+");
        }

        /*  favorite icon */
        .bstar-header__action.fav,
        .interactive__fav[data-v-58f3f6ab]:before {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yMzYgLTAuNTgzIC0wLjYzOCAwLjAwMCAxLjAwOSAtMC42MTMgMC4yNzQgLTAuNjMxIDAuMDAwIDAuOTk1IC0wLjYwNCAtMC41NzkgMC4yMzggMC4wMDAgMC45NjkgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0S1BITjJaeUIzYVdSMGFEMGlNalJ3ZUNJZ2FHVnBaMmgwUFNJeU5IQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJK0NpQWdJQ0E4ZEdsMGJHVStTVU5QVGk4eU5DL21sTGJvbDQ4OEwzUnBkR3hsUGdvZ0lDQWdQR2NnYVdROUlrRnVhVzFsSWlCemRISnZhMlU5SW01dmJtVWlJSE4wY205clpTMTNhV1IwYUQwaU1TSWdabWxzYkQwaWJtOXVaU0lnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWo0S0lDQWdJQ0FnSUNBOFp5QnBaRDBpNmFHMjVhKzg1cld1NWJHQ1grYVV0dWlYanlJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9MVEk0TWpjdU1EQXdNREF3TENBdE1UVXpPUzR3TURBd01EQXBJajRLSUNBZ0lDQWdJQ0FnSUNBZ1BHY2dhV1E5SXVtaHR1V3Z2Ri9sdDdMbm1idmx2WlhscElma3U3MGlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RFd01qY3VNREF3TURBd0xDQXhOVEU1TGpBd01EQXdNQ2tpUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdjZ2FXUTlJdWU4bHVlN2hDMHlOaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01UY3dOQzR3TURBd01EQXNJREl3TGpBd01EQXdNQ2tpUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeG5JR2xrUFNKSlEwOU9MekkwTCthVXR1aVhqeUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb09UWXVNREF3TURBd0xDQXdMakF3TURBd01Da2lQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjbVZqZENCcFpEMGk1NStwNWIyaUlpQm1hV3hzUFNJalEwTkRRME5ESWlCdmNHRmphWFI1UFNJd0lpQjRQU0l3SWlCNVBTSXdJaUIzYVdSMGFEMGlNalFpSUdobGFXZG9kRDBpTWpRaVBqd3ZjbVZqZEQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRZdU9EWXpOak0yTXpZc01pNDNNamN5TnpJM015Qk1NVGN1TVRNMk16WXpOaXd5TGpjeU56STNNamN6SUVNeE9DNDFNVGN3TnpVMUxESXVOekkzTWpjeU56TWdNVGt1TmpNMk16WXpOaXd6TGpnME5qVTJNRGcxSURFNUxqWXpOak0yTXpZc05TNHlNamN5TnpJM015Qk1NVGt1TmpNMk16WXpOaXd5TUM0Mk5EQTBOVFkzSUVNeE9TNDJNell6TmpNMkxESXhMakU1TWpjME1UUWdNVGt1TVRnNE5qUTROQ3d5TVM0Mk5EQTBOVFkzSURFNExqWXpOak0yTXpZc01qRXVOalF3TkRVMk55QkRNVGd1TkRZeU16TTJOeXd5TVM0Mk5EQTBOVFkzSURFNExqSTVNVE15TWpRc01qRXVOVGsxTURReE5DQXhPQzR4TkRBeU1qUTNMREl4TGpVd09EWTVPVGdnVERFeUxqUTVOakV6T0Rrc01UZ3VNamd6TlRBNElFTXhNaTR4T0RnM01EWXpMREU0TGpFd056Z3pNaklnTVRFdU9ERXhNamt6Tnl3eE9DNHhNRGM0TXpJeUlERXhMalV3TXpnMk1URXNNVGd1TWpnek5UQTRJRXcxTGpnMU9UYzNOVE1zTWpFdU5UQTROams1T0NCRE5TNHpPREF5TlRjNE5pd3lNUzQzT0RJM01EazRJRFF1TnpZNU5EQXpNVGtzTWpFdU5qRTJNVEV6TVNBMExqUTVOVE01TXpJeUxESXhMakV6TmpVNU5UWWdRelF1TkRBNU1EVXhOamdzTWpBdU9UZzFORGszT1NBMExqTTJNell6TmpNMkxESXdMamd4TkRRNE16WWdOQzR6TmpNMk16WXpOaXd5TUM0Mk5EQTBOVFkzSUV3MExqTTJNell6TmpNMkxEVXVNakkzTWpjeU56TWdRelF1TXpZek5qTTJNellzTXk0NE5EWTFOakE0TlNBMUxqUTRNamt5TkRRNUxESXVOekkzTWpjeU56TWdOaTQ0TmpNMk16WXpOaXd5TGpjeU56STNNamN6SUZvaUlHbGtQU0xubjZubHZhSWlJSE4wY205clpUMGlJek16TXpNek15SWdjM1J5YjJ0bExYZHBaSFJvUFNJeExqVWlJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRFeUxEWXVPVGt5TkRJME1qUWdRekV5TGpReE5ESXhNellzTmk0NU9USTBNalF5TkNBeE1pNDNOU3czTGpNeU9ESXhNRFk0SURFeUxqYzFMRGN1TnpReU5ESTBNalFnVERFeUxqYzBPVGd4T0RJc01UQXVNRFl3TkRJME1pQk1NVFV1TURZNE1UZ3hPQ3d4TUM0d05qQTJNRFl4SUVNeE5TNDBPREl6T1RVMExERXdMakEyTURZd05qRWdNVFV1T0RFNE1UZ3hPQ3d4TUM0ek9UWXpPVEkxSURFMUxqZ3hPREU0TVRnc01UQXVPREV3TmpBMk1TQkRNVFV1T0RFNE1UZ3hPQ3d4TVM0eU1qUTRNVGsySURFMUxqUTRNak01TlRRc01URXVOVFl3TmpBMk1TQXhOUzR3TmpneE9ERTRMREV4TGpVMk1EWXdOakVnVERFeUxqYzBPVGd4T0RJc01URXVOVFl3TkRJME1pQk1NVEl1TnpVc01UTXVPRGM0TnpnM09TQkRNVEl1TnpVc01UUXVNamt6TURBeE5DQXhNaTQwTVRReU1UTTJMREUwTGpZeU9EYzROemtnTVRJc01UUXVOakk0TnpnM09TQkRNVEV1TlRnMU56ZzJOQ3d4TkM0Mk1qZzNPRGM1SURFeExqSTFMREUwTGpJNU16QXdNVFFnTVRFdU1qVXNNVE11T0RjNE56ZzNPU0JNTVRFdU1qUTVPREU0TWl3eE1TNDFOakEwTWpReUlFdzRMamt6TVRneE9ERTRMREV4TGpVMk1EWXdOakVnUXpndU5URTNOakEwTmpJc01URXVOVFl3TmpBMk1TQTRMakU0TVRneE9ERTRMREV4TGpJeU5EZ3hPVFlnT0M0eE9ERTRNVGd4T0N3eE1DNDRNVEEyTURZeElFTTRMakU0TVRneE9ERTRMREV3TGpNNU5qTTVNalVnT0M0MU1UYzJNRFEyTWl3eE1DNHdOakEyTURZeElEZ3VPVE14T0RFNE1UZ3NNVEF1TURZd05qQTJNU0JNTVRFdU1qUTVPREU0TWl3eE1DNHdOakEwTWpReUlFd3hNUzR5TlN3M0xqYzBNalF5TkRJMElFTXhNUzR5TlN3M0xqTXlPREl4TURZNElERXhMalU0TlRjNE5qUXNOaTQ1T1RJME1qUXlOQ0F4TWl3MkxqazVNalF5TkRJMElGb2lJR2xrUFNMbHZhTG5pcmJudTVQbGtJamxwSWZrdTcwdE5pSWdabWxzYkQwaUl6UkRPVE5HUmlJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBZ0lDQWdQQzluUGdvZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUR3dlp6NEtQQzl6ZG1jKyIgLz48L3N2Zz4=");
        }

        /* community icon */
        .live-card .live-info .info-content .info-desc .info-desc-popular,
        .bstar-video-card__desc--icon:before {
            color: var(--main-text-color) !important;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yMzYgLTAuNTgzIC0wLjYzOCAwLjAwMCAxLjAwOSAtMC42MTMgMC4yNzQgLTAuNjMxIDAuMDAwIDAuOTk1IC0wLjYwNCAtMC41NzkgMC4yMzggMC4wMDAgMC45NjkgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUVSbFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBNkFCQUFNQUFBQUJBQUVBQUtBQ0FBUUFBQUFCQUFBQUlLQURBQVFBQUFBQkFBQUFJQUFBQUFDc2htTHpBQUFEdGtsRVFWUllDZTJWU1VpVWNSVEFaMHZLNVJBdHdxRFZHSzBtRlRQTzZJUWtrUmJvb1FqcVVnbEJDTkVDMFNHSWFPeFFTRWdiclVTTDFVbTZHZEVoR3FMY1J6cUVHdWkwMEdCR1JwUjVtTFhmbTc1UHZtK2NSYnQ0OFErUDkvNXYvNy8zdnZjWkRMTm50Z0l6WEFIamRPTlhWbGJtam8rUGw1aE1wdUdPam82UDA3VlAxSjl5QXFXbHBSdWkwZWhOSEpRQ0puRmtOQnBIUVkyMXRiVk5IbzhuS3J6cG5pa2xRUEM5QkwrTDh6bkpBcENJTnhhTFZmdDh2bEF5ZVRxZU9aMVFaR1ZsWmNzaWtjaFR5SGxBbjlsczNrZXd3OUFQQ0F5S1Y4UUdqZzBQRDN1RlVWRlJzWWpUYjdWYTl4UVdGbjRKQkFKRHdrOTJNbGJBYnJmZnh2QWdFTWpMeTF2bjlYcC9haDBoUDgvOUpNbUVjM056NXlNZkkrazFvVkNvVC9UZ1I1aVhtcTZ1cnVkYU81V085MUs5cE1CTzRlUGtXbUp3NFZzc0ZrbUFvc1FzRE9kRzRUR2MvZkFkQkg4STMwejdtb1NmN0dSTUFDY3JGY09rWmV6czdQeUZ6amZSb1ZXcjFDRHdmVDA5UGZ1NTk1SkVzY3ZsS2xCbFdwd3hBWXhIRklNU3JhRkt1OTN1eGVqa3k1MzUrS3J5TmJoRGFLcXdYTU9iSURNbXdPdGtBTVhCRWZxOVpNSlNJWUxCNEFXRi9KT2RuZTFObEdPL1ZuZ2ttU3c1Z3lYUklQRk83ODlRMnAzd3JZRFA0WEEwOE5KMkVyTGk5QkN3WFd6UU95NERLTFFjU3A2UFRqMVF5Zld6eldZYnBDVWkwcDJNQ1RDOW83eThFYXZMd0VJQ1hnMkh3em9uWEFaeWNuSmtUOFFQYlZsS1pRYlFuYXV3ZWhVOENhVnRnZFBwWE1DTFpmdGRuR1NwWjZ3ZUd4dDdpLzRXUFh2aXRzUHY5NzhzTHkrWFhhSTdLUk9RYjVuUzkvT0tlaXhFcjAvYUFWVFIxeEkrczNKd0hmQUVDS05YalA0TEV2YTB0YlY5UXE4QWZqWFFyRVNzb0NvM2RORzVKRjFFTW13WXZzR3BPUGtOSEsycHFXbE90ZThKS3AvZkxmUTNLd0dPc1phdnFNSHdkeHI2TEJETnlzcGExZDdlUHFqS0psV0FJTUpybGVEZzc0Qzd1N3Y3ZnFyZzRvamhlbzkrRmVSanVYTXU4Zi9ZK284MEdJcUtpczd4aUIvY1RXekliU3BmOEtRRVdsdGJkOE9YYno1S0dYZmgvSjBvWmpyeUl5TFFBZlE2QVNNSk5hZzJMUzB0RWVqNFBvQWYzeG1xVEpjQVFtbkpLUkdTOFNOZS9rcFZuQW9tVUpCUFZINVV1SXE1dFVNcDh3UC9Edko3V2wrNkdjREF3U0IxS3dwMlhwWHk4OUU2U2FTWmlkY2tzSWxITkZQQnVrUzU5cTZyQUV2REpVSU1SLzQzdU9MOG1ZTExGSndTNlJKQVM3YWQxTzlEU291cENmeUtuN2kvZENhNkJIaDVRSlRCOFlGSlo1aE94Z082a0VkVmYrbDBkUWt3ZE5kWk1PdHROdHVKZEVhWlpMUnZpS0ZiUVNMeGxtYlNuNVhQVm1CR0svQVhKQkIyY1FPUGd6c0FBQUFBU1VWT1JLNUNZSUk9IiAvPjwvc3ZnPg==") !important;
        }
    `);
})();

