    // popover - auslagern in application.js
    $('a[rel=popover]')
      .popover()
      .click(function(e) {
        e.preventDefault()
      })

        // aktiviere Buttons
        $('.tabs').button();

	// remove one element if only a 2bed room is selected
        $(function(){
            var $visible = $([]);
            $('#ApplicantRoom').change(function(){
                $visible.hide();
                $visible = $('#' + this.value);
                $visible.show();
            }).change();
        });

// on focusLost change username
function adaptUserNameFromForm() {
 document.getElementById("unameHead").innerHTML = document.getElementById("vorname").innerHTML;
} // end of func

// blur ginge auch
// change current user name if not logged in
var $sourceVorname = $('#ApplicantVorname');
var $sourceNachname = $('#ApplicantNachname');
$sourceNachname.focusout(function() {
$("#unameHead").html($sourceVorname.val() + " " + $sourceNachname.val());
});

/* datepicker with ISO format 
http://jqueryui.com/demos/datepicker/#min-max
*/
$(function() {
		$( "#datepicker" ).datepicker({
			changeMonth: true,
			dateFormat: "yy-mm-dd",
			/*minDate: new Date("1925-01-01"), */
			minDate: new Date(1925, 1 - 1, 1), 
			maxDate: new Date(), 
			changeYear: true
		});

		$( "#format" ).change(function() {
			$( "#datepicker" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
		});

	});

/*
<option value="af">Afrikaans</option>
		<option value="sq">Albanian (Gjuha shqipe)</option>
		<option value="ar-DZ">Algerian Arabic</option>
		<option value="ar">Arabic (&#8235;(&#1604;&#1593;&#1585;&#1576;&#1610;</option>
		<option value="hy">Armenian (&#1344;&#1377;&#1397;&#1381;&#1408;&#1381;&#1398;)</option>
		<option value="az">Azerbaijani (Az&#601;rbaycan dili)</option>
		<option value="eu">Basque (Euskara)</option>
		<option value="bs">Bosnian (Bosanski)</option>
		<option value="bg">Bulgarian (&#1073;&#1098;&#1083;&#1075;&#1072;&#1088;&#1089;&#1082;&#1080; &#1077;&#1079;&#1080;&#1082;)</option>
		<option value="ca">Catalan (Catal&agrave;)</option>
		<option value="zh-HK">Chinese Hong Kong (&#32321;&#39636;&#20013;&#25991;)</option>
		<option value="zh-CN">Chinese Simplified (&#31616;&#20307;&#20013;&#25991;)</option>
		<option value="zh-TW">Chinese Traditional (&#32321;&#39636;&#20013;&#25991;)</option>
		<option value="hr">Croatian (Hrvatski jezik)</option>
		<option value="cs">Czech (&#269;e&#353;tina)</option>
		<option value="da">Danish (Dansk)</option>
		<option value="nl-BE">Dutch (Belgium)</option>
		<option value="nl">Dutch (Nederlands)</option>
		<option value="en-AU">English/Australia</option>
		<option value="en-NZ">English/New Zealand</option>
		<option value="en-GB">English/UK</option>
		<option value="eo">Esperanto</option>
		<option value="et">Estonian (eesti keel)</option>
		<option value="fo">Faroese (f&oslash;royskt)</option>
		<option value="fa">Farsi/Persian (&#8235;(&#1601;&#1575;&#1585;&#1587;&#1740;</option>
		<option value="fi">Finnish (suomi)</option>
		<option value="fr" selected="selected">French (Fran&ccedil;ais)</option>
		<option value="fr-CH">French/Swiss (Fran&ccedil;ais de Suisse)</option>
		<option value="gl">Galician</option>
		<option value="de">German (Deutsch)</option>
		<option value="el">Greek (&#917;&#955;&#955;&#951;&#957;&#953;&#954;&#940;)</option>
		<option value="he">Hebrew (&#8235;(&#1506;&#1489;&#1512;&#1497;&#1514;</option>
		<option value="hi">Hindi (&#2361;&#2367;&#2306;&#2342;&#2368;)</option>
		<option value="hu">Hungarian (Magyar)</option>
		<option value="is">Icelandic (&Otilde;slenska)</option>
		<option value="id">Indonesian (Bahasa Indonesia)</option>
		<option value="it">Italian (Italiano)</option>
		<option value="ja">Japanese (&#26085;&#26412;&#35486;)</option>
		<option value="kk">Kazakhstan (Kazakh)</option>
		<option value="km">Khmer</option>
		<option value="ko">Korean (&#54620;&#44397;&#50612;)</option>
		<option value="lv">Latvian (Latvie&ouml;u Valoda)</option>
		<option value="lt">Lithuanian (lietuviu kalba)</option>
		<option value="lb">Luxembourgish</option>
		<option value="mk">Macedonian</option>
		<option value="ml">Malayalam</option>
		<option value="ms">Malaysian (Bahasa Malaysia)</option>
		<option value="no">Norwegian (Norsk)</option>
		<option value="pl">Polish (Polski)</option>
		<option value="pt">Portuguese (Portugu&ecirc;s)</option>
		<option value="pt-BR">Portuguese/Brazilian (Portugu&ecirc;s)</option>
		<option value="rm">Rhaeto-Romanic (Romansh)</option>
		<option value="ro">Romanian (Rom&acirc;n&#259;)</option>
		<option value="ru">Russian (&#1056;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;)</option>
		<option value="sr">Serbian (&#1089;&#1088;&#1087;&#1089;&#1082;&#1080; &#1112;&#1077;&#1079;&#1080;&#1082;)</option>
		<option value="sr-SR">Serbian (srpski jezik)</option>
		<option value="sk">Slovak (Slovencina)</option>
		<option value="sl">Slovenian (Slovenski Jezik)</option>
		<option value="es">Spanish (Espa&ntilde;ol)</option>
		<option value="sv">Swedish (Svenska)</option>
		<option value="ta">Tamil (&#2980;&#2990;&#3007;&#2996;&#3021;)</option>
		<option value="th">Thai (&#3616;&#3634;&#3625;&#3634;&#3652;&#3607;&#3618;)</option>
		<option value="tj">Tajikistan</option>
		<option value="tr">Turkish (T&uuml;rk&ccedil;e)</option>
		<option value="uk">Ukranian (&#1059;&#1082;&#1088;&#1072;&#1111;&#1085;&#1089;&#1100;&#1082;&#1072;)</option>
		<option value="vi">Vietnamese (Ti&#7871;ng Vi&#7879;t)</option>
		<option value="cy-GB">Welsh/UK (Cymraeg)</option>
*/