<script type="text/javascript"> 

// do not edit 	
var userLang = (navigator.language || navigator.userLanguage);
var siteURL = window.location.host;
var pageURL = window.location.pathname;
var hrefURL = window.location.href;
var rURL  = document.referrer;
var refURL = rURL.replace("?", "&");
var utm_source = window.location.search;
var utm = utm_source.replace("?", "&");
	
// redirect all Japanese form traffic 	
if (siteURL === 'jp.pgi.com'||siteURL ==='jajp-pgi.onelink-translations.com')	{	
window.location.replace("https://premiere-marketing.jp/inquiry/");
}

if (userLang == 'de' || userLang == 'de-at' || userLang == 'de-at' || userLang == 'de-de' || userLang == 'de-li' || userLang == 'de-lu' || userLang == 'de-ch') {
var browserLang = 'DE';
var firstNameLabel = 'Vorname (erforderlich)';
var lastNameLabel = 'Nachname (erforderlich)';
var emailLabel = 'meine.e-mail@domain.com (erforderlich)';
var phoneLabel = 'Telefon (erforderlich)';
var companyLabel = 'Firma (erforderlich)';
var countryLabel = 'Land (erforderlich)';
var commentsLabel = 'Deine Nachricht';
var termstext = "Durch Ihre Registrierung bestätigen Sie, dass Sie PGi’s  <a href='https://"+siteURL+"/terms-of-service'>Nutzungsbedingungen</a>,sowie Verarbeitung Ihrer persönlichen Daten durch PGi wie in der  <a href='https://"+siteURL+"/privacy-policy/'>Datenschutzerklärung</a>  beschrieben zustimmen. ";	
var emailtext = "PGi würde Ihnen gerne E-Mails zu Produkt-Updates schicken";
var yes = 'Ja';	
var no = 'Nein';
var subtext = 'Absenden';
var requiredfields = "Bitte gehen Sie zurück und füllen sie die folgenden vorgeschriebenen Felder aus";			
}
else if (userLang == 'fr' || userLang == 'fr-be' || userLang == 'fr-ca' || userLang == 'fr-fr' || userLang == 'fr-lu' || userLang == 'fr-mc' || userLang == 'fr-ch') {
var browserLang = 'FR';
var firstNameLabel = 'Prénom (obligatoires)';
var lastNameLabel = 'Nom (obligatoires)';
var emailLabel = 'my.email@domain.com (obligatoires)';
var phoneLabel = 'Téléphone (obligatoires)';
var companyLabel = 'Société (obligatoires)';
var countryLabel = 'Pays (obligatoires)';
var commentsLabel = 'Votre message';
var termstext = "En vous inscrivant, vous confirmez avoir lu les conditions  <a href='https://"+siteURL+"/terms-of-service/'>de service</a> , et consentir au traitement de vos données personnelles par PGi, conformément à la déclaration de <a href='https://"+siteURL+"/privacy-policy/'>confidentialité</a>.";	
var emailtext = "PGi souhaiterait beaucoup rester en contact avec vous par le biais de courriels intéressants sur les mises à jours des produits, de trucs et astuces, ainsi que des meilleures pratiques et des tendances.";
var yes = 'Oui';	
var no = 'Non';
var subtext = 'Submit';
var requiredfields = "Veuillez remplir tous les champs requis en saisissant des valeurs valides";		
}
else {
var browserLang = 'EN';
var firstNameLabel = 'First Name (required)';
var lastNameLabel = 'Last Name (required)';
var emailLabel = 'Email (required)';
var phoneLabel = 'Phone (required)';
var companyLabel = 'Company, Organization or School (required)';
var countryLabel = 'Country (required)';
var commentsLabel = 'Comments';
var termstext = "By submitting this form and signing up, you are accepting PGi’s <a href='https://"+siteURL+"/privacy-policy/'>privacy policy</a> and agreeing to be bound by PGi’s <a href='https://"+siteURL+"/terms-of-service/'>Terms of Service</a>";	
var emailtext = 'I would like to receive communications about products, offerings, and industry trends from PGi. I understand that I can unsubscribe at any time.';
var yes = 'Yes';	
var no = 'No';
var subtext = 'Submit';
var requiredfields = "Please fill in a valid value for all required fields";	
}


