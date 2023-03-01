const country = { aq: "Antarctica", ba: "Bosnia and Herzegovina", ca: "Canada", cu: "Cuba", cy: "Cyprus", fi: "Finland", ae: "United Arab Emirates", am: "Armenia", bd: "Bangladesh", cm: "Cameroon", cx: "Christmas Island", gb: "United Kingdom", gm: "Gambia", gs: "South Georgia Island", ad: "Andorra", bb: "Barbados", bm: "Bermuda", bn: "Brunei Darussalam", bv: "Bouvet Island", ci: "Cote d'Ivoire", cn: "China", co: "Colombia", dk: "Denmark", ar: "Argentina", aw: "Aruba", bh: "Bahrain", cv: "Cape Verde", dz: "Algeria", gg: "Guernsey", gw: "Guinea-Bissau", ag: "Antigua and Barbuda", gt: "Guatemala", az: "Azerbaijan", cd: "Congo", cl: "Chile", dj: "Djibouti", eh: "Western Sahara", at: "Austria", bs: "Bahamas", de: "Germany", do: "Dominican Republic", ee: "Estonia", ax: "Åland Islands", bf: "Burkina Faso", bi: "Burundi", bq: "Bonaire", br: "Brazil", er: "Eritrea", gy: "Guyana", cr: "Costa Rica", gi: "Gibraltar", gq: "Equatorial Guinea", hm: "HIMI", hr: "Croatia", be: "Belgium", bg: "Bulgaria", cc: "Cocos Islands", cz: "Czech Republic", et: "Ethiopia", au: "Australia", bt: "Bhutan", by: "Belarus", bz: "Belize", cf: "Central African Republic", ck: "Cook Islands", fr: "France", af: "Afghanistan", al: "Albania", ao: "Angola", as: "American Samoa", fk: "Falkland Islands", ch: "Switzerland", ec: "Ecuador", gl: "Greenland", hn: "Honduras", ai: "Anguilla", bl: "Saint Barthelemy", bo: "Bolivia", bw: "Botswana", cw: "Curaçao", eg: "Egypt", es: "Spain", fj: "Fiji", fm: "Micronesia", ge: "Georgia", gh: "Ghana", gu: "Guam", bj: "Benin", fo: "Faroe Islands", gd: "Grenada", gp: "Guadeloupe", gr: "Greece", hk: "Hong Kong", an: "Netherlands Antilles", cg: "Congo", dm: "Dominica", ga: "Gabon", gf: "French Guiana", gn: "Guinea", ie: "Ireland", is: "Iceland", nc: "New Caledonia", pa: "Panama", sn: "Senegal", tc: "Turks and Caicos Islands", mp: "Northern Mariana Islands", mv: "Maldives", mx: "Mexico", pf: "French Polynesia", pl: "Poland", re: "Réunion", sg: "Singapore", so: "Somalia", sz: "Eswatini", va: "Vatican City", il: "Israel", np: "Nepal", pk: "Pakistan", si: "Slovenia", sr: "Suriname", tk: "Tokelau", za: "South Africa", io: "Chagos Archipelago", mf: "Saint Martin", ml: "Mali", mm: "Myanmar", ms: "Montserrat", ne: "Niger", tj: "Tajikistan", im: "Isle of Man", in: "India", mq: "Martinique", mu: "Mauritius", sb: "Solomon Islands", tt: "Trinidad and Tobago", ye: "Yemen", zm: "Zambia", jm: "Jamaica", ki: "Kiribati", lu: "Luxembourg", mc: "Monaco", ni: "Nicaragua", pt: "Portugal", sd: "Sudan", sl: "Sierra Leone", sy: "Syrian Arab Republic", tf: "French Southern Territories", tm: "Turkmenistan", vg: "British Virgin Islands", ws: "Samoa", xd: "Nations Neutral Zone", ke: "Kenya", ma: "Morocco", md: "Moldova", pn: "Pitcairn Islands", qa: "Qatar", sk: "Slovakia", tg: "Togo", tr: "Turkey", vi: "US Virgin Islands", ir: "Iran", it: "Italy", lb: "Lebanon", lr: "Liberia", mh: "Marshall Islands", pe: "Peru", pr: "Puerto Rico", sh: "Saint Helena", tw: "Taiwan", tz: "Tanzania", ve: "Venezuela", li: "Liechtenstein", lk: "Sri Lanka", mo: "Macao", mz: "Mozambique", nu: "Niue", ps: "Palestina", to: "Tonga", vu: "Vanuatu", yt: "Mayotte", hu: "Hungary", jo: "Jordan", kn: "Saint Kitts and Nevis", kp: "Korea", nr: "Nauru", pw: "Palau", ru: "Russia", sa: "Saudi Arabia", tl: "Timor-Leste", vc: "Saint Vincent and the Grenadines", xx: "Disputed Territory", je: "Jersey", lv: "Latvia", ly: "Libya", me: "Montenegro", nl: "Netherlands", nz: "New Zealand", pm: "Saint Pierre and Miquelon", rs: "Serbia", sv: "El Salvador", sx: "Sint Maarten", td: "Chad", ua: "Ukraine", uz: "Uzbekistan", kh: "Cambodia", lt: "Lithuania", mg: "Madagascar", pg: "Papua New Guinea", ph: "Philippines", ro: "Romania", rw: "Rwanda", sm: "San Marino", th: "Thailand", us: "United States", la: "Laos", mk: "North Macedonia", my: "Malaysia", na: "Namibia", se: "Sweden", iq: "Iraq", kg: "Kyrgyz Republic", kw: "Kuwait", kz: "Kazakhstan", lc: "Saint Lucia", ls: "Lesotho", mr: "Mauritania", ss: "South Sudan", tn: "Tunisia", ug: "Uganda", um: "US Minor Outlying Islands", uy: "Uruguay", xe: "Iraq-Saudi Arabia Neutral Zone", id: "Indonesia", jp: "Japan", km: "Comoros", ky: "Cayman Islands", mw: "Malawi", nf: "Norfolk Island", py: "Paraguay", sc: "Seychelles", vn: "Vietnam", wf: "Wallis and Futuna", zw: "Zimbabwe", ht: "Haiti", kr: "South Korea", mn: "Mongolia", mt: "Malta", ng: "Nigeria", no: "Norway", om: "Oman", sj: "Svalbard", st: "Sao Tome and Principe", tv: "Tuvalu", aq: "Antarctica", ba: "Bosnia and Herzegovina", ca: "Canada", cu: "Cuba", cy: "Cyprus", fi: "Finland", ae: "United Arab Emirates", am: "Armenia", bd: "Bangladesh", cm: "Cameroon", cx: "Christmas Island", gb: "United Kingdom", gm: "Gambia", gs: "South Georgia Island", ad: "Andorra", bb: "Barbados", bm: "Bermuda", bn: "Brunei Darussalam", bv: "Bouvet Island", ci: "Cote d'Ivoire", cn: "China", co: "Colombia", dk: "Denmark", ar: "Argentina", aw: "Aruba", bh: "Bahrain", cv: "Cape Verde", dz: "Algeria", gg: "Guernsey", gw: "Guinea-Bissau", ag: "Antigua and Barbuda", gt: "Guatemala", az: "Azerbaijan", cd: "Congo", cl: "Chile", dj: "Djibouti", eh: "Western Sahara", at: "Austria", bs: "Bahamas", de: "Germany", do: "Dominican Republic", ee: "Estonia", ax: "Åland Islands", bf: "Burkina Faso", bi: "Burundi", bq: "Bonaire", br: "Brazil", er: "Eritrea", gy: "Guyana", cr: "Costa Rica", gi: "Gibraltar", gq: "Equatorial Guinea", hm: "HIMI", hr: "Croatia", be: "Belgium", bg: "Bulgaria", cc: "Cocos Islands", cz: "Czech Republic", et: "Ethiopia", au: "Australia", bt: "Bhutan", by: "Belarus", bz: "Belize", cf: "Central African Republic", ck: "Cook Islands", fr: "France", af: "Afghanistan", al: "Albania", ao: "Angola", as: "American Samoa", fk: "Falkland Islands", ch: "Switzerland", ec: "Ecuador", gl: "Greenland", hn: "Honduras", ai: "Anguilla", bl: "Saint Barthelemy", bo: "Bolivia", bw: "Botswana", cw: "Curaçao", eg: "Egypt", es: "Spain", fj: "Fiji", fm: "Micronesia", ge: "Georgia", gh: "Ghana", gu: "Guam", bj: "Benin", fo: "Faroe Islands", gd: "Grenada", gp: "Guadeloupe", gr: "Greece", hk: "Hong Kong", an: "Netherlands Antilles", cg: "Congo", dm: "Dominica", ga: "Gabon", gf: "French Guiana", gn: "Guinea", ie: "Ireland", is: "Iceland", nc: "New Caledonia", pa: "Panama", sn: "Senegal", tc: "Turks and Caicos Islands", mp: "Northern Mariana Islands", mv: "Maldives", mx: "Mexico", pf: "French Polynesia", pl: "Poland", re: "Réunion", sg: "Singapore", so: "Somalia", sz: "Eswatini", va: "Vatican City", il: "Israel", np: "Nepal", pk: "Pakistan", si: "Slovenia", sr: "Suriname", tk: "Tokelau", za: "South Africa", io: "Chagos Archipelago", mf: "Saint Martin", ml: "Mali", mm: "Myanmar", ms: "Montserrat", ne: "Niger", tj: "Tajikistan", im: "Isle of Man", in: "India", mq: "Martinique", mu: "Mauritius", sb: "Solomon Islands", tt: "Trinidad and Tobago", ye: "Yemen", zm: "Zambia", jm: "Jamaica", ki: "Kiribati", lu: "Luxembourg", mc: "Monaco", ni: "Nicaragua", pt: "Portugal", sd: "Sudan", sl: "Sierra Leone", sy: "Syrian Arab Republic", tf: "French Southern Territories", tm: "Turkmenistan", vg: "British Virgin Islands", ws: "Samoa", xd: "Nations Neutral Zone", ke: "Kenya", ma: "Morocco", md: "Moldova", pn: "Pitcairn Islands", qa: "Qatar", sk: "Slovakia", tg: "Togo", tr: "Turkey", vi: "US Virgin Islands", ir: "Iran", it: "Italy", lb: "Lebanon", lr: "Liberia", mh: "Marshall Islands", pe: "Peru", pr: "Puerto Rico", sh: "Saint Helena", tw: "Taiwan", tz: "Tanzania", ve: "Venezuela", li: "Liechtenstein", lk: "Sri Lanka", mo: "Macao", mz: "Mozambique", nu: "Niue", ps: "Palestina", to: "Tonga", vu: "Vanuatu", yt: "Mayotte", hu: "Hungary", jo: "Jordan", kn: "Saint Kitts and Nevis", kp: "Korea", nr: "Nauru", pw: "Palau", ru: "Russia", sa: "Saudi Arabia", tl: "Timor-Leste", vc: "Saint Vincent and the Grenadines", xx: "Disputed Territory", je: "Jersey", lv: "Latvia", ly: "Libya", me: "Montenegro", nl: "Netherlands", nz: "New Zealand", pm: "Saint Pierre and Miquelon", rs: "Serbia", sv: "El Salvador", sx: "Sint Maarten", td: "Chad", ua: "Ukraine", uz: "Uzbekistan", kh: "Cambodia", lt: "Lithuania", mg: "Madagascar", pg: "Papua New Guinea", ph: "Philippines", ro: "Romania", rw: "Rwanda", sm: "San Marino", th: "Thailand", us: "United States", la: "Laos", mk: "North Macedonia", my: "Malaysia", na: "Namibia", se: "Sweden", iq: "Iraq", kg: "Kyrgyz Republic", kw: "Kuwait", kz: "Kazakhstan", lc: "Saint Lucia", ls: "Lesotho", mr: "Mauritania", ss: "South Sudan", tn: "Tunisia", ug: "Uganda", um: "US Minor Outlying Islands", uy: "Uruguay", xe: "Iraq-Saudi Arabia Neutral Zone", id: "Indonesia", jp: "Japan", km: "Comoros", ky: "Cayman Islands", mw: "Malawi", nf: "Norfolk Island", py: "Paraguay", sc: "Seychelles", vn: "Vietnam", wf: "Wallis and Futuna", zw: "Zimbabwe", ht: "Haiti", kr: "South Korea", mn: "Mongolia", mt: "Malta", ng: "Nigeria", no: "Norway", om: "Oman", sj: "Svalbard", st: "Sao Tome and Principe", tv: "Tuvalu"};

$(document).ready(() =>{  
    $(".Country").on('click', () => {
        if(document.getElementById('country-flag').className == "Country hidden-flag"){
            browser.storage.local.get('flag').then(result => {
                $('#country-flag').attr('src', `assets/flags/${result.flag}.svg`);
                $('#country-name').text(country[result.flag])
            });
            $('#country-flag').attr('class', "Country flag");
            browser.storage.local.get('loc').then(result => {
                var location = result.loc;
                $('#location').text(location.replaceAll(',','\n'));
            });
            browser.storage.local.get('coord').then(result => {
                var lat = result.coord[0];
                var lon = result.coord[1];
                $('#map-link').attr('href', `https://www.google.com/maps/place/${lat},${lon}`);
                document.getElementById("map-link").hidden = false;
            });
            document.getElementById("title").hidden = true;
        } else {
            $('#country-flag').attr('src', "assets/flags/black.jpg");
            $('#country-flag').attr('class', "Country hidden-flag");
            $('#country-name').text("")
            $('#location').text("")
            document.getElementById("title").hidden = false;
            document.getElementById("map-link").hidden = true;
        }
    });
});

