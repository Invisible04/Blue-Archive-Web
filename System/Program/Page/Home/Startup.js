const __ELEMENT = {
    //Custom Element
    CustomDeco: () => { return qs(".deco"); },
    CustomContainer: () => { return qs(".container"); },
    CustomAPCancelBtn: () => { return qs(".cappabb-cancel-btn-box"); },

    //Custom Container Element
    CustomMenuContainer: () => { return qs(".container-menu"); },
    CustomAPContainer: () => { return qs(".container-ap-purchase"); },
    CustomPyroxeneShopContainer: () => { return qs(".container-pyroxene-shop"); },
    CustomFullMenuContainer: () => { return qs(".mail-container"); },
    CustomFullProfileContainer: () => { return qs(".profile-container"); },

    //Custom Full Element
    CustomFullTitleBox: () => { return qs(".cnb-title-box"); },
    CustomFullTitleText: () => { return qs(".cntb-title-text"); },

    //Event Element
    EIItemBox: () => { return qs(".event-icon-preview"); },
    EIItems: () => { return qsa(".event-preview-box"); },
    EIDot: () => { return qsa(".db-dot"); },

    //======================================================================================================================//

    //Home Screen
    HS_ProfileBtn: () => { return qs(".profile-bar"); },
    HS_RecollectionSwitchBtn: () => { return qs(".preview-switch-btn"); },
    HS_UIHideBtn: () => { return qs(".preview-hider-btn"); },
    HS_UIHBIconHide: () => { return qs(".pbb-icon-hide"); },
    HS_UIHBIconUnhide: () => { return qs(".pbb-icon-unhide"); },
    // => Navigation
    HS_Nav_MainAddBtn: () => { return qsa(".add-icon"); },
    HS_Nav_RecollectionBtn: () => { return qs(".recollection-box"); },
    HS_Nav_MailBtn: () => { return qs(".mail-box"); },
    HS_Nav_MenuBtn: () => { return qs(".menu-box"); },

    //Popup Screen
    PS_CustomLayer: () => { return qs(".custom-layer"); },
    PS_CL_Window: () => { return qs(".cl-window-box"); },
    PS_CL_Fullscreen: () => { return qs(".cl-full-box"); },

    // => Content
    // => => AP Purchase Box
    // => => Pyroxene Shop
    PSC_PS_SpecialsBtn: () => { return qs(".cl5nb-tab-box-1"); },
    PSC_PS_PyroxeneBtn: () => { return qs(".cl5nb-tab-box-2"); },
    PSC_PS_PackagesBtn: () => { return qs(".cl5nb-tab-box-3"); },
    PSC_PS_SpecialsBox: () => { return qs(".cl5cb-specials-container-outer"); },
    PSC_PS_PyroxeneBox: () => { return qs(".cl5cb-pyroxene-container-outer"); },
    PSC_PS_PackagesBox: () => { return qs(".cl5cb-packages-container-outer"); },

    //Popup Screen [Window]
    // => Navigation Bar
    PSW_Nav_TitleBox: () => { return qs(".cl2tb-title"); },
    PSW_Nav_CloseBtn: () => { return qs(".cl2tb-menu-close-btn"); },
    // => Content
    PSW_CAPPB_Box: () => { return qs(".clwb-bar-box"); },
    PSW_CAPPB_ContentBox: () => { return qs(".cl2c-content-box"); },

    //Popup Screen [Full]
    // => Navigation Bar
    PSF_Nav_PyroShopBtn: () => { return qs(".ibpb-add-icon"); },
    PSF_Nav_EnergyBuyBtn: () => { return qs(".ibeb-add-icon"); },
    PSF_Nav_CloseBtn: () => { return qs(".cl1nb-back-btn-box"); },
    PSF_Nav_TitleBox: () => { return qs(".cl1nb-title-box"); },
    // => Content
    PSF_CAPPB_Box: () => { return qs(".clfb-container-bar"); },
};

