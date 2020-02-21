
$('#show').ready(function () {
  $('#show').css('display','block')
});
var str = $('.page-container').html();
var library={}
function addWord(obj, item, abb, title, image, definition, link='') {
  var newItem= item
  var upItem= newItem.charAt(0).toUpperCase()+newItem.slice(1)
  for (items of [upItem, newItem]) {
    for (end of ['.',',',')',';',':','-','\'s','']) {
      for (start of ['(','-','']) {
        var finalItemOne= ' '+start+items+end+' '
        var finalItemStart= start+items+end+' '
        var finalItemEnd= ' '+start+items+end
        
        // var finalContentOne= '<span style="color: red">'+finalItemOne.substring(1,finalItemOne.length-1)+'</span>'
        // var finalContentStart= '<span style="color: red">'+finalItemStart.substring(0,finalItemStart.length-1)+'</span>'
        // var finalContentEnd= '<span style="color: red">'+finalItemEnd.substring(1,finalItemEnd.length-0)+'</span>'
        if (link!='') {
          var finalContentOne= '<a style="text-decoration:none;" tabindex="0" role="button" class="text_info" data-html="true" title="'+title+':" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="top" data-content="<div class=\'row row_adj\'><div style=\'width:40%;\'><img style=\'width: 90%; border-radius: 1vw; margin-left: 5%;\' src=\'/static/images/'+image+'\'></div><div style=\'width:60%;\'>'+definition+'</br><a target=\'_blank\' rel=\'noopener noreferrer\' style=\'text-decoration: none; text-align: right;\' href=\''+link+'\'><div style=\'font-weight: bold; text-align: right;\' class=\'general-link-text\'>Pagina Official</div></a>">&nbsp;'+finalItemOne.substring(1,finalItemOne.length-1)+'&nbsp;</a>'
          var finalContentStart= '<a style="text-decoration:none;" tabindex="0" role="button" class="text_info" data-html="true" title="'+title+':" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="top" data-content="<div class=\'row row_adj\'><div style=\'width:40%;\'><img style=\'width: 90%; border-radius: 1vw; margin-left: 5%;\' src=\'/static/images/'+image+'\'></div><div style=\'width:60%;\'>'+definition+'</br><a target=\'_blank\' rel=\'noopener noreferrer\' style=\'text-decoration: none; text-align: right;\' href=\''+link+'\'><div style=\'font-weight: bold; text-align: right;\' class=\'general-link-text\'>Pagina Official</div></a>">&nbsp;'+finalItemStart.substring(0,finalItemStart.length-1)+'&nbsp;</a>'
          var finalContentEnd= '<a style="text-decoration:none;" tabindex="0" role="button" class="text_info" data-html="true" title="'+title+':" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="top" data-content="<div class=\'row row_adj\'><div style=\'width:40%;\'><img style=\'width: 90%; border-radius: 1vw; margin-left: 5%;\' src=\'/static/images/'+image+'\'></div><div style=\'width:60%;\'>'+definition+'</br><a target=\'_blank\' rel=\'noopener noreferrer\' style=\'text-decoration: none; text-align: right;\' href=\''+link+'\'><div style=\'font-weight: bold; text-align: right;\' class=\'general-link-text\'>Pagina Official</div></a>">&nbsp;'+finalItemEnd.substring(1,finalItemEnd.length-0)+'&nbsp;</a>'
        }
        else{
          var finalContentOne= '<a style="text-decoration:none;" tabindex="0" role="button" class="text_info" data-html="true" title="'+title+':" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="top" data-content="<div class=\'row row_adj\'><div style=\'width:40%;\'><img style=\'width: 90%; border-radius: 1vw; margin-left: 5%;\' src=\'/static/images/'+image+'\'></div><div style=\'width:60%;\'>'+definition+'</div></div>">&nbsp;'+finalItemOne.substring(1,finalItemOne.length-1)+'&nbsp;</a>'
          var finalContentStart= '<a style="text-decoration:none;" tabindex="0" role="button" class="text_info" data-html="true" title="'+title+':" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="top" data-content="<div class=\'row row_adj\'><div style=\'width:40%;\'><img style=\'width: 90%; border-radius: 1vw; margin-left: 5%;\' src=\'/static/images/'+image+'\'></div><div style=\'width:60%;\'>'+definition+'</div></div>">&nbsp;'+finalItemStart.substring(0,finalItemStart.length-1)+'&nbsp;</a>'
          var finalContentEnd= '<a style="text-decoration:none;" tabindex="0" role="button" class="text_info" data-html="true" title="'+title+':" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="top" data-content="<div class=\'row row_adj\'><div style=\'width:40%;\'><img style=\'width: 90%; border-radius: 1vw; margin-left: 5%;\' src=\'/static/images/'+image+'\'></div><div style=\'width:60%;\'>'+definition+'</div></div>">&nbsp;'+finalItemEnd.substring(1,finalItemEnd.length-0)+'&nbsp;</a>'
        }
        obj[finalItemOne]= finalContentOne
        obj[finalItemStart]= finalContentStart
        obj[finalItemEnd]= finalContentEnd
      }
    }
  }
}
addWord(library, 'cambio climático', false, 'Cambio climático', 'burning-earth.jpg','Una variación del clima del planeta Tierra generada por la acción del ser humano.Esto es producido por el proceso conocido como efecto  invernadero, que provoca el llamado calentamiento global.')
addWord(library,'AP',true,'Acuerdo de Paris','CoP 21 LOGO.png','Es un pacto de carácter internacional que se suscribió en 2015 por más de 190 países. El tema central del mismo es el cambio climático, una realidad que afecta al conjunto del planeta.','https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement')
addWord(library,'Acuerdo de París', false,'Acuerdo de Paris','CoP 21 LOGO.png','Es un pacto de carácter internacional que se suscribió en 2015 por más de 190 países. El tema central del mismo es el cambio climático, una realidad que afecta al conjunto del planeta.','https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement')
addWord(library,'Convención Marco de las Naciones Unidas sobre Cambio Climático', false,'Convención Marco de las Naciones Unidas sobre Cambio Climático/(CMNUCC)','CMNUCC.jpg','Primer paso para afrontar el problema de prevenir una interferencia humana peligrosa con el sistema climático','https://unfccc.int/')
addWord(library,'CMNUCC', false,'Convención Marco de las Naciones Unidas sobre Cambio Climático/(CMNUCC)','CMNUCC.JPEG','Primer paso para afrontar el problema de prevenir una interferencia humana peligrosa con el sistema climático','https://unfccc.int/')
addWord(library,'COP', false,'Conferencia de las Partes','cop.jpg','Una reunión que ocurre anualmente con la función de supervisar y examinar la aplicación de la Convención y desarrollar el proceso de negociación entre las partes de la Convención ante nuevos compromisos sobre el Cambio Climático.','https://unfccc.int/process/bodies/supreme-bodies/conference-of-the-parties-cop')
addWord(library,'efecto invernadero', false,'Efecto invernadero','EI.jpg','Fenómeno por el cual determinados gases, que son componentes de la atmósfera planetaria, retienen parte de la energía que el suelo emite por haber sido calentado por la radiación solar.','')
addWord(library,'GEI', true,'Gasses de efecto invernadero(GEI)','GEI.jpg','Un gas atmosférico que absorbe y emite radiación dentro del rango infrarrojo.ste proceso es la fundamental causa del efecto  invernadero.','')
addWord(library,'Gases de Efecto Invernadero', true,'Gasses de efecto invernadero(GEI)','GEI.jpg','Un gas atmosférico que absorbe y emite radiación dentro del rango infrarrojo.ste proceso es la fundamental causa del efecto  invernadero.','')
addWord(library,'hidrometeorológicos', false,'Hidrometeorología','hidro.jpg','Ciencia que estudia la transferencia de agua y energía entre la superficie y la atmósfera.','')
addWord(library,'intertropicales', false,'Intertropical ','intertropical.png','La zona en la franja que se ubica entre los trópicos de Cáncer y de Capricornio.','')
addWord(library,'Contribución Determinada a Nivel Nacional', false,'Contribución Determinada a Nivel Nacional(CDN)','presentation.jpg','Presentan públicamente los planes de los países en el marco del Acuerdo  de París para contribuir a los esfuerzos internacionales para asegurar un futuro sostenible para todos.','')
addWord(library,'CDN', true,'Contribución Determinada a Nivel Nacional(CDN)','presentation.jpg','Presentan públicamente los planes de los países en el marco del Acuerdo de París para contribuir a los esfuerzos internacionales para asegurar un futuro sostenible para todos.','')
addWord(library,'USCUSS', false,'Emissiones de uso del Suelo y Selvicultura(USCUSS)','USCUSS_.png','Las emisiones de Uso de Suelo – Cambio en el uso del Suelo y *Silvicultura* y es lo que comúnmente se define como sector forestal.','http://www.plataformaleds.org/uscuss')
addWord(library,'silvicultura', true,'Silvicultura','selvicultura.jpg','Conjunto de actividades relacionadas con el cultivo, el cuidado y la explotación de los bosques y los montes.','')
addWord(library,'Sistema Guatemalteco de Áreas Protegidas', false,'Sistema Guatemalteco de Áreas Protegidas(SIGAP)','SIGAP.jpg','lograr la conservación in situ de la biodiversidad, mantener los ciclos vitales y favorecer la utilización sostenida de los recursos naturales.','')
addWord(library,'SIGAP', false,'Sistema Guatemalteco de Áreas Protegidas(SIGAP)','SIGAP.jpg','lograr la conservación in situ de la biodiversidad, mantener los ciclos vitales y favorecer la utilización sostenida de los recursos naturales.','')
addWord(library,'REDD+', false,'Reducción de Emisiones por Deforestación y Degradación Evitada(REDD+)','REDD.png','Reducción de Emisiones de gases de efecto invernadero causadas por la Deforestación y Degradación de los bosques, la conservación y el incremento de las capturas de CO2.','https://theredddesk.org/countries/guatemala')
addWord(library,'SIPECIF', false,'Sistema Nacional de Prevención y Control de Incendios Forestales(SIPECIF)','SIPECIF.jpg','Este Sistema fue creado para coordinar las actividades de prevención y control de incendios forestales junto a otras instituciones gubernamentales, incluyendo al Ejército.','http://selvamaya.info/es/prevencion-y-control-de-incendios-forestales-2016-2017/')
addWord(library,'PROBOSQUE', false,'Probosque','PROBOSQUE.jpg','Un Organismo Público descentralizado del Gobierno del Estado de México, con personalidad jurídica y patrimonio propios.','http://probosque.edomex.gob.mx/')
addWord(library,'PINFOR', false,' Programa de Incentivos Forestales(PINFOR)','PINFOR.jpg','Un pago en efectivo, que el Estado otorga al propietario de tierras de vocación forestal, por ejecutar proyectos de reforestación o manejo de bosques naturales.','http://186.151.231.170/inab/index.php/45-servicios-inab/74-pinfor')
addWord(library,'PINPEP', false,'PINPEP','PINPEP.jpg','Programa de Incentivos Forestales para poseedores de pequeñas extensiones de tierra de vocación forestal o agroforestal el cual esta dirigido a personas que poseen terrenos menores a 15 Hectáreas, pagándoles por sembrar árboles o dar manejo a los bosques naturales.','http://186.151.231.170/inab/index.php/45-servicios-inab/120-pinpep')
addWord(library,'SNER', false,'Sistema Nacional de Extensión Rural(SNER)','granjero.jpg','Aplicar metodologias participativas de aprendizaje y comunicación rural. Es el conjunto de actores que interactúan para contribuir a la realización del trabajo de extensión. Es un mecanismo que se fortalece desde lo local para lo nacional.','')
addWord(library,'MARN', false,'Ministerio de Ambiente y Recursos Naturales(MARN)','MARN.PNG','La institución que regula la *gestión* ambiental y promueve el desarrollo sostenible en  Guatemala, de forma participativa.','http://www.marn.gob.gt/')
addWord(library,'gestión', false,'Gestión','gestión.jpg','Una diligencia, entendida como un trámite necesario para conseguir algo o resolver un asunto, habitualmente de carácter administrativo o que conlleva documentación.','')
addWord(library,'GIZ', false,'Deutsche Gesellschaft für Internationale Zusammenarbeit(GIZ)','GIZ.jpg','Organizacion que apoya a las personas y a las sociedades en todo el mundo a desarrollar sus perspectivas de futuro y a diseñar de forma sostenible sus condiciones de vida.','https://www.giz.de/en/html/index.html')
addWord(library,'UGA', false,'Unidad de Gestión Ambiental(UGAM)','UGA.jpg','Unidad mínima territorial donde se aplican tanto lineamientos como estrategias ambientales, de política territorial, aunado con esquemas de manejo de recursos naturales, es decir criterios o lineamientos finos del manejo de estos recursos, orientados a un desarrollo que transite a la sustentabilidad.','')
addWord(library,'INAB', false,'Instituto Nacional de Bosques(INAB)','INAB.jpg','Promover y fomentar el desarrollo forestal del país mediante el manejo sostenible de los bosques, reducir la deforestación de tierras de vocación forestal, promover la reforestación de áreas forestales actualmente sin bosque, e incrementar su productividad.','http://inab.gob.gt/')
addWord(library,'MINEDUC', false,'Ministerio de Educación(MINEDUC)','MINEDUC.jpg','Institución evolutiva, organizada, eficiente y eficaz, generadora de oportunidades de enseñanza-aprendizaje, orientada a resultados, que aprovecha diligentemente las oportunidades que el siglo XXI le brinda y comprometida con una Guatemala mejor.','http://www.mineduc.gob.gt/portal/index.asp')
addWord(library,'CONRED', false,'Coordinadora Nacional para la Reducción de Desastres(CONRED)','CONRED.jpg','Entidad del gobierno de Guatemala, creada para prevenir los desastres o reducir su impacto en la sociedad, y para coordinar esfuerzos de rescate, atender y participar en la rehabilitación y reconstrucción de los daños causados por los desastres.','http://conred.gob.gt/site/index.php')
addWord(library,'INDE', false,'Instituto Nacional De Electrificación(INDE)','INDE.png','Institución que se dedicaba por completo a la Generación, Transmisión y Distribución de Energía Eléctrica en Guatemala.','http://www.inde.gob.gt/')
addWord(library,'ONG', true,'Organización No Gubernamental(ONG)','ONG.jpg','Una organización constituida con intereses culturales, educativos, deportivos, de servicio social, de asistencia, beneficiencia, promoción y desarrollo económico y social, sin fines de lucro.','')
addWord(library,'Fondo Verde para el Clima', false,'Fondo Verde para el Clima(GCF)','GCF.png','Un fondo dentro del marco de la Convención Marco de las Naciones Unidas sobre el Cambio Climático (UNFCCC por sus siglas en inglés) constituido como mecanismo para ayudar a países en desarrollo en prácticas de adaptación al cambio climático y mitigación de sus efectos.','https://www.greenclimate.fund/home')
addWord(library,'GEF', false,'Fondo Mundial para el Medio Ambiente(GEF)','GEF.png','Abordar cuestiones ambientales de alcance mundial y respaldar, al mismo tiempo, iniciativas nacionales de desarrollo sostenible.','https://www.thegef.org/about/funding')
addWord(library,'EDBE', false,'Estrategias de Desarrollo con Bajas Emisiones(EDBE)','ADBE.jpg','Una estrategia nacional, de alto nivel, integral y a largo plazo desarrollada por las partes interesadas de un país, encaminada a desvincular el crecimiento económico y el desarrollo social del aumento de las emisiones de gases de efecto  invernadero','')
addWord(library,'1/CMA.1, párrafo 5', false,'1/CMA.1, párrafo 5','CoP 21 LOGO.png','Invites the Conference of the Parties to continue to oversee the implementation of the work programme under the Paris Agreement in accordance with the arrangements contained in decision 1/CP.21, and to accelerate work and forward the outcomes at the latest to the third part of the first session of the Conference of the Parties serving as the meeting of the Parties to the Paris Agreement to be convened in conjunction with the twenty-fourth session of the Conference of the Parties (December 2018) for its consideration and adoption.','https://unfccc.int/files/meetings/paris_nov_2015/application/pdf/paris_agreement_spanish_.pdf')
addWord(library,'1/CP.21, párrafo 20', false,'1/CP.21, párrafo 20','CoP 21 LOGO.png','Decide organizar, en 2018, un diálogo facilitador entre las Partes para hacer un balance de sus esfuerzos colectivos y determinar el avance en el logro del objetivo a largo plazo que se describe en el artículo 4, párrafo 1, del Acuerdo, y para orientar la preparación de las contribuciones determinadas a nivel nacional de conformidad con lo dispuesto en el artículo 4, párrafo 8, del Acuerdo','https://unfccc.int/files/meetings/paris_nov_2015/application/pdf/paris_agreement_spanish_.pdf')
addWord(library,'1/CP.21, párrafo 23', false,'1/CP.21, párrafo 23','CoP 21 LOGO.png','Pide a las Partes cuya contribución prevista determinada a nivel nacional presentada con arreglo a la decisión 1/CP.20 comprenda un plazo hasta 2025 que comuniquen una nueva contribución determinada a nivel nacional en 2020 a más tardar, y cada cinco años a partir de ese momento, de conformidad con el artículo 4, párrafo 9, del Acuerdo','https://unfccc.int/files/meetings/paris_nov_2015/application/pdf/paris_agreement_spanish_.pdf')
addWord(library,'Art. 14, p. 1 y 2', false,'Art. 14, p. 1 y 2','CoP 21 LOGO.png','La Conferencia de las Partes en calidad de reunión de las Partes en el presente Acuerdo hará periódicamente un balance de la aplicación del presente Acuerdo para determinar el avance colectivo en el cumplimiento de su propósito y de sus objetivos a largo plazo (\'el balance mundial\'), y lo hará de manera global y facilitadora, examinando la mitigación, la adaptación, los medios de aplicación y el apoyo, y a la luz de la equidad y de la mejor información científica disponible.<br><br>La Conferencia de las Partes en calidad de reunión de las Partes en el presente Acuerdo hará su primer balance mundial en 2023 y a partir de entonces, a menos que decida otra cosa, lo hará cada cinco años.','https://unfccc.int/files/meetings/paris_nov_2015/application/pdf/paris_agreement_spanish_.pdf')
// addWord(library,'', false,'','','','')
// addWord(library,'', false,'','','','')
// addWord(library,'', false,'','','','')
// addWord(library,'', false,'','','','')


for (var i in library) {
  while (str.includes(i)) {
    str = str.replace(i, library[i]);
  }
}
$('.page-container').html(str);





$(function() {
  $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
  trigger: 'focus'
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
