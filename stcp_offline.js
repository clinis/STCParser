// parsing offline de um exemplo do código fonte da página de uma pargem da STCP
//
// baseado no artigo: http://blog.miguelgrinberg.com/post/easy-web-scraping-with-nodejs
//

var request = require('request');
var cheerio = require('cheerio');

$ = cheerio.load('<div id="smsBusHeader"> <div class="filtro"> <a href="http://www.stcp.pt/smsBusMicroSite/index.html" target="_blank"><img border="0" src="/temas/stcp/imgs/logo-smsbus.jpg" /></a> <form action="" id="frmFiltro"> <label for="linhasmsbus">Filtar por linha</label> <input type="hidden" name="paragem" value="IPO5" /> <input type="hidden" name="t" value="smsbus" /> <select id="linhasmsbus" name="linha" onchange="javascript: frmFiltro.submit();"> <option value="0">---</option> <option value="205">205 </option> <option value="9M">9M </option> </select> </form> </div> <div class="clear"></div> </div> <table id="smsBusResults" width="100%" cellpadding="0" cellspacing="0" border="0"> <tr> <th>Linha</th> <th>Hora Prevista</th> <th>Tempo de Espera</th> </tr> <tr class="even"> <td> <ul class="linhasAssoc"> <li><a target="_self" class="linha_205" title="" href="/pt/viajar/linhas/?linha=205 ">205 </a></li> </ul> &nbsp;CAST. QUEIJO</td> <td><i>00:43</i></td> <td>10min</td> </tr> <tr class="even"> <td> <ul class="linhasAssoc"> <li><a target="_self" class="linha_9m" title="" href="/pt/viajar/linhas/?linha=9M ">9M </a></li> </ul> &nbsp;ROT. A.E.P.</td> <td><i>00:49</i></td> <td>16min</td> </tr> </table>');
$('#smsBusResults .even').each(function() {
//            $(this).find('div').each(function() {
//                event = $(this).text().trim().replace(/\s\s+/g, ',').split(',');
//                if (event.length >= 2 && (event[1].match(/open swim/i) || event[1].match(/family swim/i)))
//                    console.log(pool + ',' + days[day] + ',' + event[0] + ',' + event[1]);
//            });
    event = $(this).text().trim().replace(/\s\s+/g, ',').split(',');
    console.log(event[0] + ': ' + event[1]);
})