const STARTUP_PopupBox_Template = {
    "Window": ``,
    "Fullscreen": ``,
}

const STARTUP_PopupPage_Template = {
    "AP_Purchase": `<div class="cl3cb-appurchase-content">
                        <div class="cl4ab-description-box">
                            <p class="title">Buy AP120?</p>
                            <p class="desc">3/3 purchase available</p>
                        </div>
                        <div class="cl4ab-ap-control-box">
                            <div class="min-btn-box cb-box">
                                <div class="deco"></div>
                                <div class="content">MIN</div>
                            </div>
                            <div class="decrease-btn-box cb-box">
                                <div class="deco"></div>
                                <div class="content">-</div>
                            </div>
                            <div class="pyroxene-display-box">
                                <div class="deco">
                                    <div class="box"></div>
                                    <img src="Assets/UI/Icon/Others/Currency/Currency_Icon_AP.png" alt="Energy">
                                </div>
                                <div class="content-box">
                                    <p class="ap-before">999</p>
                                    <img src="Assets/UI/Icon/Home/tutorial-arrow.png" alt="Change to">
                                    <p class="ap-after">1029</p>
                                </div>
                            </div>
                            <div class="increase-btn-box cb-box">
                                <div class="deco"></div>
                                <div class="content">+</div>
                            </div>
                            <div class="max-btn-box cb-box">
                                <div class="deco"></div>
                                <div class="content">MAX</div>
                            </div>
                        </div>
                        <div class="cl4ab-per-unit-price-box">
                            <p class="text">Per Unit</p>
                            <p class="per-unit-price">30</p>
                        </div>
                        <div class="cl4ab-total-price-box">
                            <p class="text">Total</p>
                            <p class="total-price">30</p>
                        </div>
                        <div class="cl4ab-action-button-box">
                            <div class="cancel-btn-box">
                                <div class="deco"></div>
                                <div class="deco-effect"></div>
                                <div class="content">CANCEL</div>
                            </div>
                            <div class="okey-btn-box">
                                <div class="deco"></div>
                                <div class="deco-effect"></div>
                                <div class="content">OK</div>
                            </div>
                        </div>
                    </div>`,
    "Pyroxene_Shop": `<div class="cl3cb-pyroxene-shop-content container-pyroxene-shop">
                        <div class="cl4psc-nav-bar">
                            <div class="tab-1-box cl5nb-tab-box cl5nb-tab-box-1" onclick="switchTab('Specials')">Special Sale</div>
                            <div class="tab-2-box cl5nb-tab-box cl5nb-tab-box-2 cl5nb-tab-selected" onclick="switchTab('Pyroxene')">Pyroxene</div>
                            <div class="tab-3-box cl5nb-tab-box cl5nb-tab-box-3" onclick="switchTab('Packages')">Packages</div>
                        </div>
                        <div class="cl4psc-container-box">
                            <div class="specials-container-outer cl5cb-specials-container-outer">
                                <div class="specials-container cl6sco-specials-container">
                                    <p>Packages not available</p>
                                </div>
                            </div>
                            <div class="pyroxene-container-outer cl5cb-pyroxene-container-outer">
                                <div class="pyroxene-container cl6pco-pyroxene-container">
                                    <div class="cl7pc-pc-line-1 cl7pc-pc-lines">
                                        <div class="cl8pl1-pyroxene-item-1 pyroxene-items">
                                            <div class="deco"></div>
                                            <div class="container">
                                                <div class="pi1-title">120 Pyroxene <br><p>88 Pcs + (Free) 32 Pcs</p></div>
                                                <div class="pi1-line"></div>
                                                <div class="pi1-icon-box">
                                                    <img src="Assets/UI/Icon/Home/Pyroxene Shop/Pyroxene/Goods_Icon_Gem_120.png" alt="120 Pyroxene">
                                                </div>
                                                <div class="pi1-hint">1 Purchase is possible</div>
                                                <div class="pi1-btn-box">
                                                    <div class="deco"></div>
                                                    <img src="Assets/UI/Decoration/button-poly-01.png" alt="">
                                                    <div class="container">
                                                        <div class="value-box">
                                                            <img src="Assets/UI/Icon/Others/" alt="Currency Symbol" hidden>
                                                            <p class="currency-text">MYR</p>
                                                            <p class="value">2.40</p>
                                                        </div>
                                                        <div class="text">Purchase</div>
                                                    </div>
                                                    <div class="value-box-deco"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cl8pl1-pyroxene-item-2 pyroxene-items">
                                            <div class="deco"></div>
                                            <div class="container">
                                                <div class="pi1-title">490 Pyroxene <br><p>240 Pcs + (Free) 150 Pcs</p></div>
                                                <div class="pi1-line"></div>
                                                <div class="pi1-icon-box">
                                                    <img src="Assets/UI/Icon/Home/Pyroxene Shop/Pyroxene/Goods_Icon_Gem_490.png" alt="490 Pyroxene">
                                                </div>
                                                <div class="pi1-hint">1 Purchase is possible</div>
                                                <div class="pi1-btn-box">
                                                    <div class="deco"></div>
                                                    <img src="Assets/UI/Decoration/button-poly-01.png" alt="">
                                                    <div class="container">
                                                        <div class="value-box">
                                                            <img src="Assets/UI/Icon/Others/" alt="Currency Symbol" hidden>
                                                            <p class="currency-text">MYR</p>
                                                            <p class="value">2.40</p>
                                                        </div>
                                                        <div class="text">Purchase</div>
                                                    </div>
                                                    <div class="value-box-deco"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cl8pl1-pyroxene-item-3 pyroxene-items">
                                            <div class="deco"></div>
                                            <div class="container">
                                                <div class="pi1-title">980 Pyroxene <br><p>720 Pcs + (Free) 260 Pcs</p></div>
                                                <div class="pi1-line"></div>
                                                <div class="pi1-icon-box">
                                                    <img src="Assets/UI/Icon/Home/Pyroxene Shop/Pyroxene/Goods_Icon_Gem_980.png" alt="980 Pyroxene">
                                                </div>
                                                <div class="pi1-hint">1 Purchase is possible</div>
                                                <div class="pi1-btn-box">
                                                    <div class="deco"></div>
                                                    <img src="Assets/UI/Decoration/button-poly-01.png" alt="">
                                                    <div class="container">
                                                        <div class="value-box">
                                                            <img src="Assets/UI/Icon/Others/" alt="Currency Symbol" hidden>
                                                            <p class="currency-text">MYR</p>
                                                            <p class="value">2.40</p>
                                                        </div>
                                                        <div class="text">Purchase</div>
                                                    </div>
                                                    <div class="value-box-deco"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cl7pc-pc-line-2 cl7pc-pc-lines">
                                        <div class="cl8pl2-pyroxene-item-4 pyroxene-items">
                                            <div class="deco"></div>
                                            <div class="container">
                                                <div class="pi1-title">1480 Pyroxene <br><p>980 Pcs + (Free) 500 Pcs</p></div>
                                                <div class="pi1-line"></div>
                                                <div class="pi1-icon-box">
                                                    <img src="Assets/UI/Icon/Home/Pyroxene Shop/Pyroxene/Goods_Icon_Gem_1480.png" alt="1480 Pyroxene">
                                                </div>
                                                <div class="pi1-hint">1 Purchase is possible</div>
                                                <div class="pi1-btn-box">
                                                    <div class="deco"></div>
                                                    <img src="Assets/UI/Decoration/button-poly-01.png" alt="">
                                                    <div class="container">
                                                        <div class="value-box">
                                                            <img src="Assets/UI/Icon/Others/" alt="Currency Symbol" hidden>
                                                            <p class="currency-text">MYR</p>
                                                            <p class="value">2.40</p>
                                                        </div>
                                                        <div class="text">Purchase</div>
                                                    </div>
                                                    <div class="value-box-deco"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cl8pl2-pyroxene-item-5 pyroxene-items">
                                            <div class="deco"></div>
                                            <div class="container">
                                                <div class="pi1-title">2940 Pyroxene <br><p>1890 Pcs + (Free) 1050 Pcs</p></div>
                                                <div class="pi1-line"></div>
                                                <div class="pi1-icon-box">
                                                    <img src="Assets/UI/Icon/Home/Pyroxene Shop/Pyroxene/Goods_Icon_Gem_2940.png" alt="2940 Pyroxene">
                                                </div>
                                                <div class="pi1-hint">1 Purchase is possible</div>
                                                <div class="pi1-btn-box">
                                                    <div class="deco"></div>
                                                    <img src="Assets/UI/Decoration/button-poly-01.png" alt="">
                                                    <div class="container">
                                                        <div class="value-box">
                                                            <img src="Assets/UI/Icon/Others/" alt="Currency Symbol" hidden>
                                                            <p class="currency-text">MYR</p>
                                                            <p class="value">2.40</p>
                                                        </div>
                                                        <div class="text">Purchase</div>
                                                    </div>
                                                    <div class="value-box-deco"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cl8pl2-pyroxene-item-6 pyroxene-items">
                                            <div class="deco"></div>
                                            <div class="container">
                                                <div class="pi1-title">4900 Pyroxene <br><p>3100 Pcs + (Free) 1800 Pcs</p></div>
                                                <div class="pi1-line"></div>
                                                <div class="pi1-icon-box">
                                                    <img src="Assets/UI/Icon/Home/Pyroxene Shop/Pyroxene/Goods_Icon_Gem_4900.png" alt="4900 Pyroxene">
                                                </div>
                                                <div class="pi1-hint">1 Purchase is possible</div>
                                                <div class="pi1-btn-box">
                                                    <div class="deco"></div>
                                                    <img src="Assets/UI/Decoration/button-poly-01.png" alt="">
                                                    <div class="container">
                                                        <div class="value-box">
                                                            <img src="Assets/UI/Icon/Others/" alt="Currency Symbol" hidden>
                                                            <p class="currency-text">MYR</p>
                                                            <p class="value">2.40</p>
                                                        </div>
                                                        <div class="text">Purchase</div>
                                                    </div>
                                                    <div class="value-box-deco"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cl7pc-pc-line-3 cl7pc-pc-lines">
                                        <div class="cl8pl3-pyroxene-item-7 pyroxene-items">
                                            <div class="deco"></div>
                                            <div class="container">
                                                <div class="pi1-title">10000 Pyroxene <br><p>7200 Pcs + (Free) 2800 Pcs</p></div>
                                                <div class="pi1-line"></div>
                                                <div class="pi1-icon-box">
                                                    <img src="Assets/UI/Icon/Home/Pyroxene Shop/Pyroxene/Goods_Icon_Gem_10000.png" alt="10000 Pyroxene">
                                                </div>
                                                <div class="pi1-hint">1 Purchase is possible</div>
                                                <div class="pi1-btn-box">
                                                    <div class="deco"></div>
                                                    <img src="Assets/UI/Decoration/button-poly-01.png" alt="">
                                                    <div class="container">
                                                        <div class="value-box">
                                                            <img src="Assets/UI/Icon/Others/" alt="Currency Symbol" hidden>
                                                            <p class="currency-text">MYR</p>
                                                            <p class="value">2.40</p>
                                                        </div>
                                                        <div class="text">Purchase</div>
                                                    </div>
                                                    <div class="value-box-deco"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="packages-container-outer cl5cb-packages-container-outer">
                                <div class="packages-container cl6pco-packages-container">
                                    <p>Packages not available</p>
                                </div>
                            </div>
                        </div>
                    </div>`,
    "Select_Duty": ``,
    "Mail":`<div class="mc-sidebar-nav">
                <div class="mcsn-tab-box">
                    <div class="sntb-unclaimed-tab">
                        <div class="tbt-selected-box snbtt-selected">Not Received</div>
                        <div class="tbt-content-box snbtt-unselected">Not Received</div>
                    </div>
                    <div class="sntb-history-tab">
                        <div class="tbt-selected-box snbtt-unselected">Receipt History</div>
                        <div class="tbt-content-box snbtt-selected">Receipt History</div>
                    </div>
                </div>
                <div class="mcsn-tool-box">
                    <div class="sntb-items-box">
                        <p>Items</p>
                        <div class="sntbtb-icon-box">
                            <img src="Assets/UI/Icon/Home/Menu/items-icon.png" alt="Items">
                        </div>
                    </div>
                    <div class="sntb-sort-box">
                        <p>From Newest</p>
                        <div class="sntbsb-icon-box">
                            <img class="img1" src="Assets/UI/Icon/Home/Mail/sort-a.png" alt="Sort">
                            <img class="img2" src="Assets/UI/Icon/Home/Mail/sort-b.png" alt="Icon">
                        </div>
                    </div>
                </div>
            </div>
            <div class="mc-container-box">
                <p class="mccb-mail-counter">0/200</p>
                <div class="mccb-mailbox">
                    <div class="content"></div>
                    <div class="deco">
                        <img src="Assets/UI/Icon/Home/Mail/img-mail-empty.png" alt="Empty">
                        <p>There is no mail</p>
                    </div>
                </div>
                <div class="mccb-bottom-box">
                    <p>※Up to 200 items can be stored. Mails that have passed the storage period will be deleted. It's a good idea. You can receive up to 100 items at a time.</p>
                    <div class="mcbbb-claim-all-btn">
                        <div class="deco"></div>
                        <div class="deco-effect"></div>
                        <div class="content">Claim All</div>
                    </div>
                </div>
            </div>`,
    "Menu":`<div class="clcm-menu-content-box">
                <div class="mcb-left-side-box mcb-content-box">
                    <div class="mcb-options-box mcb-items-box">
                        <div class="icon-box">
                            <img class="ib-options" src="Assets/UI/Icon/Home/Menu/option-icon.png" alt="Options">
                        </div>
                        <div class="details-box">
                            <p>Options</p>
                        </div>
                    </div>
                    <div class="mcb-equipment-box mcb-items-box">
                        <div class="icon-box">
                            <img class="ib-equipment" src="Assets/UI/Icon/Home/Menu/equipments-icon.png" alt="Equipment">
                        </div>
                        <div class="details-box">
                            <p>Equipment</p>
                        </div>
                    </div>
                    <div class="mcb-sticker-book-box mcb-items-box">
                        <div class="icon-box">
                            <img src="" alt="">
                        </div>
                        <div class="details-box">
                            <p>Sticker<br/>Book</p>
                        </div>
                    </div>
                </div>
                <div class="mcb-right-side-box mcb-content-box">
                    <div class="mcb-account-box mcb-items-box">
                        <div class="icon-box">
                            <img class="ib-account" src="Assets/UI/Icon/Home/Menu/account-icon.png" alt="Account">
                        </div>
                        <div class="details-box">
                            <p>Account</p>
                        </div>
                    </div>
                    <div class="mcb-items-box mcb-items-box">
                        <div class="icon-box">
                            <img class="ib-items" src="Assets/UI/Icon/Home/Menu/items-icon.png" alt="Items">
                        </div>
                        <div class="details-box">
                            <p>Items</p>
                        </div>
                    </div>
                    <div class="mcb-discord-box mcb-items-box">
                        <div class="icon-box">
                            <img src="" alt="">
                        </div>
                        <div class="details-box">
                            <p>Discord</p>
                        </div>
                    </div>
                </div>
            </div>`,
    "Profile":``,
}
