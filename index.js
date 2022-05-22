window.onload=async function(){
    const controller = new AbortController();

    const timeoutId = setTimeout(() => controller.abort(), 5000);

    await fetch('https://drca.ufrpe.br',{
        method:'GET',
        signal:controller.signal
    }).then(()=>{
        let loadingHtml= document.querySelector('.loading-container');
        loadingHtml.style.display="none";

        let responseHtml= document.querySelector('.response');
        responseHtml.style.display="flex";
        responseHtml.style.backgroundColor="#2ca328";

        let responseText=document.createTextNode("Sim, está disponível. \u{1F64F}")
        responseHtml.appendChild(responseText)

        let explicationHtml= document.querySelector('.explication');
        let explicationText=document.createTextNode("Se você ainda está enfrentando problemas para solicitar sua confirmação entre em contato com o DRCA por email ou espere alguns minutos para tentar novamente!")
        explicationHtml.appendChild(explicationText)
    })
    .catch(function(err) { 
        let loadingHtml= document.querySelector('.loading-container');
        loadingHtml.style.display="none";

        let responseHtml= document.querySelector('.response');
        responseHtml.style.display="flex";
        responseHtml.style.backgroundColor="#b11a1a";

        let responseText=document.createTextNode("Não, está fora do ar. \u{1F641}")
        responseHtml.appendChild(responseText)

        let explicationHtml= document.querySelector('.explication');
        let explicationText=document.createTextNode("Não, não é seu PC que está com problema. O site do DRCA está fora do ar. Mas não se preocupe! Em breve o site voltará ao ar...")
        explicationHtml.appendChild(explicationText)
    });
}