// page level variables
if(window.location.href.indexOf("globalmeet-webinar-contact") > -1||window.location.href.indexOf("globalmeet-webinar-contact-2") > -1){		
		var formDescription = "- Webinar Contact";			
	    var leadSource = "Demo Request";
	    var productOfInterest = "Webinar";
	
		if (siteURL === 'www.pgi.com'||siteURL === 'www.pgi.ca'||siteURL ==='fr.pgi.ca')	{	
				var sfdcCampaignId = "7011B000002hFnM";
				var leadOwner = "";
				var marketingChannel = "NA Online";
				}	
		else if (siteURL === 'de.pgi.com'||siteURL === 'fr.pgi.com'||siteURL ==='ie.pgi.com'||siteURL ==='uk.pgi.com')	{	
				var sfdcCampaignId = "70130000000glvl";
				var leadOwner = "00G13000003sxyv";
				var marketingChannel = "INTL:Online";
				}	
		else 	{	
				var sfdcCampaignId = "70113000002DDBM";
				var leadOwner = "00G13000003sxyv";
				var marketingChannel = "INTL:Online";
				}			
	
	    }	
	else if(window.location.href.indexOf("globalmeet-webcast-offer") > -1||window.location.href.indexOf("globalmeet-webcast-offer-2") > -1){			
		var formDescription = "- Webcast Demo Request";				
	    var leadSource = "Demo Request";
	    var productOfInterest = "Webcast";
		
		if (siteURL === 'www.pgi.com'||siteURL === 'www.pgi.ca'||siteURL ==='fr.pgi.ca')	{	
				var sfdcCampaignId = "7011B000002hFRQ";
				var leadOwner = "00G1B000003S13p";
				var marketingChannel = "TalkPoint";
				}	
		else if (siteURL === 'de.pgi.com'||siteURL === 'fr.pgi.com'||siteURL ==='ie.pgi.com'||siteURL ==='uk.pgi.com')	{	
				var sfdcCampaignId = "70130000000glvl";
				var leadOwner = "00G1B000003S13p";
				var marketingChannel = "TalkPoint";
				}	
		else 	{	
				var sfdcCampaignId = "70113000002DDBM";
				var leadOwner = "00G1B000003S13p";
				var marketingChannel = "TalkPoint";
				}		
	    }	
	else if(window.location.href.indexOf("globalmeet-event-specialist-contact") > -1||window.location.href.indexOf("globalmeet-event-specialist-contact-2") > -1){		
		var formDescription = "- Event Conferencing Contact Us";				
	    var leadSource = "Contact Us";
	    var productOfInterest = "Operator Assisted";	
		
		if (siteURL === 'www.pgi.com'||siteURL === 'www.pgi.ca'||siteURL ==='fr.pgi.ca')	{	
				var sfdcCampaignId = "70130000000grur";
				var leadOwner = "";
				var marketingChannel = "NA: Online";
				}	
		else if (siteURL === 'de.pgi.com'||siteURL === 'fr.pgi.com'||siteURL ==='ie.pgi.com'||siteURL ==='uk.pgi.com')	{	
				var sfdcCampaignId = "70130000000glvl";
				var leadOwner = "00G13000003sxyv";
				var marketingChannel = "INTL: Online";
				}	
		else 	{	
				var sfdcCampaignId = "70113000002DDBM";
				var leadOwner = "00G13000003sxyv";
				var marketingChannel = "INTL: Online";
				}				
	    }	
	else if(window.location.href.indexOf("globalmeet/ucaas/demo") > -1||window.location.href.indexOf("globalmeet/ucaas/demo-2") > -1){
		var formDescription = "- Unified Communications Demo Request";				
	    var leadSource = "Demo Request";
	    var productOfInterest = "Unified Communications";
		
		if (siteURL === 'www.pgi.com'||siteURL === 'www.pgi.ca'||siteURL ==='fr.pgi.ca')	{	
				var sfdcCampaignId = "7011B000002GuVC";
				var leadOwner = "";
				var marketingChannel = "NA: Online";
				}	
		else if (siteURL === 'de.pgi.com'||siteURL === 'fr.pgi.com'||siteURL ==='ie.pgi.com'||siteURL ==='uk.pgi.com')	{	
				var sfdcCampaignId = "70130000000glvl";
				var leadOwner = "00G13000003sxyv";
				var marketingChannel = "INTL: Online";
				}	
		else 	{	
				var sfdcCampaignId = "70113000002DDBM";
				var leadOwner = "00G13000003sxyv";
				var marketingChannel = "INTL: Online";
				}			
        }
    else if(window.location.href.indexOf("sign-up") > -1||window.location.href.indexOf("sign-up-2") > -1){
		var formDescription = "- GlobalMeet Freemium account provisioned";				
        var leadSource = "Freemium";
        var productOfInterest = "Collaboration";
	// HIDE COMMENTS
		//document.getElementById("fsRow3663162-10").style.display='none';
		document.getElementById("fsRow3663162-9").style.display='none';		
		
		if (siteURL === 'www.pgi.com'||siteURL === 'www.pgi.ca'||siteURL ==='fr.pgi.ca')	{	
				var sfdcCampaignId = "7011B000002OOpP";
				var leadOwner = "";
				var marketingChannel = "NA: Online";
				}	
		else if (siteURL === 'de.pgi.com'||siteURL === 'fr.pgi.com'||siteURL ==='ie.pgi.com'||siteURL ==='uk.pgi.com')	{	
				var sfdcCampaignId = "7011B000002OOp5";
				var leadOwner = "00G13000003sxyv";
				var marketingChannel = "INTL: Online";
				}	
		else 	{	
				var sfdcCampaignId = "7011B000002OOpA";
				var leadOwner = "00G13000003sxyv";
				var marketingChannel = "INTL: Online";
				}			
        }

    else if(window.location.href.indexOf("contact-pgi-pgicom") > -1||window.location.href.indexOf("contact-pgi-pgicom-2") > -1){
		var formDescription = "- Contact Us";				
        var leadSource = "Contact Us";
        var productOfInterest = "";
		
		if (siteURL === 'www.pgi.com'||siteURL === 'www.pgi.ca'||siteURL ==='fr.pgi.ca')	{	
				var sfdcCampaignId = "70130000000grur";
				var leadOwner = "";
				var marketingChannel = "NA: Online";
				}	
		else if (siteURL === 'de.pgi.com'||siteURL === 'fr.pgi.com'||siteURL ==='ie.pgi.com'||siteURL ==='uk.pgi.com')	{	
				var sfdcCampaignId = "70130000000glvl";
				var leadOwner = "00G13000003sxyv";
				var marketingChannel = "INTL: Online";
				}	
		else 	{	
				var sfdcCampaignId = "70113000002DDBM";
				var leadOwner = "00G13000003sxyv";
				var marketingChannel = "INTL: Online";
				}			
        }	
	
    else if(window.location.href.indexOf("contact-partner-program") > -1||window.location.href.indexOf("contact-partner-program-2") > -1){
		var formDescription = "- Partner Contact Us";				
        var leadSource = "Partner Contact";
        var productOfInterest = "";
	
		
		if (siteURL === 'www.pgi.com'||siteURL === 'www.pgi.ca'||siteURL ==='fr.pgi.ca')	{	
				var sfdcCampaignId = "7011B0000028wHQ";
				var leadOwner = "";
				var marketingChannel = "NA: Online";
				}	
		else if (siteURL === 'de.pgi.com'||siteURL === 'fr.pgi.com'||siteURL ==='ie.pgi.com'||siteURL ==='uk.pgi.com')	{	
				var sfdcCampaignId = "7011B0000028wHQ";
				var leadOwner = "00G13000003sxyv";
				var marketingChannel = "INTL: Online";
				}	
		else 	{	
				var sfdcCampaignId = "7011B0000028wHQ";
				var leadOwner = "00G13000003sxyv";
				var marketingChannel = "INTL: Online";
				}			
        }
	
	else{	
		var formDescription = "- Contact Us";		
	    var leadSource = "Contact Us";
		var leadOwner = "";		
		var sfdcCampaignId = "70113000002DDBM";		
		var marketingChannel = "NA: Online";        
		var productOfInterest = "";		
	    }	

	
//end domain variables


document.getElementById("field84971692").placeholder=firstNameLabel; //ok
document.getElementById("field84971693").placeholder=lastNameLabel; //ok
document.getElementById("field84971694").placeholder=emailLabel; //ok
document.getElementById("field84971695").placeholder=phoneLabel; //ok
document.getElementById("field84971696").placeholder=companyLabel; //ok
document.getElementById("field84971698").placeholder=countryLabel; //ok
document.getElementById("field84971700").placeholder=commentsLabel; //ok
document.getElementById("field84971710").value=browserLang; //ok
document.getElementById("field84971706").value=sfdcCampaignId; //ok
document.getElementById("field84971755").value=formDescription; //ok
document.getElementById("field84971707").value=marketingChannel; //ok	
document.getElementById("field85021194").value=leadSource; //ok
document.getElementById("field84980360").value=leadOwner; //ok	
document.getElementById("field85021217").value=productOfInterest; //ok
document.getElementById("fsCell85113576").innerHTML=termstext; //ok	
document.getElementById("fsCell84971703").innerHTML=emailtext; //ok		
document.getElementById('field84971698').options[0].text = countryLabel;//ok	
//document.getElementById("label84971702").textContent=yes; //ok	
	
	

// general variables	
//var redirectUrl = "https://" + siteURL + "/thank-you/"; //is this working?
var redirectUrl =siteURL;	
//document.getElementById("field85146529").value=redirectUrl; //?
document.getElementById("field85146678").value=siteURL; //?	
	
//error messages
document.getElementById('requiredFieldsError').innerHTML=requiredfields;

</script>